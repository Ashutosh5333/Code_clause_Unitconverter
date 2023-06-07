let fromvalue = document.getElementById("from-input").value;

     // -----------


  let frommeter = document.getElementById("from-meter").value
   let fromkilo = document.getElementById("from-kilo").value
   let fromcenti = document.getElementById("from-centi").value
   let frommili = document.getElementById("from-mili").value
   let frommicro = document.getElementById("from-micro").value
   let fromnano = document.getElementById("from-nano").value
   let frommile = document.getElementById("from-mile").value
   let fromyard = document.getElementById("from-yard").value
   let fromfoot = document.getElementById("from-foot").value
   let frominch = document.getElementById("from-inch").value
   let fromlight = document.getElementById("from-light").value

 function getvalue (){
   let fromvalue = document.getElementById("from-input").value;
   console.log(fromvalue)
   const frommeter =  Math.round((fromvalue *0.001) *1000) /1000

   let fromresult = document.getElementById("result")
   fromresult.innerHTML=""
   fromresult.innerHTML+=frommeter

  //  let fromresultkiliinput = document.getElementById("kilometer")
  //  fromresultkiliinput.innerHTML=frommeter


 }





