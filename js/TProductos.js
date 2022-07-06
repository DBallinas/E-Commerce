
let Todos=document.getElementById("success-outlined");

Todos.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";
           
      function addItem(item){
      
      const itemHTML =     `  <div class="col" id="tamañocarrusel">
      <div class="card h-100"category="${item.categoria}">
          
      <img src="${item.img1}" class="d-block w-100" alt="...">
    
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
         </div>
          <div class="card-footer">
             <div class="d-flex justify-content-between align-items-center">
             <div class="btn-group">
               <button type="button" class="btn btn-sm btn-outline-success">Agregar al carrito</button>
             </div>
             <small class="text-muted">$${item.precio}</small>
           </div>
         
        </div>
      </div>
     </div>
  `;
  
      const itemsContainer = document.getElementById("Productos");
      itemsContainer.innerHTML += itemHTML;
     
  }//add
         
  addItem({'name':'Polainas Wilson 4lbs Unisex',
  'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
  'img2':'http://drive.google.com/uc?export=view&id=1rdT09m9EKex0HPvMjnWYRJdc5jT8PNA0',
  'img3':'http://drive.google.com/uc?export=view&id=1cOic-_-Cu02DawVFREE9IHd-Djwqnifx',
  'description':'Las Polainas Wilson tienen el peso extra para seguir fortaleciendo tus piernas y justo en los momentos de mayor intensidad. Cuenta con un diseño espectacular para amoldarse encima de los tobillos con comodidad. Guarda el equilibrio en la postura del avión para trabajar la fuerza en tus piernas al elevarlas, se sujetan de manera perfecta por un sistema de velcro para hacer los movimientos de mayor agilidad en tus prácticas deportivas.',
  'precio':'459.00',
  'categoria':'Accesorios',
  'id':'1'});
  
  addItem({'name':'Ligas Larga de Tensión Wilson',
  'img1':'http://drive.google.com/uc?export=view&id=1T_TB0qYH9hEf5S5QaQHEE6dwdwO1C1jt',
  'img2':'http://drive.google.com/uc?export=view&id=1x0AAA3PFBOw-RyOqZjXGxF45_i0-4X9Y',
  'img3':'http://drive.google.com/uc?export=view&id=1HNpib-2FesLNWkjtGWe3x1RIpbc9WfyM',
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
  'img2':'http://drive.google.com/uc?export=view&id=1YaAgm7hqKXMwW3u0wU-zj1cY8fx13s90',
  'img3':'http://drive.google.com/uc?export=view&id=1YbeP93PR42T64rTQJly3oMLrb-5-z-Tt',
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
  'img2':'http://drive.google.com/uc?export=view&id=1VriMvmcSa8Ey4D76Drwndk70UzFPpMdm',
  'img3':'http://drive.google.com/uc?export=view&id=1G56LxfX6fbd7BnqcKhDs5Y-VM5-tvBLj',
  'description':'Las Muñequeras Nike 2.5 lbs incrementan la carga cuando quieres realizar ejercicios en los musculos superiores del cuerpo, te ayuda con los ejercicios press en hombros y espalda, son perfectas para empezar a entrenar con un peso extra en tus manos, brazos.',
  'precio':'989',
  'categoria':'Accesorios',
  'id':'4'});
  
  addItem({'name':'Diadema deportiva',
  'img1':'http://drive.google.com/uc?export=view&id=1XPqZW0lsEY4RAlMwHs4NjkLlzA1mc4ze',
  'img2':'http://drive.google.com/uc?export=view&id=10tAb_Kjy66zUnOKCn_QBIN-dlqDTo8b6',
  'img3':'http://drive.google.com/uc?export=view&id=1Wg-XZHSFCfcF9jTAbrySj_E1I9Mxkm-H',
  'description':'Absorción de Sudor: Esta diadema deportiva absorbe y evapora el sudor más rápido que las diademas de algodón ordinarias, es un buen "asistente" durante el ejercico!. Tiene dos tiras antideslizantes de silicona incorporados para evitar que la diadema se deslice durante el ejercicio intenso, puede prevenir eficazmente que el sudor fluya hacia los ojos.',
  'precio':'189',
  'categoria':'Accesorios',
  'id':'5'});
  
  addItem({'name':'Top Nike Swoosh',
  'img1':'http://drive.google.com/uc?export=view&id=1wCdgjHBjN2X6qWlVN7UEbfkEMZu9xrCt',
  'img2':'http://drive.google.com/uc?export=view&id=1JhZHTh3BgBzzLmHPt-EEXfIw6_UN6P5Z',
  'img3':'http://drive.google.com/uc?export=view&id=1sEetZNiRMu1j3uF0TDg2RaTBqyisfppv',
  'description':'El Top Nike Swoosh tiene prácticamente lo que necesitas para llevar al gimnasio, lo puedes combinar de manera increíble con tus prendas de torso inferior como shorts, leggings, pantalones y capris. Tiene la comodidad para desempeñar tus entrenamientos de la parte superior con total ligereza para tu abdomen, bíceps, tríceps y espalda.',
  'precio':'649',
  'categoria':'Accesorios',
  'id':'6'});
  
  addItem({'name':'Mancuerna Lift 4 kg',
  'img1':'http://drive.google.com/uc?export=view&id=1GDmkgMOM79UWOAszQSEgtS2pmJ9tOZHp',
  'img2':'http://drive.google.com/uc?export=view&id=1zW7FJau4DoX8vcjSA8Z1uAf9LUfCMP_i',
  'img3':'http://drive.google.com/uc?export=view&id=1naYt_2giIUzf2RcbBrPZSO3Q38LXoSEt',
  'description':'La Mancuerna Lift Acero 4 kg no puede faltar en tu equipo de entrenamiento en los días de fortalecimiento de cualquier músculo. No dejes de prepararte a pesar de las adversidades, mantente activo con sencillas rutinas de ejercicio desde la comodidad y agregando un peso extra a tus rutinas. Tiene una agarradera metálica con un patrón grabado para mejorar la sujeción al momento de entrenar con ella. ',
  'precio':'400',
  'categoria':'Accesorios',
  'id':'7'});
  
  addItem({'name':'Muñequera deportiva Nike unisex',
  'img1':'http://drive.google.com/uc?export=view&id=1l-9Gw8WsOW0b30uw_qhynTRS5ofk8C3U',
  'img2':'http://drive.google.com/uc?export=view&id=1vAS49k9uTR9Jy-QOnyS-Z3kFcw2A3w9Q',
  'img3':'http://drive.google.com/uc?export=view&id=1X7kKfd10Gb7PzCrUOzgy1LSN_i_rcjd8',
  'description':'Utiliza la muñequera Nike como complemento de tus entrenamientos, ya que cuenta con el diseño básico de la pieza y su versátil tonalidad, será la opción ideal para tus looks. La muñequera Nike posee un diseño moderno, además de ciertos detalles que la distinguen como logotipo de la marca y ajuste perfecto a la muñeca por su maravillosa confección.',
  'precio':'519',
  'categoria':'Accesorios',
  'id':'8'});
  
  addItem({'name':'Balón de Fútbol Americano Wilson NFL Duke',
  'img1':'http://drive.google.com/uc?export=view&id=1p3cHnrcGyk7BtPzhXH6xcGKokhA3EKto',
  'img2':'http://drive.google.com/uc?export=view&id=1pq9zpEPe-lIsFbCJeY0y9Rdm96AiSKi-',
  'img3':'http://drive.google.com/uc?export=view&id=1raKZ8vTi6Gj-ppo7LLVE6Yl83C5-iwYb',
  'description':'Regresa The Duke al emparrillado. De 1941 a 1969 se le conoció al balón oficial de la NFL como The Duke gracias al antiguo dueño de los Gigantes de Nueva York, Wellington Mara. Consigue este tradicional balón Wilson, el oficial para la NFL. Histórico desde los inicios originales de la Liga de la NFL. Confeccionado a base de piel de ganado porcino y con el tamaño y la dimensión reglamentaria de la NFL para que juegues como los profesionales.',
  'precio':'3300',
  'categoria':'Accesorios',
  'id':'9'});
  
  addItem({'name':'Balón de Básquetbol Wilson NBA Forge Plus',
  'img1':'http://drive.google.com/uc?export=view&id=1FWK0asbBqULNSU9eH3i2Yw9nRvyjQQuk',
  'img2':'http://drive.google.com/uc?export=view&id=1n5wHTFTnPTeHnuQZUn9E8_xYLmukrxwx',
  'img3':'http://drive.google.com/uc?export=view&id=1ZuAT1OXZzpKgVBexeNNRD7rUvk30EwJB',
  'description':'Dalo todo por el todo en cada una de tus prácticas y partido con el Balón de Básquetbol Wilson NBA Forge Plus Unisex. Estupendo también para jugar con tus amigos y/o familia. Este material y cubierta ayudarán a que tengas un mejor agarre con tus manos y que el balón tenga una máxima durabilidad al nivel profesional.',
  'precio':'900',
  'categoria':'Accesorios',
  'id':'10'});
  
  // Calzado 

