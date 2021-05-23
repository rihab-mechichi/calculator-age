 var objetMois = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  var calculatrice = document.getElementById('calculatrice');
  var parag = document.createElement('p')
  parag.innerHTML = "Date of birth" ;//paragraphe
  calculatrice.appendChild(parag);
  var select = document.createElement('select');//select
  select.setAttribute('id', 'mois');
  calculatrice.appendChild(select);
  for(i=0;i<objetMois.length;i++){
   var unMois = document.createElement('option');//les option
   unMois.setAttribute('class','mm');
   select.appendChild(unMois);
   unMois.innerHTML = objetMois[i];
   //console.log(objetMois[i]);
   //console.log(unMois.innerHTML[0]);
   };
   

//les jours

  var objetJour = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
                   25,26,27,28,29,30,31];

var calculatrice = document.getElementById('calculatrice');
var select = document.createElement('select');//select
select.setAttribute('id', 'jour');
calculatrice.appendChild(select);
   for(i=0;i<objetJour.length;i++){
      var unJour = document.createElement('option');//les option
      unJour.setAttribute('class','jj');
      select.appendChild(unJour);
      unJour.innerHTML = objetJour[i];
     // console.log(objetJour[i]);
      };
    

  //le champ annee

  var annee = document.createElement('input');
  annee.setAttribute('id','annee');
  annee.setAttribute('type','number');
  calculatrice.appendChild(annee);




  //2eme champ : mois/j/ann


  var objetMois2 = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  var calculatrice = document.getElementById('calculatrice');
  var parag2 = document.createElement('p')
  parag2.innerHTML = "Age at the date of" ;//paragraphe
  calculatrice.appendChild(parag2);
  var select = document.createElement('select');//select
  select.setAttribute('id', 'mois2');
  calculatrice.appendChild(select);
   for(i=0;i<objetMois2.length;i++){
      var unMois2 = document.createElement('option');//les option
      unMois2.setAttribute('class','mm2');
      select.appendChild(unMois2);
      unMois2.innerHTML = objetMois2[i];
      };



  var objetJour2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
                   25,26,27,28,29,30,31];

var calculatrice = document.getElementById('calculatrice');
var select = document.createElement('select');//select
select.setAttribute('id', 'jour2');
calculatrice.appendChild(select);
var jour2 = document.createElement('optgroup');//optgrp
for(i=0;i<objetJour2.length;i++){
  var unJour2 = document.createElement('option');//les option
  unJour2.setAttribute('class','jj2');
  select.appendChild(unJour2);
  unJour2.innerHTML = objetJour2[i];
  };


  var annee2 = document.createElement('input');
  annee2.setAttribute('id','annee2');
  annee2.setAttribute('type','number');
  calculatrice.appendChild(annee2);



  //les bouttons 

  var btn1 = document.createElement('button');
  btn1.setAttribute('id','btn1');
  btn1.setAttribute('type','button');
  calculatrice.appendChild(btn1);
  btn1.textContent = "Calculate";
  var btn2 = document.createElement('button');
  btn2.setAttribute('id','btn2');
  btn2.setAttribute('type','button');
  calculatrice.appendChild(btn2);
  btn2.textContent = "Reset";
  
  //paragraphe

  var parag = document.createElement('p');
  calculatrice.appendChild(parag);
  parag.innerHTML = 'Age result';

  //champ result
  var result = document.createElement('div');
  result.setAttribute('id','result');
  calculatrice.appendChild(result);


//click btn2
btn2.addEventListener('click',function(){
   result.textContent = "";
   });



//click btn1
btn1.addEventListener('click',function(){      
   result.textContent = calculA(annee.value,annee2.value) + " année , " 
   + calculM(unMois.value,unMois2.value) + " mois , " 
   + calculJ(unJour.value,unJour2.value) + ' jour '  + " " + " ............... "
   + ' = ' +   " " + calculA(annee.value,annee2.value) + " année " + " "  + " " + " ..... , "
   + ' = ' + " " + calculM(unMois.value,unMois2.value) * 12+ "mois" + " " + " " + " .......... , " + " "
    + ' = '  + " " + calculJ(unJour.value,unJour2.value) * 365  + "jour" ;
});

function calculA(x,y){
   return y - x ;
};

function calculM(a,b){
   return b - a ;
};

function calculJ(e,f){
   return f - e ;
};