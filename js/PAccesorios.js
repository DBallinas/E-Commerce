// VAMOS POR EL ELEMENTO QUE CONTIENE LA CATEGORIA DE ACCESORIOS EN EL HTML
let catAccesorios=document.getElementById("primary-outlined");

// CUANDO ES SELECCIONADO SE MUESTRA EL SIGUIENTE EVENTO CON LA CATEGORIA DE ACCESORIOS
catAccesorios.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


        let Categoria="Accesorios";
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

addItem({'name':'Polainas Wilson 4lbs Unisex',
'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
'description':'Las Polainas Wilson tienen el peso extra para seguir fortaleciendo tus piernas y justo en los momentos de mayor intensidad. Cuenta con un diseño espectacular para amoldarse encima de los tobillos con comodidad. Guarda el equilibrio en la postura del avión para trabajar la fuerza en tus piernas al elevarlas, se sujetan de manera perfecta por un sistema de velcro para hacer los movimientos de mayor agilidad en tus prácticas deportivas.',
'precio':'459.00',
'categoria':'Accesorios',
'id':'1'});

addItem({'name':'Ligas Larga de Tensión Wilson',
'img1':'http://drive.google.com/uc?export=view&id=1T_TB0qYH9hEf5S5QaQHEE6dwdwO1C1jt',
'description':`Liga de resistencia para tonificación de músculos ampliamente recomendadas en ejercicio cardiovascular para desarrollar fuerza y velocidad. 
<ul>
<li>Tensión Media (Azul)</li>
<li>Tensión Fuerte (Verde)</li>
<li>Tensión Extra Fuerte (Gris)</li>
</ul>`,
'precio':'235.00',
'categoria':'Accesorios',
'id':'2'});

addItem({'name':'Xiaomi Mi Watch Negro',
'img1':'http://drive.google.com/uc?export=view&id=1A8F9dKmyTOjA-Un4juhaJaqTzCSYS8IO',
'description':`<ul>
<li>Pantalla: 1.39 Pulgadas</li>
<li>Compatibilidad: Android 4.4 e IOS 10 o superior</li>
<li>GPS autónomo incorporado</li>
<li>Sensores: Acelerómetro de 3 ejes + Giroscopio de 3 ejes Sensor geomagnético Sensor de presión de aire Sensor de luz ambiental</li>
<li>Batería: 230 mAh </li>
</ul>`,
'precio':'2800',
'categoria':'Accesorios',
'id':'3'});

addItem({'name':'Muñequeras Nike 2.5 lbs Unisex',
'img1':'http://drive.google.com/uc?export=view&id=14pxmSrRbnWMrR-stiZMb_3xgrbMg-UJQ',
'description':'Las Muñequeras Nike 2.5 lbs incrementan la carga cuando quieres realizar ejercicios en los musculos superiores del cuerpo, te ayuda con los ejercicios press en hombros y espalda, son perfectas para empezar a entrenar con un peso extra en tus manos, brazos.',
'precio':'989',
'categoria':'Accesorios',
'id':'4'});

addItem({'name':'Diadema deportiva',
'img1':'http://drive.google.com/uc?export=view&id=1XPqZW0lsEY4RAlMwHs4NjkLlzA1mc4ze',
'description':'Absorción de Sudor: Esta diadema deportiva absorbe y evapora el sudor más rápido que las diademas de algodón ordinarias, es un buen "asistente" durante el ejercico!. Tiene dos tiras antideslizantes de silicona incorporados para evitar que la diadema se deslice durante el ejercicio intenso, puede prevenir eficazmente que el sudor fluya hacia los ojos.',
'precio':'189',
'categoria':'Accesorios',
'id':'5'});

addItem({'name':'Top Nike Swoosh',
'img1':'http://drive.google.com/uc?export=view&id=1wCdgjHBjN2X6qWlVN7UEbfkEMZu9xrCt',
'description':'El Top Nike Swoosh tiene prácticamente lo que necesitas para llevar al gimnasio, lo puedes combinar de manera increíble con tus prendas de torso inferior como shorts, leggings, pantalones y capris. Tiene la comodidad para desempeñar tus entrenamientos de la parte superior con total ligereza para tu abdomen, bíceps, tríceps y espalda.',
'precio':'649',
'categoria':'Accesorios',
'id':'6'});

addItem({'name':'Mancuerna Lift 4 kg',
'img1':'http://drive.google.com/uc?export=view&id=1GDmkgMOM79UWOAszQSEgtS2pmJ9tOZHp',
'description':'La Mancuerna Lift Acero 4 kg no puede faltar en tu equipo de entrenamiento en los días de fortalecimiento de cualquier músculo. No dejes de prepararte a pesar de las adversidades, mantente activo con sencillas rutinas de ejercicio desde la comodidad y agregando un peso extra a tus rutinas. Tiene una agarradera metálica con un patrón grabado para mejorar la sujeción al momento de entrenar con ella. ',
'precio':'400',
'categoria':'Accesorios',
'id':'7'});

addItem({'name':'Muñequera deportiva Nike unisex',
'img1':'http://drive.google.com/uc?export=view&id=1l-9Gw8WsOW0b30uw_qhynTRS5ofk8C3U',
'description':'Utiliza la muñequera Nike como complemento de tus entrenamientos, ya que cuenta con el diseño básico de la pieza y su versátil tonalidad, será la opción ideal para tus looks. La muñequera Nike posee un diseño moderno, además de ciertos detalles que la distinguen como logotipo de la marca y ajuste perfecto a la muñeca por su maravillosa confección.',
'precio':'519',
'categoria':'Accesorios',
'id':'8'});

addItem({'name':'Balón de Fútbol Americano Wilson NFL Duke',
'img1':'http://drive.google.com/uc?export=view&id=1p3cHnrcGyk7BtPzhXH6xcGKokhA3EKto',
'description':'Regresa The Duke al emparrillado. De 1941 a 1969 se le conoció al balón oficial de la NFL como The Duke gracias al antiguo dueño de los Gigantes de Nueva York, Wellington Mara. Consigue este tradicional balón Wilson, el oficial para la NFL. Histórico desde los inicios originales de la Liga de la NFL. Confeccionado a base de piel de ganado porcino y con el tamaño y la dimensión reglamentaria de la NFL para que juegues como los profesionales.',
'precio':'3300',
'categoria':'Accesorios',
'id':'9'});

addItem({'name':'Balón de Básquetbol Wilson NBA Forge Plus',
'img1':'http://drive.google.com/uc?export=view&id=1FWK0asbBqULNSU9eH3i2Yw9nRvyjQQuk',
'description':'Dalo todo por el todo en cada una de tus prácticas y partido con el Balón de Básquetbol Wilson NBA Forge Plus Unisex. Estupendo también para jugar con tus amigos y/o familia. Este material y cubierta ayudarán a que tengas un mejor agarre con tus manos y que el balón tenga una máxima durabilidad al nivel profesional.',
'precio':'900',
'categoria':'Accesorios',
'id':'10'});
}); //Enviar

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/