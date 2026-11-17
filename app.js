// ═══ APP LOGIC ═══
function switchApp(which) {
  document.getElementById('section-ba').className = 'section' + (which==='ba'?' show':'');
  document.getElementById('section-uml').className = 'section' + (which==='uml'?' show':'');
  document.getElementById('nav-ba').className = 'app-nav-btn' + (which==='ba'?' active':'');
  document.getElementById('nav-uml').className = 'app-nav-btn' + (which==='uml'?' active':'');
  if(which==='uml' && !umlInited) { umlInited=true; renderTheoryUML(); }
}
var umlInited = false;

// ═══════════════════════════
// BA TRAINER CODE
// ═══════════════════════════

var state = 'theory', theoryTab = 'req', cur = 0, score = 0;
var results = new Array(Q.length).fill(null);
var chosen  = new Array(Q.length).fill(null);


function secClass(s){return s==='theory'?'sl1':'sl2';}
function typeLabel(t){return{concept:'Концепция',classify:'Классификация',write:'Формулирование',choose:'Выбор',case:'Кейс'}[t]||t;}

function renderTheory(){
  document.getElementById('plabel').textContent='Теоретический справочник';
  document.getElementById('pscore').textContent='';
  document.getElementById('pfill').style.width='0%';
  var tabsHtml=TABS.map(function(t){
    return '<div class="tab'+(theoryTab===t.id?' active':'')+'" onclick="switchTab(\''+t.id+'\')">'+t.label+'</div>';
  }).join('');
  document.getElementById('app').innerHTML=
    '<div class="th-hero"><h2>📋 Требования & Методологии</h2>'
    +'<p>На основе фидбека Andersen: BABOK v3, классификация требований, техники выявления, User Stories, Agile/Scrum. Изучи материал, затем — 58 вопросов.</p></div>'
    +'<div class="tabs">'+tabsHtml+'</div>'
    +'<div id="tp">'+TC[theoryTab]+'</div>'
    +'<button class="start-btn" onclick="startQuiz()">'+t('start_quiz_ba')+'</button>';
}

function switchTab(id){theoryTab=id;renderTheory();}
function startQuiz(){state='quiz';cur=0;renderQ();}

function renderDots(){
  var h='';
  for(var i=0;i<Q.length;i++){
    var isTheory=Q[i].sec==='theory';
    var c='dot',lbl=(isTheory?'T':'P')+(i+1);
    if(i===cur)c+=' cur';
    else if(results[i]===true)c+=' ok';
    else if(results[i]===false)c+=' fail';
    h+='<div class="'+c+'" onclick="goTo('+i+')" title="'+(isTheory?'Теория':'Практика')+' '+(i+1)+'">'+lbl+'</div>';
  }
  return h;
}

function renderQ(){
  if(cur>=Q.length){renderScore();return;}
  var q=Q[cur],done=results[cur]!==null,sel=chosen[cur],keys=['A','B','C','D'];
  document.getElementById('plabel').textContent=(q.sec==='theory'?'Теория ':'Практика ')+(cur+1)+' из '+Q.length;
  document.getElementById('pscore').textContent='Счёт: '+score;
  document.getElementById('pfill').style.width=(((cur+1)/Q.length)*100).toFixed(0)+'%';
  var optsHtml='';
  for(var i=0;i<q.opts.length;i++){
    var c='opt';
    if(done){c+=' dis';if(i===q.ans)c+=' correct';else if(i===sel&&sel!==q.ans)c+=' wrong';}
    else if(i===sel)c+=' sel';
    optsHtml+='<div class="'+c+'" onclick="pick('+i+')">'+'<span class="okey">'+keys[i]+'</span>'+q.opts[i]+'</div>';
  }
  var fbCls=done?(results[cur]?'fb ok show':'fb fail show'):'fb';
  var fbTxt=done?(results[cur]?'✅ Верно! ':'❌ Неверно. ')+'<b>Пояснение:</b> '+q.exp:'';
  var ctx=q.ctx?'<div class="ctx-box">📌 '+q.ctx+'</div>':'';
  var sb=(!done&&sel!==null)?'<button class="btn btn-p" onclick="submit()">Ответить</button>':'';
  var nb=done?'<button class="btn btn-p" onclick="nxt()">'+(cur===Q.length-1?'Результаты →':'Далее →')+'</button>':'';
  document.getElementById('app').innerHTML=
    '<div class="dots">'+renderDots()+'</div>'
    +'<span class="sec-lbl '+secClass(q.sec)+'">'+(q.sec==='theory'?'Теория':'Практика')+'</span>'
    +'<span class="qtype">'+typeLabel(q.type)+'</span>'
    +'<div class="qcard">'
      +'<div class="qnum">Вопрос '+(cur+1)+'/'+Q.length+' — '+q.lab+'</div>'
      +'<div class="qtext">'+q.q+'</div>'+ctx
      +'<div class="opts">'+optsHtml+'</div>'
      +'<div class="'+fbCls+'">'+fbTxt+'</div>'
    +'</div>'
    +'<div class="nav">'
      +'<div style="display:flex;gap:8px">'
        +'<button class="btn btn-g" onclick="prv()" '+(cur===0?'disabled':'')+'>← Назад</button>'
        +'<button class="btn btn-g" onclick="backToTheory()">📚 Теория</button>'
      +'</div>'
      +'<div style="display:flex;gap:8px">'+sb+nb+'</div>'
    +'</div>';
}

function pick(i){if(results[cur]!==null)return;chosen[cur]=i;renderQ();}
function submit(){if(chosen[cur]===null)return;var ok=chosen[cur]===Q[cur].ans;results[cur]=ok;if(ok)score++;renderQ();}
function nxt(){if(cur<Q.length-1){cur++;renderQ();}else{renderScore();}}
function prv(){if(cur>0){cur--;renderQ();}}
function goTo(i){cur=i;renderQ();}
function backToTheory(){state='theory';renderTheory();}

function renderScore(){
  var th=0,pr=0,thT=0,prT=0;
  for(var i=0;i<Q.length;i++){
    if(Q[i].sec==='theory'){thT++;if(results[i]===true)th++;}
    else{prT++;if(results[i]===true)pr++;}
  }
  var total=th+pr,grandTotal=Q.length,pct=Math.round(total/grandTotal*100);
  var grade=pct>=90?'🏆 Эксперт':pct>=75?'⭐ Продвинутый':pct>=60?'✅ Уверенный':pct>=45?'📈 Прогресс':'📚 Учись дальше';
  document.getElementById('pfill').style.width='100%';
  document.getElementById('plabel').textContent='Тест завершён!';
  document.getElementById('pscore').textContent='Итог: '+total+'/'+grandTotal+' ('+pct+'%)';
  var types=['concept','classify','write','choose','case'];
  var tn={concept:'Концепция',classify:'Классификация',write:'Формулирование',choose:'Выбор',case:'Кейс'};
  var ts={},tt={};
  types.forEach(function(t){ts[t]=0;tt[t]=0;});
  for(var i=0;i<Q.length;i++){var t=Q[i].type;if(tt[t]===undefined){tt[t]=0;ts[t]=0;types.push(t);}tt[t]++;if(results[i]===true)ts[t]++;}
  var typeHtml='';
  types.forEach(function(t){
    if(tt[t]>0){var p=Math.round(ts[t]/tt[t]*100),col=p>=80?'#6ee7b7':p>=60?'#f59e0b':'#fca5a5';
    typeHtml+='<div class="fb-item"><span>'+(tn[t]||t)+'</span><span style="color:'+col+';font-weight:700">'+ts[t]+'/'+tt[t]+'</span></div>';}
  });
  document.getElementById('app').innerHTML=
    '<div class="score-wrap">'
    +'<div class="score-big">'+total+'/'+grandTotal+'</div>'
    +'<div class="score-sub">'+grade+' · '+pct+'%</div>'
    +'<div class="score-grid">'
      +'<div class="sbox s1"><h3>Теория</h3><div class="n">'+th+'/'+thT+'</div></div>'
      +'<div class="sbox s2"><h3>Практика</h3><div class="n">'+pr+'/'+prT+'</div></div>'
      +'<div class="sbox s3"><h3>Итого</h3><div class="n">'+total+'/'+grandTotal+'</div></div>'
    +'</div>'
    +'<div class="fsec"><h3>По типам вопросов</h3>'+typeHtml+'</div>'
    +'<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">'
      +'<button class="btn btn-p" onclick="restart()">🔄 Заново</button>'
      +'<button class="btn btn-g" onclick="goTo(0);renderQ()">📋 Просмотр</button>'
      +'<button class="btn btn-g" onclick="backToTheory()">📚 Теория</button>'
    +'</div></div>';
}

function restart(){cur=0;score=0;results=new Array(Q.length).fill(null);chosen=new Array(Q.length).fill(null);state='quiz';renderQ();}
renderTheory();


// ═══════════════════════════
// UML/BPMN TRAINER CODE
// (all functions renamed with UML suffix to avoid conflicts)
// ═══════════════════════════

// ═══════════════════════════════════════════
// THEORY CONTENT
// ═══════════════════════════════════════════
var stateUML = 'theory'; // 'theory' | 'quiz' | 'done'
var theoryTabUML = 'overview';
var curUML = 0, scoreUML = 0;
var resultsUML = new Array(67).fill(null);
var chosenUML  = new Array(67).fill(null);

function secClass(s){return{theory:'sl-theory',uml:'sl-uml',bpmn:'sl-bpmn'}[s];}

// ─── Practice Block: Build-a-Diagram exercises ───


// ─── Final Diagram Auto-Renderer ───
function bpEsc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function bpNodesOf(ex){
  return ex.correctOrder.map(function(id){
    var p = ex.pool.filter(function(x){return x.id===id;})[0];
    return {id:p.id, m:p.meta};
  });
}

function bpFlowShape(m,cx,cy,compact){
  var fs = compact?8:10;
  if(m.kind==='start') return '<circle cx="'+cx+'" cy="'+cy+'" r="12" fill="#3b82f6"/><text x="'+cx+'" y="'+(cy+(compact?26:0))+'" text-anchor="middle" fill="#93c5fd" font-size="'+fs+'"'+(compact?'':' dx="26" style="text-anchor:start"')+'>'+bpEsc(m.text)+'</text>';
  if(m.kind==='end') return '<circle cx="'+cx+'" cy="'+cy+'" r="14" fill="none" stroke="#ef4444" stroke-width="2"/><circle cx="'+cx+'" cy="'+cy+'" r="6" fill="#ef4444"/><text x="'+cx+'" y="'+(cy+(compact?28:0))+'" text-anchor="middle" fill="#fca5a5" font-size="'+fs+'"'+(compact?'':' dx="28" style="text-anchor:start"')+'>'+bpEsc(m.text)+'</text>';
  var bw = compact?128:168, bh=30;
  if(m.kind==='task') return '<rect x="'+(cx-bw/2)+'" y="'+(cy-bh/2)+'" width="'+bw+'" height="'+bh+'" rx="12" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/><text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="#93c5fd" font-size="'+fs+'">'+bpEsc(m.text)+'</text>';
  if(m.kind==='send') return '<rect x="'+(cx-bw/2)+'" y="'+(cy-bh/2)+'" width="'+bw+'" height="'+bh+'" rx="12" fill="#0d3b2e" stroke="#10b981" stroke-width="1.4" stroke-dasharray="5,2"/><text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="#6ee7b7" font-size="'+fs+'">✉ '+bpEsc(m.text)+'</text>';
  if(m.kind==='gateway_x') return '<polygon points="'+cx+','+(cy-18)+' '+(cx+18)+','+cy+' '+cx+','+(cy+18)+' '+(cx-18)+','+cy+'" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/><text x="'+cx+'" y="'+(cy+32)+'" text-anchor="middle" fill="#fcd34d" font-size="'+fs+'">'+bpEsc(m.text)+'</text>';
  if(m.kind==='fork'||m.kind==='join') return '<rect x="'+(cx-30)+'" y="'+(cy-5)+'" width="60" height="10" fill="#94a3b8"/><text x="'+cx+'" y="'+(cy-12)+'" text-anchor="middle" fill="#64748b" font-size="8">'+(m.kind==='fork'?'Fork':'Join')+'</text>';
  return '';
}

