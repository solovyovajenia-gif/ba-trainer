// ═══ APP LOGIC ═══
applyData(LANG);
var umlInited = true;

// ═══════════════════════════
// BA TRAINER CODE
// ═══════════════════════════

var state = 'theory', theoryTab = 'req', cur = 0, score = 0;
var results = new Array(Q.length).fill(null);
var chosen  = new Array(Q.length).fill(null);


function secClass(s){return s==='theory'?'sl1':'sl2';}
function typeLabel(ty){return t('qt_'+ty)!=='qt_'+ty?t('qt_'+ty):ty;}

function renderTheory(){
  document.getElementById('plabel').textContent=t('theory_ref');
  document.getElementById('pscore').textContent='';
  document.getElementById('pfill').style.width='0%';
  var tabsHtml=TABS.map(function(t){
    return '<div class="tab'+(theoryTab===t.id?' active':'')+'" onclick="go(\'ba-theory/'+t.id+'\')">'+t.label+'</div>';
  }).join('');
  document.getElementById('app').innerHTML=
    '<div class="th-hero"><h2>'+t('ba_hero')+'</h2>'
    +'<p>'+t('ba_hero_sub')+'</p></div>'
    +'<div class="tabs">'+tabsHtml+'</div>'
    +'<div id="tp">'+TC[theoryTab]+'</div>'
    +theoryNextCta('ba');
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
    h+='<div class="'+c+'" onclick="goTo('+i+')" title="'+(isTheory?t('theory'):t('practice'))+' '+(i+1)+'">'+lbl+'</div>';
  }
  return h;
}

function renderQ(){
  if(cur>=Q.length){renderScore();return;}
  var q=Q[cur],done=results[cur]!==null,sel=chosen[cur],keys=['A','B','C','D'];
  document.getElementById('plabel').textContent=(q.sec==='theory'?t('theory'):t('practice'))+' '+(cur+1)+' '+t('of')+' '+Q.length;
  document.getElementById('pscore').textContent=t('score')+': '+score;
  document.getElementById('pfill').style.width=(((cur+1)/Q.length)*100).toFixed(0)+'%';
  var optsHtml='';
  for(var i=0;i<q.opts.length;i++){
    var c='opt';
    if(done){c+=' dis';if(i===q.ans)c+=' correct';else if(i===sel&&sel!==q.ans)c+=' wrong';}
    else if(i===sel)c+=' sel';
    optsHtml+='<div class="'+c+'" onclick="pick('+i+')">'+'<span class="okey">'+keys[i]+'</span>'+q.opts[i]+'</div>';
  }
  var fbCls=done?(results[cur]?'fb ok show':'fb fail show'):'fb';
  var fbTxt=done?(results[cur]?t('correct'):t('incorrect'))+'<b>'+t('explanation')+'</b> '+q.exp:'';
  var ctx=q.ctx?'<div class="ctx-box">📌 '+q.ctx+'</div>':'';
  var sb=(!done&&sel!==null)?'<button class="btn btn-p" onclick="submit()">'+t('answer')+'</button>':'';
  var nb=done?'<button class="btn btn-p" onclick="nxt()">'+(cur===Q.length-1?t('results'):t('next'))+'</button>':'';
  document.getElementById('app').innerHTML=
    '<div class="dots">'+renderDots()+'</div>'
    +'<span class="sec-lbl '+secClass(q.sec)+'">'+(q.sec==='theory'?t('theory'):t('practice'))+'</span>'
    +'<span class="qtype">'+typeLabel(q.type)+'</span>'
    +'<div class="qcard">'
      +'<div class="qnum">'+t('question')+' '+(cur+1)+'/'+Q.length+' — '+q.lab+'</div>'
      +'<div class="qtext">'+q.q+'</div>'+ctx
      +'<div class="opts">'+optsHtml+'</div>'
      +'<div class="'+fbCls+'">'+fbTxt+'</div>'
    +'</div>'
    +'<div class="nav">'
      +'<div style="display:flex;gap:8px">'
        +'<button class="btn btn-g" onclick="prv()" '+(cur===0?'disabled':'')+'>'+t('back')+'</button>'
        +'<button class="btn btn-g" onclick="backToTheory()">'+t('theory_btn')+'</button>'
      +'</div>'
      +'<div style="display:flex;gap:8px">'+sb+nb+'</div>'
    +'</div>';
}

