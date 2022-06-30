function addItem(item){

    const itemHTML =     `  <div class="col" id="tamañocarrusel">
    <div class="card h-100">
    
  
    
    <img src="${item.img1}" class="d-block w-100" alt="...">
  
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
  
  addItem({'name':'Proteína Sascha Fitness',
    'img1':'https://ss201.liverpool.com.mx/xl/1060748370.jpg',
    'description': 'Proteína aislada de suero de leche hidrolizada, saborizantes naturales y artificiales, mezcla de enzimas digestivas',
    'precio':'410'});
    
addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1113628649.jpg',
    'name': 'Biotina con colágeno Beyond',
    'precio': '410',
    'description': 'Biotin con Collagen Complex Beyond Vitamins contiene 15 ingredientes y vitaminas que complementan y potencian el funcionamiento del colágeno y biotina'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1078276971.jpg',
    'name': 'Suplemento alimenticio Sascha',
    'precio': '850',
    'description': 'Incrementa el desempeño en el entrenamiento, mejora la composición corporal, ayuda a quemar grasa y protege la masa muscular'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1113628622.jpg',
    'name': 'Multivitamínico Beyond',
    'precio': '320',
    'description': 'Diseñado específicamente para las mujeres, el multivitamínico para mujeres'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1060748388.jpg',
    'name': 'Proteína Sascha - mani',
    'precio': '820',
    'description': 'Excelente como refrigerio, comida antes o después de un entrenamiento. Fácil de mezclar'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1078276947.jpg',
    'name': 'Suplemento alimenticio - piña',
    'precio': '380',
    'description': 'Alta concentración en citrulina, mejorando el rendimiento y síntesis de carnosina, lo que permite mayor esfuerzo'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1117519798.jpg',
    'name': 'Proteína workout - manzana',
    'precio': '350',
    'description': 'Alta concentración en citrulina, mejorando el rendimiento y síntesis de carnosina, lo que permite mayor esfuerzo'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1101651815_1p.jpg',
    'name': 'Suplemento deportivo Dextro Energy',
    'precio': '620',
    'description': ' Pastillas efervescentes para preparar bebida de electrolitos con gran sabor, una excelente alternativa para hidratarte'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1120992810.jpg',
    'name': 'Creatina Food & Nutrition',
    'precio': '500',
    'description': 'Fórmula concentrada de Creatina para integrarla en bebidas o malteadas nutricionales'
})

addItem({
    'img1': 'https://ss201.liverpool.com.mx/xl/1121419447.jpg',
    'name': 'Suplemento alimenticio Andes',
    'precio': '150',
    'description': 'Aumenta el nivel inmune del cuerpo. Suplemento alimenticio perfecto para deportistas'
})
  
  
  
      