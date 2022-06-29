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

let datos = [];


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
    if(Terminosjs.checked==true)
    {
        return true;}
}

function validarPoliticajs ()
{
    if(Politicajs.checked==false)
    {
        return false;
    } else return true;
} 

let Registro=document.getElementById("enviar-registro");
Registro.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarNombre())||(!validarAPaterno())||(!validarAMaterno())||(!validarCorreo())||(!validarCorreoconfirm())||(!validarTelefono())||(!validarContrasenajs())||(Terminosjs.checked) && (Politicajs.checked))
    {
        let listaregistro="";
        if(!validarNombre())
        {
            Nombre.style.border="red thin solid";
            listaregistro+="<li>Se debe escribir un Nombre válido con al menos 3 letras</li>"
        }else {Nombre.style.border="";}

        if(!validarAPaterno())
        {
            APaterno.style.border="red thin solid";
            listaregistro+="<li>Se debe escribir un Apellido válido con al menos 3 letras</li>"
        }else {APaterno.style.border="";}

        if(!validarAMaterno())
        {
            AMaterno.style.border="red thin solid";
            listaregistro+="<li>Se debe escribir un Apellido válido con al menos 3 letras</li>"
        }else {AMaterno.style.border="";}

        if(!validarTelefono())
        {
            Telefono.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Número válido</li>"
        }else{Telefono.style.border="";}

        if(!validarCorreo())
        {
            Correo.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Correo válido</li>"
        }else{Correo.style.border="";}

        if(!validarCorreoconfirm())
        {
            Correoconfirm.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Correo válido y/o no coincide</li>"
        }else{Correoconfirm.style.border="";}

        if(!validarContrasenajs())
        {
            Contrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una contraseña con al menos una letra mayuscula, una minuscula y una letra</li>"
        }else{Contrasenajs.style.border="";}

        if(!validarConfirmContrasenajs())
        {
            ConfirmContrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una Contraseña válida y/o no coinciden</li>"
        }else{ConfirmContrasenajs.style.border="";}

        if(!validarPoliticajs())
        {
            Politicajs.style.border="red thin solid"
            listaregistro+="<li>Debes aceptar las Politicas para poder continuar</li>"
        }else{Politicajs.style.border="";}

        if(!validarTerminosjs())
        {
            Terminosjs.style.border="red thin solid"
            listaregistro+="<li>Debes aceptar los terminos para poder continuar</li>"
        }else{Terminosjs.style.border="";}

        document.getElementById("alertValidTextregistro").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${listaregistro}</ul>`;
        
        document.getElementById("alertValidacionregistro").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacionregistro").style.display="none";
        }, 10000);

        return false;
    }

    document.getElementById("alertValidacionregistro").style.display="none";

   contador++;
    localStorage.setItem ("Numero de usuarios", contador);


    //JSON
   let elemento=`{"id":${contador}, 
        "Nombre":${Nombre.value}, 
        "Apellido paterno":${APaterno.value},
        "Apellido Materno":${AMaterno.value},
        "Correo":${Correo.value},
        "Telefono":${Telefono.value},
        "Contraseña":${Contrasenajs.value}
    }`; 

    datos.push(JSON.parse(elemento));

    localStorage.setItem("UsuariosRegistrados",  JSON.stringify(datos) );

    console.log(datos);
//Registro

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

}
); //Enviar

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
/*
Politicajs.addEventListener("blur", (event)=>{
    event.target.checked=event.target.checked.trim();
});

Terminosjs.addEventListener("blur", (event)=>{
    event.target.checked=event.target.checked.trim();
});*/