import React from "react";

export const EstudiosPage = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-black">
      <div className="pt-5 items-center flex justify-center">
        <h1 className="bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold text-2xl rounded-md w-40  text-center">
          Estudios
        </h1>
      </div>
      <div className="h-secreen p-16 grid grid-cols-1 md:grid-cols-3 gap-2 grid-rows-2 lg:gap-6">
        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Ingeniería de Sistemas
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Universidad Nacional Abierta y a Distancia - UNAD -
          </p>
          <p>2022</p>
        </div>
        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Tecnología en Mecatronica
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Fundación CIDCA
          </p>
          <p>2006</p>
        </div>

        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Diplomado Desarrollo Front-End con React JS
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Fundacion Internacional Maria Luisa - LiveVox - Universidad de Antioquia
          </p>
          <p>Septiembre - 2022</p>
        </div>

        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Responsive Web Design
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            FRECODE-CAMP - Html5 y Css3 -
          </p> 
          <p>Mayo - 2022</p>        
        </div>

        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Diplomado en Redes CNNA 1 y 2
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            CISCO Network Academy
          </p>
          <p>JUNIO - 2021</p>
        </div>

        <div className="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          ITIL® Foundation Certificate in IT Service Management
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          AXELOS Global Best Practice
          </p>
          <p>2017</p>
        </div>
      </div>
    </div>
    </>
  );
};
