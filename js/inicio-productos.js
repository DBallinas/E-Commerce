document.body.style.backgroundImage = itemHTML

function addItem(item){

    const itemHTML =     `
    <img src="${item.img1}" class="d-block w-100" alt="...">
`;



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