function pick(i){if(results[cur]!==null)return;chosen[cur]=i;renderQ();}
function submit(){if(chosen[cur]===null)return;var ok=chosen[cur]===Q[cur].ans;results[cur]=ok;if(ok)score++;saveProgress();renderQ();}
function nxt(){if(cur<Q.length-1){cur++;renderQ();}else{renderScore();}}
function prv(){if(cur>0){cur--;renderQ();}}
function goTo(i){cur=i;renderQ();}
function backToTheory(){go('ba-theory/'+theoryTab);}

function renderScore(){
  var th=0,pr=0,thT=0,prT=0;
  for(var i=0;i<Q.length;i++){
    if(Q[i].sec==='theory'){thT++;if(results[i]===true)th++;}
    else{prT++;if(results[i]===true)pr++;}
  }
  var total=th+pr,grandTotal=Q.length,pct=Math.round(total/grandTotal*100);
  var grade=pct>=90?t('g_expert'):pct>=75?t('g_adv'):pct>=60?t('g_conf'):pct>=45?t('g_prog'):t('g_learn');
  document.getElementById('pfill').style.width='100%';
  document.getElementById('plabel').textContent=t('test_done');
  document.getElementById('pscore').textContent=t('total')+': '+total+'/'+grandTotal+' ('+pct+'%)';
  var types=['concept','classify','write','choose','case'];
  var tn={concept:t('qt_concept'),classify:t('qt_classify'),write:t('qt_write'),choose:t('qt_choose'),case:t('qt_case')};
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
      +'<div class="sbox s1"><h3>'+t('theory')+'</h3><div class="n">'+th+'/'+thT+'</div></div>'
      +'<div class="sbox s2"><h3>'+t('practice')+'</h3><div class="n">'+pr+'/'+prT+'</div></div>'
      +'<div class="sbox s3"><h3>'+t('total')+'</h3><div class="n">'+total+'/'+grandTotal+'</div></div>'
    +'</div>'
    +'<div class="fsec"><h3>'+t('by_type')+'</h3>'+typeHtml+'</div>'
    +'<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">'
      +'<button class="btn btn-p" onclick="restart()">'+t('restart')+'</button>'
      +'<button class="btn btn-g" onclick="goTo(0);renderQ()">'+t('review')+'</button>'
      +'<button class="btn btn-g" onclick="backToTheory()">'+t('theory_btn')+'</button>'
    +'</div></div>';
}

function restart(){cur=0;score=0;results=new Array(Q.length).fill(null);chosen=new Array(Q.length).fill(null);state='quiz';saveProgress();renderQ();}
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
var resultsUML = new Array(Q_UML.length).fill(null);
var chosenUML  = new Array(Q_UML.length).fill(null);

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
  var html = '<div class="t-h3">'+t('tab_build')+'</div>'
    +'<div class="info-box">'+t('build_intro')+'</div>'
    +'<div class="build-type-grid">';
  BUILD_TYPES.forEach(function(t){
    var cnt = BUILD_EXERCISES.filter(function(e){return e.type===t.id;}).length;
    html += '<div class="build-type-card" onclick="selectBuildType(\''+t.id+'\')">'
      +'<div class="bt-icon">'+t.icon+'</div><h4>'+t.label+'</h4><p>'+t.desc+' · '+cnt+' '+I18N[LANG].exercises_n+'</p></div>';
  });
  html += '</div>';
  return html;
}

function renderBuildExList(){
  var exs = BUILD_EXERCISES.filter(function(e){return e.type===bpState.typeId;});
  var typeInfo = BUILD_TYPES.filter(function(t){return t.id===bpState.typeId;})[0];
  var html = '<div class="t-h3">'+typeInfo.icon+' '+typeInfo.label+' — '+t('pick_ex')+'</div>'
    +'<div class="build-ex-list">';
  exs.forEach(function(e){
    html += '<div class="build-ex-card" onclick="startBuildEx(\''+e.id+'\')"><h4>'+e.title+'</h4><p>'+e.scenario.slice(0,90)+'…</p></div>';
  });
  html += '</div><button class="btn btn-g" onclick="backToBuildTypes()">'+t('back_types')+'</button>';
  return html;
}

