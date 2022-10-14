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
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                  <div className="font-bold">Ingeniería de Sistemas</div>

                  <div className="opacity-60 text-sm ">
                    Universidad Nacional Abierta y a Distancia - UNAD - 2022
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/Sistemas.jpeg"
            />
          </div>
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">Tecnología en Mecatronica</div>

                  <div className="opacity-60 text-sm ">
                    Fundación CIDCA - 2006
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/Mecatronica.jpeg"
            />
          </div>
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">
                    Diplomado Desarrollo Front-End con React JS
                  </div>

                  <div className="opacity-60 text-sm ">
                    Fundación Internacional Maria Luisa - 2022
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/Diplomado.jpg"
            />
          </div>
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">Responsive Web Design</div>

                  <div className="opacity-60 text-sm ">
                    FREECODE-CAMP - HTML5 y CSS3 - 2022
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-coverf w-full  group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/webdesign.jpg"
            />
          </div>
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">Diplomado en Redes CNNA 1 y 2</div>

                  <div className="opacity-60 text-sm ">
                    CISCO Network Academy - 2021
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/Redes.jpg"
            />
          </div>
          <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">
                    ITIL® Foundation Certificate in IT Service Management
                  </div>

                  <div className="opacity-60 text-sm ">
                    AXELOS Global Best Practice - 2017
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
              src="./public/Itil.jpg"
            />
          </div>
        </div>       
      </div>
    </>
  );
};
