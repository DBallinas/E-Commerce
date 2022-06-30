let Nombre=document.getElementById("Nombreperson");
let Correo=document.getElementById("Email");
let Contrasenajs=document.getElementById("Contrasena");

let datos = [];

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

function validarContrasenajs ()
{
    if(/^(?=.*[A-ZÑ])(?=.*[a-zñ])(?=.*[0-9])[a-zA-ZÑñ0-9\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?]{8,16}/.test(Contrasenajs.value))
    {
        return true;
    }
    else return false;
}

let Registro=document.getElementById("entrar");
Registro.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarCorreo())||(!validarContrasenajs()))
    {
        let listaregistro="";

        if(!validarCorreo())
        {
            Correo.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Correo válido</li>"
        }else{Correo.style.border="";}

        if(!validarContrasenajs())
        {
            Contrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una contraseña con al menos una letra mayúscula, una minúscula y un número</li>"
        }else{Contrasenajs.style.border="";}

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
        Swal.fire({
            icon: 'success',
            title: '¡INICIO DE SESION EXITOSO!',
            showConfirmButton: false,
            timer: 2000
          })

    contador++;

   let elemento=`{"Correo":"${Correo.value}",
        "Contraseña":"${Contrasenajs.value}"
    }`; 
    datos.push(JSON.parse(elemento));
   localStorage.setItem("iniciodesesion", JSON.stringify(datos));

Correo.value="";
Contrasenajs.value="";

Correo.style.border="";
Contrasenajs.style.border="";

}
); 

Correo.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Contrasenajs.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });
