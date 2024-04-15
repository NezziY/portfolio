import fotoport from "./images/fotoport.webp";

import Projects from "./components/Projects.jsx";
import Header from "./components/Header";
import ContactForm from "./components/ContactFrom";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />

      {/* ------------------PRESENTACION---------------------- */}

      <main className="p-10 max-w-[1000px] text-gray-100 mx-auto">
        <div className="container p-4">
          <div className="md:flex items-center justify-center gap-4">
            <div>
              <img
                src={fotoport}
                alt="Image"
                style={{ width: "200px" }}
                className="object-cover rounded-full mx-auto mb-6 animate-fade animate-duration-[2000ms] hidden sm:block"
              />
            </div>
            <div className="md:w-3/5 lg:w-2/3 xl:w-1/2 pl-4">
              <h2 className="text-4xl drop-shadow-md md:text-6xl font-extrabold mb-5 animate-fade animate-duration-[2000ms] gradient">
                Vane Sánchez
              </h2>
              <p className="mb-4">
                Soy una desarrolladora front-end con experiencia en la creación
                de sitios web interactivos y receptivos.
              </p>
              <p>
                Mi experiencia creando MPVs en <b>NoCountry</b>  me permitió aplicar mis habilidades
                en HTML, CSS, JavaScript, React y Tailwind CSS; contribuyendo al
                desarrollo en equipo de sitios web modernos y eficientes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Skills />
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