function bpLine(x1,y1,x2,y2,marker){return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#'+(marker||'ffA')+')"/>';}

function renderFinalLinearFlow(nodes){
  var rowH=68, w=380, cy0=32;
  var h=cy0+(nodes.length-1)*rowH+40;
  var svg='<svg viewBox="0 0 '+w+' '+h+'" width="360" height="'+h+'" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><marker id="ffA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>';
  var ys=[];
  nodes.forEach(function(n,i){ys.push(cy0+i*rowH);});
  nodes.forEach(function(n,i){
    if(i>0) svg+=bpLine(190,ys[i-1]+18,190,ys[i]-18);
    svg+=bpFlowShape(n.m,190,ys[i]);
  });
  svg+='</svg>';
  return svg;
}

function renderFinalForkJoin(nodes,forkIdx,joinIdx){
  var rowH=68, cx=190, w=380, y=32;
  var parts=[], positions=[];
  for(var i=0;i<=forkIdx;i++){
    positions[i]={x:cx,y:y};
    if(i>0) parts.push(bpLine(cx,positions[i-1].y+18,cx,y-18));
    parts.push(bpFlowShape(nodes[i].m,cx,y));
    y+=rowH;
  }
  var branchCount=joinIdx-forkIdx-1, spacing=140;
  var startX=cx-((branchCount-1)*spacing)/2, branchY=y;
  for(var k=0;k<branchCount;k++){
    var idx=forkIdx+1+k, bx=startX+k*spacing;
    positions[idx]={x:bx,y:branchY};
    parts.push(bpLine(cx,positions[forkIdx].y+6,bx,branchY-16));
    parts.push(bpFlowShape(nodes[idx].m,bx,branchY));
  }
  y=branchY+rowH;
  positions[joinIdx]={x:cx,y:y};
  for(var k2=0;k2<branchCount;k2++){
    var idx2=forkIdx+1+k2;
    parts.push(bpLine(positions[idx2].x,positions[idx2].y+16,cx,y-6));
  }
  parts.push(bpFlowShape(nodes[joinIdx].m,cx,y));
  y+=rowH;
  for(var j=joinIdx+1;j<nodes.length;j++){
    positions[j]={x:cx,y:y};
    parts.push(bpLine(cx,positions[j-1].y+18,cx,y-18));
    parts.push(bpFlowShape(nodes[j].m,cx,y));
    y+=rowH;
  }
  var totalH=y+10;
  return '<svg viewBox="0 0 '+w+' '+totalH+'" width="360" height="'+totalH+'" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><marker id="ffA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
    +parts.join('')+'</svg>';
}

function renderFinalSwimlane(nodes){
  var pools=[], lanes=[], real=[];
  nodes.forEach(function(n){
    if(n.m.kind==='pool') pools.push(n.m.text);
    else if(n.m.kind==='lane') lanes.push({name:n.m.text,pool:n.m.pool});
    else real.push(n);
  });
  var rows=[];
  pools.forEach(function(p){
    var poolLanes=lanes.filter(function(l){return l.pool===p;});
    if(poolLanes.length===0) rows.push({label:p,pool:p});
    else poolLanes.forEach(function(l){rows.push({label:l.name,pool:p});});
  });
  function rowIndexFor(n){
    for(var i=0;i<rows.length;i++) if(rows[i].label===n.m.lane) return i;
    return 0;
  }
  var rowH=90, colW=155, leftPad=100;
  var maxCols=1, colCounters={};
  rows.forEach(function(r,i){colCounters[i]=0;});
  var placedPos=[];
  real.forEach(function(n){
    var ri=rowIndexFor(n), ci=colCounters[ri]++;
    if(ci+1>maxCols) maxCols=ci+1;
    placedPos.push({x:leftPad+50+ci*colW,y:40+ri*rowH+rowH/2,row:ri});
  });
  var w=leftPad+50+maxCols*colW+30, totalH=40+rows.length*rowH+15;
  var svg='<svg viewBox="0 0 '+w+' '+totalH+'" width="500" height="'+totalH+'" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><marker id="ffA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
    +'<marker id="ffB" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#10b981" stroke-width="1.3"/></marker></defs>';
  rows.forEach(function(r,i){
    var y=40+i*rowH;
    svg+='<rect x="'+leftPad+'" y="'+y+'" width="'+(w-leftPad-15)+'" height="'+rowH+'" fill="'+(i%2===0?'#12161f':'#0d1117')+'" stroke="#2d3748" stroke-width="1"/>';
    svg+='<text x="'+(leftPad-8)+'" y="'+(y+rowH/2+4)+'" text-anchor="end" fill="#64748b" font-size="9">'+bpEsc(r.pool)+(r.label!==r.pool?' / '+bpEsc(r.label):'')+'</text>';
  });
  for(var i=1;i<real.length;i++){
    var dashed = real[i-1].m.pool!==real[i].m.pool;
    var p1=placedPos[i-1], p2=placedPos[i];
    svg+='<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+(dashed?'#10b981':'#94a3b8')+'" stroke-width="1.5"'+(dashed?' stroke-dasharray="5,3" marker-end="url(#ffB)"':' marker-end="url(#ffA)"')+'/>';
  }
  real.forEach(function(n,i){ svg+=bpFlowShape(n.m,placedPos[i].x,placedPos[i].y,true); });
  svg+='</svg>';
  return svg;
}

function renderFinalFlow(ex){
  var nodes=bpNodesOf(ex);
  if(nodes.some(function(n){return n.m.kind==='pool'||n.m.kind==='lane';})) return renderFinalSwimlane(nodes);
  var forkIdx=-1,joinIdx=-1;
  nodes.forEach(function(n,i){if(n.m.kind==='fork')forkIdx=i;if(n.m.kind==='join')joinIdx=i;});
  if(forkIdx!==-1&&joinIdx!==-1&&joinIdx>forkIdx+1) return renderFinalForkJoin(nodes,forkIdx,joinIdx);
  return renderFinalLinearFlow(nodes);
}

function renderFinalSequence(ex){
  var msgs=ex.correctOrder.map(function(id){return ex.pool.filter(function(p){return p.id===id;})[0].meta;});
  var actors=[];
  msgs.forEach(function(m){if(actors.indexOf(m.from)===-1)actors.push(m.from);if(actors.indexOf(m.to)===-1)actors.push(m.to);});
  var colW=125, leftPad=65, w=leftPad+(actors.length-1)*colW+70;
  var rowH=40, topPad=48, h=topPad+msgs.length*rowH+25;
  function xFor(name){return leftPad+actors.indexOf(name)*colW;}
  var svg='<svg viewBox="0 0 '+w+' '+h+'" width="440" height="'+h+'" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><marker id="sqA" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#3b82f6"/></marker>'
    +'<marker id="sqB" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#10b981" stroke-width="1.3"/></marker>'
    +'<marker id="sqC" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>';
  actors.forEach(function(a){
    var x=xFor(a);
    svg+='<rect x="'+(x-42)+'" y="12" width="84" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
      +'<text x="'+x+'" y="27" text-anchor="middle" fill="#93c5fd" font-size="8">'+bpEsc(a)+'</text>'
      +'<line x1="'+x+'" y1="34" x2="'+x+'" y2="'+(h-8)+'" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>';
  });
  msgs.forEach(function(m,i){
    var y=topPad+i*rowH, x1=xFor(m.from), x2=xFor(m.to);
    var isReturn=m.style==='return', isAsync=m.style==='async';
    var stroke=isReturn?'#64748b':(isAsync?'#10b981':'#3b82f6');
    var marker=isReturn?'url(#sqC)':(isAsync?'url(#sqB)':'url(#sqA)');
    var dash=isReturn?' stroke-dasharray="5,3"':'';
    svg+='<line x1="'+x1+'" y1="'+y+'" x2="'+x2+'" y2="'+y+'" stroke="'+stroke+'" stroke-width="1.6"'+dash+' marker-end="'+marker+'"/>';
    svg+='<text x="'+((x1+x2)/2)+'" y="'+(y-5)+'" text-anchor="middle" fill="#cbd5e1" font-size="7.5">'+bpEsc(m.text)+'</text>';
  });
  svg+='</svg>';
  return svg;
}

function renderFinalGraph(ex){
  var items=bpNodesOf(ex);
  var nodesArr=items.filter(function(it){return ['class','interface','actor','usecase'].indexOf(it.m.kind)!==-1;});
  var edgesArr=items.filter(function(it){return ['assoc','generalization','realization','composition','aggregation','include','extend'].indexOf(it.m.kind)!==-1;});
  var colW=135, topPad=45, w=Math.max(380,nodesArr.length*colW+40);
  var pos={};
  nodesArr.forEach(function(n,i){
    var bottom=topPad+(n.m.kind==='actor'?44:22);
    pos[n.id]={x:40+i*colW+colW/2,y:topPad,bottom:bottom};
  });
  var h=topPad+150;
  var svg='<svg viewBox="0 0 '+w+' '+h+'" width="'+Math.min(460,w)+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><marker id="gA" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,7 3,0 6" fill="none" stroke="#94a3b8" stroke-width="1.3"/></marker>'
    +'<marker id="gInc" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>';
  edgesArr.forEach(function(e,idx){
    var p1=pos[e.m.from], p2=pos[e.m.to];
    if(!p1||!p2) return;
    var y1=p1.bottom+idx*4, y2=p2.bottom+idx*4;
    var dash=(e.m.kind==='realization'||e.m.kind==='include'||e.m.kind==='extend')?' stroke-dasharray="5,3"':'';
    var marker=(e.m.kind==='include'||e.m.kind==='extend')?'url(#gInc)':'url(#gA)';
    svg+='<line x1="'+p1.x+'" y1="'+y1+'" x2="'+p2.x+'" y2="'+y2+'" stroke="#94a3b8" stroke-width="1.4"'+dash+' marker-end="'+marker+'"/>';
    var lbl=e.m.kind==='include'?'«include»':e.m.kind==='extend'?'«extend»':e.m.kind==='realization'?'«realize»':e.m.kind==='composition'?'◆ comp.':e.m.kind==='aggregation'?'◇ aggr.':'';
    if(lbl) svg+='<text x="'+((p1.x+p2.x)/2)+'" y="'+(Math.max(y1,y2)+13)+'" text-anchor="middle" fill="#64748b" font-size="7.5">'+lbl+'</text>';
  });
  nodesArr.forEach(function(n){
    var p=pos[n.id];
    if(n.m.kind==='actor'){
      svg+='<circle cx="'+p.x+'" cy="'+(p.y-6)+'" r="7" fill="none" stroke="#94a3b8" stroke-width="1.3"/>'
        +'<line x1="'+p.x+'" y1="1" x2="'+p.x+'" y2="16" stroke="#94a3b8" stroke-width="1.3" transform="translate(0,'+p.y+')"/>'
        +'<line x1="'+(p.x-8)+'" y1="6" x2="'+(p.x+8)+'" y2="6" stroke="#94a3b8" stroke-width="1.3" transform="translate(0,'+p.y+')"/>'
        +'<line x1="'+p.x+'" y1="16" x2="'+(p.x-7)+'" y2="28" stroke="#94a3b8" stroke-width="1.3" transform="translate(0,'+p.y+')"/>'
        +'<line x1="'+p.x+'" y1="16" x2="'+(p.x+7)+'" y2="28" stroke="#94a3b8" stroke-width="1.3" transform="translate(0,'+p.y+')"/>'
        +'<text x="'+p.x+'" y="'+(p.y+42)+'" text-anchor="middle" fill="#93c5fd" font-size="8">'+bpEsc(n.m.text)+'</text>';
    } else if(n.m.kind==='usecase'){
      svg+='<ellipse cx="'+p.x+'" cy="'+p.y+'" rx="58" ry="20" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
        +'<text x="'+p.x+'" y="'+(p.y+4)+'" text-anchor="middle" fill="#93c5fd" font-size="8">'+bpEsc(n.m.text)+'</text>';
    } else {
      svg+='<rect x="'+(p.x-55)+'" y="'+(p.y-16)+'" width="110" height="32" rx="3" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.4"/>'
        +(n.m.kind==='interface'?'<text x="'+p.x+'" y="'+(p.y-4)+'" text-anchor="middle" fill="#64748b" font-size="7">«interface»</text>':'')
        +'<text x="'+p.x+'" y="'+(p.y+(n.m.kind==='interface'?10:4))+'" text-anchor="middle" fill="#93c5fd" font-size="8">'+bpEsc(n.m.text)+'</text>';
    }
  });
  svg+='</svg>';
  return svg;
}

function renderFinalDiagram(ex){
  if(ex.type==='bpmn'||ex.type==='activity') return renderFinalFlow(ex);
  if(ex.type==='sequence') return renderFinalSequence(ex);
  if(ex.type==='class'||ex.type==='usecase') return renderFinalGraph(ex);
  return '';
}

var bpState = {typeId:null, exId:null, placed:[], mistakes:0, wrongId:null, done:false};

function renderBuildPractice(){
  if(!bpState.typeId) return renderBuildTypeSelector();
  if(!bpState.exId) return renderBuildExList();
  return renderBuildExercise();
}

function renderBuildTypeSelector(){
  var html = '<div class="t-h3">🎨 Практика: Построй диаграмму</div>'
    +'<div class="info-box">Дано условие задачи. Кликай подготовленные элементы В ПРАВИЛЬНОМ ПОРЯДКЕ, чтобы построить диаграмму. Часть элементов — «отвлекающие» (лишние или из другой ветки) — их использовать не нужно.</div>'
    +'<div class="build-type-grid">';
  BUILD_TYPES.forEach(function(t){
    var cnt = BUILD_EXERCISES.filter(function(e){return e.type===t.id;}).length;
    html += '<div class="build-type-card" onclick="selectBuildType(\''+t.id+'\')">'
      +'<div class="bt-icon">'+t.icon+'</div><h4>'+t.label+'</h4><p>'+t.desc+' · '+cnt+' задания</p></div>';
  });
  html += '</div>';
  return html;
}

function renderBuildExList(){
  var exs = BUILD_EXERCISES.filter(function(e){return e.type===bpState.typeId;});
  var typeInfo = BUILD_TYPES.filter(function(t){return t.id===bpState.typeId;})[0];
  var html = '<div class="t-h3">'+typeInfo.icon+' '+typeInfo.label+' — выбери задание</div>'
    +'<div class="build-ex-list">';
  exs.forEach(function(e){
    html += '<div class="build-ex-card" onclick="startBuildEx(\''+e.id+'\')"><h4>'+e.title+'</h4><p>'+e.scenario.slice(0,90)+'…</p></div>';
  });
  html += '</div><button class="btn btn-g" onclick="backToBuildTypes()">← Назад к выбору диаграммы</button>';
  return html;
}

function renderBuildExercise(){
  var ex = BUILD_EXERCISES.filter(function(e){return e.id===bpState.exId;})[0];
  var html = '<div class="t-h3">'+ex.title+'</div>'
    +'<div class="build-scenario">📌 '+ex.scenario+'</div>'
    +'<div class="build-progress">Шаг '+bpState.placed.length+' из '+ex.correctOrder.length+' · Ошибок: '+bpState.mistakes+'</div>';

  if(!bpState.done){
    html += '<div class="build-canvas">';
    if(bpState.placed.length===0){
      html += '<div class="build-canvas-empty">Диаграмма пока пуста — кликай элементы ниже по порядку</div>';
    } else {
      bpState.placed.forEach(function(elId,i){
        var el = ex.pool.filter(function(p){return p.id===elId;})[0];
        html += '<div class="build-placed"><span class="build-placed-badge">'+(i+1)+'. '+el.label+'</span></div>';
        if(i<bpState.placed.length-1) html += '<div class="build-arrow-down">↓</div>';
      });
    }
    html += '</div>';
  }

  if(bpState.done){
    var pct = bpState.mistakes===0?'perfect':bpState.mistakes<=2?'good':'rough';
    var title = pct==='perfect'?'🏆 Идеально! Без единой ошибки':pct==='good'?'✅ Хорошо, диаграмма построена':'📚 Построено, но стоит повторить теорию';
    html += '<div class="build-done-banner '+pct+'"><h3>'+title+'</h3><p>Ошибок при построении: '+bpState.mistakes+'</p></div>'
      +'<div class="build-final-diagram">'+renderFinalDiagram(ex)+'</div>'
      +'<div class="build-explanation"><b>Разбор:</b> '+ex.explanation+'</div>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-p" onclick="retryBuildEx()">🔄 Повторить</button><button class="btn btn-g" onclick="backToBuildExList()">📋 Другое задание</button></div>';
  } else {
    html += '<div class="build-pool">';
    ex.pool.forEach(function(el){
      var used = bpState.placed.indexOf(el.id)!==-1;
      var wrong = bpState.wrongId===el.id;
      var cls = 'build-el'+(used?' used':'')+(wrong?' wrong':'');
      html += '<div class="'+cls+'" onclick="clickBuildEl(\''+el.id+'\')">'+el.label+'</div>';
    });
    html += '</div>'
      +'<button class="btn btn-g" onclick="backToBuildExList()">← Другое задание</button>';
  }
  return html;
}

function selectBuildType(id){bpState.typeId=id;bpState.exId=null;refreshBuildPanel();}
function backToBuildTypes(){bpState.typeId=null;bpState.exId=null;refreshBuildPanel();}
function backToBuildExList(){bpState.exId=null;bpState.placed=[];bpState.mistakes=0;bpState.wrongId=null;bpState.done=false;refreshBuildPanel();}
function retryBuildEx(){bpState.placed=[];bpState.mistakes=0;bpState.wrongId=null;bpState.done=false;refreshBuildPanel();}

function startBuildEx(id){
  bpState.exId=id;bpState.placed=[];bpState.mistakes=0;bpState.wrongId=null;bpState.done=false;
  refreshBuildPanel();
}

function clickBuildEl(elId){
  var ex = BUILD_EXERCISES.filter(function(e){return e.id===bpState.exId;})[0];
  if(bpState.placed.indexOf(elId)!==-1) return;
  var expected = ex.correctOrder[bpState.placed.length];
  if(elId===expected){
    bpState.placed.push(elId);
    if(bpState.placed.length===ex.correctOrder.length) bpState.done=true;
    refreshBuildPanel();
  } else {
    bpState.mistakes++;
    bpState.wrongId=elId;
    refreshBuildPanel();
    setTimeout(function(){bpState.wrongId=null;refreshBuildPanel();},450);
  }
}

function refreshBuildPanel(){
  var el = document.getElementById('utp');
  if(el) el.innerHTML = renderBuildPractice();
}

function typeLabel(t){return{concept:'Concept',choose_diagram:'Choose Diagram',missing_element:'Missing Element',read_diagram:'Read Diagram',draw_diagram:'Draw / Design'}[t]||t;}

// ─── THEORY SCREEN ───
function renderTheoryUML(){
  document.getElementById('uplabel').textContent = 'Theory Reference';
  document.getElementById('upscore').textContent = '';
  document.getElementById('upfill').style.width = '0%';

  var tabs = [
    {id:'overview',label:t('tab_overview')},
    {id:'uml_elements',label:t('tab_uml_el')},
    {id:'bpmn_elements',label:t('tab_bpmn_el')},
    {id:'practice_build',label:t('tab_build')},
    {id:'practice_draw',label:t('tab_draw')}
  ];
  var tabsHtml = tabs.map(function(t){
    return '<div class="ttab'+(theoryTabUML===t.id?' active':'')+'" onclick="switchTabUML(\''+t.id+'\')">'+t.label+'</div>';
  }).join('');

  var panelContent = theoryTabUML==='practice_build' ? renderBuildPractice() : theoryTabUML==='practice_draw' ? renderDrawPractice() : THEORY_UML[theoryTabUML].content;

  document.getElementById('uapp').innerHTML =
    '<div class="theory-screen">'+
      '<h2>📚 '+t('theory_ref_uml')+'</h2>'+
      '<p class="sub">'+t('theory_sub')+'</p>'+
      '<div class="theory-tabs">'+tabsHtml+'</div>'+
      '<div class="theory-panel show" id="utp">'+panelContent+'</div>'+
      '<button class="start-btn" onclick="startQuizUML()">'+t('start_quiz_uml')+'</button>'+
    '</div>';
  if(theoryTabUML==='practice_draw') dwBind();
}

function switchTabUML(id){
  theoryTabUML = id;
  renderTheoryUML();
}

function startQuizUML(){
  stateUML = 'quiz';
  curUML = 0;
  renderQUML();
}

// ─── QUIZ SCREEN ───
function renderDotsUML(){
  var h = '';
  for(var i=0;i<67;i++){
    var c='dot';
    if(i===curUML) c+=' cur';
    else if(resultsUML[i]===true) c+=' ok';
    else if(resultsUML[i]===false) c+=' fail';
    h+='<div class="'+c+'" onclick="goToUML('+i+')">'+(i+1)+'</div>';
  }
  return h;
}

function renderQUML(){
  if(curUML>=Q_UML.length){renderScoreUML();return;}
  var q = Q_UML[curUML];
  var done = resultsUML[curUML]!==null;
  var sel  = chosenUML[curUML];
  var keys = ['A','B','C','D'];

  document.getElementById('uplabel').textContent = 'Question '+(curUML+1)+' of 67';
  document.getElementById('upscore').textContent  = 'Score: '+scoreUML;
  document.getElementById('upfill').style.width   = (((curUML+1)/67)*100).toFixed(0)+'%';

  var optsHtml = '';
  for(var i=0;i<q.opts.length;i++){
    var c='opt';
    if(done){
      c+=' dis';
      if(i===q.ans) c+=' correct';
      else if(i===sel&&sel!==q.ans) c+=' wrong';
    } else {
      if(i===sel) c+=' sel';
    }
    optsHtml+='<div class="'+c+'" onclick="pickUML('+i+')">'
      +'<span class="okey">'+keys[i]+'</span>'+q.opts[i]+'</div>';
  }

  var fbCls = done?(resultsUML[curUML]?'fb ok show':'fb fail show'):'fb';
  var fbTxt = '';
  if(done) fbTxt=(resultsUML[curUML]?'✅ Верно! ':'❌ Неверно. ')+'<strong>Объяснение:</strong> '+q.exp;

  var diag = (q.svg&&SVGS_UML[q.svg])?'<div class="diagram">'+SVGS_UML[q.svg]+'</div>':'';

  var submitBtn = (!done&&sel!==null)?'<button class="btn btn-p" onclick="submitUML()">Подтвердить ответ</button>':'';
  var nextBtn   = done?'<button class="btn btn-p" onclick="nxtUML()">'+(curUML===Q_UML.length-1?'Результаты →':'Далее →')+'</button>':'';
  var theoryBtn = '<button class="btn btn-g" onclick="backToTheoryUML()">📚 Теория</button>';

  document.getElementById('uapp').innerHTML =
    '<div class="dots">'+renderDotsUML()+'</div>'+
    '<span class="sec-label '+secClass(q.sec)+'">'+q.lab+'</span>'+
    '<span class="q-type">'+typeLabel(q.type)+'</span>'+
    '<div class="card">'+
      '<div class="qnum">Вопрос '+(curUML+1)+' / 67</div>'+
      '<div class="qtext">'+q.q+'</div>'+
      diag+
      '<div class="options">'+optsHtml+'</div>'+
      '<div class="'+fbCls+'">'+fbTxt+'</div>'+
    '</div>'+
    '<div class="nav">'+
      '<div style="display:flex;gap:8px">'+
        '<button class="btn btn-g" onclick="prvUML()" '+(curUML===0?'disabled':'')+'>← Назад</button>'+
        theoryBtn+
      '</div>'+
      '<div style="display:flex;gap:8px">'+submitBtn+nextBtn+'</div>'+
    '</div>';
}

function pickUML(i){if(resultsUML[curUML]!==null)return;chosenUML[curUML]=i;renderQUML();}
function submitUML(){
  if(chosenUML[curUML]===null)return;
  var ok=chosenUML[curUML]===Q_UML[curUML].ans;
  resultsUML[curUML]=ok;
  if(ok)scoreUML++;
  renderQUML();
}
function nxtUML(){if(curUML<Q_UML.length-1){curUML++;renderQUML();}else{renderScoreUML();}}
function prvUML(){if(curUML>0){curUML--;renderQUML();}}
function goToUML(i){curUML=i;renderQUML();}
function backToTheoryUML(){stateUML='theory';renderTheoryUML();}

// ─── SCORE SCREEN ───
function renderScoreUML(){
  var th=0,ul=0,bp=0,thT=0,ulT=0,bpT=0;
  for(var i=0;i<Q_UML.length;i++){
    var s=Q_UML[i].sec;
    if(s==='theory'){thT++;if(resultsUML[i]===true)th++;}
    else if(s==='uml'){ulT++;if(resultsUML[i]===true)ul++;}
    else if(s==='bpmn'){bpT++;if(resultsUML[i]===true)bp++;}
  }
  var total=th+ul+bp;
  var grandTotal=Q_UML.length;
  var pct=Math.round(total/grandTotal*100);
  var grade=pct>=90?'🏆 Expert':pct>=75?'⭐ Advanced':pct>=60?'✅ Proficient':'📚 Keep Practicing';

  document.getElementById('upfill').style.width='100%';
  document.getElementById('uplabel').textContent='Тест завершён!';
  document.getElementById('upscore').textContent='Итог: '+total+'/'+grandTotal+' ('+pct+'%)';

  // per-type breakdown
  var types=['concept','choose_diagram','missing_element','read_diagram','draw_diagram'];
  var typeNames={'concept':'Concept','choose_diagram':'Choose Diagram','missing_element':'Missing Element','read_diagram':'Read Diagram','draw_diagram':'Draw / Design'};
  var typeScore={};
  var typeTotal={};
  types.forEach(function(t){typeScore[t]=0;typeTotal[t]=0;});
  for(var i=0;i<Q_UML.length;i++){
    var t=Q_UML[i].type;
    if(typeTotal[t]===undefined){typeTotal[t]=0;typeScore[t]=0;types.push(t);}
    typeTotal[t]++;
    if(resultsUML[i]===true) typeScore[t]++;
  }
  var typeHtml='';
  types.forEach(function(t){
    if(typeTotal[t]>0){
      var p=Math.round(typeScore[t]/typeTotal[t]*100);
      var col=p>=80?'#6ee7b7':p>=60?'#f59e0b':'#fca5a5';
      typeHtml+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #2d3748">'
        +'<span style="font-size:0.83rem;color:#94a3b8">'+(typeNames[t]||t)+'</span>'
        +'<span style="font-size:0.83rem;font-weight:700;color:'+col+'">'+typeScore[t]+'/'+typeTotal[t]+'</span>'
        +'</div>';
    }
  });

  document.getElementById('uapp').innerHTML=
    '<div class="score-wrap">'+
      '<div class="score-big">'+total+'/'+grandTotal+'</div>'+
      '<div class="score-sub">'+grade+' · '+pct+'%</div>'+
      '<div class="score-grid">'+
        '<div class="score-box t"><h3>Theory</h3><div class="n">'+th+'/'+thT+'</div></div>'+
        '<div class="score-box u"><h3>UML</h3><div class="n">'+ul+'/'+ulT+'</div></div>'+
        '<div class="score-box b"><h3>BPMN</h3><div class="n">'+bp+'/'+bpT+'</div></div>'+
      '</div>'+
      '<div style="max-width:340px;margin:0 auto 24px;background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:14px">'+
        '<div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#64748b;margin-bottom:4px">By Question Type</div>'+
        typeHtml+
      '</div>'+
      '<div style="display:flex;gap:10px;justify-content:center">'+
        '<button class="btn btn-p" onclick="restartUML()">🔄 Пройти заново</button>'+
        '<button class="btn btn-g" onclick="goToUML(0);state=\'quiz\';renderQUML()">📋 Просмотр ответов</button>'+
        '<button class="btn btn-g" onclick="backToTheoryUML()">📚 Теория</button>'+
      '</div>'+
    '</div>';
}

function restartUML(){
  curUML=0;scoreUML=0;
  resultsUML=new Array(67).fill(null);
  chosenUML=new Array(67).fill(null);
  stateUML='quiz';
  renderQUML();
}


// ─── NEW DIAGRAM READING SVGs ───
SVGS_UML.dr1 = '<svg viewBox="0 0 500 200" width="480" height="195" xmlns="http://www.w3.org/2000/svg">'
+'<rect x="10" y="10" width="480" height="180" rx="6" fill="none" stroke="#2d3748" stroke-width="1" stroke-dasharray="6,3"/>'
+'<text x="475" y="26" text-anchor="end" fill="#64748b" font-size="10">«system» IntернетМагазин</text>'
+'<circle cx="60" cy="100" r="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="112" x2="60" y2="140" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="44" y1="126" x2="76" y2="126" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="140" x2="44" y2="158" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<line x1="60" y1="140" x2="76" y2="158" stroke="#e2e8f0" stroke-width="1.5"/>'
+'<text x="60" y="172" text-anchor="middle" fill="#94a3b8" font-size="10">Покупатель</text>'
+'<ellipse cx="220" cy="70" rx="65" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="220" y="75" text-anchor="middle" fill="#93c5fd" font-size="11">Просмотр каталога</text>'
+'<ellipse cx="220" cy="130" rx="65" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="220" y="135" text-anchor="middle" fill="#93c5fd" font-size="11">Оформить заказ</text>'
+'<ellipse cx="380" cy="100" rx="75" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="380" y="105" text-anchor="middle" fill="#93c5fd" font-size="11">Оплатить заказ</text>'
+'<ellipse cx="380" cy="155" rx="75" ry="22" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="380" y="160" text-anchor="middle" fill="#93c5fd" font-size="11">Применить промокод</text>'
+'<line x1="72" y1="96" x2="153" y2="76" stroke="#64748b" stroke-width="1.5"/>'
+'<line x1="72" y1="108" x2="153" y2="128" stroke="#64748b" stroke-width="1.5"/>'
+'<defs><marker id="dr1a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
+'<line x1="285" y1="130" x2="302" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr1a)"/>'
+'<text x="288" y="122" fill="#f59e0b" font-size="9" transform="rotate(-20,288,122)">«include»</text>'
+'<line x1="380" y1="122" x2="380" y2="131" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr1a)"/>'
+'<text x="390" y="140" fill="#f59e0b" font-size="9">«extend»</text>'
+'</svg>';

SVGS_UML.dr2 = '<svg viewBox="0 0 500 200" width="480" height="195" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr2a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
+'<marker id="dr2o" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.2"/></marker></defs>'
+'<rect x="20" y="8" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="55" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Client</text>'
+'<rect x="190" y="8" width="70" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="225" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">PaymentAPI</text>'
+'<rect x="370" y="8" width="80" height="22" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="410" y="23" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Database</text>'
+'<line x1="55" y1="30" x2="55" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<line x1="225" y1="30" x2="225" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<line x1="410" y1="30" x2="410" y2="195" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
+'<rect x="51" y="50" width="8" height="100" fill="#3b82f6" opacity="0.4"/>'
+'<rect x="221" y="65" width="8" height="75" fill="#3b82f6" opacity="0.4"/>'
+'<rect x="406" y="100" width="8" height="25" fill="#8b5cf6" opacity="0.4"/>'
+'<line x1="59" y1="55" x2="221" y2="65" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr2a)"/>'
+'<text x="132" y="53" text-anchor="middle" fill="#e2e8f0" font-size="9">1: pay(amount, card)</text>'
+'<line x1="229" y1="102" x2="406" y2="102" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr2a)"/>'
+'<text x="315" y="97" text-anchor="middle" fill="#e2e8f0" font-size="9">2: saveTransaction()</text>'
+'<line x1="406" y1="124" x2="229" y2="124" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#dr2o)"/>'
+'<text x="315" y="119" text-anchor="middle" fill="#64748b" font-size="9">3: txId</text>'
+'<rect x="155" y="138" width="80" height="22" rx="3" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>'
+'<text x="195" y="153" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">alt [success]</text>'
+'<line x1="221" y1="140" x2="59" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#dr2o)"/>'
+'<text x="132" y="145" text-anchor="middle" fill="#64748b" font-size="9">4: {status: ok, txId}</text>'
+'</svg>';

SVGS_UML.dr3 = '<svg viewBox="0 0 500 195" width="480" height="190" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr3a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker>'
+'<marker id="dr3t" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#94a3b8" stroke-width="1.5"/></marker></defs>'
+'<circle cx="250" cy="20" r="8" fill="#3b82f6"/>'
+'<line x1="250" y1="28" x2="250" y2="48" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<rect x="195" y="48" width="110" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="250" y="68" text-anchor="middle" fill="#93c5fd" font-size="10">Получить заявку</text>'
+'<polygon points="250,95 272,113 250,131 228,113" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
+'<text x="250" y="117" text-anchor="middle" fill="#f59e0b" font-size="9">[одобрить?]</text>'
+'<rect x="90" y="148" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="140" y="167" text-anchor="middle" fill="#93c5fd" font-size="10">Отправить отказ</text>'
+'<rect x="310" y="148" width="100" height="30" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="360" y="167" text-anchor="middle" fill="#93c5fd" font-size="10">Подготовить договор</text>'
+'<circle cx="250" cy="185" r="8" fill="none" stroke="#ef4444" stroke-width="3"/>'
+'<circle cx="250" cy="185" r="3" fill="#ef4444"/>'
+'<line x1="250" y1="80" x2="250" y2="94" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<line x1="228" y1="113" x2="140" y2="147" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<text x="170" y="133" fill="#94a3b8" font-size="9">[нет]</text>'
+'<line x1="272" y1="113" x2="360" y2="147" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<text x="330" y="133" fill="#94a3b8" font-size="9">[да]</text>'
+'<line x1="140" y1="178" x2="242" y2="185" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'<line x1="360" y1="178" x2="258" y2="185" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#dr3a)"/>'
+'</svg>';

SVGS_UML.dr4 = '<svg viewBox="0 0 480 190" width="460" height="185" xmlns="http://www.w3.org/2000/svg">'
+'<defs><marker id="dr4a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#64748b"/></marker></defs>'
+'<rect x="10" y="10" width="460" height="70" rx="4" fill="#0d1117" stroke="#3b82f6" stroke-width="1.5"/>'
+'<rect x="10" y="10" width="26" height="70" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="23" y="48" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold" transform="rotate(-90,23,48)">Интернет-магазин</text>'
+'<line x1="36" y1="44" x2="470" y2="44" stroke="#2d3748" stroke-width="0.5" stroke-dasharray="4,3"/>'
+'<text x="250" y="28" text-anchor="middle" fill="#64748b" font-size="8">Менеджер</text>'
+'<text x="250" y="65" text-anchor="middle" fill="#64748b" font-size="8">Склад</text>'
+'<circle cx="60" cy="40" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
+'<rect x="80" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="125" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Принять заказ</text>'
+'<polygon points="190,40 208,28 226,40 208,52" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.5"/>'
+'<line x1="200" y1="29" x2="208" y2="29" stroke="#f59e0b" stroke-width="1.2"/><line x1="208" y1="29" x2="208" y2="35" stroke="#f59e0b" stroke-width="1.2"/>'
+'<rect x="240" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="285" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Отклонить</text>'
+'<rect x="360" y="28" width="90" height="24" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="405" y="44" text-anchor="middle" fill="#93c5fd" font-size="9">Подтвердить</text>'
+'<rect x="360" y="60" width="90" height="18" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="405" y="73" text-anchor="middle" fill="#93c5fd" font-size="9">Отгрузить товар</text>'
+'<rect x="10" y="100" width="460" height="80" rx="4" fill="#0d1117" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<rect x="10" y="100" width="26" height="80" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="23" y="142" text-anchor="middle" fill="#c4b5fd" font-size="9" transform="rotate(-90,23,142)">Покупатель</text>'
+'<circle cx="70" cy="135" r="11" fill="none" stroke="#10b981" stroke-width="2"/>'
+'<rect x="47" y="124" width="16" height="11" rx="1" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'
+'<polyline points="47,124 55,130 63,124" fill="none" stroke="#3b82f6" stroke-width="1"/>'
+'<rect x="180" y="120" width="90" height="24" rx="4" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="225" y="136" text-anchor="middle" fill="#c4b5fd" font-size="9">Получить уведомление</text>'
+'<circle cx="400" cy="155" r="11" fill="none" stroke="#ef4444" stroke-width="3"/>'
+'<line x1="71" y1="40" x2="79" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="170" y1="40" x2="188" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="226" y1="40" x2="238" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="330" y1="40" x2="358" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="405" y1="52" x2="405" y2="58" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="405" y1="78" x2="405" y2="152" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'<line x1="285" y1="52" x2="225" y2="118" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#dr4a)"/>'
+'<line x1="270" y1="135" x2="388" y2="155" stroke="#64748b" stroke-width="1.5" marker-end="url(#dr4a)"/>'
+'</svg>';

SVGS_UML.dr5 = '<svg viewBox="0 0 520 190" width="500" height="185" xmlns="http://www.w3.org/2000/svg">'
+'<rect x="10" y="20" width="140" height="100" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="80" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Order</text>'
+'<line x1="10" y1="44" x2="150" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="80" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- id: String</text>'
+'<text x="80" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- status: String</text>'
+'<text x="80" y="86" text-anchor="middle" fill="#cbd5e1" font-size="10">- totalAmount: Float</text>'
+'<line x1="10" y1="92" x2="150" y2="92" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="80" y="106" text-anchor="middle" fill="#a5b4fc" font-size="10">+ confirm()</text>'
+'<text x="80" y="118" text-anchor="middle" fill="#a5b4fc" font-size="10">+ cancel()</text>'
+'<rect x="200" y="20" width="140" height="90" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="270" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">Customer</text>'
+'<line x1="200" y1="44" x2="340" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="270" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- name: String</text>'
+'<text x="270" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- email: String</text>'
+'<line x1="200" y1="78" x2="340" y2="78" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="270" y="92" text-anchor="middle" fill="#a5b4fc" font-size="10">+ register()</text>'
+'<rect x="380" y="20" width="130" height="80" rx="5" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>'
+'<text x="445" y="38" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="bold">OrderItem</text>'
+'<line x1="380" y1="44" x2="510" y2="44" stroke="#3b82f6" stroke-width="1"/>'
+'<text x="445" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">- productId: String</text>'
+'<text x="445" y="72" text-anchor="middle" fill="#cbd5e1" font-size="10">- quantity: Int</text>'
+'<text x="445" y="86" text-anchor="middle" fill="#cbd5e1" font-size="10">- price: Float</text>'
+'<rect x="160" y="140" width="140" height="40" rx="5" fill="#3b0764" stroke="#8b5cf6" stroke-width="1.5"/>'
+'<text x="230" y="155" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="bold">«interface»</text>'
+'<text x="230" y="170" text-anchor="middle" fill="#c4b5fd" font-size="11">IPayable</text>'
+'<defs>'
+'<marker id="dr5c" markerWidth="7" markerHeight="5" refX="1" refY="2.5" orient="auto"><polygon points="0 2.5,7 0,7 5" fill="none" stroke="#94a3b8" stroke-width="1.5"/></marker>'
+'<marker id="dr5d" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><polygon points="0 3,8 0,8 6" fill="#94a3b8"/></marker>'
+'</defs>'
+'<line x1="150" y1="70" x2="198" y2="65" stroke="#94a3b8" stroke-width="1.5"/>'
+'<text x="163" y="60" fill="#64748b" font-size="9">1</text>'
+'<text x="185" y="60" fill="#64748b" font-size="9">1..*</text>'
+'<polygon points="198,65 186,59 186,71" fill="none" stroke="#94a3b8" stroke-width="1.5"/>'
+'<line x1="150" y1="80" x2="378" y2="60" stroke="#94a3b8" stroke-width="1.5"/>'
+'<polygon points="150,80 162,74 162,86" fill="#94a3b8"/>'
+'<text x="155" y="75" fill="#64748b" font-size="9">1</text>'
+'<text x="360" y="60" fill="#64748b" font-size="9">0..*</text>'
+'<line x1="80" y1="120" x2="200" y2="140" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,3"/>'
+'<polygon points="200,140 192,132 204,130" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>'
+'</svg>';


// ─── 5 DIAGRAM READING QUESTIONS ───
Q_UML.push({sec:"uml",lab:"UML — Чтение диаграмм",type:"read_diagram",
 q:"Прочитай Use Case диаграмму. Что означает связь «include» между UseCase 'Оформить заказ' и UseCase 'Оплатить заказ'?",
 svg:"dr1",
 opts:["Оплата — опциональная функция, выполняется только при наличии промокода",
       "При оформлении заказа ВСЕГДА обязательно выполняется UseCase 'Оплатить заказ' — это обязательная зависимость",
       "Покупатель сначала оплачивает, потом оформляет — порядок действий",
       "'Оплатить заказ' является частным случаем (подтипом) 'Оформить заказ'"],
 ans:1,
 exp:"«include» = базовый UseCase ВСЕГДА включает зависимый. 'Оформить заказ' → «include» → 'Оплатить заказ' означает: каждое оформление обязательно включает оплату. Стрелка «include» направлена ОТ базового К включаемому (открытый наконечник). 'Применить промокод' связан через «extend» — это условное расширение, срабатывает только при наличии промокода."});

Q_UML.push({sec:"uml",lab:"UML — Чтение диаграмм",type:"read_diagram",
 q:"На Sequence Diagram показан процесс платежа. Что означает пунктирная стрелка от PaymentAPI к Client с текстом '4: {status: ok, txId}'?",
 svg:"dr2",
 opts:["Асинхронное сообщение — PaymentAPI отправляет уведомление без ожидания ответа",
       "Return message — возврат результата синхронного вызова, который Client ранее сделал к PaymentAPI",
       "PaymentAPI создаёт новый объект Client",
       "Это ошибка в диаграмме — возврат должен быть сплошной стрелкой"],
 ans:1,
 exp:"Пунктирная стрелка с открытым наконечником (- - -▷) в Sequence Diagram = Return Message — ответ на предыдущий synchronous call. Шаг 1 (сплошная стрелка ▶) = Client → PaymentAPI: синхронный вызов. Шаг 4 (пунктирная ▷) = PaymentAPI → Client: возврат результата. Блок 'alt [success]' показывает, что это ветка успешного сценария. Асинхронное сообщение — сплошная стрелка с ОТКРЫТЫМ наконечником."});

Q_UML.push({sec:"uml",lab:"UML — Чтение диаграмм",type:"read_diagram",
 q:"На Activity Diagram показан процесс рассмотрения заявки. Какой элемент стоит после 'Получить заявку' и что он означает?",
 svg:"dr3",
 opts:["Fork Node (черная полоса) — процесс разделяется на два параллельных потока",
       "Decision Node (ромб с условием [одобрить?]) — условная развилка: да → Подготовить договор, нет → Отправить отказ",
       "Join Node (черная полоса) — ждёт завершения двух параллельных потоков",
       "Merge Node — объединяет два альтернативных потока в один"],
 ans:1,
 exp:"Decision Node (ромб) с надписью [одобрить?] — условная развилка. Два исходящих потока помечены условиями [да] и [нет]. Только один путь активируется. Fork (черная полоса) разделяет на ПАРАЛЛЕЛЬНЫЕ потоки (все активируются). Join ждёт ВСЕХ параллельных. Merge объединяет альтернативные. Два Final Node в конце диаграммы — оба ведут к одному конечному состоянию."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Чтение диаграмм",type:"read_diagram",
 q:"На BPMN-диаграмме два Pool: 'Интернет-магазин' и 'Покупатель'. Пунктирная линия идёт от задачи 'Подтвердить' (Pool Магазин) к событию в Pool Покупатель. Что это означает?",
 svg:"dr4",
 opts:["Sequence Flow — последовательность шагов между отделами одного Pool",
       "Message Flow — обмен сообщениями между разными участниками (Pools). Это единственный законный способ коммуникации между Pool-ами",
       "Data Flow — передача данных о заказе между системами",
       "Это ошибка — связь между Pool-ами запрещена в BPMN 2.0"],
 ans:1,
 exp:"Пунктирная линия с открытым наконечником между Pool-ами = Message Flow. Правило BPMN 2.0: Sequence Flow (сплошная) работает ТОЛЬКО внутри одного Pool, может пересекать Lanes. Message Flow (пунктирная) — ТОЛЬКО между разными Pools. Разные Pools = разные организации/системы. Также на диаграмме: XOR Gateway (X) разделяет на Отклонить/Подтвердить — это взаимоисключающие пути."});

Q_UML.push({sec:"uml",lab:"UML — Чтение диаграмм",type:"read_diagram",
 q:"На Class Diagram: Order связан с Customer стрелкой с ОТКРЫТЫМ наконечником (→), с OrderItem — линией с ЗАКРАШЕННЫМ ромбом (◆), с IPayable — пунктирной стрелкой и ОТКРЫТЫМ треугольником (- - -▷). Определи все три типа связей.",
 svg:"dr5",
 opts:[
  "Order → Customer: наследование; Order ◆ OrderItem: зависимость; Order ---▷ IPayable: ассоциация",
  "Order → Customer: ассоциация (1 заказ у 1..* Customer); Order ◆ OrderItem: композиция (OrderItem не существует без Order); Order ---▷ IPayable: реализация интерфейса",
  "Order → Customer: ассоциация; Order ◆ OrderItem: агрегация (пустой ромб); Order ---▷ IPayable: зависимость",
  "Все три стрелки — разные виды наследования в UML"
 ],
 ans:1,
 exp:"3 разные связи: 1) Открытая стрелка (→) = Ассоциация. Order связан с Customer, множественность 1 к 1..*. 2) Закрашенный ромб (◆) = Композиция — сильное владение: OrderItem не существует без Order, при удалении Order удаляются OrderItems. Пустой ромб = Агрегация (слабое владение). 3) Пунктирная + открытый треугольник = Реализация (Realization) — Order implements IPayable. Сплошная + треугольник = Generalization (наследование)."});


// ─── INIT ───
// ─── NEW QUESTIONS: Article-based BPMN terminology (bilingual) ───
Q_UML.push({sec:"bpmn",lab:"BPMN — Базовые объекты / Core Objects",type:"concept",
 q:"Из скольких базовых объектов строится язык описания бизнес-процессов BPMN? Назови их.",
 opts:[
  "5 объектов: Event, Activity, Gateway, Flow, Pool",
  "8 объектов: Event (Событие), Activity (Действия), Gateway (Шлюзы), Flow (Поток), Data (Данные), Artefact (Артефакты), Swimlane (Дорожки), Pool (Пул)",
  "3 объекта: Task, Gateway, Event",
  "10 объектов, включая Lane, Pool, Message, Data, Group, Annotation, Event, Gateway, Flow, Activity"
 ],
 ans:1,
 exp:"BPMN строится на 8 базовых объектах: Event/Событие, Activity/Действия, Gateway/Шлюзы или Развилки, Flow/Поток, Data/Данные, Artefact/Артефакты, Swimlane/«плавательные дорожки», Pool/Пул. Это фундамент нотации — все остальные элементы (типы событий, типы шлюзов, типы задач) являются вариациями этих базовых объектов."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Activity / Действия",type:"concept",
 q:"Какой подтип Activity (Действия) представляет собой набор ЛОГИЧЕСКИ СВЯЗАННЫХ действий, для которого может быть определён протокол выполнения (всё или ничего)?",
 opts:[
  "Task (Задача) — простая единица работы",
  "Transaction (Транзакция) — набор логически связанных действий с протоколом выполнения",
  "Call Activity (Вызывающее действие) — точка входа для глобального подпроцесса",
  "Event Sub-Process (Событийный подпроцесс) — запускается своим событием"
 ],
 ans:1,
 exp:"Transaction (Транзакция) — это группа действий, логически связанных в одну атомарную единицу: либо выполняются ВСЕ, либо ОТКАТЫВАЮТСЯ ВСЕ (по аналогии с транзакцией в базах данных). Для транзакции BPMN явно определяет протокол выполнения. Task — простейшая неделимая единица работы. Call Activity вызывает ГЛОБАЛЬНО определённый процесс. Event Sub-Process запускается внутренним событием и может прерывать родительский процесс."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Activity / Действия",type:"concept",
 q:"Чем Call Activity (Вызывающее действие) принципиально отличается от обычного Sub-Process (вложенного подпроцесса)?",
 opts:[
  "Call Activity никогда не имеет визуального обозначения",
  "Call Activity — точка входа для ГЛОБАЛЬНО определённого подпроцесса, переиспользуемого в разных местах модели; Sub-Process определён ЛОКАЛЬНО внутри одного процесса",
  "Sub-Process работает только с человеком, Call Activity — только с системой",
  "Между ними нет разницы, это синонимы"
 ],
 ans:1,
 exp:"Call Activity вызывает ГЛОБАЛЬНЫЙ процесс — он определён один раз и может переиспользоваться в нескольких разных диаграммах/процессах (например, стандартная проверка KYC, используемая в открытии счёта, выдаче кредита и оформлении страховки). Sub-Process — локальная декомпозиция конкретного процесса, не предназначенная для переиспользования в других местах модели."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateway / Шлюзы",type:"concept",
 q:"Какой шлюз называется «Оператор исключающего ИЛИ, управляемый данными» (Exclusive Gateway, XOR) и как он работает при разветвлении?",
 opts:[
  "Активирует ВСЕ исходящие ветви одновременно",
  "При ветвлении направляет поток ЛИШЬ по ОДНОЙ из исходящих ветвей; при синхронизации ждёт завершения ОДНОЙ входящей ветви",
  "Активирует одну или более ветвей по выбору исполнителя",
  "Используется только для запуска параллельных подпроцессов"
 ],
 ans:1,
 exp:"Exclusive Gateway / Оператор исключающего ИЛИ — управляется ДАННЫМИ (условие в потоке данных решает, какая ветвь активируется). При разветвлении — только ОДНА ветвь. При слиянии — ждёт ОДНУ завершившуюся входящую ветвь и сразу продолжает (не дожидается остальных, потому что остальные и не будут активированы)."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateway / Шлюзы",type:"concept",
 q:"«Оператор И» (Parallel Gateway, AND) — как именно он работает при разделении и при синхронизации параллельных потоков?",
 opts:[
  "При разделении активируется одна ветвь по условию; при синхронизации ждёт первую завершившуюся",
  "При разделении на параллельные потоки ВСЕ ветви активируются ОДНОВРЕМЕННО; при синхронизации ждёт завершения ВСЕХ входящих ветвей и затем активирует исходящий поток",
  "Работает только с одним входящим и одним исходящим потоком",
  "Используется только для остановки процесса"
 ],
 ans:1,
 exp:"Parallel Gateway / Оператор И: при разделении (split) — ВСЕ исходящие ветви активируются ОДНОВРЕМЕННО (параллельное выполнение). При синхронизации (join/слиянии) — оператор ждёт завершения ВСЕХ входящих ветвей, и только потом активирует исходящий поток. Это правило строгое: дисбаланс AND Split/Join (например split на 3 ветви, а join ждёт только 2) — ошибка модели."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Gateway / Шлюзы",type:"concept",
 q:"«Оператор ИЛИ» (Inclusive Gateway, OR) — самый сложный шлюз. Опиши его поведение при ветвлении и слиянии.",
 opts:[
  "При ветвлении активируется ровно одна ветвь; при слиянии — ждёт только одну ветвь",
  "При ветвлении активируется одна ИЛИ более ветвей (зависит от условий); при слиянии ВСЕ выполняющиеся входящие ветви должны быть завершены",
  "Работает идентично Parallel Gateway, просто другая иконка",
  "Используется только в неисполняемых процессах"
 ],
 ans:1,
 exp:"Inclusive Gateway / Оператор ИЛИ: при разветвлении активируется ОДНА или БОЛЕЕ ветвей — сколько именно, зависит от условий на каждой исходящей ветви (это может быть от 1 до всех). При слиянии — оператор должен дождаться завершения ВСЕХ ветвей, которые были фактически активированы при разделении (а не все теоретически возможные). Это самый сложный для движка BPMN шлюз, так как требует отслеживания, какие пути были запущены."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Pool & Swimlane",type:"concept",
 q:"Что показывают Pool (Пул) и Swimlane (Дорожка) на диаграмме BPMN, и как они между собой связаны?",
 opts:[
  "Pool — это синоним Lane, они полностью идентичны",
  "Pool описывает ОДИН процесс на диаграмме целиком и может содержать несколько Swimlane (дорожек), показывающих конкретных участников процесса (роль, отдел, систему) внутри этого процесса",
  "Swimlane может содержать несколько Pool внутри себя",
  "Pool используется только для отображения данных, не участников"
 ],
 ans:1,
 exp:"Pool (Пул) описывает ОДИН процесс на диаграмме целиком — на одной диаграмме может быть несколько пулов (например, «Клиент» и «Магазин»). Внутри пула могут быть Swimlane (дорожки), которые указывают конкретных участников процесса, скрытых внутри пула: например, в процессе обработки заказа — «Менеджер по продажам», «Начальник отдела продаж», «Кассир». Дорожки позволяют иерархически делить пулы и другие дорожки — это инструмент распределения обязанностей внутри одного процесса."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Data Object & Message",type:"concept",
 q:"В чём ключевая особенность Data Object (Объекта данных) — может ли один и тот же объект данных быть И результатом, И стартовым условием одновременно?",
 opts:[
  "Нет, Data Object всегда либо вход, либо выход — никогда оба одновременно",
  "Да: для одного участника процесса объект данных может быть РЕЗУЛЬТАТОМ его действия, а для ДРУГОГО участника — НАЧАЛОМ его действия. Пример: «Заказ» — результат для менеджера, начало работы для склада",
  "Data Object используется только внутри одного Pool и не может передаваться между участниками",
  "Data Object — это то же самое, что Message"
 ],
 ans:1,
 exp:"Классический пример из методологии: объект данных «Заказ» сгенерирован менеджером — для него это РЕЗУЛЬТАТ завершённого действия. Но тот же самый «Заказ», поступивший на склад, является НАЧАЛОМ их действия (сбор товара и отгрузка). Data Object показывает, какие данные/документы нужны для старта действия или являются его результатом — двойственная природа в зависимости от точки зрения участника."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Artefact / Артефакты",type:"concept",
 q:"Какие ДВА типа артефактов (Artefact) существуют в BPMN, и в чём разница между ними?",
 opts:[
  "Data Object и Message — это и есть два типа артефактов",
  "Группа объектов (Group) — для визуального объединения элементов под общим символом для экономии места на диаграмме; и Текстовая аннотация (Text Annotation) — для комментариев и уточнений к диаграмме",
  "Pool и Swimlane являются единственными артефактами в BPMN",
  "Start Event и End Event считаются артефактами"
 ],
 ans:1,
 exp:"Артефакты — объекты, НЕ являющиеся действиями и не имеющие прямого отношения к выполнению процесса. Тип 1: Группа объектов (Group) — прямоугольник со скруглёнными углами, пунктирная линия с точками; объединяет несколько элементов визуально, экономит место на диаграмме. Тип 2: Текстовая аннотация (Text Annotation) — незамкнутый прямоугольник сплошной линией, связан пунктирной линией с объектом; служит для комментариев, повышающих читабельность схемы."});

Q_UML.push({sec:"bpmn",lab:"BPMN — Исполняемые процессы / Executable",type:"concept",
 q:"В чём принципиальная разница между ИСПОЛНЯЕМЫМ (Executable) и НЕИСПОЛНЯЕМЫМ (Non-Executable) бизнес-процессом в BPMN?",
 opts:[
  "Исполняемый процесс рисуется другим программным обеспечением, чем неисполняемый",
  "Исполняемый процесс должен строго соответствовать ВСЕМ правилам нотации BPMN, так как реально выполняется специальным ПО (Bizagi, Comindware, ELMA); неисполняемый нужен только для демонстрации/изучения модели бизнеса, и мелкие отклонения от правил не критичны",
  "Неисполняемый процесс не может содержать Gateway",
  "Это синонимы, разницы между ними нет"
 ],
 ans:1,
 exp:"Исполняемый бизнес-процесс должен быть построен в СТРОГОМ соответствии правилам нотации — иначе BPMS (Bizagi, Comindware, ELMA) не сможет корректно его выполнить. Используется на предприятиях с процессным подходом для отслеживания работы в реальном времени. Неисполняемый процесс нужен ИСКЛЮЧИТЕЛЬНО для демонстрации модели — это может быть диаграмма реального положения дел или иллюстрация реинжиниринга; соблюдение правил здесь нужно только для взаимопонимания между людьми. Новичкам рекомендуется начинать с неисполняемых процессов."});

Q_UML.push({sec:"bpmn",lab:"BPMN vs другие нотации / BPMN vs IT notation",type:"concept",
 q:"Почему важно понимать, что BPMN НЕ является языком описания IT-систем?",
 opts:[
  "Потому что BPMN устарел и не используется в современных IT-проектах",
  "Потому что BPMN предназначен для описания предметной области РЕАЛЬНОГО БИЗНЕСА, где могут быть задействованы как программные комплексы, так и ЛЮДИ (сотрудники, заказчики, поставщики) — это главное отличие от графических средств описания программ",
  "Потому что в BPMN нельзя описывать автоматизированные шаги",
  "Потому что BPMN работает только с базами данных"
 ],
 ans:1,
 exp:"Ключевое отличие BPMN от языков описания программ (UML Class/Sequence и т.д.) — BPMN моделирует РЕАЛЬНЫЙ бизнес-процесс целиком, включая шаги, которые выполняют ЛЮДИ (менеджер по продажам, кассир, клиент), а не только программные компоненты. BPMN — промежуточное звено между формализацией/визуализацией процесса и его воплощением — может выполняться разными системами управления (BPMS), но описывает саму бизнес-логику, а не архитектуру ПО."});

// ─── Combined Fragments (loop / alt / opt) SVGs ───
SVGS_UML.cfLoop = '<svg viewBox="0 0 460 165" width="440" height="160" xmlns="http://www.w3.org/2000/svg">'
  +'<rect x="20" y="10" width="420" height="145" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.3"/>'
  +'<path d="M20,10 L60,10 L60,24 L52,30 L20,30 Z" fill="#1a1f2e" stroke="#f59e0b" stroke-width="1.3"/>'
  +'<text x="30" y="23" fill="#fcd34d" font-size="9" font-weight="bold">loop</text>'
  +'<text x="240" y="24" text-anchor="middle" fill="#fcd34d" font-size="9">[1, 3]</text>'
  +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Client</text>'
  +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">AuthServer</text>'
  +'<line x1="95" y1="65" x2="95" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="365" y1="65" x2="365" y2="135" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="99" y1="85" x2="361" y2="85" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfl1)"/>'
  +'<defs><marker id="cfl1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="80" text-anchor="middle" fill="#e2e8f0" font-size="8">enterPassword()</text>'
  +'<line x1="361" y1="105" x2="99" y2="105" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#cfl2)"/>'
  +'<defs><marker id="cfl2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="none" stroke="#64748b" stroke-width="1.2"/></marker></defs>'
  +'<text x="230" y="100" text-anchor="middle" fill="#64748b" font-size="8">incorrect</text>'
  +'</svg>';

SVGS_UML.cfAlt = '<svg viewBox="0 0 460 195" width="440" height="190" xmlns="http://www.w3.org/2000/svg">'
  +'<rect x="20" y="10" width="420" height="175" rx="3" fill="none" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<path d="M20,10 L58,10 L58,24 L50,30 L20,30 Z" fill="#1a1f2e" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="28" y="23" fill="#93c5fd" font-size="9" font-weight="bold">alt</text>'
  +'<text x="240" y="24" text-anchor="middle" fill="#93c5fd" font-size="9">[stock available]</text>'
  +'<rect x="60" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="95" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Order</text>'
  +'<rect x="330" y="45" width="70" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.3"/>'
  +'<text x="365" y="59" text-anchor="middle" fill="#93c5fd" font-size="9">Warehouse</text>'
  +'<line x1="95" y1="65" x2="95" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="365" y1="65" x2="365" y2="180" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3"/>'
  +'<line x1="99" y1="82" x2="361" y2="82" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfa1)"/>'
  +'<defs><marker id="cfa1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="77" text-anchor="middle" fill="#e2e8f0" font-size="8">confirmOrder()</text>'
  +'<line x1="20" y1="100" x2="440" y2="100" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6,3"/>'
  +'<text x="28" y="114" fill="#fca5a5" font-size="9" font-weight="bold">[else]</text>'
  +'<line x1="99" y1="135" x2="361" y2="135" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#cfa2)"/>'
  +'<defs><marker id="cfa2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#94a3b8"/></marker></defs>'
  +'<text x="230" y="130" text-anchor="middle" fill="#e2e8f0" font-size="8">backorder()</text>'
  +'<text x="230" y="155" text-anchor="middle" fill="#fca5a5" font-size="8">«ожидание поставки»</text>'
  +'</svg>';

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: loop",type:"concept",
 q:"На Sequence Diagram рамка подписана «loop [1, 5]». Что означают числа в квадратных скобках?",
 opts:[
  "Номера сообщений внутри рамки, от первого до пятого",
  "Минимум 1 и максимум 5 повторений содержимого рамки — цикл выполнится хотя бы 1 раз, но не более 5 раз",
  "Диапазон допустимых значений переменной, участвующей в сообщении",
  "Версии диаграммы, в которых актуален этот фрагмент"
 ],
 ans:1,
 exp:"Формат loop [minint, maxint] задаёт границы повторения: минимум 1 (guard выполнится хотя бы раз) и максимум 5 (после пятого повтора цикл принудительно останавливается, даже если условие продолжения ещё истинно). Это отличается от записи loop [условие] (например, [for each item]), где границы не заданы явно, а цикл работает, пока условие истинно."});

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: alt vs opt",type:"concept",
 q:"Разработчик говорит: «Я оформил это как alt с одной веткой, без else». Аналитик отвечает, что это неверно с точки зрения нотации. Почему аналитик прав?",
 opts:[
  "Потому что alt вообще нельзя использовать в Sequence Diagram",
  "Потому что фрагмент с ОДНИМ условием и без альтернативной ветки — это по определению «opt», а не «alt»: рамка «alt» предполагает минимум 2 секции, разделённые пунктирной линией",
  "Потому что имя рамки должно совпадать с именем метода",
  "Потому что alt применяется только для BPMN, а не для UML"
 ],
 ans:1,
 exp:"«opt» — это семантически частный случай «alt» с единственной веткой и без «else»: если условие ложно, просто ничего не происходит. Использовать ярлык «alt» для одной ветки без альтернативы — терминологическая ошибка, которая может ввести читающего в заблуждение (он будет ждать пунктирную линию и вторую секцию). Правильная нотация — переименовать рамку в «opt»."});

