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
    slidesToShow: 4,
    slidesToScroll: 4,
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
      ],
      link: "https://c14-02-m-node-react.vercel.app/",
      image: p8,
    },
    {
      id: 3,
      title: "TecnoTienda",
      description: "Ecommerce  en ReactJs, utilizando una APIs para los precios, y para la carga de procuctos.",
      technologies: [
        { text: "React" },
        { text: "Firebase" },
        { text: "JavaScript" },
      ],

      link: "https://tecnocompu-23302.web.app/",
      image: p6,
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
      image: p2,
    },
    {
      id: 5,
      title: "Planeador Personal",
      description:
        "Planeador con un local storage y app del clima integrada. Drag&Drop, sólo versión web.",
      technologies: [
        { text: "React" },
        { text: "JavaScript" },
        { text: "Tailwind" },
      ],
      link: "https://effortwork.netlify.app/",
      image: p5,
    },
  ];

  return (
    <div className="slider-container p-8">
      <h1 className="text-5xl text-center my-8 font-bold text-pink-700">
        Proyectos
      </h1>
      <Slider {...settings}>
        {groupProjects.map((project, index) => (
          <div key={project.id} className="slider-item">
            <div className="m-4 border-2 rounded-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="slider-image"
                />
              </a>
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p>{project.description}</p>
                <ul className="flex gap-2">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="font-bold text-sm">
                      {tech.text}
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="text-sm underline">
                  Ver proyecto
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
