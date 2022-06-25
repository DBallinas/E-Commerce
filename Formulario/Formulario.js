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

let datos=[];
let contador=0;
let costoTotal=0;

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
    if(isNaN(cantProducto.value))
    {
        return false;
    }
    if(parseFloat(cantProducto.value)<=0)
    {
        return false;
    }
    return true;
}


let total=document.getElementById("totalPagar");
let totalEnProductos=0;

let agregar=document.getElementById("Agregar");
agregar.addEventListener("click",(event)=>{
    event.preventDefault();

    if((!validarNombre())||(!ValidarPrecio())||(!ValidarDescripcion())||(!validarCantidad))
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


        document.getElementById("alertValidText").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${lista}</ul>`;
        
        document.getElementById("alertValidacion").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacion").style.display="none";
        }, 5000);

        return false;



    }
    
    document.getElementById("alertValidacion").style.display="none";

    contador++;
    localStorage.setItem ("contadorProductos", contador);

    totalEnProductos += parseInt(cantProducto.value);
 
    localStorage.setItem ("productosTotal", totalEnProductos);
    localStorage.setItem ("SKU", skuProducto);


    //JSON
    let elemento=`{"id":${contador}, 
        "nombre": "${nombreProducto.value}", 
        "cantidad": ${cantProducto.value}, 
        "precio":${precioProducto.value},
        "sku":"${skuProducto.value}"
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
    nombreProducto.focus();
}
); //Enviar




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
				fillSelect();
		  	}, false);
			
		  	if (file) {
		    	reader.readAsDataURL(file);
		  	}// file
		}// previewFile 


		selectImages.addEventListener("change", function(){
			imageFile.src = store.data[selectImages.options[selectImages.selectedIndex].value];
		});