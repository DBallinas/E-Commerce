function addItem(item){

    const itemHTML =     `<section class="section-products">
	<div class="container">
			<div class="row justify-content-center text-center">
					<div class="col-md-8 col-lg-6">
							<div class="header">
									<h2>Productos recomendados</h2>
							</div>
					</div>
			</div>
			<div class="row">
				
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-1" class="single-product">
									<div class="part-1">
										<img src="https://m.media-amazon.com/images/I/71sRTA09UXL._AC_UL480_FMwebp_QL65_.jpg" alt="">
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Mancuernas</h3>
											<h4 class="product-price">$400</h4>
									</div>
							</div>
					</div>
			
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-2" class="single-product">
									<div class="part-1">
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Juego de pesas con soporte</h3>
											<h4 class="product-price">$644</h4>
									</div>
							</div>
					</div>
			
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-3" class="single-product">
									<div class="part-1">
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Set de 6 mancuernas de Neopreno</h3>
											<h4 class="product-price">$1,299.00</h4>
									</div>
							</div>
					</div>
				
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-4" class="single-product">
									<div class="part-1">
											<span class="new">new</span>
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Creatina Monohidratada</h3>
											<h4 class="product-price">$499</h4>
									</div>
							</div>
					</div>
				
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-5" class="single-product">
									<div class="part-1">
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Gorra blanca xd</h3>
											<h4 class="product-price">$587</h4>
									</div>
							</div>
					</div>
				
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-6" class="single-product">
									<div class="part-1">
											<span class="discount">15% menos, para que bajes las lonjas</span>
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Tayga USA 25lb</h3>
											<h4 class="product-price">$499.99</h4>
									</div>
							</div>
					</div>
					
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-7" class="single-product">
									<div class="part-1">
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Barra de acero</h3>
											<h4 class="product-price">$1,200</h4>
									</div>
							</div>
					</div>
					
					<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-8" class="single-product">
									<div class="part-1">
											<span class="new">Nuevo</span>
											<ul>
													<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
											</ul>
									</div>
									<div class="part-2">
											<h3 class="product-title">Discos y barra de acero</h3>
											<h4 class="product-price">$2,540</h4>
									</div>
							</div>
					</div>
			</div>
	</div>
</section>

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