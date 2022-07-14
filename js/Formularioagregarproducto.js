// CARGA DE IMAGEN
let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');
// ALTA LET DE NUESTRO HTML, PARA LEER LOS DATOS INGRESADOS
let nombreProducto=document.getElementById("Producto");
let descProducto=document.getElementById("Descripcion");
let precioProducto=document.getElementById("Precio");
let cantProducto=document.getElementById("Cantidad");
let skuProducto=document.getElementById("sku");
// ALTA LET DE NUESTRO HTML, PARA LEER LOS DATOS INGRESADOS EN CATEGORIAS TYPE RADIO
let catAccesorios=document.getElementById('flexRadioAccesorios');
let catAparatos=document.getElementById("flexRadioAparatos");
let catCalzado=document.getElementById("flexRadioCalzado");
let catRopa=document.getElementById("flexRadioRopa");
let catSuplementos=document.getElementById("flexRadioSuplementos");
// INICIALIZAMOS NUESTROS VALORES EN 0
let datos=[];
let contador=0;
let Categoria;
let imagen= "";

// LINEAS DE CARGAR IMAGEN Y PREVIEW
btnFake.addEventListener('click', function(){
    fileImage.click();
});
fileImage.addEventListener('change', function(){
    previewFile('imageFile', 'fileImage', 'inputFile' )
    //previewFile(id imagen, input type file , textArea);
});
    function previewFile(img, inputFile) {
        var preview = document.getElementById(img);
        var file    = document.getElementById(inputFile).files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
              preview.src = reader.result;
            imagen = reader.result;			
          }, false);
          if (file) {
            reader.readAsDataURL(file);
          }// file
    }// previewFile 

// VALIDACIONES DE EXPRESIONES REGULARES, COMPLETADOS O SELECCIONADOS
function validarCategoria()
{
     if(!catAccesorios.checked&&!catAparatos.checked&&!catCalzado.checked&&!catRopa.checked&&!catSuplementos.checked)
     {
        console.log("Todo vacio");
         return false;
     }
     return true;
}

function validarSku()
{
    if(skuProducto.value.length==0)
    {
        return false;
    }
    if(skuProducto.value.length>12)
    {
        return false;
    }
    if(skuProducto.value.length<3)
    {
        return false;
    }
    return true;
}

function validarNombre()
{
if(nombreProducto.value.length<3)
{
    return false;
}
if(nombreProducto.value.length==0)
{
    return false;
}
if(nombreProducto.value.length>30)
{
    return false;
}
return true;
}

function ValidarPrecio()
{
if(precioProducto.value.length==0)
{
    return false;
}
if(isNaN(precioProducto.value))
{
    return false;
}
if(precioProducto.value<1)
{
    return false;
}
return true;
}

function ValidarDescripcion()
{
if(descProducto.value.length==0)
{
    return false;
}
if(descProducto.value.length<3)
{
    return false;
}
return true;
}

function validarCantidad()
{
if(cantProducto.value.length==0)
{
    return false;
}
if(cantProducto.value==0)
{
    return false;
}
if(isNaN(cantProducto.value))
{
    return false;
}
if(/^[0-9]+$/.test(cantProducto.value))
{
    return true;
}
}

