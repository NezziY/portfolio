import p2 from "../images/proyect2.png";
import p5 from "../images/proyect5.png";
import p6 from "../images/proyect6.png";
import p7 from "../images/proyect7.webp";
import p8 from "../images/proyect8.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const groupProjects = [
    {
      id: 1,
      title: "Guardianes del Bosque",
      description:
        "Página de adopción de áboles creada durante una simulación de trabajo grupal en NoCountry.",
      technologies: [
        { text: "React" },
        { text: "JavaScript" },
        { text: "CSS" },
      ],
      link: "https://guardianesdelbosque.vercel.app/",
      git: "https://github.com/No-Country/s12-20-m-python",
      image: p7,
    },
    {
      id: 2,
      title: "Clon Airbnb",
      description:
        "Ejercicio grupal de clonación de una página web, durante una simulación en NoCountry.",
      technologies: [
        { text: "React" },
        { text: "JavaScript" },
        { text: "Tailwind" },
        { text: "Redux" },
      ],
      link: "https://c14-02-m-node-react.vercel.app/",
      git: "https://github.com/No-Country/c14-02-m-node-react",
      image: p8,
    },
    {
      id: 3,
      title: "Jarochita Toys",
      description:
        "Landing Page simple, con galería para un taller de juguetes cotumizados. Hecha con WP.",
      technologies: [
        { text: "WordPress" }
      ],
      link: "https://jarochitatoys.netlify.app/galeria",
      git: "",
      image: p5,
    },
    {
      id: 4,
      title: "Humaya",
      description:
        "Landing Page de Ventas, como proyecto individual en ReactJs y estilado con Bootstrap.",
      technologies: [
        { text: "React" },
        { text: "JavaScript" },
        { text: "Bootstrap" },
      ],
      link: "https://peppy-croissant-5e5c96.netlify.app/",
      git: "https://github.com/NezziY/humaya-tp",
      image: p2,
    },
    {
      id: 5,
      title: "TecnoTienda",
      description: "Ecommerce  en ReactJs, utilizando una APIs para los precios, y para la carga de procuctos.",
      technologies: [
        { text: "React" },
        { text: "Firebase" },
        { text: "JavaScript" },
        { text: "Bootstrap" },
      ],
      link: "https://tecnocompu-23302.web.app/",
      git: "https://github.com/VicenteCaldarone/23302-grupo1-tecnotienda",
      image: p6,
    },
    
  ];

  return (
    <div className="slider-container p-8">
      <h1 className="text-6xl text-center my-12 font-extrabold text-gray-700">
        Proyectos
      </h1>
      <Slider {...settings}>
        {groupProjects.map((project, index) => (
          <div key={project.id} className="slider-item">
            <div className="m-4 rounded-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="slider-image rounded-xl shadow-md"
                />
              </a>
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p>{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="font-bold text-sm">
                      {tech.text}
                    </li>
                  ))}
                </ul>
                <a href={project.git} className="text-sm underline">
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
