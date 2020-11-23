var name= prompt("¿Como te llamas?")


/*function validar() {
   let usuario = document.getElementById("usuario").value;
   let pass = document.getElementById("pass").value;
   /*let url = "http://localhost:5000/cifrado.html";*/

   /*if(usuario=="proveedor1" && pass==12345) {
     alert("Usuario y contraseña correctas");
     document.location.href="cifrado.html";
     
   }
   else if(usuario=="proveedor2" && pass==6789) {
     alert("Usuario y contraseña correctas");
      location.href="cifrado.html"
   }

   else  {
      alert("El usuario o contraseña no coinciden, por favor verifique sus datos");
   }

}*/




function validar()
       {
         var usuario = document.getElementById("usuario").value;
         var contraseña = document.getElementById("pass").value;

         if(usuario=="proveedor1" && contraseña== "12345")
         {
            /*alert("Usuario y contraseña correctas")*/
            location.href="cifrado.html"  
         }
         
         else {
         alert("verifique sus datos") 
      }
   }