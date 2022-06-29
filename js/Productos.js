function addItem(item){

    const itemHTML =     `  <div class="col" id="tamañocarrusel">
    <div class="card h-100">
     
    <div id="carouselExampleIndicators" class="carousel  carousel-dark slide" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${item.img1}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${item.img2}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${item.img3}" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
       </div>
        <div class="card-footer">
           <div class="d-flex justify-content-between align-items-center">
           <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-szecondary">Agregar al carrito</button>
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

addItem({'name':'Polainas Wilson 4lbs Unisex',
    'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
    'img2':'http://drive.google.com/uc?export=view&id=1rdT09m9EKex0HPvMjnWYRJdc5jT8PNA0',
    'img3':'http://drive.google.com/uc?export=view&id=1cOic-_-Cu02DawVFREE9IHd-Djwqnifx',
    'description':'Las Polainas Wilson tienen el peso extra para seguir fortaleciendo tus piernas y justo en los momentos de mayor intensidad. Cuenta con un diseño espectacular para amoldarse encima de los tobillos con comodidad. Guarda el equilibrio en la postura del avión para trabajar la fuerza en tus piernas al elevarlas, se sujetan de manera perfecta por un sistema de velcro para hacer los movimientos de mayor agilidad en tus prácticas deportivas.',
    'precio':'459.00'});
    
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
    'precio':'235.00'});

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
    'precio':'2800'});

addItem({'name':'Muñequeras Nike 2.5 lbs Unisex',
    'img1':'http://drive.google.com/uc?export=view&id=14pxmSrRbnWMrR-stiZMb_3xgrbMg-UJQ',
    'img2':'http://drive.google.com/uc?export=view&id=1VriMvmcSa8Ey4D76Drwndk70UzFPpMdm',
    'img3':'http://drive.google.com/uc?export=view&id=1G56LxfX6fbd7BnqcKhDs5Y-VM5-tvBLj',
    'description':'Las Muñequeras Nike 2.5 lbs incrementan la carga cuando quieres realizar ejercicios en los musculos superiores del cuerpo, te ayuda con los ejercicios press en hombros y espalda, son perfectas para empezar a entrenar con un peso extra en tus manos, brazos.',
    'precio':'989'})

addItem({'name':'Diadema deportiva',
    'img1':'http://drive.google.com/uc?export=view&id=1XPqZW0lsEY4RAlMwHs4NjkLlzA1mc4ze',
    'img2':'http://drive.google.com/uc?export=view&id=10tAb_Kjy66zUnOKCn_QBIN-dlqDTo8b6',
    'img3':'http://drive.google.com/uc?export=view&id=1Wg-XZHSFCfcF9jTAbrySj_E1I9Mxkm-H',
    'description':'Absorción de Sudor: Esta diadema deportiva absorbe y evapora el sudor más rápido que las diademas de algodón ordinarias, es un buen "asistente" durante el ejercico!. Tiene dos tiras antideslizantes de silicona incorporados para evitar que la diadema se deslice durante el ejercicio intenso, puede prevenir eficazmente que el sudor fluya hacia los ojos.',
    'precio':'189'});

addItem({'name':'Top Nike Swoosh',
    'img1':'http://drive.google.com/uc?export=view&id=1wCdgjHBjN2X6qWlVN7UEbfkEMZu9xrCt',
    'img2':'http://drive.google.com/uc?export=view&id=1JhZHTh3BgBzzLmHPt-EEXfIw6_UN6P5Z',
    'img3':'http://drive.google.com/uc?export=view&id=1sEetZNiRMu1j3uF0TDg2RaTBqyisfppv',
    'description':'El Top Nike Swoosh tiene prácticamente lo que necesitas para llevar al gimnasio, lo puedes combinar de manera increíble con tus prendas de torso inferior como shorts, leggings, pantalones y capris. Tiene la comodidad para desempeñar tus entrenamientos de la parte superior con total ligereza para tu abdomen, bíceps, tríceps y espalda.',
    'precio':'649'});

    addItem({'name':'Mancuerna Lift 4 kg',
    'img1':'http://drive.google.com/uc?export=view&id=1GDmkgMOM79UWOAszQSEgtS2pmJ9tOZHp',
    'img2':'http://drive.google.com/uc?export=view&id=1zW7FJau4DoX8vcjSA8Z1uAf9LUfCMP_i',
    'img3':'http://drive.google.com/uc?export=view&id=1naYt_2giIUzf2RcbBrPZSO3Q38LXoSEt',
    'description':'La Mancuerna Lift Acero 4 kg no puede faltar en tu equipo de entrenamiento en los días de fortalecimiento de cualquier músculo. No dejes de prepararte a pesar de las adversidades, mantente activo con sencillas rutinas de ejercicio desde la comodidad y agregando un peso extra a tus rutinas. Tiene una agarradera metálica con un patrón grabado para mejorar la sujeción al momento de entrenar con ella. ',
    'precio':'400'});

    addItem({'name':'Muñequera deportiva Nike unisex',
    'img1':'http://drive.google.com/uc?export=view&id=1l-9Gw8WsOW0b30uw_qhynTRS5ofk8C3U',
    'img2':'http://drive.google.com/uc?export=view&id=1vAS49k9uTR9Jy-QOnyS-Z3kFcw2A3w9Q',
    'img3':'http://drive.google.com/uc?export=view&id=1X7kKfd10Gb7PzCrUOzgy1LSN_i_rcjd8',
    'description':'Utiliza la muñequera Nike como complemento de tus entrenamientos, ya que cuenta con el diseño básico de la pieza y su versátil tonalidad, será la opción ideal para tus looks. La muñequera Nike posee un diseño moderno, además de ciertos detalles que la distinguen como logotipo de la marca y ajuste perfecto a la muñeca por su maravillosa confección.',
    'precio':'519'});

    addItem({'name':'Balón de Fútbol Americano Wilson NFL Duke',
    'img1':'http://drive.google.com/uc?export=view&id=1p3cHnrcGyk7BtPzhXH6xcGKokhA3EKto',
    'img2':'http://drive.google.com/uc?export=view&id=1pq9zpEPe-lIsFbCJeY0y9Rdm96AiSKi-',
    'img3':'http://drive.google.com/uc?export=view&id=1raKZ8vTi6Gj-ppo7LLVE6Yl83C5-iwYb',
    'description':'Regresa The Duke al emparrillado. De 1941 a 1969 se le conoció al balón oficial de la NFL como The Duke gracias al antiguo dueño de los Gigantes de Nueva York, Wellington Mara. Consigue este tradicional balón Wilson, el oficial para la NFL. Histórico desde los inicios originales de la Liga de la NFL. Confeccionado a base de piel de ganado porcino y con el tamaño y la dimensión reglamentaria de la NFL para que juegues como los profesionales.',
    'precio':'3300'});

    addItem({'name':'Balón de Básquetbol Wilson NBA Forge Plus',
    'img1':'http://drive.google.com/uc?export=view&id=1FWK0asbBqULNSU9eH3i2Yw9nRvyjQQuk',
    'img2':'http://drive.google.com/uc?export=view&id=1n5wHTFTnPTeHnuQZUn9E8_xYLmukrxwx',
    'img3':'http://drive.google.com/uc?export=view&id=1ZuAT1OXZzpKgVBexeNNRD7rUvk30EwJB',
    'description':'Dalo todo por el todo en cada una de tus prácticas y partido con el Balón de Básquetbol Wilson NBA Forge Plus Unisex. Estupendo también para jugar con tus amigos y/o familia. Este material y cubierta ayudarán a que tengas un mejor agarre con tus manos y que el balón tenga una máxima durabilidad al nivel profesional.',
    'precio':'900'});



      