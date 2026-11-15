const $=s=>document.querySelector(s);
const C={Negro:'#1c1c1e',Blanco:'#fafafa',Beige:'#d8c3a5',Gris:'#9a9a9a',Marino:'#1f2a52',Denim:'#5a7bb0',Café:'#6b4426',Rojo:'#c8303c',Rosado:'#f2a6c0',Naranja:'#ef8a3c',Amarillo:'#f2d34c',Verde:'#4f8f5b',Azul:'#2f6fd6',Morado:'#8a5cc7',Plateado:'#c0c4cc'};
const NEU=['Negro','Blanco','Beige','Gris','Marino','Café','Denim','Plateado'];
const CATS=['Top','Parte inferior','Vestido','Zapatos','Bolso','Abrigo','Accesorio'];
const STY=['Casual','Elegante','Urbano','Romántico','Minimalista','Deportivo'];
const OC={'Universidad':1,'Trabajo':2,'Cita':2,'Fiesta':2,'Casual diario':1,'Playa o calor':1,'Evento formal':3};
const FN={1:'Casual',2:'Arreglado',3:'Formal'};
const IDEAS={
'Universidad':['Campus cómodo|Casual|Denim,Blanco,Beige|Camiseta blanca básica|Jean recto azul|Tenis blancos|Mochila beige y reloj sencillo','Urbano de clase|Urbano|Negro,Gris,Blanco|Buzo gris oversize|Pantalón cargo negro|Tenis chunky|Gorra negra y morral'],
'Trabajo':['Oficina suave|Elegante|Beige,Blanco,Marino|Blusa blanca de seda|Pantalón sastre beige|Mocasines marinos|Bolso estructurado y aretes dorados','Minimal ejecutiva|Minimalista|Negro,Gris,Blanco|Camisa gris perla|Falda midi negra|Flats negros|Cinturón fino y collar delgado'],
'Cita':['Romántica dulce|Romántico|Rosado,Blanco,Beige|Blusa rosada con volantes|Falda blanca plisada|Sandalias beige|Bolsito pequeño y pulsera fina','Noche chic|Elegante|Negro,Rojo|Top negro de tiras|Pantalón negro recto|Tacones rojos|Clutch negra y aretes llamativos'],
'Fiesta':['Brillo divertido|Urbano|Negro,Morado,Plateado|Top morado de lentejuelas|Jean negro|Botines negros|Aretes grandes plateados','Vestido de noche|Romántico|Rosado,Marino,Plateado|Vestido corto rosado|Vestido de una pieza|Tacones plateados|Clutch marino'],
'Casual diario':['Fresca y práctica|Casual|Blanco,Denim,Verde|Camiseta verde salvia|Jean claro|Sandalias planas|Gafas y tote bag','Minimal relajada|Minimalista|Beige,Blanco,Café|Camiseta beige|Pantalón de lino blanco|Tenis neutros|Bolso café y cadena fina'],
'Playa o calor':['Verano ligero|Casual|Amarillo,Blanco,Beige|Top amarillo suave|Falda blanca ligera|Sandalias de cuero|Sombrero de paja','Playero chic|Romántico|Azul,Blanco,Beige|Camisa azul abierta|Short blanco|Chanclas beige|Gafas y bolso de paja'],
'Evento formal':['Gala clásica|Elegante|Negro,Plateado|Vestido largo negro|Vestido de una pieza|Tacones negros|Joyería plateada y clutch','Sastre poderoso|Elegante|Marino,Blanco,Beige|Blazer marino|Pantalón blanco de pierna ancha|Tacones nude|Bolso de mano y aretes de perla']
};
const MORE={
'Universidad':['Sporty fresca|Deportivo|Verde,Blanco,Gris|Top deportivo verde|Leggings grises|Tenis blancos|Mochila gris y gorra','Naranja alegre|Casual|Naranja,Denim,Blanco|Camiseta naranja|Jean azul|Tenis blancos|Tote bag y gafas','Mini romántica|Romántico|Rosado,Denim,Beige|Cardigan rosado|Falda denim|Botines beige|Bolso beige y moños'],
'Trabajo':['Azul seguro|Elegante|Azul,Blanco,Gris|Blusa azul|Pantalón gris sastre|Flats grises|Bolso gris y reloj','Verde sofisticada|Minimalista|Verde,Beige,Negro|Camisa verde oliva|Pantalón negro recto|Mocasines negros|Bolso negro y aretes pequeños','Casual de oficina|Casual|Blanco,Denim,Café|Camisa blanca|Jean oscuro|Mocasines café|Cinturón café y reloj'],
'Cita':['Morado misterioso|Romántico|Morado,Negro,Plateado|Blusa morada satinada|Falda negra|Botines negros|Aretes plateados y bolsito negro','Café con estilo|Casual|Blanco,Denim,Café|Top blanco|Jean claro|Botas café|Bolso café y gafas','Azul de cita|Elegante|Azul,Blanco,Beige|Vestido azul midi|Vestido de una pieza|Sandalias beige|Clutch beige y aretes dorados'],
'Fiesta':['Naranja atrevida|Urbano|Naranja,Negro,Plateado|Top naranja|Falda negra corta|Botas negras|Aretes plateados y bolso pequeño','Azul eléctrico|Elegante|Azul,Negro,Plateado|Top azul brillante|Pantalón negro|Tacones plateados|Clutch negra','Fiesta relajada|Deportivo|Blanco,Negro,Gris|Crop top blanco|Jogger gris|Tenis negros|Riñonera negra'],
'Casual diario':['Deportiva suave|Deportivo|Rosado,Gris,Blanco|Buzo rosado|Leggings grises|Tenis blancos|Gorra gris','Azul relajada|Casual|Azul,Blanco,Denim|Camiseta azul|Jean blanco|Tenis blancos|Gafas','Verde natural|Minimalista|Verde,Beige,Blanco|Camiseta verde|Pantalón beige|Sandalias de cuero|Tote bag beige'],
'Playa o calor':['Naranja tropical|Casual|Naranja,Blanco,Beige|Top naranja|Short blanco|Sandalias beige|Sombrero y gafas','Verde playa|Romántico|Verde,Blanco,Beige|Vestido verde ligero|Vestido de una pieza|Sandalias planas|Bolso de paja y gafas','Aire libre|Deportivo|Azul,Blanco,Gris|Top deportivo azul|Short gris|Tenis blancos|Gorra y botella'],
'Evento formal':['Morado de gala|Elegante|Morado,Negro,Plateado|Vestido morado largo|Vestido de una pieza|Tacones negros|Clutch plateada','Azul noche|Elegante|Marino,Plateado,Negro|Vestido azul marino|Vestido de una pieza|Tacones plateados|Joyas plateadas','Verde esmeralda|Elegante|Verde,Negro,Plateado|Vestido verde esmeralda|Vestido de una pieza|Tacones negros|Clutch negra y aretes']
};
for(const k in MORE)IDEAS[k].push(...MORE[k]);
const DEF=()=>({p:{name:'',colors:[],avoid:[],styles:[]},items:[],favs:[],hist:[]});
let S;try{S=Object.assign(DEF(),JSON.parse(localStorage.getItem('ouwu')||'{}'))}catch(e){S=DEF()}
const save=()=>{try{localStorage.setItem('ouwu',JSON.stringify(S))}catch(e){toast('Se llenó el almacenamiento: elimina algunas prendas')}};
let T='inspo',F={occ:'Casual diario',sty:'',col:''},R=null;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tg=(a,v)=>{const i=a.indexOf(v);i<0?a.push(v):a.splice(i,1)};
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)}
const ch=(arr,sel,a,dot)=>`<div class="chips">${arr.map(v=>`<button class="chip ${sel.includes(v)?'on':''}" data-a="${a}" data-v="${v}">${dot?`<span class="dot" style="background:${C[v]}"></span>`:''}${v}</button>`).join('')}</div>`;
const opts=(arr,v)=>arr.map(x=>`<option ${x==v?'selected':''}>${x}</option>`).join('');

