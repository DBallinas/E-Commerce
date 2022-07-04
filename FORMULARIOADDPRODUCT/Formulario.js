let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');
let selectImages = document.getElementById('selectImages');
let store = {'names':[], 'data': []};

let nombreProducto=document.getElementById("Producto");
let descProducto=document.getElementById("Descripcion");
let precioProducto=document.getElementById("Precio");
let cantProducto=document.getElementById("Cantidad");
let skuProducto=document.getElementById("sku");

let catAccesorios=document.getElementById('flexRadioAccesorios');
let catAparatos=document.getElementById("flexRadioAparatos");
let catCalzado=document.getElementById("flexRadioCalzado");
let catRopa=document.getElementById("flexRadioRopa");
let catSuplementos=document.getElementById("flexRadioSuplementos");

let datos=[];
let contador=0;
let costoTotal=0;
let Categoria;

function validarCategoria()
{
   
     if(!catAccesorios.checked&&!catAparatos.checked&&!catCalzado.checked&&!catRopa.checked&&!catSuplementos.checked)
     {
        console.log("Todo vacio");
         return false;
     }
    //  if(catAccesorios.checked||catAparatos.checked||catCalzado.checked||catRopa.checked||catSuplementos.checked)
    //  {
    //     console.log("Todo vacio");
    //      return true;
    //  }
     return true;
}
function validarSku()
{
    if(skuProducto.value.length==0)
    {
        return false;
    }
    if(skuProducto.value.length>10)
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
if(nombreProducto.value.length>15)
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
return true;
}

function ValidarDescripcion()
{
if(descProducto.value.length==0)
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
// if(parseFloat(cantProducto.value)<=0)
// {
//     return false;
// }
if(/^[0-9]+$/.test(cantProducto.value))
{
    return true;
}
//return true;
}


let total=document.getElementById("totalPagar");
let totalEnProductos=0;

let agregar=document.getElementById("Agregar");
agregar.addEventListener("click",(event)=>{
event.preventDefault();

if((!validarNombre())||(!ValidarPrecio())||(!ValidarDescripcion())||(!validarCantidad())||(!validarSku())||(!validarCategoria()))
{
    let lista="";
    if(!validarNombre())
    {
        nombreProducto.style.border="red thin solid";
        lista+="<li>Por favor escriba un Nombre válido</li>"
    }else {nombreProducto.style.border="";}

    if(!ValidarPrecio())
    {
        precioProducto.style.border="red thin solid"
        lista+="<li>Por favor escriba un Número válido</li>"
    }else{precioProducto.style.border="";}

    if(!ValidarDescripcion())
    {
        descProducto.style.border="red thin solid"
        lista+="<li>Por favor escriba un Mensaje válido</li>"
    }else{descProducto.style.border="";}

    if(!validarCantidad())
    {
        cantProducto.style.border="red thin solid";
        lista+="<li>Se debe escribir una cantidad válida</li>"
    }else{cantProducto.style.border="";}

    if(!validarSku())
    {
        skuProducto.style.border="red thin solid";
        lista+="<li>Se debe escribir un SKU válido</li>"
    }else{skuProducto.style.border="";}

    if(!validarCategoria())
    {
        catAccesorios.style.border="red thin solid";
        catAparatos.style.border="red thin solid";
        catCalzado.style.border="red thin solid";
        catRopa.style.border="red thin solid";
        catSuplementos.style.border="red thin solid";
        lista+="<li>Se debe escribir una categoria válida</li>"
        
    }else {catAccesorios.style.border="";
    catAparatos.style.border="";
    catCalzado.style.border="";
    catRopa.style.border="";
    catSuplementos.style.border="";}


    document.getElementById("alertValidText").innerHTML=`
    Los campos deben ser llenados correctamente. <ul>${lista}</ul>`;
    
    document.getElementById("alertValidacion").style.display="block";

    setTimeout(function()
    {
        document.getElementById("alertValidacion").style.display="none";
    }, 5000);

    return false;
}
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

document.getElementById("alertValidacion").style.display="none";
Swal.fire({
    icon: 'success',
    title: '¡REGISTRO COMPLETADO!',
    showConfirmButton: false,
    timer: 2000
  })

contador++;
localStorage.setItem ("contadorProductos", contador);

totalEnProductos += parseInt(cantProducto.value);
localStorage.setItem("Categoría",Categoria)
localStorage.setItem ("productosTotal", totalEnProductos);



//JSON
let elemento=`{"id":${contador}, 
    "nombre": "${nombreProducto.value}", 
    "cantidad": ${cantProducto.value}, 
    "precio":${precioProducto.value},
    "sku":"${skuProducto.value}",
    "Categoría":"${Categoria}",
    "Img":"${store.data}",
    "Descripcion":"${descProducto.value}"
}`;

datos.push(JSON.parse(elemento));

localStorage.setItem("elementosTabla",  JSON.stringify(datos) );

console.log(datos);

nombreProducto.value="";
precioProducto.value="";
descProducto.value="";
cantProducto.value="";
skuProducto.value="";

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















}); //Enviar

	window.addEventListener('load', function(e){
		console.log("store.data:" + store.data);
		console.log(localStorage.getItem("imgsData"));
		if ( JSON.parse(localStorage.getItem("imgsData"))!=null)
			store = JSON.parse(localStorage.getItem("imgsData"));
		
		fillSelect();
	});

	function fillSelect(){
		if (store.data.length>0) {
			selectImages.options.length = 0; // clear Select
			let optiontmp = document.createElement("option");
				optiontmp.text = "Selecciona una imagen para visualizar:"
				optiontmp.value = -1;
				selectImages.add(optiontmp); 
			for (let i=0; i < store.data.length; i ++){
				let option = document.createElement("option");
				option.text = store.names[i];
				option.value = i;
				selectImages.add(option); 
			}//for i
		}//if store != null
		console.log(store);
	}//fillSelect


	btnFake.addEventListener('click', function(){
		fileImage.click();
    });
    fileImage.addEventListener('change', function(){
        previewFile('imageFile', 'fileImage', 'inputFile' )
        //previewFile(id imagen, input type file , textArea);
    });

		//previewFile(id imagen, input type file , textArea);
		function previewFile(img, inputFile, input) {
			var preview = document.getElementById(img);
			var file    = document.getElementById(inputFile).files[0];
			var reader  = new FileReader();

			reader.addEventListener("load", function () {
				console.log(store.data.length);
				store.data[store.data.length] = reader.result;
				store.names[store.names.length] =file.name;
				console.table(store);
				document.getElementById(input).value = reader.result;
		  		preview.src = reader.result;
				localStorage.setItem("imgsData", JSON.stringify(store));
                store.push(JSON.parse(elemento));

                localStorage.setItem("elementosTabla",  JSON.stringify(store) );

				fillSelect();
		  	}, false);
			
		  	if (file) {
		    	reader.readAsDataURL(file);
		  	}// file
		}// previewFile 


		selectImages.addEventListener("change", function(){
			imageFile.src = store.data[selectImages.options[selectImages.selectedIndex].value];
		});