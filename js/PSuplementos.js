let catSuplementos=document.getElementById("secondary-outlined");

catSuplementos.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


       let Categoria="Suplementos";
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