/* ---------- Motor de color y puntuación ---------- */
function hue(h){const r=parseInt(h.substr(1,2),16)/255,g=parseInt(h.substr(3,2),16)/255,b=parseInt(h.substr(5,2),16)/255,M=Math.max(r,g,b),m=Math.min(r,g,b),d=M-m;if(!d)return 0;let H=M==r?((g-b)/d)%6:M==g?(b-r)/d+2:(r-g)/d+4;return(H*60+360)%360}
const hd=(a,b)=>{const d=Math.abs(hue(C[a])-hue(C[b]));return Math.min(d,360-d)};
function near(r,g,b){let best='Negro',bd=1e9;for(const k in C){const h=C[k],d=(r-parseInt(h.substr(1,2),16))**2+(g-parseInt(h.substr(3,2),16))**2+(b-parseInt(h.substr(5,2),16))**2;if(d<bd){bd=d;best=k}}return best}

function score(ps,occ,f){
  let sc=50;const why=[],core=ps.filter(x=>!['Bolso','Accesorio','Abrigo'].includes(x.cat));
  const cols=ps.map(x=>x.color),nn=[...new Set(cols.filter(c=>!NEU.includes(c)))];
  if(!nn.length){sc+=25;why.push('usa una paleta neutra, elegante y fácil de llevar')}
  else if(nn.length==1){sc+=22;why.push(`${nn[0].toLowerCase()} es el único color protagonista y los neutros lo equilibran`)}
  else if(nn.length==2){const d=hd(nn[0],nn[1]);if(d<45){sc+=14;why.push('los colores son análogos y se ven armoniosos')}else if(d>150){sc+=14;why.push('los colores son complementarios y crean un contraste vistoso')}else{sc-=12;why.push('los dos colores fuertes compiten entre sí')}}
  else{sc-=25;why.push('lleva demasiados colores a la vez')}
  const a=core.reduce((s,x)=>s+x.form,0)/core.length,df=Math.abs(a-f);
  if(df<=.35){sc+=20;why.push(`el nivel de formalidad es el ideal para ${occ.toLowerCase()}`)}else if(df<=.8){sc+=8;why.push('la formalidad se acerca bastante a lo que pide la ocasión')}else{sc-=15;why.push(`resulta demasiado ${a>f?'formal':'casual'} para la ocasión`)}
  const st=[...new Set(ps.map(x=>x.style))];
  if(st.length==1){sc+=10;why.push(`todas las prendas comparten un estilo ${st[0].toLowerCase()}`)}else if(st.length>2){sc-=8}
  if(F.sty&&st.includes(F.sty)){sc+=8;why.push(`respeta el estilo ${F.sty.toLowerCase()} que pediste`)}
  else if(S.p.styles.some(s=>st.includes(s)))sc+=4;
  if(ps.filter(x=>x.pat=='Estampado').length>=2){sc-=15;why.push('mezcla dos estampados, que puede cargar el look')}
  const fav=cols.filter(c=>S.p.colors.includes(c)).length;if(fav){sc+=Math.min(8,fav*4);why.push('incluye colores de tu paleta favorita')}
  if(cols.some(c=>S.p.avoid.includes(c)))sc-=20;
  if(F.col&&cols.includes(F.col)){sc+=10;why.push(`incluye ${F.col.toLowerCase()}, el color que buscabas`)}
  if(W&&W.max!=null){const wm=x=>x.warm||2,cp=core.filter(x=>x.cat!='Zapatos');
    if(W.max>26){const h=ps.filter(x=>wm(x)==3).length;if(h){sc-=12*h;why.push('lleva prendas muy abrigadas para el calor de hoy')}else if(cp.every(x=>wm(x)==1)){sc+=4;why.push('es ligero y adecuado para el calor de hoy')}}
    if(W.min<16){const l=cp.filter(x=>wm(x)==1).length;if(l){sc-=12*l;why.push('es muy ligero para el frío de hoy')}}
    if(W.rain>50&&ps.some(x=>x.cat=='Abrigo')){sc+=6;why.push('el abrigo ayuda con la lluvia de hoy')}}
  const worn=new Set(S.hist.slice(0,3).flatMap(h=>h.ids));if(ps.some(x=>worn.has(x.id))){sc-=6}
  return{sc:Math.max(30,Math.min(98,Math.round(sc))),why}
}
function gen(occ){
  const f=OC[occ],g=c=>S.items.filter(x=>x.cat==c),sh=g('Zapatos'),bases=[];
  g('Top').forEach(t=>g('Parte inferior').forEach(b=>bases.push([t,b])));g('Vestido').forEach(d=>bases.push([d]));
  const out=[];
  bases.forEach(b=>(sh.length?sh:[null]).forEach(s=>{
    let ps=[...b,s].filter(Boolean),best=score(ps,occ,f);
    [g('Bolso'),g('Abrigo'),g('Accesorio')].forEach(L=>{let pick=null;L.forEach(x=>{const r=score([...ps,x],occ,f);if(r.sc>best.sc){best=r;pick=x}});if(pick)ps=[...ps,pick]});
    out.push({ids:ps.map(x=>x.id),sc:best.sc,why:best.why,occ});
  }));
  const seen=new Set();
  return out.sort((a,b)=>b.sc-a.sc).filter(o=>{const k=o.ids.join();if(seen.has(k))return false;seen.add(k);return true}).slice(0,5);
}
function ideas(occ){
  return IDEAS[occ].map(s=>{const p=s.split('|');return{n:p[0],st:p[1],cols:p[2].split(','),top:p[3],bot:p[4],sh:p[5],ac:p[6]}})
   .map(i=>({...i,r:(F.sty==i.st?3:0)+(S.p.styles.includes(i.st)?2:0)+i.cols.filter(c=>c==F.col).length*3+i.cols.filter(c=>S.p.colors.includes(c)).length}))
   .sort((a,b)=>b.r-a.r);
}

