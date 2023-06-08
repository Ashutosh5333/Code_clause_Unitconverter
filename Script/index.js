

 function getvalue (){
   let fromvalue = document.getElementById("from-input").value;   
   const frommeter =  Math.round((fromvalue*0.001) *1000) /1000
 
   let fromresult = document.getElementById("kilometer")
   fromresult.innerHTML=""
   fromresult.innerHTML+=frommeter || clear()


 }

   //  ------------------ 

    function getvalue1(){
      let centimeter = document.getElementById("from-inputceneti").value;

      const centimentasn =Math.round((centimeter*0.01) *100) /100
      let fromresultcentimeter = document.getElementById("kilometer-2")
      fromresultcentimeter.innerHTML=""
      fromresultcentimeter.innerHTML+=centimentasn|| clear()
    }
    
    function getvalue2(){
      let frommili = document.getElementById("from-input-mili").value ;

      const frommilimeter =  Math.round((frommili*0.001) *1000) /1000
    
   let fromresultmilians = document.getElementById("kilometer-3")
   fromresultmilians.innerHTML=""
   fromresultmilians.innerHTML+=frommilimeter|| clear()

    }

    
    function getvalue3(){
   
      let fromneter = document.getElementById("from-input-mter").value ;
      const metertomicro =Math.round((fromneter*1000) *100) 
      let fromresultmeter = document.getElementById("kilometer-4")
      fromresultmeter.innerHTML=""
      fromresultmeter.innerHTML+=metertomicro|| clear()

    }






  //  --------------  Converter  version  --------------- //

  function getvaluetemp (){
    let fromlitre = document.getElementById("from-Litre").value; 
    const frommeter =  Math.round((fromlitre *0.264)*100 ) /100 

    let fromresult = document.getElementById("gallons")
    fromresult.innerHTML=""
    fromresult.innerHTML+=frommeter || clear()

  }

   function getvaluetemp1(){
    let fromgallons = document.getElementById("from-gallons").value;
    const centimentasn =Math.round((fromgallons/0.264) *100) /100
    let fromresultcentimeter = document.getElementById("litre")
    fromresultcentimeter.innerHTML=""
    fromresultcentimeter.innerHTML+=centimentasn|| clear()
   }

   
   function getvaluetemp2(){
    let frommili = document.getElementById("from-1Kilos").value ;
    const frommpounds =  Math.round((frommili * 2.204) * 100) / 100;
    let fromresultmilians = document.getElementById("Pounds")
    fromresultmilians.innerHTML=""
    fromresultmilians.innerHTML+=frommpounds|| clear()
   }

   function getvaluetemp3(){
    let frompound = document.getElementById("from-Pounds").value ;
    
    const fromkilo =  Math.round((frompound / 2.204) * 100) / 100;
   
    let fromresultkilos = document.getElementById("kilos")
    fromresultkilos.innerHTML=""
    fromresultkilos.innerHTML+=fromkilo|| clear()
 
   }





