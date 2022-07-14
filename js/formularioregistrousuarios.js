// ALTA LET DE NUESTRO HTML, PARA LEER LOS DATOS INGRESADOS
let Nombre=document.getElementById("Nombreperson");
let AMaterno=document.getElementById("Apellidomaterno");
let APaterno=document.getElementById("Apellidopaterno");
let Correo=document.getElementById("Emailregistro");
let Correoconfirm=document.getElementById("Emailconfirm");
let Telefono=document.getElementById("Phoneregistro");
let Contrasenajs=document.getElementById("Contrasena");
let ConfirmContrasenajs=document.getElementById("Contrasenaconfirm");
let Politicajs=document.getElementById("Politicas");
let Terminosjs=document.getElementById("Terminos");
// INICIALIZAMOS NUESTROS VALORES EN 0
let datos = [];
let contador=0;

// VALIDACIONES DE EXPRESIONES REGULARES, COMPLETADOS O SELECCIONADOS
function validarNombre ()
{
    if(Nombre.value.length==0)
    {
        return false;
    } else if(Nombre.value.length<3)
    {
        return false;
    } else if(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(Nombre.value))
    {    
    return true;
    }
}

function validarAPaterno ()
{
    if(APaterno.value.length==0)
    {
        return false;
    } else if(APaterno.value.length<3)
    {
        return false;
    } else if(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(APaterno.value))
    {    
    return true;
    }
}

function validarAMaterno ()
{
    if(AMaterno.value.length==0)
    {
        return false;
    } else if(AMaterno.value.length<3)
    {
        return false;
    } else if(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(AMaterno.value))
    {    
    return true;
    }
}

function validarCorreo ()
{
    if(/^[a-zA-ZñÑ_0-9._%+-]+@(?:[a-zA-ZÑñ_0-9.-]+\.)[a-zA-Z]{2,6}/.test(Correo.value))
    {
        return true;
    }
    if(!isNaN(Correo[0]))
    {
        return false;
    }
    else return false;
}

function validarCorreoconfirm ()
{
    if(Correoconfirm.value.length==0)
    {
        return false;
    } else if(Correo.value !== Correoconfirm.value)
    {
        return false;
    }
    return true;
}

function validarTelefono ()
{
    if(Telefono.value.length==0)
    {
        return false;
    } else if(isNaN(Telefono.value))
    {
        return false;
    } else if(Telefono.value.length<10 || Telefono.value.length>10)
    {
        return false;
    } else if(/^[0-9]+$/.test(Telefono.value)) /*CONDICION QUE SOLO ACEPTA NÚMEROS DE 0 AL 9 DE INICIO A FINAL, TIENE QUE SER UNO O MÁS*/
    {    
    return true;
    }
}

function validarContrasenajs ()
{
    if(/^(?=.*[A-ZÑ])(?=.*[a-zñ])(?=.*[0-9])[a-zA-ZÑñ0-9\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?]{8,16}/.test(Contrasenajs.value))
    {
        return true;
    }
    else return false;
}

function validarConfirmContrasenajs ()
{
    if(ConfirmContrasenajs.value.length==0)
    {
        return false;
    } else if(Contrasenajs.value !==ConfirmContrasenajs.value)
    {
        return false;
    }
    return true;
}
 function validarTerminosjs ()
{
    if(Terminosjs.checked)
    {
        return true;}
}

function validarPoliticajs ()
{
    if(Politicajs.checked)
    {
        return true;
    }
} 

