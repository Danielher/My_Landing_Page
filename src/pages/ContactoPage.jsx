import React from "react";

export const ContactoPage = () => {
  return (
    <>
    <div className="text-center bg-white">
      <div className="py-2 mb-5 items-center flex justify-center">
          <h1 className="bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold text-2xl rounded-md w-40">
            Contacto
          </h1>
        </div>
      <div className="relative flex flex-col justify-center overflow-hidden p-4 mb-5">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-orange-500 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-orange-500 underline uppercase decoration-wavy">
            Trabajemos juntos
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Nombre</span>
                <input
                  type="text"
                  name="name"
                  className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Jack Sparrow"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Correo Electronico</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="jack.sparrow@example.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Mensaje</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="5"
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-black font-bold
            bg-gradient-to-r from-orange-500 to-yellow-400
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Contactar
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>      
    </div>       
    </>
  );
};
