import foto from "../assets/Foto_Perfil.svg";
import logo from "../assets/LogoLandingPage.png";

export const InicioPage = () => {
  return (
    <>
      <div className="pt-20 mt-0 relative overflow-hidden bg-gradient-to-bl from-gray-700 via-black to-black">
        <div className="ml-1 max-w-7xl">
          <main className="ml-6 mt-10 max-w-7xl pl-1 sm:mt-12 sm:pl-6 md:mt-16 lg:mt-10 lg:pl-1 lg:w-85 xl:mt-28 pb-8 mb-8">
            <div className="ptl-0 ml-0 sm:text-center md:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hola, Soy Daniel</span>
              </h1>
              <br />
              <h1 className="block text-orange-400 text-5xl font-bold ">
                Creemos Juntos
              </h1>
              <h2 className="block text-orange-400 text-5xl font-bold">
                Buenos Proyectos
              </h2>
              <p className="mt-3 text-base text-gray-100 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                "Un buen proyecto Web se mide por la calidad y su excelente
                funcionalidad."
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://github.com/Danielher"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-3 text-base font-medium text-black hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Git Hub
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://www.linkedin.com/in/daniel-hernandez-ayala-08542036/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-l from-orange-500 to-yellow-400 px-8 py-3 text-base font-medium text-black hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    LinkdIn
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div className="lg:absolute lg:inset-y-1 lg:right-0 lg:w-1/2 pr-10">
            <img
              className="h-52 w-full object-cover sm:h-62 md:h-76 lg:h-full lg:w-full"
              src="./src/assets/Fondo2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
