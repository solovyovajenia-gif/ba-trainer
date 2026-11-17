// ═══ I18N: interface strings. Content (theory, questions, exercises) lives in data.js
// and is Russian for now; English content is the next step. Add keys here, use t('key') in app.js.
var I18N = {
  ru: {
    brand:'BA Trainer', sb_ba_theory:'Теория BA', sb_ba_practice:'Практика BA', sb_dg_theory:'Диаграммы: теория', sb_dg_practice:'Диаграммы: практика',
    sb_quiz:'Тест ({n} вопросов)', sb_build:'Построй диаграмму', sb_draw:'Нарисуй диаграмму', sb_progress_note:'Прогресс сохраняется в этом браузере.', sb_reset:'Сбросить',
    reset_confirm:'Сбросить весь прогресс (ответы, выполненные задания)?', dg_theory_title:'Диаграммы — теория',
    cta_quiz_ba:'🚀 Перейти к тесту', cta_quiz_dg:'🚀 Перейти к тесту', cta_hint:'Прогресс теста сохраняется, можно вернуться к теории в любой момент.',
    theory:'Теория', practice:'Практика', of:'из', score:'Счёт', question:'Вопрос', answer:'Ответить', next:'Далее →', results:'Результаты →', back:'← Назад', theory_btn:'📚 Теория',
    correct:'✅ Верно! ', incorrect:'❌ Неверно. ', explanation:'Пояснение:', test_done:'Тест завершён!', total:'Итого', by_type:'По типам вопросов', restart:'🔄 Заново', review:'📋 Просмотр',
    g_expert:'🏆 Эксперт', g_adv:'⭐ Продвинутый', g_conf:'✅ Уверенный', g_prog:'📈 Прогресс', g_learn:'📚 Учись дальше',
    qt_concept:'Концепция', qt_classify:'Классификация', qt_write:'Формулирование', qt_choose:'Выбор', qt_case:'Кейс',
    ba_hero:'📋 Требования & Методологии', ba_hero_sub:'На основе фидбека Andersen: BABOK v3, классификация требований, техники выявления, User Stories, Agile/Scrum. Изучи материал, затем — 58 вопросов.',
    build_intro:'Дано условие задачи. Кликай подготовленные элементы В ПРАВИЛЬНОМ ПОРЯДКЕ, чтобы построить диаграмму. Часть элементов — «отвлекающие» (лишние или из другой ветки) — их использовать не нужно.',
    exercises_n:'задания', pick_ex:'выбери задание', back_types:'← Назад к выбору диаграммы', step:'Шаг', mistakes:'Ошибок', mistakes_build:'Ошибок при построении',
    build_empty:'Диаграмма пока пуста — кликай элементы ниже по порядку', b_perfect:'🏆 Идеально! Без единой ошибки', b_good:'✅ Хорошо, диаграмма построена', b_rough:'📚 Построено, но стоит повторить теорию', retry:'🔄 Повторить',
    e_missing:'Не хватает элемента: ', e_extra:'Лишний элемент: ', e_lane:' стоит не в той Lane: должен быть в «{l}» (это делает {l}).',
    e_rev:'Связь {e} направлена в обратную сторону.', e_rev_inc:' «include» идёт от базового Use Case к включаемому.', e_rev_ext:' «extend» идёт от расширяющего Use Case к базовому.', e_rev_gen:' Generalization идёт от потомка к родителю.',
    e_noedge:'Нет связи ', e_add_both:' — сначала добавь оба элемента.', e_kind:'Связь {e} должна быть {a}, а не {b}.', e_label:'Ветка {e} должна быть подписана «{l}»', e_label_not:', а не «{l}»',
    e_backwards:'Поток {e} идёт справа налево — основной поток должен идти слева направо, переставь элементы.', e_loop:'Связь {e} — это возврат назад (цикл), она должна вести влево, к более раннему шагу.', e_extra_edge:'Лишняя связь {e}: в сценарии такого перехода нет.',
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
    brand:'BA Trainer', sb_ba_theory:'BA Theory', sb_ba_practice:'BA Practice', sb_dg_theory:'Diagrams: Theory', sb_dg_practice:'Diagrams: Practice',
    sb_quiz:'Test ({n} questions)', sb_build:'Build a diagram', sb_draw:'Draw a diagram', sb_progress_note:'Progress is saved in this browser.', sb_reset:'Reset',
    reset_confirm:'Reset all progress (answers, completed exercises)?', dg_theory_title:'Diagrams — Theory',
    cta_quiz_ba:'🚀 Go to the test', cta_quiz_dg:'🚀 Go to the test', cta_hint:'Test progress is saved; you can return to the theory at any time.',
    theory:'Theory', practice:'Practice', of:'of', score:'Score', question:'Question', answer:'Answer', next:'Next →', results:'Results →', back:'← Back', theory_btn:'📚 Theory',
    correct:'✅ Correct! ', incorrect:'❌ Incorrect. ', explanation:'Explanation:', test_done:'Test complete!', total:'Total', by_type:'By question type', restart:'🔄 Restart', review:'📋 Review',
    g_expert:'🏆 Expert', g_adv:'⭐ Advanced', g_conf:'✅ Confident', g_prog:'📈 Progressing', g_learn:'📚 Keep learning',
    qt_concept:'Concept', qt_classify:'Classification', qt_write:'Writing', qt_choose:'Choice', qt_case:'Case',
    ba_hero:'📋 Requirements & Methodologies', ba_hero_sub:'Based on Andersen feedback: BABOK v3, requirements classification, elicitation techniques, User Stories, Agile/Scrum. Study the material, then take 58 questions.',
    build_intro:'You are given a task statement. Click the prepared elements IN THE RIGHT ORDER to build the diagram. Some elements are distractors (extra or from another branch) and must not be used.',
    exercises_n:'exercises', pick_ex:'pick an exercise', back_types:'← Back to diagram types', step:'Step', mistakes:'Mistakes', mistakes_build:'Mistakes while building',
    build_empty:'The diagram is empty — click the elements below in order', b_perfect:'🏆 Perfect! Not a single mistake', b_good:'✅ Good, the diagram is built', b_rough:'📚 Built, but revisit the theory', retry:'🔄 Retry',
    e_missing:'Missing element: ', e_extra:'Extra element: ', e_lane:' is in the wrong Lane: it belongs in “{l}” ({l} performs it).',
    e_rev:'Connection {e} points the wrong way.', e_rev_inc:' «include» goes from the base Use Case to the included one.', e_rev_ext:' «extend» goes from the extending Use Case to the base one.', e_rev_gen:' Generalization goes from the child to the parent.',
    e_noedge:'No connection ', e_add_both:' — add both elements first.', e_kind:'Connection {e} should be {a}, not {b}.', e_label:'Branch {e} should be labelled “{l}”', e_label_not:', not “{l}”',
    e_backwards:'Flow {e} goes right to left — the main flow should go left to right, rearrange the elements.', e_loop:'Connection {e} is a loop back; it should lead left, to an earlier step.', e_extra_edge:'Extra connection {e}: the scenario has no such transition.',
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
  var sw = document.querySelectorAll('#lang-switch button');
  for(var j=0;j<sw.length;j++){ sw[j].className = sw[j].getAttribute('data-lang')===LANG ? 'active' : ''; }
  var note = document.getElementById('content-notice');
  if(note){ var show = LANG!=='ru' && !DATA_SETS[LANG]; note.textContent = t('content_notice'); note.style.display = show ? 'block' : 'none'; }
}
function setLang(l){
  LANG = I18N[l] ? l : 'ru';
  try { localStorage.setItem('ba_lang', LANG); } catch(e){}
  applyStaticI18n();
  applyData(LANG);
  if(typeof rerenderAll === 'function') rerenderAll();
}
function toggleLang(){ setLang(LANG==='ru' ? 'en' : 'ru'); }

// ─── content data sets per language (registered by data.ru.js / data.en.js) ───
var DATA_SETS = {};
var TC, Q, TABS, THEORY_UML, SVGS_UML, Q_UML, BUILD_TYPES, BUILD_EXERCISES, DRAW_EXERCISES;
function applyData(lang){
  var D = DATA_SETS[lang] || DATA_SETS.ru;
  TC=D.TC; Q=D.Q; TABS=D.TABS; THEORY_UML=D.THEORY_UML; SVGS_UML=D.SVGS_UML; Q_UML=D.Q_UML;
  BUILD_TYPES=D.BUILD_TYPES; BUILD_EXERCISES=D.BUILD_EXERCISES; DRAW_EXERCISES=D.DRAW_EXERCISES;
}
