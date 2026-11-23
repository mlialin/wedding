from pathlib import Path
import base64,mimetypes,zipfile
p=Path(__file__).resolve().parents[1];out=p.parent/'deliverables';out.mkdir(exist_ok=True);assets=p/'public/assets'
def data(f):
 return 'data:'+(mimetypes.guess_type(f.name)[0] or 'application/octet-stream')+';base64,'+base64.b64encode(f.read_bytes()).decode()
j=next((p/'dist/client/assets').glob('*.js')).read_text().replace('"/assets/"','""')
c=next((p/'dist/client/assets').glob('*.css')).read_text()
for f in assets.iterdir():
 if f.suffix in ['.png','.webp','.jpg']:
  j=j.replace('"/assets/'+f.name+'"','"'+data(f)+'"').replace('"'+f.name+'"','"'+data(f)+'"')
 if f.suffix=='.ttf':c=c.replace('/assets/'+f.name,data(f))
html='<!doctype html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#174b38"><title>Приглашение на свадьбу — Михаил и Елизавета</title><style>'+c+'</style></head><body><div id="root"></div><script type="module">'+j.replace('</script','<\\/script')+'</script></body></html>'
assert '"/assets/"' not in j
assert all(n in html for n in ['hero-track','Ждём вас','Два сердца.'])
htmlpath=out/'na-odnoy-dorozhke-v18.html';htmlpath.write_text(html)
with zipfile.ZipFile(out/'wedding-running-v18.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.write(htmlpath,'Открыть-приглашение.html')
 for f in p.rglob('*'):
  if f.is_file() and not any(v in f.relative_to(p).parts for v in ['node_modules','.git']):z.write(f,'source/'+str(f.relative_to(p)))
print('Offline HTML and source archive exported.')