Q_UML.push({sec:"uml",lab:"Sequence — Combined Fragments: разделитель alt",type:"concept",
 q:"Внутри рамки «alt» нарисована горизонтальная ПУНКТИРНАЯ линия, разделяющая её на две части. Что произойдёт во время выполнения сценария?",
 opts:[
  "Выполнятся ОБЕ части одновременно, как в параллельном фрагменте «par»",
  "Выполнится РОВНО ОДНА из двух секций — та, чьё условие в квадратных скобках истинно; вторая секция будет полностью пропущена",
  "Пунктирная линия — это просто визуальное оформление, она не влияет на выполнение",
  "Выполнятся обе секции последовательно, одна за другой"
 ],
 ans:1,
 exp:"Пунктирная разделительная линия внутри «alt» — обязательный признак взаимоисключающих условий (аналог if/else if/else в коде). В любой момент выполнения активна только ОДНА секция — та, чей guard-condition в квадратных скобках истинен на момент проверки. Если бы обе секции должны были выполняться параллельно, использовалась бы рамка «par», а не «alt», и разделитель обозначал бы параллельные потоки, а не альтернативы."});

Q_UML.push({sec:"uml",lab:"Sequence — Чтение диаграммы: loop",type:"read_diagram",
 q:"На диаграмме рамка «loop [1, 3]» окружает обмен сообщениями между Client и AuthServer: Client отправляет enterPassword(), AuthServer отвечает incorrect. Пользователь ввёл неверный пароль 4 раза подряд. Что произойдёт согласно диаграмме?",
 svg:"cfLoop",
 opts:[
  "Цикл будет повторяться бесконечно, пока пароль не станет верным",
  "После 3-й неудачной попытки цикл принудительно завершится — диаграмма не допускает 4-ю попытку внутри этого фрагмента, дальше должна сработать отдельная логика (например, блокировка)",
  "AuthServer автоматически разблокирует учётную запись после первой ошибки",
  "Диаграмма не накладывает ограничений — количество попыток бесконечно, так как maxint не используется в UML"
 ],
 ans:1,
 exp:"loop [1, 3] — жёсткая верхняя граница в 3 повторения. При проектировании подобного экрана BA должен предусмотреть, ЧТО происходит после превышения границы цикла (обычно отдельный alt/opt фрагмент или переход к другому Use Case — «блокировка аккаунта», «капча», «таймаут»). Диаграмма без этого — неполная, именно так интервьюер может проверить внимательность к деталям."});

