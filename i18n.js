// ═══ I18N: interface strings. Content (theory, questions, exercises) lives in data.js
// and is Russian for now; English content is the next step. Add keys here, use t('key') in app.js.
var I18N = {
  ru: {
    nav_ba:'📋 Требования & Методологии', nav_uml:'🎯 UML & BPMN Диаграммы',
    hdr_ba:'📋 BA Trainer — Требования & Методологии', hdr_uml:'🎯 UML & BPMN 2.0 Trainer',
    badge_theory:'Теория', badge_practice:'Практика', badge_uml:'UML', badge_bpmn:'BPMN',
    theory_ref:'Теоретический справочник', theory_ref_uml:'Theory Reference',
    theory_sub:'Изучи материал перед тестом. Можно вернуться во время прохождения.',
    start_quiz_ba:'🚀 Начать тест — 20 теория + 43 практика', start_quiz_uml:'🚀 Начать тест (67 вопросов)',
    tab_overview:'📊 Diagram Types', tab_uml_el:'🔷 UML Elements', tab_bpmn_el:'🟣 BPMN 2.0 — Элементы / Elements',
    tab_build:'🎨 Практика: Построй диаграмму', tab_draw:'✏️ Практика: Нарисуй диаграмму',
    content_notice:'',
    dw_title:'✏️ Нарисуй диаграмму',
    dw_intro:'Полноценное рисование: перетаскивай элементы из палитры на холст, расставляй по Lane и слева направо, соединяй стрелками. Проверяется не порядок кликов, а структура: какие элементы есть, где они стоят и чем соединены.',
    dw_l1:'Уровень 1 — Собери', dw_l1_desc:'В палитре только нужные элементы ({n} заданий). Расставь и соедини.',
    dw_l2:'Уровень 2 — Библиотека', dw_l2_desc:'В палитре есть лишние элементы ({n} заданий). Выбери только нужные.',
    dw_l1_long:'🧩 Уровень 1 — Собери из готового', dw_l2_long:'📚 Уровень 2 — Выбери из библиотеки',
    dw_meta:'{t} · {n} элементов · {e} связей', dw_lanes:' · {l} Lane',
    back_levels:'← Уровни', back_other:'← Другое задание',
    dw_perfect:'🏆 Идеально! С первой попытки', dw_good:'✅ Диаграмма построена верно', dw_rough:'📚 Готово, но стоит повторить теорию', dw_checks:'Проверок: ',
    tool_move:'↖ Двигать', tool_connect:'→ Соединить', tool_delete:'🗑 Удалить', tool_clear:'✖ Очистить',
    hint_from:'Кликни на элемент, ОТКУДА идёт стрелка', hint_to:'Теперь кликни на элемент, КУДА ведёт стрелка',
    hint_move:'Перетаскивай элементы по холсту. Клик по элементу или стрелке выделяет их для удаления.',
    canvas_empty:'Холст пуст — перетащи элементы из палитры ниже',
    label_for:'Подпись для ветки: ', no_label:'без подписи',
    palette_title:'Палитра — перетащи на холст (или кликни, чтобы добавить)',
    check:'✅ Проверить', redraw:'🔄 Нарисовать заново', analysis:'Разбор:',
    errors_title:'Проверка {a}: найдено замечаний — {n}'
  },
  en: {
    nav_ba:'📋 Requirements & Methodologies', nav_uml:'🎯 UML & BPMN Diagrams',
    hdr_ba:'📋 BA Trainer — Requirements & Methodologies', hdr_uml:'🎯 UML & BPMN 2.0 Trainer',
    badge_theory:'Theory', badge_practice:'Practice', badge_uml:'UML', badge_bpmn:'BPMN',
    theory_ref:'Theory Reference', theory_ref_uml:'Theory Reference',
    theory_sub:'Study the material before the test. You can come back during the quiz.',
    start_quiz_ba:'🚀 Start test — 20 theory + 43 practice', start_quiz_uml:'🚀 Start test (67 questions)',
    tab_overview:'📊 Diagram Types', tab_uml_el:'🔷 UML Elements', tab_bpmn_el:'🟣 BPMN 2.0 — Elements',
    tab_build:'🎨 Practice: Build a diagram', tab_draw:'✏️ Practice: Draw a diagram',
    content_notice:'🌐 English interface. Theory, questions and exercises are still in Russian — English content is coming.',
    dw_title:'✏️ Draw a diagram',
    dw_intro:'Full drawing: drag elements from the palette onto the canvas, place them in lanes left to right, connect them with arrows. The structure is checked, not click order: which elements exist, where they stand and how they are connected.',
    dw_l1:'Level 1 — Assemble', dw_l1_desc:'Only the needed elements in the palette ({n} exercises). Place and connect.',
    dw_l2:'Level 2 — Library', dw_l2_desc:'The palette has extra elements ({n} exercises). Pick only the needed ones.',
    dw_l1_long:'🧩 Level 1 — Assemble from given elements', dw_l2_long:'📚 Level 2 — Pick from the library',
    dw_meta:'{t} · {n} elements · {e} connections', dw_lanes:' · {l} lanes',
    back_levels:'← Levels', back_other:'← Another exercise',
    dw_perfect:'🏆 Perfect! First try', dw_good:'✅ Diagram is correct', dw_rough:'📚 Done, but revisit the theory', dw_checks:'Checks: ',
    tool_move:'↖ Move', tool_connect:'→ Connect', tool_delete:'🗑 Delete', tool_clear:'✖ Clear',
    hint_from:'Click the element the arrow starts FROM', hint_to:'Now click the element the arrow goes TO',
    hint_move:'Drag elements around the canvas. Click an element or an arrow to select it for deletion.',
    canvas_empty:'Canvas is empty — drag elements from the palette below',
    label_for:'Branch label: ', no_label:'no label',
    palette_title:'Palette — drag onto the canvas (or click to add)',
    check:'✅ Check', redraw:'🔄 Draw again', analysis:'Explanation:',
    errors_title:'Check {a}: issues found — {n}'
  }
};
var LANG = 'ru';
try { LANG = localStorage.getItem('ba_lang') || 'ru'; } catch(e){}
if(!I18N[LANG]) LANG = 'ru';
function t(key, vars){
  var s = (I18N[LANG] && I18N[LANG][key] !== undefined) ? I18N[LANG][key] : (I18N.ru[key] !== undefined ? I18N.ru[key] : key);
  if(vars) Object.keys(vars).forEach(function(k){ s = s.split('{'+k+'}').join(vars[k]); });
  return s;
}
function applyStaticI18n(){
  document.documentElement.lang = LANG;
  var els = document.querySelectorAll('[data-i18n]');
  for(var i=0;i<els.length;i++){ els[i].textContent = t(els[i].getAttribute('data-i18n')); }
  var sw = document.getElementById('lang-switch');
  if(sw) sw.textContent = LANG==='ru' ? 'EN' : 'RU';
  var note = document.getElementById('content-notice');
  if(note){ note.textContent = t('content_notice'); note.style.display = t('content_notice') ? 'block' : 'none'; }
}
function setLang(l){
  LANG = I18N[l] ? l : 'ru';
  try { localStorage.setItem('ba_lang', LANG); } catch(e){}
  applyStaticI18n();
  if(typeof rerenderAll === 'function') rerenderAll();
}
function toggleLang(){ setLang(LANG==='ru' ? 'en' : 'ru'); }