/* ---------- Vistas ---------- */
function ocard(o,i,m){
  const its=o.ids.map(id=>S.items.find(x=>x.id==id)).filter(Boolean);
  if(!its.length)return'';
  const isFav=S.favs.some(f=>f.ids.join()==o.ids.join());
  const cell=x=>`<figure class="pc ${x.cat=='Vestido'?'tall':''}"><img src="${x.img}" alt=""><figcaption>${x.cat} · ${x.color}</figcaption></figure>`;
  const ord=(a,b)=>CATS.indexOf(a.cat)-CATS.indexOf(b.cat);
  const L=its.filter(x=>['Top','Parte inferior','Vestido','Abrigo'].includes(x.cat)).sort(ord),Rt=its.filter(x=>['Zapatos','Bolso','Accesorio'].includes(x.cat)).sort(ord);
  return`<div class="card anim" style="--d:${i*90}ms"><div class="row" style="justify-content:space-between"><b>${m=='r'?(o.top?'✨ Elección de la IA':`Opción ${i+1}`):esc(o.occ)}</b><span class="score">${o.sc}% compatible</span></div>
  <div class="flat">${L.length?`<div class="col">${L.map(cell).join('')}</div>`:''}${Rt.length?`<div class="col">${Rt.map(cell).join('')}</div>`:''}</div>
  <div class="tag">${esc(o.occ)}${o.date?' · '+o.date:''}</div>
  <p style="margin:6px 0 12px;font-size:14px"><b>Por qué funciona:</b> ${o.ai?esc(o.ai):esc(o.why.join('; '))+'.'}</p>
  <div class="row">${m=='r'?`<button class="btn s" data-a="fav" data-v="${i}">${isFav?'💗 Guardado':'🤍 Favorito'}</button><button class="btn s" data-a="use" data-v="${i}">✅ Me lo pongo</button>`:m=='f'?`<button class="btn s" data-a="unfav" data-v="${i}">Quitar</button>`:''}</div></div>`;
}
const V={
inspo(){
  let h=`<h1>Outfit <span>uwu</span></h1><p class="sub">${S.p.name?`Hola, ${esc(S.p.name)} ✨ `:''}Cuéntame qué necesitas y armo tus outfits.</p>
  ${wcard()}<div class="card"><label class="l">¿Para qué ocasión?</label>${ch(Object.keys(OC),[F.occ],'occ')}
  <label class="l">Estilo (opcional)</label>${ch(STY,[F.sty],'sty')}
  <label class="l">Color que quieres usar (opcional)</label>${ch(Object.keys(C),[F.col],'col',1)}
  <button class="btn w" data-a="go">Crear outfits ✨</button></div>`;
  if(R){
    h+=`<h2>💡 Inspiración para ${esc(R.occ.toLowerCase())}</h2>`+R.ideas.slice(0,3).map(i=>`<div class="card"><div class="row" style="justify-content:space-between"><b>${i.n}</b><span class="tag">${i.st}</span></div>
    <div class="sw">${i.cols.map(c=>`<i style="background:${C[c]}"></i>`).join('')}</div>
    <ul class="p"><li><b>Arriba:</b> ${i.top}</li>${i.bot=='Vestido de una pieza'?'':`<li><b>Abajo:</b> ${i.bot}</li>`}<li><b>Zapatos:</b> ${i.sh}</li><li><b>Accesorios:</b> ${i.ac}</li></ul>
    <p class="tag" style="margin:0">Funciona porque la paleta (${i.cols.join(', ').toLowerCase()}) es coherente y su formalidad encaja con ${R.occ.toLowerCase()}.</p></div>`).join('');
    h+=`<h2>👗 Con tu armario</h2>`;
    if(R.outs.length>1)h+='<button class="btn w" data-a="ai">✨ Elegir con IA</button>';
    if(R.need)h+=`<div class="card empty">${R.need}</div>`;
    else h+=R.outs.map((o,i)=>ocard(o,i,'r')).join('');
  }
  return h;
},
closet(){
  return`<h1>Mi <span>armario</span></h1><p class="sub">Sube fotos de tus prendas: una sola prenda por foto, sobre fondo liso y con buena luz. Detecto el color y tú confirmas.</p>
  <label class="up">📷 Agregar prendas<input type="file" id="file" accept="image/*" multiple hidden></label>
  <p class="sub" style="margin-top:10px">${S.items.length} prendas guardadas</p>
  <div class="grid">${S.items.map(x=>`<div class="card it" style="margin:0"><img src="${x.img}" alt="">
  <select data-id="${x.id}" data-f="cat">${opts(CATS,x.cat)}</select>
  <select data-id="${x.id}" data-f="color">${opts(Object.keys(C),x.color)}</select>
  <select data-id="${x.id}" data-f="form">${[1,2,3].map(n=>`<option value="${n}" ${x.form==n?'selected':''}>${FN[n]}</option>`).join('')}</select>
  <select data-id="${x.id}" data-f="style">${opts(STY,x.style)}</select>
  <select data-id="${x.id}" data-f="pat">${opts(['Liso','Estampado'],x.pat)}</select>
  <select data-id="${x.id}" data-f="warm">${[1,2,3].map(n=>`<option value="${n}" ${(x.warm||2)==n?'selected':''}>${['','Ligero','Medio','Abrigado'][n]}</option>`).join('')}</select>
  <button class="btn s w" style="margin-top:6px" data-a="nobg" data-v="${x.id}">Quitar fondo</button>
  <button class="btn s w" style="margin-top:6px" data-a="del" data-v="${x.id}">Eliminar</button></div>`).join('')}</div>`;
},
favs(){return`<h1><span>Favoritos</span> 💗</h1><p class="sub">Tus combinaciones guardadas.</p>`+(S.favs.length?S.favs.map((o,i)=>ocard(o,i,'f')).join(''):'<div class="card empty">Aún no tienes favoritos. Toca 🤍 en un outfit.</div>')},
hist(){return`<h1><span>Historial</span></h1><p class="sub">Outfits que elegiste ponerte.</p>`+(S.hist.length?S.hist.map(o=>ocard(o,0,'h')).join(''):'<div class="card empty">Cuando toques “Me lo pongo” aparecerá aquí.</div>')},
perfil(){return`<h1>Mi <span>perfil</span></h1><p class="sub">Mientras más me cuentes, mejores serán las recomendaciones.</p>
  <div class="card"><label class="l">Tu nombre</label><input type="text" id="pname" value="${esc(S.p.name)}" placeholder="¿Cómo te llamo?">
  <label class="l">Estilos que te gustan</label>${ch(STY,S.p.styles,'ps')}
  <label class="l">Colores favoritos</label>${ch(Object.keys(C),S.p.colors,'pc',1)}
  <label class="l">Colores que prefieres evitar</label>${ch(Object.keys(C),S.p.avoid,'pa',1)}</div>
  <div class="card"><label class="l">Respaldo y sesión</label><div class="row"><button class="btn s" data-a="exp">Exportar respaldo</button><label class="btn s" style="cursor:pointer">Importar respaldo<input type="file" id="imp" accept=".json,application/json" hidden></label><button class="btn s" data-a="out">Cerrar sesión</button></div></div>
  <p class="tag">Tus datos y fotos se guardan solo en este navegador de este dispositivo.</p>`}
};
const IC={inspo:'<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',closet:'<path d="M12 7a2.2 2.2 0 1 1 2.2 2.2c-1.2.3-2.2 1.2-2.2 2.5V13M12 13 3 19.5c-.8.6-.4 1.5.6 1.5h16.8c1 0 1.4-.9.6-1.5z"/>',favs:'<path d="M12 20.5S4 15.5 4 9.8A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 8 1.8c0 5.700-8 10.700-8 10.700z"/>',hist:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',perfil:'<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.8-3.600 3.700-5.500 7-5.500s6.200 1.900 7 5.500"/>'};
function render(){if(localStorage.getItem('ouwu_ok')!=ACCESS_HASH)return gate();
  $('#app').innerHTML=V[T]();
  $('#nav').innerHTML=[['inspo','✨','Inspiración'],['closet','👗','Armario'],['favs','💗','Favoritos'],['hist','🕐','Historial'],['perfil','🌸','Perfil']].map(t=>`<button class="${T==t[0]?'on':''}" data-a="tab" data-v="${t[0]}"><svg viewBox="0 0 24 24">${IC[t[0]]}</svg>${t[2]}</button>`).join('');
}

/* ---------- Clima ---------- */
let W=null;
async function wx(lat,lon,city){try{const d=(await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=1`)).json()).daily;W={max:Math.round(d.temperature_2m_max[0]),min:Math.round(d.temperature_2m_min[0]),rain:d.precipitation_probability_max[0],city};localStorage.setItem('ouwu_loc',JSON.stringify({lat,lon,city}))}catch(e){toast('No pude cargar el clima')}render()}
function loadWeather(){navigator.geolocation?navigator.geolocation.getCurrentPosition(p=>wx(p.coords.latitude,p.coords.longitude,'Tu ubicación'),()=>{W={ask:1};render()}):(W={ask:1},render())}
async function cityWx(n){try{const r=(await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=1&language=es`)).json()).results[0];wx(r.latitude,r.longitude,r.name)}catch(e){toast('No encontré esa ciudad')}}
const wcard=()=>!W?`<div class="card row" style="justify-content:space-between"><span>☀️ ¿Qué clima hace hoy?</span><button class="btn s" data-a="wx">Ver clima</button></div>`:W.ask?`<div class="card"><label class="l">Escribe tu ciudad</label><div class="row"><input type="text" id="city" placeholder="Ciudad"><button class="btn s" data-a="city">Buscar</button></div></div>`:`<div class="card row" style="justify-content:space-between"><span>☀️ ${esc(W.city)}: <b>${W.min}°–${W.max}°</b> · lluvia ${W.rain}%</span><button class="btn s" data-a="today">Outfit de hoy</button></div>`;
try{const l=JSON.parse(localStorage.getItem('ouwu_loc'));if(l)wx(l.lat,l.lon,l.city)}catch(e){}

