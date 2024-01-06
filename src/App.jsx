import fotoport from "./images/fotoport.webp";
import htmlImage from "./images/icons8-html.svg";
import cssImage from "./images/icons8-css3.svg";
import jsImage from "./images/icons8-javascript.svg";
import tailwindImage from "./images/tailwind-svgrepo-com.svg";
import reactImage from "./images/icons8-reaccionar.svg";
import firebaseImage from "./images/icons8-firebase.svg";

import Projects from "./components/Projects.jsx";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      {/* ------------------PRESENTACION---------------------- */}

      <main className="bg-gray-50 p-10">
        <div className="container border-b p-4">
          <div className="md:flex items-center gap-4">
            <div>
              <img
                src={fotoport}
                alt="Image"
                className="object-cover rounded-full mx-auto mb-6 animate-fade animate-duration-[2000ms] hidden sm:block"
              />
            </div>
            <div>
              <h2 className="text-4xl drop-shadow-md md:text-6xl font-extrabold  mb-5 animate-fade animate-duration-[2000ms]">
                Tu diseño, tu estilo
              </h2>
              <p className="mb-4">
                Soy una desarrolladora front-end con experiencia en la creación
                de sitios web interactivos y receptivos. Utilizo HTML, CSS,
                JavaScript, React y Tailwind CSS para transformar diseños en
                proyectos eficientes y modernos.
              </p>
              <div>
                <p className="my-8 text-2xl font-bold text-center">Mi stack:</p>
                <div className="flex justify-center items-center">
                  <img
                    src={htmlImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-100"
                  />
                  <img
                    src={cssImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-200"
                  />
                  <img
                    src={jsImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-300"
                  />
                  <img
                    src={reactImage}
                    sizes={12}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-500"
                  />

                  <img
                    src={firebaseImage}
                    width={48}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-700"
                  />
                  <img
                    src={tailwindImage}
                    width={48}
                    className="animate-fade-left animate-duration-[200ms] animate-delay-1000"
                  />
                </div>
                <div>
                  <blockquote className="italic py-4 px-6 border-l-4 border-blue-500">
                    Front-end es la diversión que ves en tu navegador.
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
