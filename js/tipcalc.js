
const tip_input=document.getElementById('inpperc');
const peop_input=document.getElementById('inppeop');
let percent=tip_input.value;
let people=peop_input.value;
let pric=document.getElementById('price').value;

document.getElementById('addtip').addEventListener('click', function () {
   let add=parseInt(tip_input.value,10);
   if(add<30) 
      add++; 
   else 
      alert('Tip >30%');
   percent=add+'%';
   tip_input.value = percent;
   total();
}, false);

document.getElementById('subtip').addEventListener('click', function () {
   let sub=parseInt(tip_input.value,10);
   if(sub>5)
      sub--; 
   else 
      alert('Tip <5%');
   percent=sub+'%';
   tip_input.value = percent;
   total();
}, false)

tip_input.addEventListener('keyup', function (e) {
   if(e.key==='Enter') {
      let percent_t = tip_input.value;
      let ent=parseInt(percent_t,10);
      if(ent<5) {
         tip_input.value = percent;
         alert('Tip <5%');
      }
      else if(ent>30) {
         tip_input.value = percent;
         alert('Tip >30%');
      }
      else {
         percent = ent+'%';
         tip_input.value = percent;
         tip_input.blur();
         total();
      }
   }
}, false)

/************************************************************************** */
document.querySelector('#addpeop').addEventListener('click', function () {
   let add=Number(peop_input.value);
   if(add<10) 
      add++; 
   else 
      alert('people >10');
   people=add;
   peop_input.value = people;
   total();
 }, false);

document.querySelector('#subpeop').addEventListener('click', function () {
   let sub=Number(peop_input.value);
   if(sub>1)
      sub--; 
   else 
      alert('people <1');
   people=sub;
   peop_input.value = people;
   total();
}, false)

peop_input.addEventListener('keyup', function (e) {
   if(e.key==='Enter') {
      let people_t = peop_input.value;
      let ent=Number(people_t);

      if(ent<1) {
         peop_input.value = people;
         alert('People <1');
      }
      else if(ent>10) {
         peop_input.value = people;
         alert('People >10');
      }
      else {
         people = ent;
         peop_input.value =people;
         peop_input.blur();
         total();
      }
   }
}, false)

/************************************************************************** */

document.getElementById('price').addEventListener('keyup', function (e) {
   if(e.key==='Enter') {
      pric=Number(document.getElementById('price').value);
      document.getElementById('price').blur();
      total();
   }
}, false)

/************************************************************************** */

function total() {
   let total_tip;
   total_tip=parseInt(percent,10);
   total_tip=total_tip*pric;
   total_tip=total_tip/people;
   total_tip=Math.round(total_tip);
   total_tip=total_tip/100;
   let total_total=Math.round((pric*100 + pric*parseInt(percent,10))/people)/100;
   document.getElementById('moneytip').innerHTML='$'+total_tip;
   document.getElementById('moneytotal').innerHTML ='$'+total_total;
}

   /* total_tip = Math.round((pric*parseInt(percent,10))/people)/100;
   let total_total=Math.round(((total_tip*people + pric)/people)*100)/100;*/