// COMPROBACION DE CAMPOS LLENADOS CORRECTAMENTE Y ALERTAS EN CASO INCORRECTO
let agregar=document.getElementById("Agregar");
agregar.addEventListener("click",(event)=>{
    event.preventDefault();
    
    if((!validarNombre())||(!ValidarPrecio())||(!ValidarDescripcion())||(!validarCantidad())||(!validarSku())||(!validarCategoria()))
    {
        let lista="";
        if(!validarNombre())
        {
            nombreProducto.style.border="red thin solid";
            lista+="<li>Por favor escriba un Nombre con al menos 3 caracteres</li>"
        }else {nombreProducto.style.border="";}
        
        
        if(!ValidarDescripcion())
        {
            descProducto.style.border="red thin solid"
            lista+="<li>Por favor escriba una Descripción con al menos 3 caracteres</li>"
        }else{descProducto.style.border="";}
        
        if(!validarSku())
        {
            skuProducto.style.border="red thin solid";
            lista+="<li>Por favor escriba un SKU con al menos 3 caracteres</li>"
        }else{skuProducto.style.border="";}

        if(!ValidarPrecio())
        {
            precioProducto.style.border="red thin solid"
            lista+="<li>Por favor escriba un Precio válido</li>"
        }else{precioProducto.style.border="";}

        if(!validarCantidad())
        {
            cantProducto.style.border="red thin solid";
            lista+="<li>Por favor escriba una Cantidad válida</li>"
        }else{cantProducto.style.border="";}

        if(!validarCategoria())
        {
            catAccesorios.style.border="red thin solid";
            catAparatos.style.border="red thin solid";
            catCalzado.style.border="red thin solid";
            catRopa.style.border="red thin solid";
            catSuplementos.style.border="red thin solid";
            lista+="<li>Selecciona una Categoría</li>"
                }else {catAccesorios.style.border="";
                catAparatos.style.border="";
                catCalzado.style.border="";
                catRopa.style.border="";
                catSuplementos.style.border="";}
    
    // MUESTRA EL CUADRO EN PANTALLA EN DONDE SE INSERTAN LOS ELEMENTOS FALTANTES
    document.getElementById("alertValidText").innerHTML=`
    Los campos deben ser llenados correctamente. <ul>${lista}</ul>`;
    
    document.getElementById("alertValidacion").style.display="block";

    setTimeout(function()
    {
        document.getElementById("alertValidacion").style.display="none";
    }, 5000);
    return false;
}

// ASIGNACION DE CATEGORIA SELECCIONADA CHECK RADIUS
if(catAccesorios.checked){
    Categoria="Accesorios";
    console.log(Categoria);
}
if(catAparatos.checked){
    Categoria="Aparatos";
    console.log(Categoria);
}
if(catCalzado.checked){
    Categoria="Calzado";
    console.log(Categoria);
}
if(catRopa.checked){
    Categoria="Ropa";
    console.log(Categoria);
}
if(catSuplementos.checked){
    Categoria="Suplementos";
    console.log(Categoria);
}

// ALERTA ANIMADA DE REGISTRO EXITOSO
document.getElementById("alertValidacion").style.display="none";
Swal.fire({
    icon: 'success',
    title: '¡REGISTRO COMPLETADO!',
    showConfirmButton: false,
    timer: 2000
  })

// CONTADOR DE PRODUCTOS REGISTRADOS Y ALMACENADOS EN LOCAL STORAGE
contador++;

//JSON PRODUCTOS
let elemento=`{"id":${contador}, 
    "nombre": "${nombreProducto.value}", 
    "cantidad": ${cantProducto.value}, 
    "precio":${precioProducto.value},
    "sku":"${skuProducto.value}",
    "Categoría":"${Categoria}",
    "Img":"${imagen}",
    "Descripcion":"${descProducto.value}"
}`;

// GUARDAMOS EN LOCAL STORAGE EL JSON Y EN CONSOLA IMPRIME LOS DATOS
datos = JSON.parse(localStorage.getItem("Productoscargados")||"[]");
datos.push(JSON.parse(elemento));
localStorage.setItem("Productoscargados", JSON.stringify(datos));
console.log(datos);

// REGRESAMOS LOS CAMPOS EN BLANCO Y QUITAMOS LAS ADVERTENCIAS DE CAMPOS INCORRECTOS
nombreProducto.value="";
precioProducto.value="";
descProducto.value="";
cantProducto.value="";
skuProducto.value="";
imageFile.src="/img/buscar.png";
nombreProducto.style.border="";
precioProducto.style.border="";
descProducto.style.border="";
skuProducto.style.border="";
cantProducto.style.border="";
catAccesorios.style.border="";
catAparatos.style.border="";
catCalzado.style.border="";
catRopa.style.border="";
catSuplementos.style.border="";
nombreProducto.focus();
}); 
// FIN DE EJECUCION DEL CUANDO SE PULSA EL BOTON AGREGAR

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/

