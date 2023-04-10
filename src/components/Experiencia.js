import React from 'react';
import '../styles/Experiencia.css';
import { Table } from 'react-bootstrap';

export const Experiencia = () => {
  return (
    <>
      <section className='experiencia-laboral'>
          <h1><strong>Experiencia Laboral</strong></h1>
          <Table className='tabla-experiencia' striped bordered hover>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Empresa</th>
                <th>Cargo</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className='text-center'>29 de Diciembre del 2021 - Actualmente</td>
                <td className='text-center'>Technology For Innavation - T4i</td>
                <td className='text-center'>
                  Proveedor de Soporte y Mantenimiento del Data Warehouse para la empresa
                  Financiera Comultrasan.
                  </td>
                <td className='text-justify'>
                  Garantizar el funcionamiento de los procesos ETL para el cargue de información en 
                  las bodegas de datos, crear o actualizar tablas, procedimientos y paquetes ETL, 
                  Además de automatizar los procesos y hacer el seguimiento del cargue de información 
                  diaria y mensual, realizar la documentación de todos los requerimientos que se atienden 
                  diariamente y asistir a reuniones programadas vía zoom para brindar soporte y/o capacitación 
                  sobre el funcionamiento del data warehouse.
                </td>
              </tr>
              <tr>
                <td className='text-center'>8 de Noviembre del 2021 - 28 de Didiembre de 2021</td>
                <td className='text-center'>Vision Ingenieria</td>
                <td className='text-center'>Auxiliar de proyectos</td>
                <td className='text-justify'>
                  Apoyo en generación de reportes en archivos pdf con HTML, CSS y Postman.
                </td>
              </tr><tr>
                <td className='text-center'>2011 - 2021</td>
                <td className='text-center'>ChevyPlan, Movistar, Sodimac</td>
                <td className='text-center'>Asesor Comercial - <br/> Ejecutivo de Cuenta</td>
                <td className='text-justify'>
                  Durante 10 años me desempeñé como asesor comercial en distintas empresas, siendo las 
                  experiancias más importantes en las áreas automotriz, telefonía y construcción.
                </td>
              </tr>
            </tbody>
          </Table>
      </section>
    </>
  )
}
