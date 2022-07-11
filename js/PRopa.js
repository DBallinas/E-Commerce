// VAMOS POR EL ELEMENTO QUE CONTIENE LA CATEGORIA DE ROPA EN EL HTML
let catRopa=document.getElementById("info-outlined");
// CUANDO ES SELECCIONADO SE MUESTRA EL SIGUIENTE EVENTO CON LA CATEGORIA DE ROPA
let Limpia=document.getElementById("Body");
catRopa.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";
  
        let Categoria="Ropa";
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

addItem({'name':'Conjunto Para Caballero Deportivo Sudadera Y Pants Sportwear',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_615042-CBT50341422605_062022-F.webp',
  'description':'Descripción 95 % poliéster, 5 % elastano, Importado, Cierre con cordón, Alta calidad: Material de poliéster ligero y de calidad cómoda con un diseño elegante, este chándal para hombre se adapta a todas las estaciones.',
  'precio':'489.40',
  'categoria':'Ropa',
  'id':'21'});
  
addItem({'name':'Conjunto De Ropa Deportiva Buyjya De Manga Corta Para Hombre',
  'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_814834-CBT49299005645_032022-F.webp',
  'description':`Tela deportiva transpirable: hecha de tela con orificios, transpirable y no congestionada durante el uso diario y los deportes.`,
  'precio':'772',
  'categoria':'Ropa',
  'id':'22'});

addItem({'name':'Leggins Deportivos Dama De Licra Con Bolsa Celular Gym',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_865676-MLM47759707516_102021-F.webp',
  'description':`Composición: Spandex`,
  'precio':'171',
  'categoria':'Ropa',
  'id':'23'});

addItem({'name':'Mangas Protectoras Para Brazos Protección Solar Uv 3 Pares',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_746605-MLM45233661522_032021-F.webp',
  'description':'Manga deportiva anti-ultravioleta de lycra con protección solar.',
  'precio':'139',
  'categoria':'Ropa',
  'id':'24'});

addItem({'name':'Playera Deportiva Gimnasio Spandex Ajuste Perfecto Camiseta',
'img1':'https://http2.mlstatic.com/D_NQ_NP_2X_685515-CBT49346694646_032022-F.webp',
  'description':'Spandex/ Elástica para un Ajuste Perfecto.',
  'precio':'184',
  'categoria':'Ropa',
  'id':'25'});
}); //Enviar

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/