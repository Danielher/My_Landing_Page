import React from "react";

export const ExperienciaPage = () => {
  return (
    <>
      <div className="text-center bg-white">
        <div className="pt-5 items-center flex justify-center">
          <h1 className="bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold text-2xl rounded-md w-40">
            Experiencia
          </h1>
        </div>
        <div className=" p-10 grid grid-cols-1 text-xl-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 bg-gradient-to-r from-gray-600 via-gray-700 to-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-white dark:text-white">
              Coordinador de Tecnologia{" "}
              <span className="text-gray-300">- Libertadora de Seguridad</span>
            </h5>
            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
              Sep, 2018 - actualmente
            </p>
            <p className="text-justify  bg-gray-300 opacity-60 rounded-md p-2 md:text-1xl lg:text-2xl">
              Desarrollo en herramientas ofimáticas con VBA, Mejora de procesos
              tecnológicos en las diferentes areas, colaboración en la
              implementacion del software LMS y ERP para la empresa e
              implementacion de software especializado para el monitoreo de
              alarmas, Apoyo en el soporte tecnico e inventario tecnológico.
              Capacitación al personal en el uso avanzado de herramientas
              ofimaticas.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-r from-gray-600 via-gray-700 to-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-white dark:text-white">
              Jefe De Tecnología{" "}
              <span className="text-gray-300"> - IRI de Colombia</span>
            </h5>
            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
              Ago, 2013 - Ene, 2018
            </p>
            <p className="text-justify bg-gray-300 opacity-60 rounded-md p-2 md:text-1xl lg:text-2xl">
              Encargado del área de TI de la compañía, implementando nuevas
              tecnologías, Desarrollo y Administración Web, brindando soporte
              tecnico, administración de consolas de correo, Soporte en
              ofimática e informática, Administración del directorio Activo en
              Servidores WS2012, Administración Telefonía IP, Gestión
              administrativa propia del cargo como compra de equipos y
              suministros tecnológicos y control de inventario.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-gray-600 via-gray-700 to-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-white dark:text-white">
              Analista IT y BD{" "}
              <span className="text-gray-300">
                - Human Perspectives International
              </span>
            </h5>
            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
              Ene, 2011 - Abr, 2013
            </p>
            <p className="text-justify bg-gray-300 opacity-60 rounded-md p-2 md:text-1xl lg:text-2xl">
              Análisis de la coherencia de datos fuente de los clientes,
              adaptación de las necesidades de los clientes en el sistema de
              Gestión Humana ETWEB (Software especializado), alineación y cargas
              masivas de la información entregada por el cliente al sistema.
              Soporte de primer nivel del sistema ETWeb, Manejo y administración
              de datos en Transact-Sql, consultoría en implementación de
              programas de gestión del talento humano en diversos clientes.
              Edición en la personalización del sistema con lenguaje Asp.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
