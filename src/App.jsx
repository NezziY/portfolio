import fotoport from "./images/fotoport.webp";

import Projects from "./components/Projects.jsx";
import Header from "./components/Header";
import ContactForm from "./components/ContactFrom";
import Skills from "./components/Skills";

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
                experiencia en NoCountry me permitió aplicar estas habilidades,
                contribuyendo al desarrollo de sitios web modernos y eficientes.
              </p>
              <div>
                <div>
                  <Skills />
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
        <div>
        <Projects />
        </div>
        
        <div>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default App;