Q_UML.push({sec:"uml",lab:"Sequence — Чтение диаграммы: alt",type:"read_diagram",
 q:"На диаграмме рамка «alt [stock available]» / «[else]» между Order и Warehouse. В верхней секции: confirmOrder(). В нижней секции (else): backorder(). Товара на складе нет. Что выполнится?",
 svg:"cfAlt",
 opts:[
  "confirmOrder(), потому что он написан первым в диаграмме",
  "Обе операции — сначала confirmOrder(), затем backorder() как компенсация",
  "Только backorder() — так как условие [stock available] ложно, выполняется секция [else], верхняя секция полностью пропускается",
  "Ни одна операция не выполнится, диаграмма завершится с ошибкой"
 ],
 ans:2,
 exp:"Как и в switch/if-else в коде — при ложном условии верхней секции (товара нет в наличии) управление переходит СРАЗУ к секции [else]: выполнится только backorder(). confirmOrder() из первой секции не выполняется вообще — это не «запасной вариант после неудачи», а взаимоисключающая альтернатива."});

Q_UML.push({sec:"uml",lab:"Sequence — выбор правильного фрагмента",type:"concept",
 q:"BA формулирует бизнес-правило: «Если у клиента есть подарочный сертификат, применить скидку по сертификату. Если сертификата нет — оформить заказ по обычной цене, никаких дополнительных действий не требуется». Какой Combined Fragment точнее всего описывает эту логику на Sequence Diagram?",
 opts:[
  "loop — потому что применение скидки может повторяться",
  "alt с двумя секциями [есть сертификат] / [else] — раз описаны ДВЕ ветки (со скидкой и без)",
  "opt [есть сертификат] — потому что «оформить по обычной цене без доп. действий» означает, что при ложном условии на диаграмме просто НЕЧЕГО показывать, это не отдельная ветка, а «ничего не происходит»",
  "par — потому что оба варианта происходят параллельно"
 ],
 ans:2,
 exp:"Ключевая фраза — «никаких дополнительных действий не требуется» при отсутствии сертификата. Это значит, что во «else»-случае на диаграмме просто НЕТ сообщений для показа — а значит, отдельная секция [else] не нужна. Именно для такой асимметричной логики (что-то происходит только при истинном условии, а при ложном — буквально ничего) существует «opt»: он специально не требует описывать пустую альтернативную ветку, в отличие от «alt»."});


