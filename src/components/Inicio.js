import React from 'react';
import foto from '../images/foto-julian.png';
import desarrolloWeb from '../images/desarrollo-web.png';
import futbol from '../images/futbol.png';
import cine from '../images/cine.png';
import gimnasio from '../images/gimnasio.png';
import musica from '../images/musica.png';
import '../styles/Inicio.css'

export const Inicio = () => {
  return (
    <>
      <section className='description'>
          <div className='container-description'>
            <div className='description-text'>              
              <h1><strong>Desarrollador Web</strong></h1>
              <p>
                Julian Jaimes es un colombiano residente en la ciudad de Cúcuta, tiene 30 años y es un
                apasionado por la programación. Tiene como sus virtudes más importantes 
                la responsabilidad, perseverancia, autonomía, el trabajo en equipo y la curiosidad por siempre
                seguir aprendiendo y avanzando como desarrollador, tanto es así que a veces abarca más de lo 
                que puede manejar, pero siempre logra salir adelante ante cualquier reto que se propone.
              </p>
            </div>
            <div className='container-photo'>
              <img src={foto} alt='Julian Jaimes Foto' id='img-julian' />
            </div>
          </div>
      </section>
      <section className='knowdleges'>
          <h2>Conocimientos</h2>
          <div className='container-knowdleges'>
          <img src={desarrolloWeb} id='img-development' alt='Imagen Desarrollo Web' />
          <p>HTML - CSS - JavaScript - Java - Bootstrap 5 - React - Nodejs - SQL</p>
          </div>
      </section>
      
      <h2>Hobbies</h2>

      <section className='hobbies'>
          <div className='images-hobbies'><img src={futbol} alt='Imagen Fútbol' /></div>
          <div className='images-hobbies'><img src={musica} alt='Imagen Música' /></div>
          <div className='images-hobbies'><img src={cine} alt='Imagen Cine' /></div>
          <div className='images-hobbies'><img src={gimnasio} alt='Imagen Gimnasio' /></div>
      </section>
    </>
  )
}
