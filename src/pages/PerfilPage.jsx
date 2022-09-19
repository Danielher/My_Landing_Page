import React from "react";

export const PerfilPage = () => {
  return (
    <>
      <div className="bg-white  text-center items-center pt-2 justify-center sm:mt-12 sm:pl-6">
        <div className="items-center flex justify-center">
          <h1 className="bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold text-2xl rounded-md w-40  ">
            Perfil
          </h1>
        </div>
        <div className="flex justify-betwen items-center">
          <div className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
            <p className="text-3xl p-3 text-justify">
              Ingeniero de Sistemas y Tecnólogo en Mecatrónica. Habilidades en
              Desarollo web y Desarrollo de aplicaciones con tecnologías HTML5,
              CS3, JS, REACT, PHP,JAVA, Python y Bases de Datos SQL. 15 años de
              experiencia en la industria TI, soporte de aplicaciones e
              implementación de software especializado. Con espíritu de
              liderazgo, capacidad de auto-aprendizaje y trabajo en equipo.
            </p>
          </div>
          <div className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
            <img className="" src="./src/assets/ImagenPerfil.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
