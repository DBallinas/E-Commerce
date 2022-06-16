class navcomponent extends HTMLElement{  //Se define el nombre del componente como ejemplo lo llamamos navcomponent, se hace una extención de la clase de HTMLelement
    constructor(){ //Se crea un constructor
        super(); //llama al super de la clase HTMLElement
    }
    connectedCallback(){ //Creación del método connectedcallback, trae el html contenido en el inner
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark nav-menu" style="background-color: #50CCFF;">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><img src="./img/G-SPORTS-LOGO.png" width="200px" alt="logo-gsports"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./colecciones/lanzamientos.html">Lanzamientos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="./colecciones/calzado/calzado.html">Calzado</a></li>
                  <li><a class="dropdown-item" href="./colecciones/ropa/ropa.html">Ropa</a></li>
                  <li><a class="dropdown-item" href="./colecciones/aparatos/aparatos.html">Aparatos</a></li>
                  <li><a class="dropdown-item" href="./colecciones/accesorios/accesorios.html">Accesorios</a></li>
                  <li><a class="dropdown-item" href="./colecciones/suplementos/suplementos.html">Suplementos</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="./colecciones/todoslosproductos1.html">Ver todo</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./colecciones/rebajas.html">Rebajas</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Nosotros
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="./about-us.html">Nosotros</a></li>
                  <li><a class="dropdown-item" href="./contact.html">Contacto</a></li>
                  <li><a class="dropdown-item" href="./preguntasfrecuentes.html">Preguntas frecuentes</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search">
              <button class="btn btn-outline-success  border-white text-white" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      <!--FIN DE BARRA DE NAVEGACIÓN-->`;
    }
}

window.customElements.define("nav-component", navcomponent);
//api customelement, se define el componente, entre paréntesis el nombre que queramos y después el nombre de la clase