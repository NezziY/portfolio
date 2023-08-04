import './App.css';
import { FaTwitterSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import { HiEnvelope } from "react-icons/hi2";

function App() {
 
 
  return (
    <div className="font-sans bg-stone-900 text-white">
      <header className="bg-stone-800 text-cyan-600 py-4 px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </header>

{/* ------------------PRESENTACION---------------------- */}

      <main className="bg-stone-900 py-10">
        <div className="container mx-auto px-4">
      
        <div className="flex items-center w-500  p-10">
          <img
            src="src/assets/fotoport.png"
            alt="Image"
            width="30%"
            className="w-100 h-100 object-cover rounded-full mr-10"
          />
          <div className="flex-1">
            <h3 className="text-2xl text-amber-400 font-medium mb-5">Vanesa Sánchez</h3>
            <p className="text-sm mb-4 text-stone-50">Soy programadora con gusto por el Front.<br />Egresada de CaC en Full Stack Java, React y Spring.</p> 
            
            <p className="my-4 font-bold">Mi stack:</p>
            <div className="flex justify-center items-center">
              <img src="src/assets/icons8-html.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-css3.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-javascript.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-logotipo-de-java-coffee-cup.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-firebase.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-logo-de-mysql.svg" className="w-12 h-12" />
              <img src="src/assets/icons8-logotipo-de-primavera.svg" className="w-12 h-12" />
            </div>
            <p className="text-sm my-4 text-stone-500">- Nunca es tarde -</p>
          </div>
        </div>


{/* ------------------PROYECTOS---------------------- */}

  
          <h2 className="text-2xl text-rose-500 font-bold mt-8 mb-4">My Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">


            <div className="bg-stone-800 border border-stone-600 rounded p-4">
              <h3 className="text-lg font-bold mb-2">Project 1</h3>
              <p className="mb-2">Lista de Tareas simple con CRUD  y login.</p>

              <div>
                <a href="https://neon-lolly-da9b27.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="src/assets/proyect1.png"
                    alt="Vista previa de ejemplo"
                    className="link-image"
                  />
                </a>
              </div>
            </div>

            <div className="bg-stone-800 border border-stone-600 rounded p-4">
              <h3 className="text-lg font-bold mb-2">Project 2</h3>
              <p className="mb-2">Landing Page de Ventas</p>
              <div>
                <a href="https://peppy-croissant-5e5c96.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img
                    src="src/assets/proyect2.png"
                    alt="Vista previa de ejemplo"
                    className="link-image"
                    />
                </a>
            </div>
            </div>

            <div className="bg-stone-800 border border-stone-600 rounded p-4">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="mb-2">Buscador de películas con API.</p>
              <div>
                <a href="https://relaxed-meringue-4f67b8.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img
                    src="src/assets/proyect3.png"
                    alt="Vista previa de ejemplo"
                    className="link-image"
                    />
                </a>
              </div>
            </div>

            <div className="bg-stone-800 border border-stone-600 rounded p-4">
              <h3 className="text-lg font-bold mb-2">Project 4</h3>
              <p className="mb-2">Animación simple con CSS.</p>
              <div>
                <a href="https://roaring-dango-723e2e.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img
                    src="src/assets/proyect4.png"
                    alt="Vista previa de ejemplo"
                    className="link-image"
                    />
                </a>
            </div>
            </div>


          </div>
        </div>
      </main>


{/* ------------------CONTACTO---------------------- */}


      <footer className="bg-stone-800 text-white py-4 px-6 text-center">
        <h2 className="text-2xl text-lime-500 font-bold">Contact Me</h2>
          <div>
            <div className='flex justify-center items-center'>
              <h5 className='flex items-center'>
                <FaReact className='mr-1' />
                Vanessa Sánchez
                <FaReact className='ml-1' />
              </h5>
            </div>

                      
            <div className='mx-5 flex justify-center space-x-4'>
              <a href='mailto:bvanesanchezp@gmail.com'>
                <HiEnvelope size={30}/>
              </a>
              
              <a href='https://twitter.com/QtieAlpaca'>
                <FaTwitterSquare size={30}/>
              </a>
              
              <a href='https://www.linkedin.com/in/bertha-vanessa-s%C3%A1nchez-posadas-5b05a9208/'>
                <FaLinkedin size={30}/>
              </a>
            </div>
              <p>React Developer</p>
          </div>
      </footer>
    </div>
  );
  
}

export default App;
