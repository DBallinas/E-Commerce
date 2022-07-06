/*let UCorreo=document.getElementById("Email");
let Pass=document.getElementById("Contrasena")
let Datos=[];

function ValidarCorreo()
{
    if(/^[a-zA-Z_0-9._%+-]+@(?:[a-zA-Z_0-9.-]+\.)[a-zA-Z]{2,6}/.test(UCorreo.value))
    {
        return true;
    }
    // if(UCorreo.value.length==0)
    // {
    //     return false;
    // }
    else return false;
}
function validarPass()
{
    if(Pass.value.length==0)
    {
        return false;
    }

    else return true;
}
let Entrar=document.getElementById("Acceder");
Entrar.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!ValidarCorreo())||(!validarPass()))
    {
        let lista="";
        
        if(!ValidarCorreo())
        {
            UCorreo.style.border="red thin solid"
            lista+="<li>Se debe escribir un UCorreo válido</li>"
        }else{UCorreo.style.border="";}

        if(!validarPass())
        {
            Pass.style.border="red thin solid"
            lista+="<li>Se debe escribir una Contraseña válida</li>"
        }else{Pass.style.border="";}

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



              
                if (UCorreo==JSON.parse(localStorage.getItem("Nombre")) && Pass==JSON.parse(localStorage.getItem("Contraseña"))) { 
                    window.location='index.html'; 
                    } 
                            


    Pass.value="";
    UCorreo.value="";

    UCorreo.style.border="";
    Pass.style.border="";

 }); //Enviar

UCorreo.addEventListener("blur", (event)=>{
 event.target.value=event.target.value.trim();
});
*/
