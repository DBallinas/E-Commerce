let Nombre=document.getElementById("Nomre");
let AMaterno=document.getElementById("ApellidoMaterno");
let APaterno=document.getElementById("ApellidoPaterno");
let Correo=document.getElementById("Email");
let Telefono=document.getElementById("Phone");
let Contraseña=document.getElementById("Contraseña");
let ConfirmContraseña=document.getElementById("ConfirmarContraseña");

let Politica=document.getElementById("Politica");
let Terminos=document.getAnimations("Terminos");

function validarNombre
{
    if(Nombre.value==0)
    {
        return false;
    }
    if(/^[0-9_%+-]/.test(Nombre))
    {
        return false;
    }
    return true;
}

function validarAPaterno
{
    if(APaterno.value.length<3)
    {
        return false;
    }
    if(APaterno.value.length==0)
    {
        return false;
    }
    if(!isNaN(APaterno))
    {
        return false;
    }
    return true;
}

function validarAMaterno
{
    if(AMaterno.value.length<3)
    {
        return false;
    }
    if(AMaterno.value.length==0)
    {
        return false;
    }
    if(!isNaN(AMaterno))
    {
        return false;
    }
    return true;
}

function validarCorreo
{
    
    if(/^[a-zA-Z_0-9._%+-]+@(?:[a-zA-Z_0-9.-]+\.)[a-zA-Z]{2,6}/.test(Correo.value))
    {
        return true;
    }
    if(!isNaN(Correo))
    {
        return false;
    }
    else return false;
}


function validarTelefono
{
    if(Telefono.value.length==0)
    {
        return false;
    }
    if(isNaN(Telefono.value))
    {
        return false;
    }
    if(Telefono.value.length<10 || Telefono.value.length>10)
    {
        return false;
    }
    return true;
}


function validarContraseña
{
    if(/^[a-zA-Z_0-9._%+-]{8,16}/.test(Contraseña.value))
    {
        return true;
    }
    else return false;
}

function validarConfirmar
{
    if(Contraseña!=ConfirmContraseña)
    {
        return false;
    }
    return true;
}

let Registro=document.getElementById("crearCuenta")
Registro.addEventListener("click" , (event)=>
{
    event.preventDefault();

    if((!validarNombre())||(!validarAPaterno())||(!validarAMaterno())||(!validarCorreo())||(!validarTelefono())||(!validarContraseña())||(!validarConfirmar()))
    {
        let lista="";
        if(!validarNombre())
        {
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un Nombre válido</li>"
        }else {txtNombre.style.border="";}

        if(!validarAPaterno())
        {
            APaterno.style.border="red thin solid";
            lista+="<li>Se debe escribir un Nombre válido</li>"
        }else {APaterno.style.border="";}

        if(!validarAMaterno())
        {
            AMaterno.style.border="red thin solid";
            lista+="<li>Se debe escribir un Nombre válido</li>"
        }else {AMaterno.style.border="";}

        if(!validarTelefono())
        {
            Telefono.style.border="red thin solid"
            lista+="<li>Se debe escribir un Número válido</li>"
        }else{Telefono.style.border="";}

        if(!validarCorreo())
        {
            Correo.style.border="red thin solid"
            lista+="<li>Se debe escribir un Correo válido</li>"
        }else{Correo.style.border="";}

        if(!validarContraseña())
        {
            Contraseña.style.border="red thin solid"
            lista+="<li>Se debe escribir un Asunto valido</li>"
        }else{Contraseña.style.border="";}

        if(!validarConfirmar())
        {
            ConfirmContraseña.style.border="red thin solid"
            lista+="<li>Se debe escribir un Mensaje válido</li>"
        }else{ConfirmContraseña.style.border="";}

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
    localStorage.setItem ("Numero de usuarios", contador);


    //JSON
    let elemento=`{"id":${contador}, 
        "nombre": "${Nombre.value}", 
        "Apaterno": ${APaterno.value}, 
        "p":${}
    }`;

    datos.push(JSON.parse(elemento));

    localStorage.setItem("UsuarrisRegistrados",  JSON.stringify(datos) );

    console.log(datos);


}


);//Registro