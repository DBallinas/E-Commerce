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
  
}
addItem({'name':'Mancuerna Lift 4 kg',
'img1':'http://drive.google.com/uc?export=view&id=1GDmkgMOM79UWOAszQSEgtS2pmJ9tOZHp',
'img2':'http://drive.google.com/uc?export=view&id=1zW7FJau4DoX8vcjSA8Z1uAf9LUfCMP_i',
'img3':'http://drive.google.com/uc?export=view&id=1naYt_2giIUzf2RcbBrPZSO3Q38LXoSEt',
'description':'La Mancuerna Lift Acero 4 kg no puede faltar en tu equipo de entrenamiento en los días de fortalecimiento de cualquier músculo. No dejes de prepararte a pesar de las adversidades, mantente activo con sencillas rutinas de ejercicio desde la comodidad y agregando un peso extra a tus rutinas. Tiene una agarradera metálica con un patrón grabado para mejorar la sujeción al momento de entrenar con ella. ',
'precio':'400',
'categoria':'Accesorios',
'id':'7'});

addItem({'name':'Conjunto Para Caballero Deportivo Sudadera Y Pants Sportwear',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_615042-CBT50341422605_062022-F.webp',
  // 'img2':'https://http2.mlstatic.com/D_NQ_NP_2X_950535-CBT50341534106_062022-F.webp',
  // 'img3':'https://http2.mlstatic.com/D_NQ_NP_2X_964648-CBT50341457571_062022-F.webp',
  'description':'Descripción 95 % poliéster, 5 % elastano, Importado, Cierre con cordón, Alta calidad: Material de poliéster ligero y de calidad cómoda con un diseño elegante, este chándal para hombre se adapta a todas las estaciones.',
  'precio':'489.40',
  'categoria':'Ropa',
  'id':'21'});

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

addItem({'name':'Tenis Reebok Casual Rider V Negro',
'img1':'http://drive.google.com/uc?export=view&id=1TuZAdzXR0yMyQ0eUJRW2E_kibUL9PAAK',
// 'img2':'http://drive.google.com/uc?export=view&id=1jDHEwMuQXlxB0dimmMg5PegK1fkod6ar',
// 'img3':'http://drive.google.com/uc?export=view&id=1iMFgUtyL84wxxVW43A2y43MyQGTPRxaM',
'description':'El estilo del running de los años 90 se combina con detalles modernos en los tenis Rider V. Perfectos para lucir impecable en cualquier lugar y a todas horas gracias a su diseño actual que hacen de este par algo único en tu guardarropa. Tecnología FuelFoam Se compone de una entresuela que te proporciona una capacidad de respuesta óptima con cada paso. Detalles • Forro textil con capacidad de transpirar la humedad y que posee gran durabilidad. • Cierre con cordones para un ajuste cómodo y personalizado. • Corte bajo para mayor libertad de movimiento. • Suela de caucho resistente a la abrasión. • Modelo: GZ3112 • Color: Negro. Acerca de Reebok Reebok te brinda gran variedad de prendas para que puedas comenzar una vida activa y saludable, combinando lo último en moda con un rendimiento óptimo, revolucionando totalmente la manera de practicar tu deporte favorito.',
'precio':'1,119',
'categoria':'Calzado',
'id':'15'});

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