addItem({'name':'Tenis Adidas Ultimashow Hombre Fx3624',
'img1':'http://drive.google.com/uc?export=view&id=1LfN7i5fBDtELyRZOXBl4YMGydvBJQ_D2',
// 'img2':'http://drive.google.com/uc?export=view&id=1Ul7RHhQqXNa1Vic1he5tiIc4SkBrFFPp',
// 'img3':'http://drive.google.com/uc?export=view&id=1A9VYgOXfljEYV83k9SEK2Z-tNsaXVA3u',
'description':'Tenis de running para velocidad y estabilidad. Aíslate de las distracciones. Cuando te exiges al máximo solo piensas en tus movimientos y tu respiración. Nada más. Todo lo trivial desaparece. Muévete rápido. Muévete despacio. Lo importante es moverte. Toma el control con estos tenis de running adidas. Su diseño liviano con amortiguación está listo para acompañarte en tu próxima salida.',
'precio':'1,169',
'categoria':'Calzado',
'id':'11'});

addItem({'name':'Tenis Skechers Casual Dynamight 2.0 Azul',
'img1':'http://drive.google.com/uc?export=view&id=1BKKSj7S_eiRMPxoC21xdBWLkhcbevX3X',
// 'img2':'http://drive.google.com/uc?export=view&id=157iWj_GGsi8DB3D8A5_ynAF349XzAvYh',
// 'img3':'http://drive.google.com/uc?export=view&id=1gaTsU5oUzuyZ7FC4LON465WvR7JX-UfU',
'description':`Camina por las calles de la ciudad con un estilo único y la mejor comodidad usando los tenis Dynamight 2.0 Skechers. Su diseño es ideal para dar soporte y un ajuste a la medida mientras recorres nuevos caminos. Plantilla Memory Foam Proporciona mayor amortiguación en cada paso que das.
<ul>
<li>Cuello y lengüeta acolchados y resistentes para que puedas ponértelos fácilmente.</li>
<li>Modelo: 894046NVY</li>
<li>Plantilla Memory Foam </li>
</ul>`,
'precio':'2934',
'categoria':'Calzado',
'id':'12'});

