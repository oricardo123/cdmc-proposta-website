'use strict';
const routes={
 construcao:{name:'Construção chave na mão',title:'Uma construção de raiz.',text:'Comece pela localização e pela fase do projeto. A definição do âmbito depende dos elementos disponíveis.',items:['Localização e características do terreno','Projeto ou desenhos já disponíveis','Utilização e necessidades do espaço']},
 lsf:{name:'Construção em LSF',title:'Avaliar a construção em LSF.',text:'Pode indicar o interesse neste sistema e partilhar o contexto. A adequação à obra precisa de avaliação pela equipa.',items:['Localização e utilização pretendida','Projeto ou estudos já realizados','Questões a esclarecer sobre o sistema construtivo']},
 reabilitacao:{name:'Reabilitação e remodelação',title:'Trabalhar sobre o que já existe.',text:'Ajuda começar por distinguir o espaço atual daquilo que pretende alterar, sem tentar fechar uma solução à distância.',items:['Fotografias e localização do imóvel','Espaços ou zonas que pretende alterar','Plantas, medidas ou levantamentos disponíveis']}
};
let current='construcao';
const stage=document.querySelector('#stage');
function render(){
 const r=routes[current];
 document.querySelector('#route-title').textContent=r.title;
 document.querySelector('#route-description').textContent=r.text;
 document.querySelector('#route-list').replaceChildren(...r.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 document.querySelector('#route-summary').textContent=r.name+' · '+stage.value;
 document.querySelector('#stage-help').textContent=stage.selectedIndex===0?'Pode começar por explicar o que pretende fazer e o que ainda está por definir.':stage.selectedIndex===1?'Indique que elementos já existem e quais continuam em desenvolvimento.':'Num contacto real, a equipa poderá analisar o projeto e esclarecer o âmbito.';
}
document.querySelectorAll('[data-route]').forEach(button=>button.addEventListener('click',()=>{
 current=button.dataset.route;
 document.querySelectorAll('[data-route]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 render();
}));
stage.addEventListener('change',render);render();
