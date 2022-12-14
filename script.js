function calcular() { 
      let x,y,multiplicar,text; 
      let precio=200; 
    x = document.getElementById("num1").value; 
    y = document.getElementById("opcion").value;
    /* console.log("y")*/
    switch(y) {
      case '1':  
      multiplicar=(precio*x)-(precio*x*(0.80));  
      text= multiplicar; 
      document.getElementById("sumando1").value=text;
        break;
    
      case '2': 
      multiplicar=(precio*x)-(precio*x*(0.50));  
      text= multiplicar; 
      document.getElementById("sumando1").value=text;
      break;
    
      case '3':
        multiplicar=(precio*x)-(precio*x*(0.20));  
        text= multiplicar; 
        document.getElementById("sumando1").value=text;
        break;}  
}
