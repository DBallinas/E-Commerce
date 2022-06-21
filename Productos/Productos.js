function addItem(item){
    const itemHTML =     `<div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${item.img}" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" style="height: 225px; width: 100%; display: block;"  data-holder-rendered="true">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Agrgar al Carrito</button>
          </div><br/>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`
    
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Tenis adidas Ultimashow Hombre Fx3624',
    'img':'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb8c0bf24c6649519afcab4a009f4e10_9366/Tenis_Ultimashow_Negro_FX3624_01_standard.jpg',
    'description':'Tenis de running para velocidad y estabilidad. Aíslate de las distracciones. Cuando te exiges al máximo solo piensas en tus movimientos y tu respiración. Nada más. Todo lo trivial desaparece. Muévete rápido.  Muévete despacio. Lo importante es moverte. Toma el control con estos tenis de running adidas. Su diseño liviano con amortiguación está listo para acompañarte en tu próxima salida.'});
    
addItem({'name':'Tenis De Running Para Hombre Nike Revolution 6 Next Nature',
    'img':'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7df57edf-bdc6-4320-a956-8ce37228cd1d/calzado-de-running-en-carretera-revolution-6-next-nature-w6NVbd.png',
    'description':'Por nuevos comienzos.Marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature.Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave.Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso. Diseño simple: La malla acolchada se coloca en el antepié y a lo largo del cuello para brindar una sensación de comodidad.Las pieles adicionales aportan mayor durabilidad. Más flexibilidad La entresuela de espuma aporta una pisada más suave que la del Revolution 5.La suela cuenta con un diseño generado por computadora que crea un efecto de pistón natural mientras corres, lo que proporciona más amortiguación y flexibilidad.'});

addItem({'name':'Tenis De Cancha Dura Para Hombre Nikecourt Zoom Lite 3',
    'img':'https://http2.mlstatic.com/D_NQ_NP_639465-MLM48658946781_122021-O.webp',
    'description':'Ofrece el rendimiento que necesitas para jugar como nunca con la unidad Zoom Air elástica en el antepié, la suela con agarre y el cuello acolchado e increíblemente cómodo.'})

addItem({'name':'Tenis Para Mujer Nike Tanjun',
    'img':'https://http2.mlstatic.com/D_NQ_NP_2X_955525-MLM48743059727_012022-F.webp',
    'description':'Ligereza.Ventilación.Cómodidad.Son solo palabras.Este calzado es todo lo que necesitas.'})

addItem({'name':'Tenis Reebok Casual Rider V Negro',
    'img':'https://assets.reebok.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ab1a8d97f804d0ebd7aaddc01517810_9366/Tenis_Rider_V_Negro_GZ3112_01_standard.jpg',
    'description':'Desde el amanecer hasta el crepúsculo, mantén tu look impecable con estos tenis Reebok Rider V. Inspirado en el rango de running de los 90 y 2000, este par te ofrece comodidad y un diseño futurista. '});
   
    addItem({'name':'Yes4All Mancuernas Ajustables de 102, 50, 52,5, de 60 A 47,63 kg',
    'img':'https://m.media-amazon.com/images/I/81CIL-7+n3L._AC_SX569_.jpg',
    'description':'Juego de 2 mancuernas – 50 libras en total: dos asas de 14 x 1 pulgada, cuatro platos de 3 libras, cuatro platos de 7 libras, cuatro collares'});

    addItem({'name':'PASYOU Banco de pesas ajustable de cuerpo completo, multiusos, plegable, inclinable, para ejercicios de declinación, para gimnasio en casa',
    'img':'https://m.media-amazon.com/images/I/614Gi5ffPbL._AC_SX569_.jpg',
    'description':'Diseño totalmente ajustable: diseñado con 7 posiciones de espalda para satisfacer todas tus necesidades al hacer entrenamientos, puedes realizar una serie de ejercicios de parte superior e inferior del cuerpo mientras incorporas el uso de mancuernas para alcanzar objetivos y construir y mantener los músculos.'});

    addItem({'name':'E-G Rueda de Ejercicio Para Abdominales Rueda de Ejercicio Abdominal Redonda Abdomen Wheel Soporte Rodilla para el Entrenamiento de la Fuerza Central del Cuerpo',
    'img':'https://m.media-amazon.com/images/I/41fMR72XC6L._AC_.jpg',
    'description':' Rueda de ejercicio para abdominales Con esta Rueda de ejercicio para abdominales obtendrás un entrenamiento completo'});

    addItem({'name':'VitalBotanics Pre Workout. Potencia tu Rutina y Entrenamiento en el Gym con L Carnitina + Cafeína + Guarana + Te verde + Cayena. 200 capsulas [6 meses]. Suplemento Multivitamínico para Deportistas Pre Entreno',
    'img':'https://blife.mx/wp-content/uploads/2020/01/Ashwagandha-Dia-del-Padre-30-Off.png.webp',
    'description':'¡Lleva tu rutina de entrenamiento al máximo con Pre Workout de VitalBotanics! Nuestro suplemento de pre entreno con ingredientes como l carnitina, guarana y cafeina aportara multiples beneficios a tu organismo a la hora de realizar actividad física, tales como proteger el sistema muscular, mejorar la eficacia del uso de oxígeno, acelerar el metabolismo y ayudar a reducir los niveles de azúcares y grasas en sangre'});

addItem({'name':'Svelfik Set de Pesas Mancuernas Hexagonales de 10 Libras Recubrimiento de Caucho Alta Calidad Ideal Ejercicio Gym En Casa',
    'img':'https://m.media-amazon.com/images/I/51n7MuxA0fL._AC_SX569_.jpg',
    'description':'Perfectas para entrenamiento de resistencia'});
