class footercomponent extends HTMLElement{  //Se define el nombre del componente como ejemplo lo llamamos navcomponent, se hace una extención de la clase de HTMLelement
    constructor(){ //Se crea un constructor
        super(); //llama al super de la clase HTMLElement
    }
    connectedCallback(){ //Creación del método connectedcallback, trae el html contenido en el inner
        this.innerHTML = `<footer class="footer">
        <div class="container">
          <div class="footer__copyright text-center ">
            <img src="./img/G-SPORTS-LOGO.png" width="200px" alt="logo-gsports">
            <nav class="row">
              <div class="col">
                <h3>Info</h3>
                <a href="./about-us.html">
                  <p>Acerca de nosotros</p>
                </a>
                <a href="./contact.html">
                  <p>contacto</p>
                </a>
                <a href="./politicaprivacidad.html">
                  <p>Política de Privacidad</p>
                </a>
                <a href="./terminosdeservicio.html">
                  <p>Términos de servicio</p>
                </a>
                <a href="./politicadeenvios.html">
                  <p>Política de Envíos</p>
                </a>
                <a href="./politicadedevolucion.html">
                  <p>Políticas de devolución</p>
                </a>
                <a href="./politicadereembolso.html">
                  <p>Política de reembolso</p>
                </a>
              </div>
              <div class="col">
                <H5>G-SPORTS somos una tienda de artículos deportivos donde encontrarás los mejores productos al mejor
                  precio.</H5>
                <h5>¡La nueva Generación en deportes!</h5></br>
                <p>¡Síguenos en nuestras redes sociales!</p>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="./img/iconredes/facebook-icon.png" width="13%" alt="logo-facebook"></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="./img/iconredes/instagram-icon.png" width="13%" alt="logo-instagram"></a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="./img/iconredes/whatsapp-icon.png" width="13%" alt="logowhatsapp"></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img src="./img/iconredes/twitter-icon.png" width="13%" alt="logo-twitter"></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img src="./img/iconredes/youtube-icon.png" width="13%" alt="logo-youtube"></a>
                  <img src="./img/metodos-pago.png" width="100%">
              </div>
              </br>
              <p>© 2022 G-sports. Todos los Derechos Reservados.</p>
          </div>
          </nav>
        </div>
      </footer>`;
    }
}

window.customElements.define("footer-component", footercomponent);
//api customelement, se define el componente, entre paréntesis el nombre que queramos y después el nombre de la clase