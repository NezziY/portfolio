import p2 from "../images/proyect2.png";
import p6 from "../images/proyect6.png";
import p7 from "../images/proyect7.webp";
import p8 from "../images/proyect8.webp";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Reusable Button Component
const Button = ({ text }) => (
  <button
    className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-2 py-1 font-bold rounded-full text-xs`}
  >
    {text}
  </button>
);

// Reusable Project Component
const Project = ({ title, description, technologies, link, image }) => (
  <div className="bg-gray-200 border border-stone-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-2xl p-8 mb-12">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="mb-2">{description}</p>

    <div className="space-x-2 mb-4">
      {technologies.map((tech, index) => (
        <Button key={index} color={tech.color} text={tech.text} />
      ))}
    </div>

    <div className="overflow-hidden rounded-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={image}
          alt={`Vista previa de ${title}`}
          className="w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
        />
      </a>
    </div>
  </div>
);

function Projects() {
  const groupProjects = [
    {
      title: "Guardianes del Bosque",
      description:
        "Página de adopción de áboles creada durante una simulación de trabajo grupal en NoCountry.",
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
      description:
        "Ejercicio grupal de clonación de una página web, durante una simulación de trabajo grupal en NoCountry.",
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
      description: "Ecommerce proyecto grupal final en ReactJs en Codo a Codo.",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "orange", text: "Firebase" },
        { color: "yellow", text: "JavaScript" },
      ],

      link: "https://tecnocompu-23302.web.app/",
      image: p6,
    },
    {
      title: "Humaya",
      description:
        "Landing Page de Ventas, como proyecto individual en ReactJs en Codo a Codo",
      technologies: [
        { color: "cyan", text: "React" },
        { color: "yellow", text: "JavaScript" },
        { color: "violet", text: "Bootstrap" },
      ],
      link: "https://peppy-croissant-5e5c96.netlify.app/",
      image: p2,
    },
  ];

  return (
    <div>
      <div className="pb-12">
        <h2 className="text-3xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:text-6xl font-extrabold text-center text-rose-600 mt-4 mb-8 py-6 animate-fade-down animate-once animate-duration-1000">
          Proyectos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: null,
            prevEl: null,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            // Configura slidesPerView para diferentes tamaños de pantalla
            300: {
              slidesPerView: 1, // Muestra un slide por vista en resoluciones de 768 píxeles y menores
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {groupProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