addItem({'name':'Tenis Running Para Hombre Nike Revolution 6 Next Nature',
'img1':'http://drive.google.com/uc?export=view&id=1stSUSL4AmOp4ZhNYURVSglno8uy2iZEd',
// 'img2':'http://drive.google.com/uc?export=view&id=1lz7wjTCmtL7hZsbdJxznKXPIQLyeGUJs',
// 'img3':'http://drive.google.com/uc?export=view&id=1lacirVaxqP_NKamU2hPm4BK4bs3Tc76i',
'description':`COMODIDAD VERSÁTIL Y AMORTIGUACIÓN FLEXIBLE. Por nuevos comienzos.Marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature.Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave.Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso. Diseño simple La malla acolchada se coloca en el antepié y a lo largo del cuello para brindar una sensación de comodidad.`,
'precio':'1,119',
'categoria':'Calzado',
'id':'13'});

addItem({'name':'Tenis Mujer Nike Tanjun',
'img1':'http://drive.google.com/uc?export=view&id=1ycnNxBzw38Lk0Pn2AASXGtE9bCEbyN4U',
// 'img2':'http://drive.google.com/uc?export=view&id=1YR5WSXOqE6bB93FneADdx5uHC84VuPOd',
// 'img3':'http://drive.google.com/uc?export=view&id=1CzBl9HjL_J4a7szBLuXfCOI5EbZmfdO9',
'description':'El Nike Tanjun te brinda la máxima simplicidad. Confeccionado con al menos un 20% de contenido reciclado, este modelo no pasa ningún detalle por alto.Ligereza.Ventilación.Cómodidad.Son solo palabras.Este calzado es todo lo que necesitas. Beneficios - La parte superior está diseñada con materiales que se estiran y envuelven el pie para brindar una sensación personalizada que se adapta rápidamente. - La entresuela y la suela de espuma ofrecen una amortiguación ligera. El cuello acolchado de corte low luce elegante y se siente genial.',
'precio':'1,239',
'categoria':'Calzado',
'id':'14'});

