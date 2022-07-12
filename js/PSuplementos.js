// VAMOS POR EL ELEMENTO QUE CONTIENE LA CATEGORIA DE SUPLEMENTOS EN EL HTML
let catSuplementos=document.getElementById("secondary-outlined");
// CUANDO ES SELECCIONADO SE MUESTRA EL SIGUIENTE EVENTO CON LA CATEGORIA DE SUPLEMENTOS
catSuplementos.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


       let Categoria="Suplementos";
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
/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/