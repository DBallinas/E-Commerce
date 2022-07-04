function addItem(item){

  const itemHTML =     `  <div class="col">
  <div class="card h-100">
   
    <img src="${item.img1}" class="card-img-top" alt="..." width="100px" height="250px" >
    <img src="${item.img2}" class="card-img-top" alt="..." width="100px" height="250px" >
    <img src="${item.img3}" class="card-img-top" alt="..." width="100px" height="250px" >
    
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
     </div>
      <div class="card-footer">
         <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
           <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
         </div>
         <small class="text-muted">$${item.precio}</small>
       </div>
     
    </div>
  </div>
 </div>
`



  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Rueda Para Ejercicios Abdominales De Ejercicios 6 Piezas',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_808364-CBT46673270090_072021-F.webp',
  'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_600369-MLM43255270609_082020-F.webp',
  'description':'Juego de ruedas de rodillos AB Incluye 1 rodillo AB de gran tamaño, 1 par de barras de flexión, 1 cuerda para saltar, 1 pinza de mano, 1 ejercitador de resorte y 1 almohadilla para las rodillas. Perfecto para principiantes y deportistas avanzados.',
  'precio':'530.40'});
  
addItem({'name':'Gimnasio Weider Pro 6900 Aparato Ejercicio Multifuncional',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_665469-MLM48978648549_012022-F.webp',
  'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_840833-MLM48978698242_012022-F.webp',
  'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_929142-MLM48978677401_012022-F.webp',
  'description':`Este práctico gimnasio cuenta con pesas de Vinil de 125 LB/56 kg y una máxima resistencia de 330Lb/150 kg lo que permite que este sea uno de los mejores aparatos para hacer ejercicio.
  Cuenta con una detallada tabla de ejercicios, para que cada día cambies de rutinas de ejercicio y obtengas el cuerpo que siempre has deseado.
  <ul>
  <li>Acero, espuma y plástico.</li>
  <li>Multicolor</li>
  <li>Modelo: 14922</li>
</ul>`,
  'precio':'12999'});

addItem({'name':'Aparato Ejercicio Ab Rocket Fortalecer Abdomen Fitness Tomic',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_951643-MLM49716083226_042022-F.webp',
'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_893751-MLM49716095139_042022-F.webp',
'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_677455-MLM49716024873_042022-F.webp',
  'description':`- ¡ESCULPE tu cuerpo! Con el innovador aparato de ejercicio AB Rocket de CENTURFIT TONIFICA abdomen, brazos y piernas. Podrás realizar hasta 6 tipos de ejercicios, trabajando así todo el cuerpo.`,
  'precio':'749'});

addItem({'name':'Aparato Ejercicio Ab Rocket Fortalecer Abdomen Fitness Tomic',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_798008-MLM31228424517_062019-F.webp',
'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_935808-MLM31228423250_062019-F.webp',
'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_606055-MLM31228356493_062019-F.webp',
  'description':'¡Ideal para todas la EDADES! No importa tu complexión el AB Rocket de CENTURFIT está construido por un rebote de RESISTENCIA asistida, por lo que harás menos ESFUERZO y más quema de calorías.',
  'precio':'639'})

addItem({'name':'Maquina Banco Aparato Ejercitador Abdominales Casa Yim Sport',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_934868-MLM50420109240_062022-F.webp',
'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_912450-MLM50419895807_062022-F.webp',
'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_873144-MLM50420032510_062022-F.webp',
  'description':'Peso de resistencia de hasta 150 kg.',
  'precio':'2,999'});



    