function control(){
    var nombre=document.getElementById('nombre').value;
    var cedula=document.getElementById('cedula').value;
    var fecha=document.getElementById('fecha').value;
    var parrafo=document.getElementById('warning');
    let warnings="";
    if(nombre.length=== 0){
        warnings+="El nombre esta vacio  <br>"
    }else if(!isNaN(nombre)){
        warnings+="El nombre debe ser texto  <br>"
    }

    if(cedula===''||cedula===null){
        warnings+="La cedula debe ser ocupada  <br>"
    } else if(typeof cedula==='number'){
        warnings+="La cedula debe tener numeros  <br>"
    
    }
    let fecha2='01/01/';
    fecha2+=fecha
    let fechaNacimiento=new Date(fecha2);
    let ahora=new Date();
    var agnios=ahora.getFullYear()-fechaNacimiento.getFullYear();
    if(agnios<18){
        alert("Eres menor de edad");

    }
    warnings+="Edad:"+agnios+"<br>";
    parrafo.innerHTML=warnings;  
}
function funcionCambiar(){
    var imagen=document.getElementById('imagen');
    var opcionFoto=document.getElementById('opcionFoto').value;
    if(opcionFoto==="Foto1"){
        imagen.src="./foto1.jpg"
    }else if(opcionFoto==="Foto2"){
        imagen.src="./foto2.jpg"
    }else if(opcionFoto==="Foto3"){
        imagen.src="./foto3.jpg"
    }

}