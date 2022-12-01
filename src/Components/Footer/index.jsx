import React from 'react'
import "./style.css"

function Footer() {
  return (
   <React.Fragment>
        <section class="footer top">
            <a class="location">Colombia</a>
        </section>
        <section class="footer bottom">
            <div class="about">
                <ul class="about-bar">
                    <li class="itema">Sobre Google</li>
                    <li class="itema">Publicidad</li>
                    <li class="itema">Negocios</li>
                    <li class="itema">Cómo funciona la Búsqueda</li>
                </ul>
            </div>
            <div class="preferences">
                <ul class="preferences-bar">
                    <li class="itema">Privacidad</li>
                    <li class="itema">Condiciones</li>
                    <li class="itema">Preferencias</li>
                </ul>
            </div>
        </section>
  </React.Fragment>
  )
}

export {Footer}