function renderBuildExercise(){
  var ex = BUILD_EXERCISES.filter(function(e){return e.id===bpState.exId;})[0];
  var html = '<div class="t-h3">'+ex.title+'</div>'
    +'<div class="build-scenario">📌 '+ex.scenario+'</div>'
    +'<div class="build-progress">'+t('step')+' '+bpState.placed.length+' '+t('of')+' '+ex.correctOrder.length+' · '+t('mistakes')+': '+bpState.mistakes+'</div>';

  if(!bpState.done){
    html += '<div class="build-canvas">';
    if(bpState.placed.length===0){
      html += '<div class="build-canvas-empty">'+t('build_empty')+'</div>';
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
    var title = pct==='perfect'?t('b_perfect'):pct==='good'?t('b_good'):t('b_rough');
    html += '<div class="build-done-banner '+pct+'"><h3>'+title+'</h3><p>'+t('mistakes_build')+': '+bpState.mistakes+'</p></div>'
      +'<div class="build-final-diagram">'+renderFinalDiagram(ex)+'</div>'
      +'<div class="build-explanation"><b>'+t('analysis')+'</b> '+ex.explanation+'</div>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-p" onclick="retryBuildEx()">'+t('retry')+'</button><button class="btn btn-g" onclick="backToBuildExList()">'+t('back_other')+'</button></div>';
  } else {
    html += '<div class="build-pool">';
    ex.pool.forEach(function(el){
      var used = bpState.placed.indexOf(el.id)!==-1;
      var wrong = bpState.wrongId===el.id;
      var cls = 'build-el'+(used?' used':'')+(wrong?' wrong':'');
      html += '<div class="'+cls+'" onclick="clickBuildEl(\''+el.id+'\')">'+el.label+'</div>';
    });
    html += '</div>'
      +'<button class="btn btn-g" onclick="backToBuildExList()">'+t('back_other')+'</button>';
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
    if(bpState.placed.length===ex.correctOrder.length){ bpState.done=true; PROGRESS.build[ex.id]=bpState.mistakes; saveProgress(); }
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
  document.getElementById('plabel').textContent = t('theory_ref_uml');
  document.getElementById('pscore').textContent = '';
  document.getElementById('pfill').style.width = '0%';

  var tabs = [
    {id:'overview',label:t('tab_overview')},
    {id:'uml_elements',label:t('tab_uml_el')},
    {id:'bpmn_elements',label:t('tab_bpmn_el')}
  ];
  var isPractice = theoryTabUML==='practice_build'||theoryTabUML==='practice_draw';
  var tabsHtml = isPractice ? '' : tabs.map(function(t){
    return '<div class="ttab'+(theoryTabUML===t.id?' active':'')+'" onclick="go(\'dg-theory/'+t.id+'\')">'+t.label+'</div>';
  }).join('');

  var panelContent = theoryTabUML==='practice_build' ? renderBuildPractice() : theoryTabUML==='practice_draw' ? renderDrawPractice() : THEORY_UML[theoryTabUML].content;

  document.getElementById('app').innerHTML =
    '<div class="theory-screen">'+
      (isPractice ? '' : '<h2>📚 '+t('dg_theory_title')+'</h2><p class="sub">'+t('theory_sub')+'</p><div class="theory-tabs">'+tabsHtml+'</div>')+
      '<div class="theory-panel show" id="utp">'+panelContent+'</div>'+
      (isPractice ? '' : theoryNextCta('dg'))+
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

  document.getElementById('plabel').textContent = t('question')+' '+(curUML+1)+' '+t('of')+' '+Q_UML.length;
  document.getElementById('pscore').textContent  = 'Score: '+scoreUML;
  document.getElementById('pfill').style.width   = (((curUML+1)/Q_UML.length)*100).toFixed(0)+'%';

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
  if(done) fbTxt=(resultsUML[curUML]?t('correct'):t('incorrect'))+'<strong>'+t('explanation')+'</strong> '+q.exp;

  var diag = (q.svg&&SVGS_UML[q.svg])?'<div class="diagram">'+SVGS_UML[q.svg]+'</div>':'';

  var submitBtn = (!done&&sel!==null)?'<button class="btn btn-p" onclick="submitUML()">'+t('answer')+'</button>':'';
  var nextBtn   = done?'<button class="btn btn-p" onclick="nxtUML()">'+(curUML===Q_UML.length-1?t('results'):t('next'))+'</button>':'';
  var theoryBtn = '<button class="btn btn-g" onclick="backToTheoryUML()">'+t('theory_btn')+'</button>';

  document.getElementById('app').innerHTML =
    '<div class="dots">'+renderDotsUML()+'</div>'+
    '<span class="sec-label '+secClass(q.sec)+'">'+q.lab+'</span>'+
    '<span class="q-type">'+typeLabel(q.type)+'</span>'+
    '<div class="card">'+
      '<div class="qnum">'+t('question')+' '+(curUML+1)+' / '+Q_UML.length+'</div>'+
      '<div class="qtext">'+q.q+'</div>'+
      diag+
      '<div class="options">'+optsHtml+'</div>'+
      '<div class="'+fbCls+'">'+fbTxt+'</div>'+
    '</div>'+
    '<div class="nav">'+
      '<div style="display:flex;gap:8px">'+
        '<button class="btn btn-g" onclick="prvUML()" '+(curUML===0?'disabled':'')+'>'+t('back')+'</button>'+
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
  saveProgress();
  renderQUML();
}
function nxtUML(){if(curUML<Q_UML.length-1){curUML++;renderQUML();}else{renderScoreUML();}}
function prvUML(){if(curUML>0){curUML--;renderQUML();}}
function goToUML(i){curUML=i;renderQUML();}
function backToTheoryUML(){go('dg-theory/'+(theoryTabUML.indexOf('practice_')===0?'overview':theoryTabUML));}

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

  document.getElementById('pfill').style.width='100%';
  document.getElementById('plabel').textContent=t('test_done');
  document.getElementById('pscore').textContent=t('total')+': '+total+'/'+grandTotal+' ('+pct+'%)';

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

  document.getElementById('app').innerHTML=
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
        '<button class="btn btn-p" onclick="restartUML()">'+t('restart')+'</button>'+
        '<button class="btn btn-g" onclick="goToUML(0);state=\'quiz\';renderQUML()">'+t('review')+'</button>'+
        '<button class="btn btn-g" onclick="backToTheoryUML()">'+t('theory_btn')+'</button>'+
      '</div>'+
    '</div>';
}

function restartUML(){
  curUML=0;scoreUML=0;
  resultsUML=new Array(Q_UML.length).fill(null);
  chosenUML=new Array(Q_UML.length).fill(null);
  stateUML='quiz';
  saveProgress();
  renderQUML();
}


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
  ex.nodes.forEach(function(d){ if(!bySrc[d.id]) errors.push(t('e_missing')+nm(d)+'.'); });
  (ex.extraNodes||[]).forEach(function(d){ if(bySrc[d.id]) errors.push(t('e_extra')+nm(d)+'. '+bpEsc(d.why||'')); });
  if(ex.lanes){
    var laneLabel={}; ex.lanes.forEach(function(l){laneLabel[l.id]=l.label;});
    ex.nodes.forEach(function(d){ var n=bySrc[d.id]; if(n && dwLaneOf(ex,n.y)!==d.lane) errors.push(nm(d)+t('e_lane',{l:laneLabel[d.lane]})); });
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
        if(rev && !undirected){ rev.matched=true; errors.push(t('e_rev',{e:edgeName(req)})+(reqKind==='include'?t('e_rev_inc'):reqKind==='extend'?t('e_rev_ext'):reqKind==='generalization'?t('e_rev_gen'):'')); }
        else errors.push(t('e_noedge')+edgeName(req)+(reqKind!=='flow'?' ('+reqKind+')':'')+'.');
      } else errors.push(t('e_noedge')+edgeName(req)+t('e_add_both'));
      return;
    }
    var u=cand[0]; u.matched=true;
    if(u.kind!==reqKind) errors.push(t('e_kind',{e:edgeName(req),a:reqKind,b:u.kind}));
    if(flow && req.label!==undefined && req.label!=='' && u.label!==req.label) errors.push(t('e_label',{e:edgeName(req),l:bpEsc(req.label)})+(u.label?t('e_label_not',{l:bpEsc(u.label)}):'')+'.');
    if(flow){
      var a=bySrc[req.from], b=bySrc[req.to];
      if(!req.back && b.x < a.x-10) errors.push(t('e_backwards',{e:edgeName(req)}));
      if(req.back && b.x > a.x+10) errors.push(t('e_loop',{e:edgeName(req)}));
    }
  });
  userEdges.forEach(function(u){ if(!u.matched) errors.push(t('e_extra_edge',{e:edgeName(u)})); });
  dwState.result={ok:errors.length===0, errors:errors};
  if(dwState.result.ok){ PROGRESS.draw[ex.id]=dwState.attempts; saveProgress(); }
  dwRefresh();
  var r=document.querySelector('.dw-errors,.build-done-banner'); if(r) r.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// re-render current screen after a language switch
