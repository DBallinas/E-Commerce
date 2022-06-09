let txtNombre=document.getElementById("Name");
let Number=document.getElementById("phoneNumber");
let Email=document.getElementById("Email");
let txtAsunto=document.getElementById("Asunto")
let txtMessage=document.getElementById("Message");

function validarNombre()
{
    if(txtNombre.value.length<3)
    {
        return false;
    }
    if(txtNombre.value.length==0)
    {
        return false;
    }
    return true;

}

function ValidarNumber()
{
    if(Number.value.length==0)
    {
        return false;
    }
    if(isNaN(Number.value))
    {
        return false;
    }
    return true;
}

function ValidarEmail()
{
    if(Email.value.length==0)
    {
        return false;
    }
    return true;
}

function ValidarAsunto()
{
    if(txtAsunto.value.length==0)
    {
        return false;
    }
    return true;
}

function ValidarMessage()
{
    if(Message.value.length==0)
    {
        return false;
    }
    return true;
}

let Enviar=document.getElementById("enviar-contacto");

Enviar.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarNombre())||(!ValidarNumber())||(!ValidarEmail())||(!ValidarAsunto())||(!ValidarMessage()))
    {
        let lista="";
        if(!validarNombre())
        {
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un Nombre válido</li>"
        }else {txtNombre.style.border="";}

        if(!ValidarNumber())
        {
            Number.style.border="red thin solid"
            lista+="<li>Se debe escribir un Número válido</li>"
        }else{Number.style.border="";}

        if(!ValidarEmail())
        {
            Email.style.border="red thin solid"
            lista+="<li>Se debe escribir un Email válido</li>"
        }else{Email.style.border="";}

        if(!ValidarAsunto())
        {
            txtAsunto.style.border="red thin solid"
            lista+="<li>Se debe escribir un Asunto valido</li>"
        }else{txtAsunto.style.border="";}

        if(!ValidarMessage())
        {
            txtMessage.style.border="red thin solid"
            lista+="<li>Se debe escribir un Mensaje válido</li>"
        }else{txtMessage.style.border="";}

        document.getElementById("alertValidText").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${lista}</ul>`;
        
        document.getElementById("alertValidacion").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacion").style.display="none";
        }, 5000);

        return false;
    }

    txtNombre.style.border="";
    Number.style.border="";
    Email.style.border="";
    txtAsunto.style.border="";
    txtMessage.style.border="";

    document.getElementById("alertValidacion").style.display="none";
    
    
    
    function sendEmail()
    {
        Email.send({
            Host : "smtp.gmail.com",
            Username : "Equipo4",
            Password : "Parangaricutirimicuaro13",
            To : Email.value,
            From : "gsport.eq4.ch13@gmail.com",
            Subject : txtAsunto.value,
            Body : txtMessage.value
        }).then(
          message => alert(message)
        );
    }
    txtNombre.value="";
    Number.value="";
    Email.value="";
    txtAsunto.value="";
    txtMessage.value="";
    
}
); //Enviar

txtNombre.addEventListener("blur", (event)=>
{
    event.target.value=event.target.value.trim();
});

Number.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

Email.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

txtAsunto.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

txtMessage.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});