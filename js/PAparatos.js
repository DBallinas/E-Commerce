// VAMOS POR EL ELEMENTO QUE CONTIENE LA CATEGORIA DE APARATOS EN EL HTML
let catAparatos=document.getElementById("danger-outlined");

// CUANDO ES SELECCIONADO SE MUESTRA EL SIGUIENTE EVENTO CON LA CATEGORIA DE APARATOS
catAparatos.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


        let Categoria="Aparatos";
        console.log(Categoria)

// CREAMOS LA FUNCION AÑADIR PRODUCTOS QUE SERAN LLAMADOS EN EL HTML Y RELLENADOS AUTOMATICAMENTE
    function addItem(item){
    console.log(Categoria);
    if(Categoria==item.categoria)
    {
      console.log(item.categoria);
    const itemHTML =     `
    <div class="col">
    <div class="card h-100"  id="card">
      <img src="${item.img1}" class="card-img-top" alt="..." id="cardproducto">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text" id="precio">$${item.precio}</p>
      </div>
      <a href="#" id="addcart"><i class="bi bi-cart-plus-fill"> Agregar al carrito</i></a>
    </div>
  </div>
`;

// DEFINIMOS A QUE ID SE VAN A INSERTAR Y DECIMOS QUE HAGA UN + EN CADA TARJETA PARA QUE NO SE SOBREESCRIBAN
    const itemsContainer = document.getElementById("Productos");
    itemsContainer.innerHTML += itemHTML;
}
}//add

// LISTA JSON DE DONDE CARGAMOS LOS PRODUCTOS Y SUS TAGS PARA SER LLAMADOS

addItem({'name':'Rueda Para Ejercicios Abdominales De Ejercicios 6 Piezas',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_808364-CBT46673270090_072021-F.webp',
'description':'Juego de ruedas de rodillos AB Incluye 1 rodillo AB de gran tamaño, 1 par de barras de flexión, 1 cuerda para saltar, 1 pinza de mano, 1 ejercitador de resorte y 1 almohadilla para las rodillas. Perfecto para principiantes y deportistas avanzados.',
'precio':'530.40',
'categoria':'Aparatos',
'id':'16'});

addItem({'name':'Gimnasio Weider Pro 6900 Aparato Ejercicio Multifuncional',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_665469-MLM48978648549_012022-F.webp',
'description':`Este práctico gimnasio cuenta con pesas de Vinil de 125 LB/56 kg y una máxima resistencia de 330Lb/150 kg lo que permite que este sea uno de los mejores aparatos para hacer ejercicio.
Cuenta con una detallada tabla de ejercicios, para que cada día cambies de rutinas de ejercicio y obtengas el cuerpo que siempre has deseado.
<ul>
<li>Acero, espuma y plástico.</li>
<li>Multicolor</li>
<li>Modelo: 14922</li>
</ul>`,
'precio':'12999',
'categoria':'Aparatos',
'id':'17'});

addItem({'name':'Aparato Ejercicio Ab Rocket Fortalecer Abdomen Fitness Tomic',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_951643-MLM49716083226_042022-F.webp',
'description':`- ¡ESCULPE tu cuerpo! Con el innovador aparato de ejercicio AB Rocket de CENTURFIT TONIFICA abdomen, brazos y piernas. Podrás realizar hasta 6 tipos de ejercicios, trabajando así todo el cuerpo.`,
'precio':'749',
'categoria':'Aparatos',
'id':'18'});

addItem({'name':'Aparato Ejercicio Ab Rocket Fortalecer Abdomen Fitness Tomic',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_798008-MLM31228424517_062019-F.webp',
'description':'¡Ideal para todas la EDADES! No importa tu complexión el AB Rocket de CENTURFIT está construido por un rebote de RESISTENCIA asistida, por lo que harás menos ESFUERZO y más quema de calorías.',
'precio':'639',
'categoria':'Aparatos',
'id':'19'});

addItem({'name':'Maquina Banco Aparato Ejercitador Abdominales Casa Yim Sport',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_934868-MLM50420109240_062022-F.webp',
'description':'Peso de resistencia de hasta 150 kg.',
'precio':'2,999',
'categoria':'Aparatos',
'id':'20'});

}); //Enviar

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/