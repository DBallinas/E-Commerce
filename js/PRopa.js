let catRopa=document.getElementById("info-outlined");


let Limpia=document.getElementById("Body");
catRopa.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


        let Categoria="Ropa";
        console.log(Categoria)

    function addItem(item){
    console.log(Categoria);
    if(Categoria==item.categoria)
    {
      console.log(item.categoria);
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
}//add

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

}); //Enviar