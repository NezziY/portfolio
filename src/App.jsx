import fotoport from "./images/fotoport.png";
import htmlImage from "./images/icons8-html.svg";
import cssImage from "./images/icons8-css3.svg";
import jsImage from "./images/icons8-javascript.svg";
import tailwindImage from "./images/tailwind-svgrepo-com.svg";
import reactImage from "./images/icons8-reaccionar.svg";
import firebaseImage from "./images/icons8-firebase.svg";

import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsGit } from "react-icons/bs";

import miCv from "./BerthaVSanchezP.pdf";
import Projects from "./components/projects";

function App() {
  const descargarCv = () => {
    window.location.href = miCv;
  };

  return (
    <div>
      <header className="bg-stone-950 text-white py-4 px-6">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center">
            <a href="mailto:bvanesanchezp@gmail.com" className="mr-4">
              <HiEnvelope size={30} />
            </a>
            <a href="https://twitter.com/QtieAlpaca" className="mr-4">
              <FaTwitterSquare size={30} style={{ color: "#38bdf8" }} />
            </a>
            <a href="https://github.com/NezziY" className="mr-4">
              <BsGit size={30} style={{ color: "f97316" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/bertha-vanessa-s%C3%A1nchez-posadas-5b05a9208/"
              className="mr-4"
            >
              <FaLinkedin size={30} style={{ color: "2563eb" }} />
            </a>
          </div>

          <h2 className="flex justify-center text-3xl font-bold py-4">
            Vanessa Sánchez
          </h2>

          <div className="flex justify-center">
            <button
              onClick={descargarCv}
              className="flex font-semibold bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-xl items-center"
            >
              <HiOutlineDocumentDownload size={25} />
              Descargar CV
            </button>
          </div>
        </div>
      </header>

      {/* ------------------PRESENTACION---------------------- */}

      <main className="bg-gray-50 p-10">
        <div className="container border-b p-4">
          <div className="md:flex items-center gap-4">
            <div>
              <img
                src={fotoport}
                alt="Image"
                width="80%"
                className="object-cover rounded-full mx-auto mb-6 animate-fade animate-duration-[2000ms]"
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
                  
                  {/* <img
                  src="./images/icons8-logotipo-de-primavera.svg"
                  className="w-12 h-12"
                /> */}
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