function rerenderAll(){ route(); }


// ═══════════════════════════════════════════
// APP SHELL: progress, sidebar, router
// ═══════════════════════════════════════════
var PROGRESS = {ba:{results:null,chosen:null}, dg:{results:null,chosen:null}, build:{}, draw:{}, visited:{}};
function loadProgress(){
  try{ var p=JSON.parse(localStorage.getItem('ba_progress')||'null'); if(p&&typeof p==='object'){ PROGRESS.build=p.build||{}; PROGRESS.draw=p.draw||{}; PROGRESS.visited=p.visited||{};
    if(p.ba&&p.ba.results&&p.ba.results.length===Q.length){ results=p.ba.results; chosen=p.ba.chosen; score=results.filter(function(r){return r===true;}).length; }
    if(p.dg&&p.dg.results&&p.dg.results.length===Q_UML.length){ resultsUML=p.dg.results; chosenUML=p.dg.chosen; scoreUML=resultsUML.filter(function(r){return r===true;}).length; }
  } }catch(e){}
}
function saveProgress(){
  PROGRESS.ba={results:results,chosen:chosen}; PROGRESS.dg={results:resultsUML,chosen:chosenUML};
  try{ localStorage.setItem('ba_progress',JSON.stringify(PROGRESS)); }catch(e){}
  renderSidebar();
}
function resetProgress(){
  if(!confirm(t('reset_confirm'))) return;
  PROGRESS={ba:{},dg:{},build:{},draw:{},visited:{}};
  results=new Array(Q.length).fill(null); chosen=new Array(Q.length).fill(null); score=0; cur=0; state='theory';
  resultsUML=new Array(Q_UML.length).fill(null); chosenUML=new Array(Q_UML.length).fill(null); scoreUML=0; curUML=0; stateUML='theory';
  try{ localStorage.removeItem('ba_progress'); }catch(e){}
  go('ba-theory/'+TABS[0].id);
}
function answered(arr){ return arr.filter(function(r){return r!==null;}).length; }
function sectionPct(sec){
  if(sec==='ba-theory'){ var v=TABS.filter(function(x){return PROGRESS.visited['ba-theory/'+x.id];}).length; return Math.round(v/TABS.length*100); }
  if(sec==='ba-practice') return Math.round(answered(results)/Q.length*100);
  if(sec==='dg-theory'){ var keys=['overview','uml_elements','bpmn_elements']; var v2=keys.filter(function(k){return PROGRESS.visited['dg-theory/'+k];}).length; return Math.round(v2/keys.length*100); }
  if(sec==='dg-practice'){ var tot=Q_UML.length+BUILD_EXERCISES.length+DRAW_EXERCISES.length; var d=answered(resultsUML)+Object.keys(PROGRESS.build).length+Object.keys(PROGRESS.draw).length; return Math.round(d/tot*100); }
  return 0;
}