// UML initialized on demand via switchApp

// ═══════════════════════════════════════════
// DRAW PRACTICE: free-form diagram drawing
// ═══════════════════════════════════════════
var dwState = {level:null, exId:null, nodes:[], edges:[], tool:'select', connectFrom:null, selected:null,
               edgeKind:'flow', result:null, pendingEdge:null, attempts:0, uidSeq:1, drag:null};
var DW_W = 820, DW_LANE_H = 120, DW_H_NOLANE = 380, DW_LEFT = 90;
var DW_FLOW_TYPES = ['bpmn','activity'];
var DW_EDGE_KINDS = {
  usecase:[{id:'assoc',label:'— Association'},{id:'include',label:'┄▷ «include»'},{id:'extend',label:'┄▷ «extend»'},{id:'generalization',label:'▷ Generalization'}],
  'class':[{id:'assoc',label:'— Association'},{id:'generalization',label:'▷ Generalization'},{id:'realization',label:'┄▷ Realization'},{id:'composition',label:'◆ Composition'},{id:'aggregation',label:'◇ Aggregation'}]
};
var DW_KIND_ICON = {start:'⚪',end:'⚫',task:'▭',send:'✉',gateway_x:'◆',fork:'▮',join:'▮',actor:'🧍',usecase:'⬭',class:'▭',interface:'▭'};
var DW_KIND_NAME = {start:'Start',end:'End',task:'Task',send:'Send Task',gateway_x:'Gateway',fork:'Fork',join:'Join',actor:'Actor',usecase:'Use Case',class:'Class',interface:'Interface'};

