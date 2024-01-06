import fotoport from "./images/fotoport.webp";
import htmlImage from "./images/icons8-html.svg";
import cssImage from "./images/icons8-css3.svg";
import jsImage from "./images/icons8-javascript.svg";
import tailwindImage from "./images/tailwind-svgrepo-com.svg";
import reactImage from "./images/icons8-reaccionar.svg";
import firebaseImage from "./images/icons8-firebase.svg";
import bootsT from "./images/bootstrap-4-logo-svgrepo-com.svg";
import tux from "./images/linux-svgrepo-com.svg";

import Projects from "./components/Projects.jsx";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* ------------------PRESENTACION---------------------- */}

      <main className="p-10 max-w-[1000px] border  mx-auto">
        <div className="container border-b  p-4">
          <div className="md:flex items-center justify-center gap-4">
            <div>
              <img
                src={fotoport}
                alt="Image"
                className="object-cover rounded-full mx-auto mb-6 animate-fade animate-duration-[2000ms] hidden sm:block"
              />
            </div>
            <div className="md:w-3/5 lg:w-2/3 xl:w-1/2">
              <h2 className="text-4xl drop-shadow-md md:text-6xl font-extrabold mb-5 animate-fade animate-duration-[2000ms]">
                Vane Sánchez
              </h2>
              <p className="mb-4">
                Soy una desarrolladora front-end con experiencia en la creación
                de sitios web interactivos y receptivos. He perfeccionado mis
                habilidades en HTML, CSS, JavaScript, React y Tailwind CSS. Mi
                experiencia en NoCountry me permitió aplicar estas habilidades, contribuyendo al desarrollo de sitios
                web modernos y eficientes.
              </p>
              <div>
                <p className="my-5 text-2xl font-bold text-center">Skills:</p>
                <div className="flex justify-center items-center">
                  <img
                    src={htmlImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-100"
                  />
                  <img
                    src={cssImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-100"
                  />
                  <img
                    src={jsImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-200"
                  />
                  <img
                    src={reactImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-200"
                  />

                  <img
                    src={firebaseImage}
                    width={48}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-300"
                  />
                  <img
                    src={tailwindImage}
                    width={48}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-300"
                  />
                  <img
                    src={bootsT}
                    width={38}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-500"
                  />
                  <img
                    src={tux}
                    width={58}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-500"
                  />
                </div>
                <div>
                  <blockquote className="italic py-4 px-6 border-l-4 border-blue-500">
                    Front-end: tu diseño, tu estilo!
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects />
      </main>
    </div>
  );
}

export default App;