addItem({'name':'Tenis Reebok Casual Rider V Negro',
'img1':'http://drive.google.com/uc?export=view&id=1TuZAdzXR0yMyQ0eUJRW2E_kibUL9PAAK',
// 'img2':'http://drive.google.com/uc?export=view&id=1jDHEwMuQXlxB0dimmMg5PegK1fkod6ar',
// 'img3':'http://drive.google.com/uc?export=view&id=1iMFgUtyL84wxxVW43A2y43MyQGTPRxaM',
'description':'El estilo del running de los años 90 se combina con detalles modernos en los tenis Rider V. Perfectos para lucir impecable en cualquier lugar y a todas horas gracias a su diseño actual que hacen de este par algo único en tu guardarropa. Tecnología FuelFoam Se compone de una entresuela que te proporciona una capacidad de respuesta óptima con cada paso. Detalles • Forro textil con capacidad de transpirar la humedad y que posee gran durabilidad. • Cierre con cordones para un ajuste cómodo y personalizado. • Corte bajo para mayor libertad de movimiento. • Suela de caucho resistente a la abrasión. • Modelo: GZ3112 • Color: Negro. Acerca de Reebok Reebok te brinda gran variedad de prendas para que puedas comenzar una vida activa y saludable, combinando lo último en moda con un rendimiento óptimo, revolucionando totalmente la manera de practicar tu deporte favorito.',
'precio':'1,119',
'categoria':'Calzado',
'id':'15'});

//Aparatos

addItem({'name':'Rueda Para Ejercicios Abdominales De Ejercicios 6 Piezas',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_808364-CBT46673270090_072021-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_600369-MLM43255270609_082020-F.webp',
'description':'Juego de ruedas de rodillos AB Incluye 1 rodillo AB de gran tamaño, 1 par de barras de flexión, 1 cuerda para saltar, 1 pinza de mano, 1 ejercitador de resorte y 1 almohadilla para las rodillas. Perfecto para principiantes y deportistas avanzados.',
'precio':'530.40',
'categoria':'Aparatos',
'id':'16'});

addItem({'name':'Gimnasio Weider Pro 6900 Aparato Ejercicio Multifuncional',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_665469-MLM48978648549_012022-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_840833-MLM48978698242_012022-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_929142-MLM48978677401_012022-F.webp',
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
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_893751-MLM49716095139_042022-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_677455-MLM49716024873_042022-F.webp',
'description':`- ¡ESCULPE tu cuerpo! Con el innovador aparato de ejercicio AB Rocket de CENTURFIT TONIFICA abdomen, brazos y piernas. Podrás realizar hasta 6 tipos de ejercicios, trabajando así todo el cuerpo.`,
'precio':'749',
'categoria':'Aparatos',
'id':'18'});

addItem({'name':'Aparato Ejercicio Ab Rocket Fortalecer Abdomen Fitness Tomic',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_798008-MLM31228424517_062019-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_935808-MLM31228423250_062019-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_606055-MLM31228356493_062019-F.webp',
'description':'¡Ideal para todas la EDADES! No importa tu complexión el AB Rocket de CENTURFIT está construido por un rebote de RESISTENCIA asistida, por lo que harás menos ESFUERZO y más quema de calorías.',
'precio':'639',
'categoria':'Aparatos',
'id':'19'});

addItem({'name':'Maquina Banco Aparato Ejercitador Abdominales Casa Yim Sport',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_934868-MLM50420109240_062022-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_912450-MLM50419895807_062022-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_873144-MLM50420032510_062022-F.webp',
'description':'Peso de resistencia de hasta 150 kg.',
'precio':'2,999',
'categoria':'Aparatos',
'id':'20'});

//Ropa
addItem({'name':'Conjunto Para Caballero Deportivo Sudadera Y Pants Sportwear',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_615042-CBT50341422605_062022-F.webp',
  // 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_950535-CBT50341534106_062022-F.webp',
  // 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_964648-CBT50341457571_062022-F.webp',
  'description':'Descripción 95 % poliéster, 5 % elastano, Importado, Cierre con cordón, Alta calidad: Material de poliéster ligero y de calidad cómoda con un diseño elegante, este chándal para hombre se adapta a todas las estaciones.',
  'precio':'489.40',
  'categoria':'Ropa',
  'id':'21'});
  