// COMPROBACION DE CAMPOS LLENADOS CORRECTAMENTE Y ALERTAS EN CASO INCORRECTO
let Registro=document.getElementById("enviar-registro");
Registro.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarNombre())||(!validarAPaterno())||(!validarAMaterno())||(!validarCorreo())||(!validarCorreoconfirm())||(!validarTelefono())||(!validarContrasenajs())||(!validarTerminosjs())||(!validarPoliticajs()))
    {
        let listaregistro="";
        if(!validarNombre())
        {
            Nombre.style.border="red thin solid";
            listaregistro+="<li>Por favor escriba un Nombre con al menos 3 letras</li>"
        }else {Nombre.style.border="";}

        if(!validarAPaterno())
        {
            APaterno.style.border="red thin solid";
            listaregistro+="<li>Por favor escriba un Apellido con al menos 3 letras</li>"
        }else {APaterno.style.border="";}

        if(!validarAMaterno())
        {
            AMaterno.style.border="red thin solid";
            listaregistro+="<li>Por favor escriba un Apellido con al menos 3 letras</li>"
        }else {AMaterno.style.border="";}

        if(!validarTelefono())
        {
            Telefono.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Número válido</li>"
        }else{Telefono.style.border="";}

        if(!validarCorreo())
        {
            Correo.style.border="red thin solid"
            listaregistro+="<li>Por favor escriba un Correo válido</li>"
        }else{Correo.style.border="";}

        if(!validarCorreoconfirm())
        {
            Correoconfirm.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Correo válido y/o no coinciden</li>"
        }else{Correoconfirm.style.border="";}

        if(!validarContrasenajs())
        {
            Contrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una contraseña con al menos una letra mayúscula, una minúscula y un número</li>"
        }else{Contrasenajs.style.border="";}

        if(!validarConfirmContrasenajs())
        {
            ConfirmContrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una Contraseña válida y/o no coinciden</li>"
        }else{ConfirmContrasenajs.style.border="";}

        if(!validarPoliticajs())
        {
            Politicajs.style.border="red thin solid"
            listaregistro+="<li>Debes aceptar las Políticas para poder continuar</li>"
        }else{Politicajs.style.border="";}

        if(!validarTerminosjs())
        {
            Terminosjs.style.border="red thin solid"
            listaregistro+="<li>Debes aceptar los Términos para poder continuar</li>"
        }else{Terminosjs.style.border="";}

// MUESTRA EL CUADRO EN PANTALLA EN DONDE SE INSERTAN LOS ELEMENTOS FALTANTES
        document.getElementById("alertValidTextregistro").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${listaregistro}</ul>`;
        
        document.getElementById("alertValidacionregistro").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacionregistro").style.display="none";
        }, 10000);

        return false;
    }

// ALERTA ANIMADA DE REGISTRO EXITOSO
    document.getElementById("alertValidacionregistro").style.display="none";
        Swal.fire({
            icon: 'success',
            title: '¡REGISTRO EXITOSO!',
            showConfirmButton: false,
            timer: 2000
          })
// CONTADOR DE USUARIOS REGISTRADOS Y ALMACENADOS EN LOCAL STORAGE
    contador++;
 
    //JSON USUARIOS
   let elemento=`{"id":"${contador}", 
        "Nombre":"${Nombre.value}", 
        "Apellido paterno":"${APaterno.value}",
        "Apellido Materno":"${AMaterno.value}",
        "Correo":"${Correo.value}",
        "Telefono":"${Telefono.value}",
        "Contraseña":"${Contrasenajs.value}"
    }`; 

// GUARDAMOS EN LOCAL STORAGE EL JSON Y EN CONSOLA IMPRIME LOS DATOS
    datos.push(JSON.parse(elemento));
   localStorage.setItem("elementosTabla", JSON.stringify(datos));
   console.log(datos);
//Registro

// REGRESAMOS LOS CAMPOS EN BLANCO Y QUITAMOS LAS ADVERTENCIAS DE CAMPOS INCORRECTOS
Nombre.value="";
AMaterno.value="";
APaterno.value="";
Correo.value="";
Correoconfirm.value="";
Telefono.value="";
Contrasenajs.value="";
ConfirmContrasenajs.value="";
Politicajs.checked="";
Terminosjs.checked="";

Nombre.style.border="";
AMaterno.style.border="";
APaterno.style.border="";
Correo.style.border="";
Correoconfirm.style.border="";
Telefono.style.border="";
Contrasenajs.style.border="";
ConfirmContrasenajs.style.border="";
Politicajs.style.border="";
Terminosjs.style.border="";
}); //Enviar

// QUITAMOS LOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL EN CASO DE CONTENER
Nombre.addEventListener("blur", (event)=>
{
event.target.value=event.target.value.trim();
});

AMaterno.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

APaterno.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Correo.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Correoconfirm.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Telefono.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });

Contrasenajs.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });

ConfirmContrasenajs.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/