import p1 from "../images/proyect1.png";
import p2 from "../images/proyect2.png";
import p3 from "../images/proyect3.png";
import p4 from "../images/proyect4.png";
import p5 from "../images/proyect5.png";
import p6 from "../images/proyect6.png";
import p7 from "../images/proyect7.webp";
import p8 from "../images/proyect8.webp";

// Reusable Button Component
const Button = ({ color, text }) => (
  <button
    className={`bg-${color}-400 text-black px-2 py-1 font-bold rounded-full text-xs`}
  >
    {text}
  </button>
);

// Reusable Project Component
const Project = ({ title, description, technologies, link, image }) => (
  <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="mb-2">{description}</p>

    <div className="space-x-2 mb-4">
      {technologies.map((tech, index) => (
        <Button key={index} color={tech.color} text={tech.text} />
      ))}
    </div>

    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={`Vista previa de ${title}`}
          className="link-image rounded-lg"
        />
      </a>
    </div>
  </div>
);

function Projects() {
  const groupProjects = [
    {
      title: "Guardianes del Bosque",
      description: "Página de adopción de áboles.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },
        { color: "red", text: "CSS" },
      ],
      link: "https://guardianesdelbosque.vercel.app/",
      image: p7,
    },
    {
      title: "Clon Airbnb",
      description: "Ejercicio grupal de funcionalidades.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },
        { color: "blue", text: "Tailwind" },
      ],
      link: "https://c14-02-m-node-react.vercel.app/",
      image: p8,
    },
    {
      title: "TecnoTienda",
      description: "Tienda en Línea.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "orange", text: "Firebase" },
        { color: "yellow", text: "JavaScript" },
      ],

      link: "https://tecnocompu-23302.web.app/",
      image: p6,
    },
    {
      title: "PokeAPI",
      description: "Listado de pokemones.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },
        { color: "violet", text: "Bootstrap" },
      ],
      link: "https://dancing-bubblegum-82c624.netlify.app/",
      image: p5,
    },
  ];

  const individualProjects = [
    {
      title: "To do List",
      description: "Lista de Tareas simple con CRUD y login.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "orange", text: "Firebase" },
        { color: "yellow", text: "JavaScript" },
      ],
      link: "https://neon-lolly-da9b27.netlify.app/",
      image: p1,
    },
    {
      title: "Humaya",
      description: "Landing Page de Ventas",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },        
        { color: "violet", text: "Bootstrap" },
      ],
      link: "https://peppy-croissant-5e5c96.netlify.app/",
      image: p2,
    },
    {
      title: "Buscador",
      description: "Buscador de películas con API.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },
      ],
      link: "https://relaxed-meringue-4f67b8.netlify.app/",
      image: p3,
    },
    {
      title: "Llama No Drama",
      description: "Animación simple con CSS.",
      technologies: [
        { color: "yellow", text: "JavaScript" },
        { color: "red", text: "CSS" },
      ],
      link: "https://roaring-dango-723e2e.netlify.app/",
      image: p4,
    },
  ];

  return (
    <div>
      {/* ------------------PROYECTOS GRUPALES---------------------- */}
      <div className="pb-12">
        <h2 className="text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:text-6xl font-extrabold text-center text-rose-600 my-10 py-8 animate-fade-down animate-once animate-duration-1000">
          Proyectos Grupales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {groupProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>

      {/* ------------------PROYECTOS INDIVIDUALES---------------------- */}
      <div className="border-b pb-12 mx-3">
        <h2 className="text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:text-6xl font-extrabold text-center text-rose-600 m-10 py-8 animate-fade-down animate-once animate-duration-1000">
          Proyectos Individuales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {individualProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
