function addItem(item){

    const itemHTML =     `  <div class="col d-flex justify-content-around mt-4">
    <img class="fotos"
      src="${item.img1}"
      width="80px">
    <div class="ms-5 mt-3">
      <p>${item.name}</p>
    </div>
    <div class="ms-5 mt-3">
      <p>1</p>
    </div>
    <div class="ms-5 mt-3">
      <p>$${item.precio}</p>
    </div>
  </div>
`;



    const itemsContainer = document.getElementById("lista");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Polainas Wilson 4lbs Unisex',
    'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
    'precio':'420'});
    
addItem({'name':'Ligas Larga de Tensión Wilson',
    'img1':'http://drive.google.com/uc?export=view&id=1T_TB0qYH9hEf5S5QaQHEE6dwdwO1C1jt',
    'precio':'200'});

document.getElementById('comprar').addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: '¡COMPRA EXITOSA!',
        showConfirmButton: false,
        timer: 2000
      })
})
      