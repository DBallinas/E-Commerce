class navcomponent extends HTMLElement{  //Se define el nombre del componente como ejemplo lo llamamos navcomponent, se hace una extención de la clase de HTMLelement
    constructor(){ //Se crea un constructor
        super(); //llama al super de la clase HTMLElement
    }
    connectedCallback(){ //Creación del método connectedcallback, trae el html contenido en el inner
        this.innerHTML = 
      `<nav class="navbar navbar-expand-lg navbar-dark nav-menu" style="background-color: #50CCFF;">
        <div class="container-fluid">
          <a class="navbar-brand" href="../../index.html"><img src="../../img/G-SPORTS-LOGO.png" width="200px" alt="logo-gsports"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav" class="navbar-nav me-auto mt-4 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="../../index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="../../categorias/lanzamientos.html">Lanzamientos</a>
              </li>
              <li class="nav-item">
              <a class="nav-link text-white" href="../../categorias/todoslosproductos.html">Productos</a>
            </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="../../categorias/rebajas.html">Rebajas</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Nosotros
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="nav"><a class="dropdown-item text-black" href="../../about-us.html">Nosotros</a></li>
                  <li><a class="dropdown-item text-black" href="../../contact.html">Contacto</a></li>
                  <li><a class="dropdown-item text-black" href="../../preguntasfrecuentes.html">Preguntas frecuentes</a></li>
                  <li><a class="dropdown-item text-black" href="../RegistroUsuarios/RegistroUsuarios.html">Regístrate</a></li>
                  </ul>
              </li>
            </ul>
            <form class="d-flex align-items-center mt-8 mb-2">
              <input class="form-control form-control-sm me-2 mt-1 mb-0" type="search" placeholder="Buscar productos" aria-label="Search">
              <a><i id="btn1" class="bi bi-search mt-5 mb-0 ms-1 text-white"></i></a>
              <a href="../iniciodesesion.html"><i id="btn2" class="bi bi-person mt-5 mb-0 ms-5 text-white h2"></i></a>
              <a href="../carrito.html"><i id="btn3" class="bi bi-cart2 mt-5 mb-0 ms-3 me-5 h3 text-white"></i></a>
              </form>
          </div>
        </div>
      </nav>
      <!--FIN DE BARRA DE NAVEGACIÓN-->`;
    }
}

window.customElements.define("nav-component", navcomponent);
//api customelement, se define el componente, entre paréntesis el nombre que queramos y después el nombre de la clase