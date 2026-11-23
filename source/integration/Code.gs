/* Wedding RSVP -> Google Sheets. Deploy as a Web App (execute as owner).
Script properties: SPREADSHEET_ID, ALLOWED_ORIGINS (comma-separated origins).
Example origin: https://your-domain.ru . Add null only for explicit offline testing.
Never put credentials or spreadsheet edit links into frontend code. */
const DEFAULT_SPREADSHEET_ID='1cQJbsHasKCusnkls1r83SAU1xy9-Zx3lGL1Zm5UVYK8';
const HEADERS=['Дата ответа','ID анкеты','Имя и фамилия','Присутствие','Ребёнок','Возраст ребёнка','Напитки','Особенности питания','Трансфер','Вопросы','Основной гость','Номер гостя'];
const DRINK_OPTIONS=['Красное вино','Белое вино','Игристое','Сидр','Водка','Коньяк','Безалкогольные напитки','Другое'];
function safeCell(value){const s=String(value==null?'':value);return /^[\s]*[=+@\-]/.test(s)?"'"+s:s}
function validatePayload(p){
 if(!p||!/^[-a-zA-Z0-9]{16,80}$/.test(p.requestId||''))throw new Error('Некорректный номер анкеты.');
 if(!Array.isArray(p.guests)||!p.guests.length)throw new Error('В анкете нет гостей.');
 if(!['','return','roundtrip','none'].includes(p.transfer))throw new Error('Проверьте ответ о трансфере.');
 if(typeof p.questions!=='string')throw new Error('Проверьте вопрос.');
 if(p.guests[0].attendance==='no'&&p.guests.length!==1)throw new Error('Для отказа отправьте одну анкету.');
 p.guests.forEach(function(g,i){
  if(typeof g.name!=='string'||!g.name.trim())throw new Error('Укажите имя каждого гостя.');
  if(!['yes','no'].includes(g.attendance))throw new Error('Укажите присутствие каждого гостя.');
  if(typeof g.child!=='boolean'||(i===0&&g.child))throw new Error('Проверьте тип гостя.');
  if(typeof g.age!=='string'||typeof g.drinkOther!=='string'||typeof g.food!=='string'||!Array.isArray(g.drinks))throw new Error('Проверьте поля гостя.');
  if(g.drinks.some(function(d){return !DRINK_OPTIONS.includes(d)})||new Set(g.drinks).size!==g.drinks.length)throw new Error('Проверьте напитки.');
  if(g.attendance==='yes'&&g.child&&!g.age.trim())throw new Error('Укажите возраст ребёнка.');
  if(g.attendance==='yes'&&!g.child&&g.drinks.includes('Другое')&&!g.drinkOther.trim())throw new Error('Укажите другой напиток.');
  if(g.attendance==='yes'&&!g.child&&!g.drinks.length)throw new Error('Выберите напитки для каждого взрослого.');
 });return p;
}
function makeRows(p,now){return p.guests.map(function(g,i){const yes=g.attendance==='yes';return [now,p.requestId,safeCell(g.name.trim()),yes?'Да':'Нет',g.child?'Да':'Нет',yes&&g.child?safeCell(g.age):'',yes&&!g.child?safeCell(g.drinks.map(function(d){return d==='Другое'?'Другое: '+g.drinkOther:d}).join(', ')):'',yes?safeCell(g.food):'',p.guests[0].attendance==='yes'?(p.transfer==='return'?'Нужен только обратно':p.transfer==='roundtrip'?'Нужен туда и обратно':p.transfer==='none'?'Не нужен':'Не указан'):'',p.guests[0].attendance==='yes'?safeCell(p.questions):'',safeCell(p.guests[0].name.trim()),i+1]})}
function getSheet(){const id=PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID')||DEFAULT_SPREADSHEET_ID;if(!id)throw new Error('Сохранение пока не настроено.');const ss=SpreadsheetApp.openById(id);return ss.getSheetByName('Ответы')||ss.getSheets()[0]||ss.insertSheet('Ответы')}
function setup(){const sh=getSheet();if(sh.getLastRow()===0)sh.getRange(1,1,1,HEADERS.length).setValues([HEADERS]);sh.setFrozenRows(1);sh.getRange(1,1,1,HEADERS.length).setFontWeight('bold');}
function doPost(e){let p,ok=false,error='Не удалось сохранить анкету. Попробуйте ещё раз.';try{
 p=JSON.parse(e.parameter.payload||'{}');const origins=(PropertiesService.getScriptProperties().getProperty('ALLOWED_ORIGINS')||'').split(',').map(function(s){return s.trim()}).filter(Boolean);if(!origins.includes(p.origin))throw new Error('Сохранение для этого адреса сайта ещё не настроено.');
 validatePayload(p);const lock=LockService.getScriptLock();lock.waitLock(20000);try{const sh=getSheet();if(sh.getLastRow()===0)sh.getRange(1,1,1,HEADERS.length).setValues([HEADERS]);const last=sh.getLastRow();const exists=last>1&&sh.getRange(2,2,last-1,1).createTextFinder(p.requestId).matchEntireCell(true).findNext();if(!exists){const rows=makeRows(p,new Date());sh.getRange(sh.getLastRow()+1,1,rows.length,HEADERS.length).setValues(rows);SpreadsheetApp.flush()}ok=true}finally{lock.releaseLock()}
 }catch(err){console.error(String(err));if(err&&/^(Укажите|Выберите|Проверьте|Некорректный|В анкете|Для отказа|Сохранение)/.test(err.message))error=err.message}
 const message={type:'wedding-rsvp',requestId:p&&p.requestId||'',ok:ok};if(!ok)message.error=error;const target=p&&typeof p.origin==='string'&&/^https?:\/\//.test(p.origin)?p.origin:'*';const json=JSON.stringify(message).replace(/</g,'\\u003c');const targetJSON=JSON.stringify(target).replace(/</g,'\\u003c');return HtmlService.createHtmlOutput('<!doctype html><meta charset="utf-8"><script>window.top.postMessage('+json+','+targetJSON+');<\/script>').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function doGet(){return HtmlService.createHtmlOutput('Обработчик свадебной анкеты работает. Ответы гостей не публикуются.');}