function dwEx(){ return DRAW_EXERCISES.filter(function(e){return e.id===dwState.exId;})[0]; }
function dwIsFlow(ex){ return DW_FLOW_TYPES.indexOf(ex.type)!==-1; }
function dwKindName(ex,kind){
  if(ex.type==='activity'){ if(kind==='task')return 'Action'; if(kind==='gateway_x')return 'Decision'; if(kind==='start')return 'Initial'; if(kind==='end')return 'Final'; }
  if(ex.type==='bpmn'){ if(kind==='gateway_x')return 'Exclusive Gateway'; if(kind==='fork')return 'Parallel Gateway'; if(kind==='start')return 'Start Event'; if(kind==='end')return 'End Event'; }
  return DW_KIND_NAME[kind]||kind;
}
function dwLib(ex){
  var lib = ex.nodes.slice();
  if(ex.extraNodes){ lib = lib.concat(ex.extraNodes); var seed = ex.id.length; lib.sort(function(a,b){ return ((a.id.charCodeAt(0)*31+a.text.length*seed)%17) - ((b.id.charCodeAt(0)*31+b.text.length*seed)%17); }); }
  return lib;
}
function dwCanvasH(ex){ return ex.lanes ? ex.lanes.length*DW_LANE_H : DW_H_NOLANE; }
function dwLaneOf(ex,y){ if(!ex.lanes) return null; var i=Math.max(0,Math.min(ex.lanes.length-1,Math.floor(y/DW_LANE_H))); return ex.lanes[i].id; }
function dwSize(kind){
  if(kind==='task'||kind==='send') return {w:124,h:38};
  if(kind==='gateway_x') return {w:40,h:40};
  if(kind==='start'||kind==='end') return {w:30,h:30};
  if(kind==='fork'||kind==='join') return {w:12,h:64};
  if(kind==='actor') return {w:34,h:60};
  if(kind==='usecase') return {w:136,h:46};
  return {w:124,h:42}; // class / interface
}
function dwRefresh(){ var el=document.getElementById('utp'); if(el){ el.innerHTML=renderDrawPractice(); dwBind(); } }
function dwRefreshSvg(){ var s=document.getElementById('dw-svg'); if(s) s.innerHTML=dwSvgInner(dwEx()); }

