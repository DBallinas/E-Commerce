let txtNombre=document.getElementById("Name");
let Phone=document.getElementById("Phone");
let Correo=document.getElementById("Email");
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

function ValidarPhone()
{
    if(Phone.value.length==0)
    {
        return false;
    }
    if(isNaN(Phone.value))
    {
        return false;
    }
    return true;
}

function ValidarCorreo()
{
    if(Correo.value.length==0)
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

    if((!validarNombre())||(!ValidarPhone())||(!ValidarCorreo())||(!ValidarAsunto())||(!ValidarMessage()))
    {
        let lista="";
        if(!validarNombre())
        {
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un Nombre válido</li>"
        }else {txtNombre.style.border="";}

        if(!ValidarPhone())
        {
            Phone.style.border="red thin solid"
            lista+="<li>Se debe escribir un Número válido</li>"
        }else{Phone.style.border="";}

        if(!ValidarCorreo())
        {
            Correo.style.border="red thin solid"
            lista+="<li>Se debe escribir un Correo válido</li>"
        }else{Correo.style.border="";}

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
    
    document.getElementById("alertValidacion").style.display="none";

    Email.send({
		SecureToken : "053c6fa8-4bbc-4eef-ae27-f2a13492ec41",
    	To : "gsport.eq4.ch13@gmail.com",
    	From : Correo,
    	Subject : Asunto,
    	Body : txtMessage+"<br/>"+txtNombre+"<br/>"+Phone
		}).then(message => alert("Gracias por contactarnos.")
		);
    
    txtNombre.value="";
    Phone.value="";
    Correo.value="";
    txtAsunto.value="";
    txtMessage.value="";

    txtNombre.style.border="";
    Phone.style.border="";
    txtAsunto.style.border="";
    Correo.style.border="";
    txtAsunto.style.border="";
    txtMessage.style.border="";
}
); //Enviar

txtNombre.addEventListener("blur", (event)=>
{
    event.target.value=event.target.value.trim();
});

Phone.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

Correo.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

txtAsunto.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});

txtMessage.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
});