/* ---------- Quitar fondo (PNG ocupa más espacio que JPEG en localStorage) ---------- */
async function nobg(id,btn){const it=S.items.find(x=>x.id==id);if(!it)return;btn.disabled=true;btn.textContent='Procesando...';toast('Cargando modelo: la primera vez descarga varios MB');
  try{const{removeBackground}=await import('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.5.5/+esm');
  const out=await removeBackground(await(await fetch(it.img)).blob());
  const im=new Image();im.src=URL.createObjectURL(out);await im.decode();
  const k=Math.min(1,320/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k|0;c.height=im.height*k|0;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
  it.img=c.toDataURL('image/png');save();toast('Fondo quitado ✨')}catch(e){toast('No se pudo quitar el fondo')}render()}

/* ---------- Código de acceso: barrera ligera, NO seguridad real (el hash es visible en el sitio) ----------
   Código por defecto: outfituwu. Para cambiarlo, en la consola del navegador ejecuta:
   crypto.subtle.digest('SHA-256',new TextEncoder().encode('TU_CODIGO')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
   y pega el resultado en ACCESS_HASH. */
const ACCESS_HASH='5129ee5032f29883863a83e5e328e6181ea2342b95ad299bb87859668637f3c9';
async function sha(t){return[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)))].map(b=>b.toString(16).padStart(2,'0')).join('')}
function gate(){$('#nav').innerHTML='';$('#app').innerHTML=`<div class="card" style="margin-top:18vh;text-align:center"><h1>Outfit <span>uwu</span></h1><p class="sub">Escribe tu código</p><input type="password" id="code" placeholder="Código"><button class="btn w" style="margin-top:10px" data-a="enter">Entrar</button></div>`}