// ─── screens ───
function renderDrawPractice(){
  if(!dwState.level) return renderDrawLevels();
  if(!dwState.exId) return renderDrawList();
  return renderDrawExercise();
}
function renderDrawLevels(){
  var c1 = DRAW_EXERCISES.filter(function(e){return e.level===1;}).length, c2 = DRAW_EXERCISES.filter(function(e){return e.level===2;}).length;
  return '<div class="t-h3">'+t('dw_title')+'</div>'
    +'<div class="info-box">'+t('dw_intro')+'</div>'
    +'<div class="build-type-grid">'
    +'<div class="build-type-card" onclick="dwSelectLevel(1)"><div class="bt-icon">🧩</div><h4>'+t('dw_l1')+'</h4><p>'+t('dw_l1_desc',{n:c1})+'</p></div>'
    +'<div class="build-type-card" onclick="dwSelectLevel(2)"><div class="bt-icon">📚</div><h4>'+t('dw_l2')+'</h4><p>'+t('dw_l2_desc',{n:c2})+'</p></div>'
    +'</div>';
}
function renderDrawList(){
  var list = DRAW_EXERCISES.filter(function(e){return e.level===dwState.level;});
  var typeLab = {}; BUILD_TYPES.forEach(function(t){typeLab[t.id]=t.icon+' '+t.label;});
  return '<div class="t-h3">'+(dwState.level===1?t('dw_l1_long'):t('dw_l2_long'))+'</div>'
    +'<div class="build-ex-list">'+list.map(function(e,i){
      return '<div class="build-ex-card" onclick="dwStart(\''+e.id+'\')"><h4>'+(i+1)+'. '+e.title+'</h4><p>'+t('dw_meta',{t:typeLab[e.type],n:e.nodes.length,e:e.edges.length})+(e.lanes?t('dw_lanes',{l:e.lanes.length}):'')+'</p></div>';
    }).join('')+'</div>'
    +'<button class="btn btn-g" onclick="dwBackLevels()">'+t('back_levels')+'</button>';
}
function dwSelectLevel(l){ dwState.level=l; dwState.exId=null; dwRefresh(); }
function dwBackLevels(){ dwState.level=null; dwState.exId=null; dwRefresh(); }
function dwBackList(){ dwState.exId=null; dwRefresh(); }
function dwStart(id){
  dwState.exId=id; dwState.nodes=[]; dwState.edges=[]; dwState.tool='select'; dwState.connectFrom=null; dwState.selected=null;
  dwState.result=null; dwState.pendingEdge=null; dwState.attempts=0; dwState.uidSeq=1;
  var ex=dwEx(); dwState.edgeKind = dwIsFlow(ex) ? 'flow' : DW_EDGE_KINDS[ex.type][0].id;
  dwRefresh();
}
function dwRetry(){ dwStart(dwState.exId); }

function renderDrawExercise(){
  var ex=dwEx(), lib=dwLib(ex), flow=dwIsFlow(ex);
  var html = '<div class="t-h3">'+ex.title+'</div>'
    +'<div class="build-scenario">📌 '+ex.scenario+'</div>';
  if(dwState.result && dwState.result.ok){
    var pct = dwState.attempts<=1?'perfect':dwState.attempts<=3?'good':'rough';
    var title = pct==='perfect'?t('dw_perfect'):pct==='good'?t('dw_good'):t('dw_rough');
    html += '<div class="build-done-banner '+pct+'"><h3>'+title+'</h3><p>'+t('dw_checks')+dwState.attempts+'</p></div>';
  }
  // toolbar
  html += '<div class="dw-toolbar">'
    +'<button class="dw-tool'+(dwState.tool==='select'?' active':'')+'" onclick="dwSetTool(\'select\')">'+t('tool_move')+'</button>'
    +'<button class="dw-tool'+(dwState.tool==='connect'?' active':'')+'" onclick="dwSetTool(\'connect\')">'+t('tool_connect')+'</button>';
  if(!flow){
    html += '<span class="dw-sep"></span>' + DW_EDGE_KINDS[ex.type].map(function(k){
      return '<button class="dw-tool dw-kind'+(dwState.edgeKind===k.id?' active':'')+'" onclick="dwSetKind(\''+k.id+'\')">'+k.label+'</button>';
    }).join('');
  }
  html += '<span class="dw-sep"></span>'
    +'<button class="dw-tool" onclick="dwDeleteSelected()"'+(dwState.selected?'':' disabled')+'>'+t('tool_delete')+'</button>'
    +'<button class="dw-tool" onclick="dwClear()">'+t('tool_clear')+'</button>'
    +'</div>';
  html += '<div class="dw-hint">'+(dwState.tool==='connect'?(dwState.connectFrom?t('hint_to'):t('hint_from')):t('hint_move'))+'</div>';
  // canvas
  var H=dwCanvasH(ex);
  html += '<div class="dw-canvas-wrap"><svg id="dw-svg" class="dw-svg" viewBox="0 0 '+DW_W+' '+H+'" xmlns="http://www.w3.org/2000/svg">'+dwSvgInner(ex)+'</svg></div>';
  // label chooser
  if(dwState.pendingEdge!==null){
    var labels=[]; ex.edges.forEach(function(e){ if(e.label && labels.indexOf(e.label)===-1) labels.push(e.label); });
    html += '<div class="dw-label-box">'+t('label_for')+labels.map(function(l){return '<button class="btn btn-p dw-lbl" onclick="dwSetLabel(\''+bpEsc(l)+'\')">'+bpEsc(l)+'</button>';}).join('')
      +'<button class="btn btn-g dw-lbl" onclick="dwSetLabel(\'\')">'+t('no_label')+'</button></div>';
  }
  // palette
  html += '<div class="dw-pal-title">'+t('palette_title')+'</div><div class="dw-palette">';
  lib.forEach(function(n){
    var used = dwState.nodes.some(function(p){return p.src===n.id;});
    html += '<div class="dw-pal-item'+(used?' used':'')+'" draggable="'+(used?'false':'true')+'" data-src="'+n.id+'" onclick="dwAddFromPalette(\''+n.id+'\')">'
      +'<span class="dw-pal-icon">'+DW_KIND_ICON[n.kind]+'</span><span class="dw-pal-kind">'+dwKindName(ex,n.kind)+'</span><span class="dw-pal-text">'+bpEsc(n.text)+'</span></div>';
  });
  html += '</div>';
  // result
  if(dwState.result && !dwState.result.ok){
    html += '<div class="dw-errors"><b>'+t('errors_title',{a:dwState.attempts,n:dwState.result.errors.length})+'</b><ul>'+dwState.result.errors.map(function(e){return '<li>'+e+'</li>';}).join('')+'</ul></div>';
  }
  if(dwState.result && dwState.result.ok){
    html += '<div class="build-explanation"><b>'+t('analysis')+'</b> '+ex.explanation+'</div>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-p" onclick="dwRetry()">'+t('redraw')+'</button><button class="btn btn-g" onclick="dwBackList()">'+t('back_other')+'</button></div>';
  } else {
    html += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-p" onclick="dwCheck()">'+t('check')+'</button><button class="btn btn-g" onclick="dwBackList()">'+t('back_other')+'</button></div>';
  }
  return html;
}

// ─── SVG rendering ───
function dwSvgInner(ex){
  var H=dwCanvasH(ex), s='';
  s += '<defs>'
    +'<marker id="dwA" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,7 3,0 6" fill="#94a3b8"/></marker>'
    +'<marker id="dwO" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,8 3.5,0 7" fill="none" stroke="#c4b5fd" stroke-width="1.2"/></marker>'
    +'<marker id="dwT" markerWidth="11" markerHeight="9" refX="10" refY="4.5" orient="auto"><polygon points="0 0,10 4.5,0 9" fill="#0f1117" stroke="#e2e8f0" stroke-width="1.2"/></marker>'
    +'<marker id="dwDF" markerWidth="12" markerHeight="8" refX="1" refY="4" orient="auto"><polygon points="1 4,6 0,11 4,6 8" fill="#e2e8f0"/></marker>'
    +'<marker id="dwDO" markerWidth="12" markerHeight="8" refX="1" refY="4" orient="auto"><polygon points="1 4,6 0,11 4,6 8" fill="#0f1117" stroke="#e2e8f0" stroke-width="1.2"/></marker>'
    +'</defs>';
  s += '<rect x="0" y="0" width="'+DW_W+'" height="'+H+'" fill="#0d1117"/>';
  if(ex.lanes){
    ex.lanes.forEach(function(l,i){
      var y=i*DW_LANE_H;
      s += '<rect x="0" y="'+y+'" width="'+DW_W+'" height="'+DW_LANE_H+'" fill="'+(i%2?'#0d1117':'#12161f')+'" stroke="#2d3748"/>'
        +'<rect x="0" y="'+y+'" width="'+DW_LEFT+'" height="'+DW_LANE_H+'" fill="#161b26" stroke="#2d3748"/>'
        +'<text x="'+(DW_LEFT/2)+'" y="'+(y+DW_LANE_H/2+4)+'" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="700">'+bpEsc(l.label)+'</text>';
    });
  } else if(dwState.nodes.length===0){
    s += '<text x="'+(DW_W/2)+'" y="'+(H/2)+'" text-anchor="middle" fill="#374151" font-size="14">'+t('canvas_empty')+'</text>';
  }
  dwState.edges.forEach(function(e,i){ s += dwEdgeSvg(ex,e,i); });
  dwState.nodes.forEach(function(n){ s += dwNodeSvg(ex,n); });
  return s;
}
function dwNodeByUid(uid){ return dwState.nodes.filter(function(n){return n.uid===uid;})[0]; }
function dwNodeSvg(ex,n){
  var sel = (dwState.selected && dwState.selected.type==='node' && dwState.selected.uid===n.uid) || dwState.connectFrom===n.uid;
  var cx=n.x, cy=n.y, k=n.kind, t=bpEsc(n.text), body='';
  var stroke = sel?'#fbbf24':null;
  if(k==='start') body = '<circle cx="'+cx+'" cy="'+cy+'" r="15" fill="#1e3a5f" stroke="'+(stroke||'#3b82f6')+'" stroke-width="2"/><text x="'+cx+'" y="'+(cy+28)+'" text-anchor="middle" fill="#93c5fd" font-size="9">'+t+'</text>';
  else if(k==='end') body = '<circle cx="'+cx+'" cy="'+cy+'" r="15" fill="#1a1f2e" stroke="'+(stroke||'#ef4444')+'" stroke-width="3"/><text x="'+cx+'" y="'+(cy+28)+'" text-anchor="middle" fill="#fca5a5" font-size="9">'+t+'</text>';
  else if(k==='task'||k==='send'){ var sz=dwSize(k); body = '<rect x="'+(cx-sz.w/2)+'" y="'+(cy-sz.h/2)+'" width="'+sz.w+'" height="'+sz.h+'" rx="10" fill="'+(k==='send'?'#0d3b2e':'#1e3a5f')+'" stroke="'+(stroke||(k==='send'?'#10b981':'#3b82f6'))+'" stroke-width="1.6"'+(k==='send'?' stroke-dasharray="5,2"':'')+'/><text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="'+(k==='send'?'#6ee7b7':'#93c5fd')+'" font-size="10">'+(k==='send'?'✉ ':'')+t+'</text>'; }
  else if(k==='gateway_x') body = '<polygon points="'+cx+','+(cy-20)+' '+(cx+20)+','+cy+' '+cx+','+(cy+20)+' '+(cx-20)+','+cy+'" fill="#1a1f2e" stroke="'+(stroke||'#f59e0b')+'" stroke-width="1.8"/><text x="'+cx+'" y="'+(cy+5)+'" text-anchor="middle" fill="#fcd34d" font-size="14" font-weight="700">×</text><text x="'+cx+'" y="'+(cy+33)+'" text-anchor="middle" fill="#fcd34d" font-size="9">'+t+'</text>';
  else if(k==='fork'||k==='join') body = '<rect x="'+(cx-5)+'" y="'+(cy-32)+'" width="10" height="64" rx="2" fill="'+(stroke||'#94a3b8')+'"/><text x="'+cx+'" y="'+(cy+45)+'" text-anchor="middle" fill="#94a3b8" font-size="9">'+t+'</text>';
  else if(k==='actor') body = '<g stroke="'+(stroke||'#93c5fd')+'" stroke-width="1.8" fill="none"><circle cx="'+cx+'" cy="'+(cy-20)+'" r="8"/><line x1="'+cx+'" y1="'+(cy-12)+'" x2="'+cx+'" y2="'+(cy+8)+'"/><line x1="'+(cx-14)+'" y1="'+(cy-4)+'" x2="'+(cx+14)+'" y2="'+(cy-4)+'"/><line x1="'+cx+'" y1="'+(cy+8)+'" x2="'+(cx-12)+'" y2="'+(cy+26)+'"/><line x1="'+cx+'" y1="'+(cy+8)+'" x2="'+(cx+12)+'" y2="'+(cy+26)+'"/></g><text x="'+cx+'" y="'+(cy+40)+'" text-anchor="middle" fill="#93c5fd" font-size="10">'+t+'</text>';
  else if(k==='usecase') body = '<ellipse cx="'+cx+'" cy="'+cy+'" rx="68" ry="23" fill="#2e1065" stroke="'+(stroke||'#a78bfa')+'" stroke-width="1.6"/><text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="#ddd6fe" font-size="10">'+t+'</text>';
  else { var sz2=dwSize(k); body = '<rect x="'+(cx-sz2.w/2)+'" y="'+(cy-sz2.h/2)+'" width="'+sz2.w+'" height="'+sz2.h+'" fill="#1e293b" stroke="'+(stroke||'#60a5fa')+'" stroke-width="1.6"/><line x1="'+(cx-sz2.w/2)+'" y1="'+(cy-sz2.h/2+20)+'" x2="'+(cx+sz2.w/2)+'" y2="'+(cy-sz2.h/2+20)+'" stroke="'+(stroke||'#60a5fa')+'"/><text x="'+cx+'" y="'+(cy-sz2.h/2+14)+'" text-anchor="middle" fill="#bfdbfe" font-size="10" font-weight="700">'+t+'</text>'; }
  return '<g class="dw-node" data-uid="'+n.uid+'" style="cursor:'+(dwState.tool==='connect'?'crosshair':'grab')+'">'+body+'</g>';
}
function dwAnchor(n, tx, ty){
  var sz=dwSize(n.kind), dx=tx-n.x, dy=ty-n.y, len=Math.sqrt(dx*dx+dy*dy)||1;
  var rx=sz.w/2+4, ry=sz.h/2+4;
  var t = 1/Math.sqrt((dx*dx)/(rx*rx*len*len)+(dy*dy)/(ry*ry*len*len));
  t = Math.min(t, len/2);
  return {x:n.x+dx/len*t, y:n.y+dy/len*t};
}
function dwEdgeSvg(ex,e,i){
  var a=dwNodeByUid(e.from), b=dwNodeByUid(e.to); if(!a||!b) return '';
  var sel = dwState.selected && dwState.selected.type==='edge' && dwState.selected.idx===i;
  var p1=dwAnchor(a,b.x,b.y), p2=dwAnchor(b,a.x,a.y);
  var k=e.kind||'flow', stroke=sel?'#fbbf24':'#94a3b8', dash='', mEnd='url(#dwA)', mStart='', lbl=e.label||'';
  if(k==='assoc'){ mEnd=''; }
  else if(k==='include'||k==='extend'){ dash=' stroke-dasharray="6,3"'; mEnd='url(#dwO)'; stroke=sel?'#fbbf24':'#c4b5fd'; lbl='«'+k+'»'; }
  else if(k==='generalization'){ mEnd='url(#dwT)'; stroke=sel?'#fbbf24':'#e2e8f0'; }
  else if(k==='realization'){ mEnd='url(#dwT)'; dash=' stroke-dasharray="6,3"'; stroke=sel?'#fbbf24':'#e2e8f0'; }
  else if(k==='composition'){ mEnd=''; mStart=' marker-start="url(#dwDF)"'; stroke=sel?'#fbbf24':'#e2e8f0'; }
  else if(k==='aggregation'){ mEnd=''; mStart=' marker-start="url(#dwDO)"'; stroke=sel?'#fbbf24':'#e2e8f0'; }
  var mx=(p1.x+p2.x)/2, my=(p1.y+p2.y)/2;
  var s='<g class="dw-edge" data-idx="'+i+'" style="cursor:pointer">'
    +'<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="transparent" stroke-width="14"/>'
    +'<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+stroke+'" stroke-width="1.8"'+dash+(mEnd?' marker-end="'+mEnd+'"':'')+mStart+'/>';
  if(lbl) s+='<rect x="'+(mx-lbl.length*3.2-4)+'" y="'+(my-16)+'" width="'+(lbl.length*6.4+8)+'" height="14" rx="3" fill="#0d1117"/><text x="'+mx+'" y="'+(my-5)+'" text-anchor="middle" fill="'+(sel?'#fbbf24':'#fcd34d')+'" font-size="10">'+bpEsc(lbl)+'</text>';
  return s+'</g>';
}