var ROUTE = {sec:'ba-theory', sub:null};
var SB_OPEN = {};
function sbSections(){
  return [
    {id:'ba-theory', ico:'📘', title:t('sb_ba_theory'), items:TABS.map(function(x){return {id:x.id,label:x.label};})},
    {id:'ba-practice', ico:'✍️', title:t('sb_ba_practice'), items:[{id:'quiz',label:t('sb_quiz',{n:Q.length}),done:answered(results)+'/'+Q.length}]},
    {id:'dg-theory', ico:'📐', title:t('sb_dg_theory'), items:[{id:'overview',label:t('tab_overview')},{id:'uml_elements',label:t('tab_uml_el')},{id:'bpmn_elements',label:t('tab_bpmn_el')}]},
    {id:'dg-practice', ico:'🎨', title:t('sb_dg_practice'), items:[
      {id:'quiz',label:t('sb_quiz',{n:Q_UML.length}),done:answered(resultsUML)+'/'+Q_UML.length},
      {id:'build',label:t('sb_build'),done:Object.keys(PROGRESS.build).length+'/'+BUILD_EXERCISES.length},
      {id:'draw',label:t('sb_draw'),done:Object.keys(PROGRESS.draw).length+'/'+DRAW_EXERCISES.length}]}
  ];
}
function renderSidebar(){
  var el=document.getElementById('sidebar'); if(!el) return;
  var h='';
  sbSections().forEach(function(s){
    var active=ROUTE.sec===s.id, open=SB_OPEN[s.id]!==undefined?SB_OPEN[s.id]:active, pct=sectionPct(s.id);
    h+='<div class="sb-sec'+(active?' active':'')+(open?' open':'')+'">'
      +'<button class="sb-head" onclick="sbHead(\''+s.id+'\')"><span class="sb-ico">'+s.ico+'</span><span class="sb-title">'+s.title+'</span><span class="sb-pct">'+pct+'%</span><span class="sb-chev">▶</span></button>'
      +'<div class="sb-bar"><div style="width:'+pct+'%"></div></div>'
      +'<div class="sb-items">'+s.items.map(function(it){
        var a=active&&ROUTE.sub===it.id;
        return '<button class="sb-item'+(a?' active':'')+'" onclick="go(\''+s.id+'/'+it.id+'\')">'+it.label+(it.done?'<span class="sb-done">'+it.done+'</span>':'')+'</button>';
      }).join('')+'</div></div>';
  });
  h+='<div class="sb-foot">'+t('sb_progress_note')+' <button onclick="resetProgress()">'+t('sb_reset')+'</button></div>';
  el.innerHTML=h;
}
function sbHead(id){
  var s=sbSections().filter(function(x){return x.id===id;})[0];
  if(ROUTE.sec===id){ SB_OPEN[id]=!(SB_OPEN[id]!==undefined?SB_OPEN[id]:true); renderSidebar(); return; }
  SB_OPEN[id]=true; go(id+'/'+s.items[0].id);
}
function sbToggle(){ document.body.classList.toggle('sb-open'); }
function sbClose(){ document.body.classList.remove('sb-open'); }

