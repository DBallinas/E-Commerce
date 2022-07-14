function addItem(item){

    const itemHTML =     `  <div class="col d-flex justify-content-around mt-4">
    <img class="fotos"
      src="${item.img1}"
      width="80px">
    <div class="ms-5 mt-3">
      <h6>${item.name}</h6>
    </div>
    <div class="ms-5 mt-3">
        <input id=${item.name} type="number" value=${item.cantidad} class="form-control">
    </div>
    <div class="ms-5 mt-3">
      <h6 class="mt-2">$${item.precio}</h6>
    </div>
  </div>
`;

    const itemsContainer = document.getElementById("lista");
    itemsContainer.innerHTML += itemHTML;

}


let carrito = [
  {
  'name':'Polainas Wilson 4lbs Unisex',
  'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
  'cantidad': '1',
  'precio':'420'},
  {
  'name':'Ligas Larga de Tensión Wilson',
    'img1':'http://drive.google.com/uc?export=view&id=1T_TB0qYH9hEf5S5QaQHEE6dwdwO1C1jt',
    'cantidad': '1',
    'precio':'200'}
]

carrito.forEach(element => {
  addItem(element)
});


document.getElementById('comprar').addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    imageUrl: 'https://drive.google.com/uc?export=view&id=13-aMfa2IqZ33nGEExl5e5gP6bw46TSeJ',
    imageHeight: 400,
    title: 'Vendido!',
    imageAlt: 'A tall image'
    
    
  })
})
      