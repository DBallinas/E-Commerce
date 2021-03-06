class footercomponent extends HTMLElement{  //Se define el nombre del componente como ejemplo lo llamamos navcomponent, se hace una extención de la clase de HTMLelement
    constructor(){ //Se crea un constructor
        super(); //llama al super de la clase HTMLElement
    }
    connectedCallback(){ //Creación del método connectedcallback, trae el html contenido en el inner
        this.innerHTML = `
      <footer class="footer">
        <div class="footer-contenido">
        <img src="../../img/G-SPORTS-LOGO.png" width="200px">
           
              <a href="/html/politicas.html">
                <p>Políticas de la empresa</p>
              </a>
              <a href="/html/preguntasfrecuentes.html">
                <p>Preguntas frecuentes</p>
              </a>
          <p>© 2022 G-Sports. Todos los Derechos Reservados.</p>
                     <h5>¡La nueva Generación en deportes!</h5>
          </div>
      </footer>`;
    }
}

window.customElements.define("footer-component", footercomponent);
//api customelement, se define el componente, entre paréntesis el nombre que queramos y después el nombre de la clase
// `
//       <footer class="footer">
//         <div class="footer-contenido">
//             <div class="box">
//               <h4>General</h4>
//               <a href="/html/todoslosproductos.html">
//                 <p>Tienda</p>
//               </a>
//               <a href="/html/rebajas.html">
//                 <p>Rebajas</p>
//               </a>
//               <a href="/html/formulariocontacto.html">
//                 <p>Contacto</p>
//               </a>
//             </div>
//             <div class="box">
//               <h4>Inicio de sesión</h4>
//               <a href="/html/iniciodesesion.html">
//                 <p>Iniciar sesión</p>
//               </a>
//               <a href="/html/formularioregistrousuarios.html">
//                 <p>Registrarse</p>
//               </a>
//               <a href="/html/formulariocontacto.html">
//                 <p>¿Olvidaste tu contraseña?</p>
//               </a>
//             </div>
//             <div class="box">
//               <h4>Políticas & FAQ</h4>
//               <a href="/html/politicas.html">
//                 <p>Políticas de la empresa</p>
//               </a>
            
//               <a href="/html/preguntasfrecuentes.html">
//                 <p>Preguntas frecuentes</p>
//               </a>
//             </div>
//             <div class="box">
              
//               <h4>Redes sociales</h4>
//               <p>¡Síguenos en nuestras redes sociales!</p>
//               <div class="row">
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <img src="../../img/iconredes/facebook-icon.png" width="13%" alt="logo-facebook">Facebook</a>
//               </div>
//               <div class="row">
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <img src="../../img/iconredes/instagram-icon.png" width="13%" alt="logo-instagram">Instagram</a>
//               </div>
//               <div class="row">
//                 <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
//                 <img src="../../img/iconredes/whatsapp-icon.png" width="13%" alt="logowhatsapp">Whatsapp</a>
//               </div>
//               <div class="row">
//                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <img src="../../img/iconredes/twitter-icon.png" width="13%" alt="logo-twitter">Twitter</a>
//               </div>
//               <div class="row">
//                 <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//                   <img src="../../img/iconredes/youtube-icon.png" width="13%" alt="logo-youtube">Youtube</a>
//               </div>
              
//             </div>
//             <div class="box">
//               <h4>G-SPORTS</h4>
//               <p>Somos una tienda de artículos deportivos donde encontrarás los mejores productos al mejor precio.</p>
//               <h5>¡La nueva Generación en deportes!</h5></br>
//                 <div>
//                   <img src="../../img/metodos-pago.png" id="img-pago" width="150%">
//                 </div>
//             </div>   
//             <img src="../../img/G-SPORTS-LOGO.png" width="100px">
//           <p>© 2022 G-sports. Todos los Derechos Reservados.</p>
//           </div>
//         </div>
//       </footer>`