/* ---------- IA (Gemini, plan gratuito) ----------
   Pega tu clave en GEMINI_KEY. Restríngela a tu dominio en Google Cloud (HTTP referrers).
   Si el modelo cambia, revisa el nombre vigente en aistudio.google.com y actualiza AI_MODEL. */
const GEMINI_KEY='',AI_MODEL='gemini-2.5-flash';
async function thumb(u){const im=new Image();im.src=u;await im.decode();const k=Math.min(1,200/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k|0;c.height=im.height*k|0;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.7).split(',')[1]}
async function aiPick(btn){
  const key=GEMINI_KEY||localStorage.getItem('ouwu_key');if(!key){toast('Falta la clave de Gemini en app.js');return}
  btn.disabled=true;btn.textContent='Pensando...';
  try{
    const parts=[{text:`Ocasión: ${R.occ}. Estilo pedido: ${F.sty||'ninguno'}. Clima: ${W&&W.max!=null?`${W.min}-${W.max}°C, lluvia ${W.rain}%`:'desconocido'}. Perfil: estilos ${S.p.styles.join(', ')||'-'}; colores favoritos ${S.p.colors.join(', ')||'-'}; evita ${S.p.avoid.join(', ')||'-'}.`}];
    for(const [i,o] of R.outs.entries()){parts.push({text:`Outfit ${i}:`});for(const id of o.ids){const x=S.items.find(y=>y.id==id);if(x)parts.push({text:`${x.cat} ${x.color}, ${FN[x.form]}`},{inline_data:{mime_type:'image/jpeg',data:await thumb(x.img)}})}}
    const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({systemInstruction:{parts:[{text:'Eres una estilista de moda amable. Elige el mejor outfit según armonía de color, estilo, ocasión, clima y gustos del perfil. Responde SOLO JSON: {"ranking":[índices de los outfits de mejor a peor],"explicaciones":[una frase en español por cada outfit, en el orden del ranking, tono cálido, máximo 40 palabras]}'}]},contents:[{role:'user',parts}],generationConfig:{responseMimeType:'application/json'}})});
    if(!r.ok)throw 0;
    const j=JSON.parse((await r.json()).candidates[0].content.parts[0].text),n=R.outs.length,seen=new Set(),rk=j.ranking.filter(i=>Number.isInteger(i)&&i>=0&&i<n&&!seen.has(i)&&seen.add(i));
    if(!rk.length)throw 0;
    const old=R.outs;R.outs=rk.map((i,p)=>({...old[i],ai:j.explicaciones[p],top:p==0}));
    old.forEach((o,i)=>{if(!seen.has(i))R.outs.push(o)});
  }catch(e){toast('Usé el ranking básico')}
  render()}

