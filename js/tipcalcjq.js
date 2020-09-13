$( () => {

   let percent = $('#inpperc').val();
   let pric = $('#price').val();
   let people = $('#inppeop').val();
/********************************************/
   $("#addtip").on( 'click' , () => {
      let add=parseInt(percent,10);

      if(add<30)
         add++; 
      else 
         alert('Tip >30%');

      add += '%';
      $('#inpperc').val(add);
      percent=$('#inpperc').val();
      total();  
   });

   $('#subtip').on('click', () => {
      let sub=parseInt(percent,10);
      if(sub>5)
         sub--; 
      else 
         alert('Tip <5%');
      sub += '%';
      $('#inpperc').val(sub);
      percent=$('#inpperc').val();
      total(); 
   });

   $('#inpperc').on('keyup', e => {
      if(e.key==='Enter') {
         let ent=parseInt($('#inpperc').val(),10);
         if(ent<5) {
            $('#inpperc').val(percent);
            alert('Tip <5%');
         }
         else if(ent>30) {
            $('#inpperc').val(percent);
            alert('Tip >30%');
         }
         else {
            ent += '%';
            $('#inpperc').val(ent);
         }
         $('#inpperc').blur(); 
         percent=$('#inpperc').val(); 
         total(); 
      }      
   });

   $('#inpperc').on('focusout', () => {
      percent=$('#inpperc').val();
      let a=parseInt($('#inpperc').val(),10) + '%';
      $('#inpperc').val(a); 
      total(); 
   });
/********************************************/
   $('#price').on('keyup', e => {
      if(e.key==='Enter') {
         pric=$('#price').val();
         $('#price').blur();
         total(); 
      }   
   });  
 
   $('#price').on('focusout', () => {
      pric=$('#price').val();
      total(); 
   }); 
/********************************************/
   $('#addpeop').on('click', () => {
      let add=Number(people);
      if(add<10) 
         add++; 
      else 
         alert('people >10');
      $('#inppeop').val(add);
      people=$('#inppeop').val();
      total(); 
   });
   
   $('#subpeop').on('click', () => {
      let sub=Number(people);
      if(sub>1)
         sub--; 
      else 
         alert('people <1');
      $('#inppeop').val(sub);
      people=$('#inppeop').val();
      total(); 
   });
   
   $('#inppeop').on('keyup', e => {
      if(e.key==='Enter') {
         const ent=Number($('#inppeop').val());
   
         if(ent<1) {
            $('#inppeop').val(people);
            alert('People <1');
         }
         else if(ent>10) {
            $('#inppeop').val(people);
            alert('People >10');
         }
         else {
            $('#inppeop').val(ent);
         }
         $('#inppeop').blur();
         people = $('#inppeop').val(); 
         total(); 
      }
   });

   $('#inppeop').on('focusout', () => {
      people = $('#inppeop').val(); 
      total(); 
    });
/********************************************/
   function total() { 

      let total_tip;

      total_tip=parseInt(percent,10);
      total_tip=total_tip*pric;
      total_tip=total_tip/people;
      total_tip=Math.round(total_tip);
      total_tip=total_tip/100;

      let total_total=Math.round((pric*100 + pric*parseInt(percent,10))/people)/100;
   
      $('#moneytip').text('$'+total_tip);
      $('#moneytotal').text('$'+total_total);
   }
});