addItem({'name':'Conjunto De Ropa Deportiva Buyjya De Manga Corta Para Hombre',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_814834-CBT49299005645_032022-F.webp',
  // 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_781772-CBT49299005652_032022-F.webp',
  // 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_678806-CBT49299005666_032022-F.webp',
  'description':`Tela deportiva transpirable: hecha de tela con orificios, transpirable y no congestionada durante el uso diario y los deportes.`,
  'precio':'772',
  'categoria':'Ropa',
  'id':'22'});

addItem({'name':'Leggins Deportivos Dama De Licra Con Bolsa Celular Gym',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_865676-MLM47759707516_102021-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLM47741350353_102021-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_915728-MLM46253803648_062021-F.webp',
  'description':`Composición: Spandex`,
  'precio':'171',
  'categoria':'Ropa',
  'id':'23'});

addItem({'name':'Mangas Protectoras Para Brazos Protección Solar Uv 3 Pares',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_746605-MLM45233661522_032021-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_668680-MLM45422848038_042021-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_961436-MLM45422770995_042021-F.webp',
  'description':'Manga deportiva anti-ultravioleta de lycra con protección solar.',
  'precio':'139',
  'categoria':'Ropa',
  'id':'24'});

addItem({'name':'Playera Deportiva Gimnasio Spandex Ajuste Perfecto Camiseta',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_685515-CBT49346694646_032022-F.webp',
// 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_960022-CBT49346639787_032022-F.webp',
// 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_605768-CBT49346644822_032022-F.webp',
  'description':'Spandex/ Elástica para un Ajuste Perfecto.',
  'precio':'184',
  'categoria':'Ropa',
  'id':'25'});

  //Suplementos

  addItem({'name':'Proteína Sascha Fitness',
    'img1':'https://ss201.liverpool.com.mx/xl/1060748370.jpg',
    'description': 'Proteína aislada de suero de leche hidrolizada, saborizantes naturales y artificiales, mezcla de enzimas digestivas',
    'precio':'410',
    'categoria':'Suplementos',
  'id':'26'});
    
addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1113628649.jpg',
    'name': 'Biotina con colágeno Beyond',
    'precio': '410',
    'description': 'Biotin con Collagen Complex Beyond Vitamins contiene 15 ingredientes y vitaminas que complementan y potencian el funcionamiento del colágeno y biotina',
    'categoria':'Suplementos',
    'id':'27'});


addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1078276971.jpg',
    'name': 'Suplemento alimenticio Sascha',
    'precio': '850',
    'description': 'Incrementa el desempeño en el entrenamiento, mejora la composición corporal, ayuda a quemar grasa y protege la masa muscular',
    'categoria':'Suplementos',
  'id':'28'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1113628622.jpg',
    'name': 'Multivitamínico Beyond',
    'precio': '320',
    'description': 'Diseñado específicamente para las mujeres, el multivitamínico para mujeres',
    'categoria':'Suplementos',
  'id':'29'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1060748388.jpg',
    'name': 'Proteína Sascha - mani',
    'precio': '820',
    'description': 'Excelente como refrigerio, comida antes o después de un entrenamiento. Fácil de mezclar',
    'categoria':'Suplementos',
  'id':'30'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1078276947.jpg',
    'name': 'Suplemento alimenticio - piña',
    'precio': '380',
    'description': 'Alta concentración en citrulina, mejorando el rendimiento y síntesis de carnosina, lo que permite mayor esfuerzo',
    'categoria':'Suplementos',
  'id':'31'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1117519798.jpg',
    'name': 'Proteína workout - manzana',
    'precio': '350',
    'description': 'Alta concentración en citrulina, mejorando el rendimiento y síntesis de carnosina, lo que permite mayor esfuerzo',
    'categoria':'Suplementos',
  'id':'32'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1101651815_1p.jpg',
    'name': 'Suplemento deportivo Dextro Energy',
    'precio': '620',
    'description': ' Pastillas efervescentes para preparar bebida de electrolitos con gran sabor, una excelente alternativa para hidratarte',
    'categoria':'Suplementos',
  'id':'33'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1120992810.jpg',
    'name': 'Creatina Food & Nutrition',
    'precio': '500',
    'description': 'Fórmula concentrada de Creatina para integrarla en bebidas o malteadas nutricionales',
    'categoria':'Suplementos',
  'id':'34'});

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1121419447.jpg',
    'name': 'Suplemento alimenticio Andes',
    'precio': '150',
    'description': 'Aumenta el nivel inmune del cuerpo. Suplemento alimenticio perfecto para deportistas',
    'categoria':'Suplementos',
  'id':'35'});
  
  
      }); //Enviar
  