// ─── interaction ───
function dwSetTool(t){ dwState.tool=t; dwState.connectFrom=null; dwState.selected=null; dwRefresh(); }
function dwSetKind(k){ dwState.edgeKind=k; dwState.tool='connect'; dwRefresh(); }
function dwClear(){ dwState.nodes=[]; dwState.edges=[]; dwState.selected=null; dwState.connectFrom=null; dwState.pendingEdge=null; dwState.result=null; dwRefresh(); }
function dwDeleteSelected(){
  var s=dwState.selected; if(!s) return;
  if(s.type==='edge') dwState.edges.splice(s.idx,1);
  else { dwState.nodes=dwState.nodes.filter(function(n){return n.uid!==s.uid;}); dwState.edges=dwState.edges.filter(function(e){return e.from!==s.uid&&e.to!==s.uid;}); }
  dwState.selected=null; dwState.pendingEdge=null; dwRefresh();
}
function dwLibNode(ex,src){ return dwLib(ex).filter(function(n){return n.id===src;})[0]; }
function dwAddNode(src,x,y){
  var ex=dwEx(); if(dwState.nodes.some(function(p){return p.src===src;})) return;
  var ln=dwLibNode(ex,src); if(!ln) return;
  var H=dwCanvasH(ex);
  x=Math.max(DW_LEFT+40,Math.min(DW_W-40,x)); y=Math.max(30,Math.min(H-30,y));
  dwState.nodes.push({uid:dwState.uidSeq++, src:src, kind:ln.kind, text:ln.text, x:x, y:y});
  dwState.result=null; dwRefresh();
}
function dwAddFromPalette(src){
  var ex=dwEx(), H=dwCanvasH(ex), idx=dwState.nodes.length;
  dwAddNode(src, DW_LEFT+70+(idx%5)*140, 60+Math.floor(idx/5)*90 % (H-60));
}
function dwSetLabel(l){ if(dwState.pendingEdge!==null && dwState.edges[dwState.pendingEdge]) dwState.edges[dwState.pendingEdge].label=l; dwState.pendingEdge=null; dwRefresh(); }
function dwSvgPoint(svg,ev){ var pt=svg.createSVGPoint(); pt.x=ev.clientX; pt.y=ev.clientY; var p=pt.matrixTransform(svg.getScreenCTM().inverse()); return {x:p.x,y:p.y}; }

function dwBind(){
  var svg=document.getElementById('dw-svg'); if(!svg) return;
  var ex=dwEx();
  // palette drag → canvas
  var items=document.querySelectorAll('.dw-pal-item[draggable="true"]');
  for(var i=0;i<items.length;i++){ items[i].addEventListener('dragstart',function(ev){ ev.dataTransfer.setData('text/plain',this.getAttribute('data-src')); ev.dataTransfer.effectAllowed='copy'; }); }
  svg.addEventListener('dragover',function(ev){ ev.preventDefault(); ev.dataTransfer.dropEffect='copy'; });
  svg.addEventListener('drop',function(ev){ ev.preventDefault(); var src=ev.dataTransfer.getData('text/plain'); if(!src) return; var p=dwSvgPoint(svg,ev); dwAddNode(src,p.x,p.y); });
  // pointer interaction inside canvas
  svg.addEventListener('pointerdown',function(ev){
    var g=ev.target.closest ? ev.target.closest('.dw-node') : null;
    var eg=ev.target.closest ? ev.target.closest('.dw-edge') : null;
    if(g){
      var uid=parseInt(g.getAttribute('data-uid'),10);
      if(dwState.tool==='connect'){
        if(dwState.connectFrom===null){ dwState.connectFrom=uid; dwRefresh(); }
        else if(dwState.connectFrom===uid){ dwState.connectFrom=null; dwRefresh(); }
        else {
          var from=dwState.connectFrom, to=uid;
          var dup=dwState.edges.some(function(e){return e.from===from&&e.to===to;});
          if(!dup){
            var kind=dwIsFlow(ex)?'flow':dwState.edgeKind;
            dwState.edges.push({from:from,to:to,kind:kind,label:''});
            var fn=dwNodeByUid(from);
            if(dwIsFlow(ex) && fn && fn.kind==='gateway_x') dwState.pendingEdge=dwState.edges.length-1;
          }
          dwState.connectFrom=null; dwState.result=null; dwRefresh();
        }
        return;
      }
      var n=dwNodeByUid(uid), p=dwSvgPoint(svg,ev);
      dwState.drag={uid:uid,dx:n.x-p.x,dy:n.y-p.y,moved:false};
      dwState.selected={type:'node',uid:uid}; dwState.pendingEdge=null;
      svg.setPointerCapture(ev.pointerId); ev.preventDefault();
      dwRefreshSvg(); dwToolbarSync();
    } else if(eg){
      dwState.selected={type:'edge',idx:parseInt(eg.getAttribute('data-idx'),10)}; dwState.pendingEdge=null; dwRefreshSvg(); dwToolbarSync();
    } else {
      if(dwState.selected){ dwState.selected=null; dwRefreshSvg(); dwToolbarSync(); }
    }
  });
  svg.addEventListener('pointermove',function(ev){
    if(!dwState.drag) return;
    var n=dwNodeByUid(dwState.drag.uid); if(!n) return;
    var p=dwSvgPoint(svg,ev), H=dwCanvasH(ex);
    n.x=Math.max(DW_LEFT+20,Math.min(DW_W-20,p.x+dwState.drag.dx)); n.y=Math.max(20,Math.min(H-20,p.y+dwState.drag.dy));
    dwState.drag.moved=true; dwRefreshSvg();
  });
  function endDrag(ev){ if(dwState.drag){ if(dwState.drag.moved) dwState.result=null; dwState.drag=null; } }
  svg.addEventListener('pointerup',endDrag); svg.addEventListener('pointercancel',endDrag);
}
function dwToolbarSync(){ var b=document.querySelector('.dw-toolbar button[onclick="dwDeleteSelected()"]'); if(b) b.disabled=!dwState.selected; }

// ─── checking ───
function dwCheck(){
  var ex=dwEx(), errors=[], flow=dwIsFlow(ex);
  dwState.attempts++;
  var bySrc={}; dwState.nodes.forEach(function(n){ bySrc[n.src]=n; });
  function nm(def){ return dwKindName(ex,def.kind)+' «'+bpEsc(def.text)+'»'; }
  ex.nodes.forEach(function(d){ if(!bySrc[d.id]) errors.push('Не хватает элемента: '+nm(d)+'.'); });
  (ex.extraNodes||[]).forEach(function(d){ if(bySrc[d.id]) errors.push('Лишний элемент: '+nm(d)+'. '+bpEsc(d.why||'')); });
  if(ex.lanes){
    var laneLabel={}; ex.lanes.forEach(function(l){laneLabel[l.id]=l.label;});
    ex.nodes.forEach(function(d){ var n=bySrc[d.id]; if(n && dwLaneOf(ex,n.y)!==d.lane) errors.push(nm(d)+' стоит не в той Lane: должен быть в «'+laneLabel[d.lane]+'» (это делает '+laneLabel[d.lane]+').'); });
  }
  var uidToSrc={}; dwState.nodes.forEach(function(n){ uidToSrc[n.uid]=n.src; });
  var userEdges=dwState.edges.map(function(e,i){ return {from:uidToSrc[e.from],to:uidToSrc[e.to],kind:e.kind||'flow',label:e.label||'',idx:i,matched:false}; });
  var defName={}; ex.nodes.concat(ex.extraNodes||[]).forEach(function(d){defName[d.id]=d.text;});
  function edgeName(e){ return '«'+bpEsc(defName[e.from]||'?')+'» → «'+bpEsc(defName[e.to]||'?')+'»'; }
  ex.edges.forEach(function(req){
    var reqKind=req.kind||'flow', undirected=(reqKind==='assoc');
    var cand=userEdges.filter(function(u){ return !u.matched && ((u.from===req.from&&u.to===req.to) || (undirected&&u.from===req.to&&u.to===req.from)); });
    if(!cand.length){
      if(bySrc[req.from]&&bySrc[req.to]){
        var rev=userEdges.filter(function(u){return !u.matched&&u.from===req.to&&u.to===req.from;})[0];
        if(rev && !undirected){ rev.matched=true; errors.push('Связь '+edgeName(req)+' направлена в обратную сторону.'+(reqKind==='include'?' «include» идёт от базового Use Case к включаемому.':reqKind==='extend'?' «extend» идёт от расширяющего Use Case к базовому.':reqKind==='generalization'?' Generalization идёт от потомка к родителю.':'')); }
        else errors.push('Нет связи '+edgeName(req)+(reqKind!=='flow'?' ('+reqKind+')':'')+'.');
      } else errors.push('Нет связи '+edgeName(req)+' — сначала добавь оба элемента.');
      return;
    }
    var u=cand[0]; u.matched=true;
    if(u.kind!==reqKind) errors.push('Связь '+edgeName(req)+' должна быть '+reqKind+', а не '+u.kind+'.');
    if(flow && req.label!==undefined && req.label!=='' && u.label!==req.label) errors.push('Ветка '+edgeName(req)+' должна быть подписана «'+bpEsc(req.label)+'»'+(u.label?', а не «'+bpEsc(u.label)+'»':'')+'.');
    if(flow){
      var a=bySrc[req.from], b=bySrc[req.to];
      if(!req.back && b.x < a.x-10) errors.push('Поток '+edgeName(req)+' идёт справа налево — основной поток должен идти слева направо, переставь элементы.');
      if(req.back && b.x > a.x+10) errors.push('Связь '+edgeName(req)+' — это возврат назад (цикл), она должна вести влево, к более раннему шагу.');
    }
  });
  userEdges.forEach(function(u){ if(!u.matched) errors.push('Лишняя связь '+edgeName(u)+': в сценарии такого перехода нет.'); });
  dwState.result={ok:errors.length===0, errors:errors};
  dwRefresh();
  var r=document.querySelector('.dw-errors,.build-done-banner'); if(r) r.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// re-render current screens after a language switch
function rerenderAll(){
  if(state==='theory') renderTheory(); else if(state==='quiz') renderQ(); else renderScore();
  if(umlInited){ if(stateUML==='theory') renderTheoryUML(); else if(stateUML==='quiz') renderQUML(); else renderScoreUML(); }
}
