

 function getvalue (){
   let fromvalue = document.getElementById("from-input").value;
   let centimeter = document.getElementById("from-inputceneti").value;
   let frommili = document.getElementById("from-input-mili").value ;
   let fromneter = document.getElementById("from-input-mter").value ;
   

   const frommeter =  Math.round((fromvalue*0.001) *1000) /1000
   const centimentasn =Math.round((centimeter*0.01) *100) /100
   const frommilimeter =  Math.round((frommili*0.001) *1000) /1000
   const metertomicro =Math.round((fromneter*1000) *100) 


   let fromresult = document.getElementById("kilometer")
   fromresult.innerHTML=""
   fromresult.innerHTML+=frommeter

   let fromresultcentimeter = document.getElementById("kilometer-2")
   fromresultcentimeter.innerHTML=""
   fromresultcentimeter.innerHTML+=centimentasn

   
   let fromresultmilians = document.getElementById("kilometer-3")
   fromresultmilians.innerHTML=""
   fromresultmilians.innerHTML+=frommilimeter

   
   let fromresultmeter = document.getElementById("kilometer-4")
   fromresultmeter.innerHTML=""
   fromresultmeter.innerHTML+=metertomicro

   

 }





