/*var string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"*/

function botonCifrar(){
  let textoCifrar = document.getElementById("cifrar").value.toUpperCase();
  /*textoCifrar.toUpperCase();*/
  console.log("textoCifrar", textoCifrar)
  /**/
  let offset = parseInt(document.getElementById("numero1").value);
  /*parseInt es para pasar a un numero entero, offset simpre se rescatan de un input y el input retorna un  (string son palabras) y los string no se pueden sumar solo se concatenan (ABC) y nosotros necesitamos agrarle una formula matematica y es por eso que utilisamos parseInt*/ 
  let textoFormulario="";
  /*se declara vacia porque luego la damos el valor  */
  for(let i = 0; i <textoCifrar.length; i++) {
      /*for es un vucle, for recorre algo, en este caso recorre una letra (letra por letra) se compone de tre elemntos en sus paretecis (i es referencia al indice pero puede ser cualquier cosa; despues sigue la parte para darle el "hasta donde llega" (i<texto.length); i++ es decirle que va ir de uno en uno)
      length da la logitud de la palabra 
      1.- donde empieza (suma los espavios)
      2.- hasta donde termina o hasta donde tiene que correr
      3.- (i++) dice que avance*/ 
     let textoEnAscii = textoCifrar.charCodeAt(i);
   /*const recorrido = (textoEnAscii - 65 + offset) %26 + 65;*/
     /* debemos hablarle al pc en numeros, es por eso que se ocupa la formula ascii, y para llamar a ascii se debe realizar con charCodeAt*/ 
     if(textoEnAscii >= 65 & textoEnAscii <=90){
        let letrasAnumero = (textoEnAscii - 65 + offset) %26 + 65;
        textoFormulario += String.fromCharCode(letrasAnumero);
     }
     
     else if(textoEnAscii === 32){
     textoFormulario += String.fromCharCode(32)
     }
     /* += es concatenar y es unir*/ 
    /*let sinAscii = String.fromCharCode(textoFormulario);*/
     /*(let no es para cambiar algo pero const es para cambiar algo)*/
  
  /*condicionales*/ 
  }
  /*return*/
  document.getElementById("descifrar").innerHTML= textoFormulario;
  }
  
  function botonDescifrar(){
  let textoDescifrar = document.getElementById("descifrar").value;
  let offset = parseInt(document.getElementById("numero1").value);
  let textoFormulario="";
  for(let i = 0; i <textoDescifrar.length; i++){
  let textoEnAscii = textoDescifrar.charCodeAt(i);
  if(textoEnAscii >= 65 & textoEnAscii <=90){
     let letrasAnumero = (textoEnAscii + 65 - offset) %26 + 65;
     textoFormulario += String.fromCharCode(letrasAnumero);
  }
  else if(textoEnAscii === 32){
     textoFormulario += String.fromCharCode(32)
  
  }
  
  }
  
  document.getElementById("descifrar").innerHTML= textoFormulario;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*document.getElementById(cifrar) ="block";
    document.getElementById("printTextBox").innerHTML = "Tu texto a cifrar es " + cifrarTexto;
   
  
  const cifrar = {
  
     encode() {
        let offset = document.getElementById("numero1").value;
        offset = parseInt(offset);
        let texto = document.getElementById("cifrar").value;
        texto = texto.toUpperCase();
        let descifrar = "";
  
     for(let i=0; i < texto.length; i++){
        let textoEnAscii = texto.charCodeAt(i);
        let textoFormulario = (textoEnAscii - 65 + offset) %26 + 65;
        let letrasCifradas = string.fromCharCode(textoFormulario)
        textoCifrado = textoCifrado + letrasCifradas;
     }   
         return textoCifrado;
     }
  
  
  
  
  
  }
  */