console.log("Pagina cargada");

//crear alerta al hacer click en editar
function click_editar(){
    alert("Editando perfil"); 

    //seleccionar un elemento especifico para cambiarlo-ej para sumar likes se guarda la cantida q ya hay de likes y 
    //sumarle 1 al darle like, sin bucle
    var elemento_p = document.querySelector('#descripcion'); //seleccionamos el elemento (linea 29 html "descripcion")
    console.log(elemento_p); //con querySelector se puede seleccionar cualquier elemento
    elemento_p.innerText = "Desarrolladora, empoderada, creativa y muy divertida";


    //modificar la imagen de perfil (sin agregar nada al html, usando el class)
    var imagen_perfil = document.querySelector('.img_usuario');
    imagen_perfil.src="images/wsp-yo.jpeg"; //nueva ruta


    //Quiero agregar una clase a mi h1 (Elena de Troya)
    var nombre = document.querySelector('h1'); //Seleccionamos la etiqueta h1
    nombre.classList.add('pink'); //agregar en css la nueva clase en este caso (pink) y poner el color
}



//imprimira en consola, cuantas veces hicimos doble click en foto perfil
var doble_click = 0;
function doble_click_avatar(){
    doble_click++;
    console.log("Ha hecho doble click: "+doble_click+" veces");
}



//imprimira en consola si el mouse está sobre el nombre - Se puede usar para x ej poner un avisito en pantalla q diga 
//este es tu avatar al pasar el mouse sobre la foto perfil o un "ver mas"
function over(){
    console.log("El mouse está sobre el Nombre");

    //para cambiar color de fondo al pasar el mouse
    var nombre = document.querySelector('h1'); //seleccionamos etiqueta h1
    nombre.style.backgroundColor = "yellow"; //h1 se guarda en la var nombre y le cambiamos el estilo con background
}
function out() {
    console.log("El mouse está fuera del nombre");

    //para q vuelva a ponerse blanco al pasar mouse
    var nombre = document.querySelector('h1');
    nombre.style.backgroundColor = "white";
}



    //funcion q cambia el nombre al hacer click en el nombre del titulo h1 de html
    //Lo q se pone () es una variable y se le puede poner el nombre q uno quiera
function cambieNombre(elemento_h1){ //recibimos el elemento h1 q se mando desde html (this).
    console.log(elemento_h1); //la etiqueta la tratamos como objeto con propiedades q se pueden modificar


    //al hacer click en nombre cambia entre JUANA a ELENA y viceversa cada vez q se da click
    if(elemento_h1.innerText === "Juana De Arco"){
        elemento_h1.innerText = "Elena De Troya";
    } else {
        elemento_h1.innerText = "Juana De Arco"
    }

    //para cambiar de JUANA a Elena 1 vez
    //elemento_h1.innerText = "Elena De Troya"; 
    //objeto tiene una propiedad innerText. (innerText: permite cambiar el contenido de un texto o consultar su valor)
}



//para cambiar la imagen de mapa x la de herramienta
function cambiaImagen(elemento_img){
    elemento_img.src = "images/gear.png"; //lo cambia una vez

    //para q cambie la imagen cada vez q se da click   
    if(elemento_img.src.includes('images/map-marker.png')) {
        elemento_img.src = "images/gear.png";
    } else {
    elemento_img.src = "images/map-marker.png";
    }

    //al hacer click en la imagen mapa, subraya el texto (h3 (francia)) 
    var location = document.querySelector('h3');
    location.style.textDecoration = "underline"; //textDecoration underline subraya
}



function elimine(elemento_p){ //recibimos el elemento parrafo
    elemento_p.remove(); //elimina el elemento al q se le hace doble click (no se puede volver a poner)
}



//detectar cambio en imput linea 42 html
function cambioInput() {
    console.log("hubo un cambio")

    var input = document.querySelector('#nombre'); //seleccionamos elemento q tiene como id "nombre" (el imput)
    console.log(input.value); //es el valor q el usuario ingreso

    var elemento_h1 = document.querySelector('h1'); //seleccionando la etiqueta h1
    elemento_h1.innerText = input.value; //elemento q esta en h1 q sea igual a lo q se ingreso en el input
}