/* ---------- Eventos ---------- */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-a]');if(!el)return;const a=el.dataset.a,v=el.dataset.v;
  if(a=='tab'){T=v;window.scrollTo(0,0)}
  else if(a=='occ')F.occ=v;
  else if(a=='sty')F.sty=F.sty==v?'':v;
  else if(a=='col')F.col=F.col==v?'':v;
  else if(a=='wx')loadWeather();
  else if(a=='city'){const n=$('#city').value.trim();if(n)cityWx(n);return}
  else if(a=='today'||a=='go'){if(a=='today'){F.occ='Casual diario';F.sty='';F.col=''}
    const outs=gen(F.occ);
    R={occ:F.occ,ideas:ideas(F.occ),outs,need:outs.length?'':(S.items.length?'Para armar outfits necesito al menos una parte de arriba y una de abajo (o un vestido).':'Aún no tienes prendas. Sube algunas en la pestaña Armario y armaré combinaciones reales.')};
  }
  else if(a=='pc'){tg(S.p.colors,v);S.p.avoid=S.p.avoid.filter(x=>x!=v);save()}
  else if(a=='pa'){tg(S.p.avoid,v);S.p.colors=S.p.colors.filter(x=>x!=v);save()}
  else if(a=='ps'){tg(S.p.styles,v);save()}
  else if(a=='fav'){const o=R.outs[v],k=o.ids.join(),i=S.favs.findIndex(f=>f.ids.join()==k);if(i<0){S.favs.unshift({...o});toast('Guardado en favoritos 💗')}else S.favs.splice(i,1);save()}
  else if(a=='unfav'){S.favs.splice(v,1);save()}
  else if(a=='use'){S.hist.unshift({...R.outs[v],date:new Date().toLocaleDateString('es')});S.hist=S.hist.slice(0,40);save();toast('Agregado al historial ✅')}
  else if(a=='ai'){aiPick(el);return}
  else if(a=='exp'){const u=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})),l=document.createElement('a');l.href=u;l.download='outfit-uwu-respaldo.json';l.click();URL.revokeObjectURL(u);toast('Respaldo descargado');return}
  else if(a=='nobg'){nobg(v,el);return}
  else if(a=='enter'){sha($('#code').value).then(h=>{if(h==ACCESS_HASH){localStorage.setItem('ouwu_ok',h);render()}else toast('Código incorrecto')});return}
  else if(a=='out'){localStorage.removeItem('ouwu_ok');location.reload();return}
  else if(a=='del'){S.items=S.items.filter(x=>x.id!=v);save()}
  render();
});
document.addEventListener('change',async e=>{
  const t=e.target;
  if(t.dataset.f){const it=S.items.find(x=>x.id==t.dataset.id);if(it){it[t.dataset.f]=['form','warm'].includes(t.dataset.f)?+t.value:t.value;save()}}
  else if(t.id=='imp'&&t.files[0]){try{const j=JSON.parse(await t.files[0].text());if(!j.p||!Array.isArray(j.items)||!Array.isArray(j.favs)||!Array.isArray(j.hist))throw 0;if(confirm('¿Reemplazar todo con este respaldo?')){S=Object.assign(DEF(),j);save();toast('Respaldo importado');render()}}catch(e){toast('Archivo no válido')}}
  else if(t.id=='file'){
    for(const f of t.files){const it=await toItem(f);S.items.unshift(it)}
    save();toast('Prendas agregadas: revisa las etiquetas');render();
  }
});
document.addEventListener('input',e=>{if(e.target.id=='pname'){S.p.name=e.target.value;save()}});
function toItem(f){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{
  const k=Math.min(1,320/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,im.width*k|0);c.height=Math.max(1,im.height*k|0);
  const x=c.getContext('2d');x.drawImage(im,0,0,c.width,c.height);
  const w=Math.max(1,c.width*.3|0),h=Math.max(1,c.height*.3|0),d=x.getImageData(c.width*.35|0,c.height*.35|0,w,h).data;let R=0,G=0,B=0;const n=d.length/4;
  for(let i=0;i<d.length;i+=4){R+=d[i];G+=d[i+1];B+=d[i+2]}
  res({id:'i'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),img:c.toDataURL('image/jpeg',.72),cat:'Top',color:near(R/n,G/n,B/n),form:1,style:'Casual',pat:'Liso',warm:2});
};im.src=r.result};r.readAsDataURL(f)})}
render();
