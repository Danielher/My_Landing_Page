import React from "react";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-black">
        <div className="pt-4 items-center flex justify-center text-center">
          <h1 className="bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold text-2xl rounded-md w-40">
            Portafolio
          </h1>
        </div>

        <div className="h-secreen p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
          {proyectos.map((proyecto) => (
            <>
              <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  src={proyecto.url}
                  className="object-cover w-full h-96 rounded-t-lg md:h-60 md:w-40 md:rounded-none md:rounded-l-lg"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {proyecto.titulo}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {proyecto.descripcion}
                  </p>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={proyecto.url_preview}
                      target="_blank"
                      className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Vista Previa
                    </a>
                    <a
                      href={proyecto.url_github}
                      target="_blank"
                      className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-gradient-to-tl from-orange-500 to-yellow-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
