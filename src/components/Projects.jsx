import p1 from "../images/proyect1.png";
import p2 from "../images/proyect2.png";
import p3 from "../images/proyect3.png";
import p4 from "../images/proyect4.png";
import p5 from "../images/proyect5.png";
import p6 from "../images/proyect6.png";

function Projects() {
  return (
    <div>
      {/* ------------------PROYECTOS INDIVIDUALES---------------------- */}
      <div className="border-b pb-12 mx-3">
        <h2 className="text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:text-6xl font-extrabold  text-center text-rose-600 m-10 py-8 animate-fade-down animate-once animate-duration-1000">
          Proyectos Individuales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-2">To do List</h3>
            <p className="mb-2">Lista de Tareas simple con CRUD y login.</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                React
              </button>
              <button className="bg-orange-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                Firebase
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://neon-lolly-da9b27.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p1}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>

          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-2">Humaya</h3>
            <p className="mb-2">Landing Page de Ventas</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                React
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://peppy-croissant-5e5c96.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p2}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>

          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Buscador</h3>
            <p className="mb-2">Buscador de películas con API.</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                {" "}
                React
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://relaxed-meringue-4f67b8.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p3}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>

          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-2">Llama No Drama</h3>
            <p className="mb-2">Animación simple con CSS.</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-600 text-white px-2 py-1 font-bold rounded-full text-xs">
                CSS
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://roaring-dango-723e2e.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p4}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------PROYECTOS GRUPALES---------------------- */}

      <div className="pb-12">
        <h2 className="text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:text-6xl font-extrabold  text-center text-rose-600 my-10 py-8 animate-fade-down animate-once animate-duration-1000">
          Proyectos Grupales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-2">TecnoTienda</h3>
            <p className="mb-2">Tienda en Línea.</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                React
              </button>
              <button className="bg-orange-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                Firebase
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://tecnocompu-23302.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p6}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>

          <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-2">PokeAPI</h3>
            <p className="mb-2">Listado de pokemones.</p>

            <div className="space-x-2 mb-4">
              <button className="bg-cyan-400 text-black px-2 py-1 font-bold rounded-full text-xs">
                {" "}
                React
              </button>
              <button className="bg-yellow-300 text-black px-2 py-1 font-bold rounded-full text-xs">
                JavaScript
              </button>
            </div>

            <div>
              <a
                href="https://dancing-bubblegum-82c624.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p5}
                  alt="Vista previa de ejemplo"
                  className="link-image rounde"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