function go(path){ if(location.hash.slice(1)===path) route(); else location.hash=path; }
function route(){
  var path=location.hash.slice(1)||('ba-theory/'+TABS[0].id);
  var parts=path.split('/'); ROUTE={sec:parts[0],sub:parts[1]||null};
  var validSec=['ba-theory','ba-practice','dg-theory','dg-practice'];
  if(validSec.indexOf(ROUTE.sec)===-1){ ROUTE={sec:'ba-theory',sub:TABS[0].id}; }
  sbClose(); window.scrollTo(0,0);
  if(ROUTE.sec==='ba-theory'){
    if(!TC[ROUTE.sub]) ROUTE.sub=TABS[0].id;
    theoryTab=ROUTE.sub; state='theory'; PROGRESS.visited['ba-theory/'+theoryTab]=1; saveProgress(); renderTheory();
  } else if(ROUTE.sec==='ba-practice'){
    ROUTE.sub='quiz';
    if(answered(results)===Q.length){ state='done'; renderScore(); } else { state='quiz'; if(results[cur]!==null){ var nx=results.indexOf(null); if(nx!==-1) cur=nx; } renderQ(); }
  } else if(ROUTE.sec==='dg-theory'){
    if(!THEORY_UML[ROUTE.sub]) ROUTE.sub='overview';
    theoryTabUML=ROUTE.sub; stateUML='theory'; PROGRESS.visited['dg-theory/'+theoryTabUML]=1; saveProgress(); renderTheoryUML(); document.getElementById('plabel').textContent=t('sb_dg_theory');
  } else if(ROUTE.sec==='dg-practice'){
    if(['quiz','build','draw'].indexOf(ROUTE.sub)===-1) ROUTE.sub='quiz';
    if(ROUTE.sub==='quiz'){ if(answered(resultsUML)===Q_UML.length){ stateUML='done'; renderScoreUML(); } else { stateUML='quiz'; if(resultsUML[curUML]!==null){ var nx2=resultsUML.indexOf(null); if(nx2!==-1) curUML=nx2; } renderQUML(); } }
    else { stateUML='theory'; theoryTabUML = ROUTE.sub==='build' ? 'practice_build' : 'practice_draw'; renderTheoryUML(); document.getElementById('plabel').textContent=t('sb_dg_practice')+' · '+(ROUTE.sub==='build'?t('sb_build'):t('sb_draw')); }
  }
  renderSidebar();
}
function theoryNextCta(which){
  var cont = which==='ba'
    ? ('<button class="btn btn-p" onclick="go(\'ba-practice/quiz\')">'+t('cta_quiz_ba')+'</button>')
    : ('<button class="btn btn-p" onclick="go(\'dg-practice/quiz\')">'+t('cta_quiz_dg')+'</button><button class="btn btn-g" onclick="go(\'dg-practice/build\')">'+t('sb_build')+'</button><button class="btn btn-g" onclick="go(\'dg-practice/draw\')">'+t('sb_draw')+'</button>');
  return '<div class="next-cta">'+cont+'<span class="hint">'+t('cta_hint')+'</span></div>';
}
// quiz screens: keep the sidebar in sync when the user navigates inside the quiz
window.addEventListener('hashchange', route);
loadProgress();
route();
