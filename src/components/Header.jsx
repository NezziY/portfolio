import React from "react";
import fotoport from "../images/fotoport.webp";
import fotoback from "../images/ocean.webp";
import miCv from "../CVBerthaVSanchezP.pdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Header() {
  const descargarCv = () => {
    window.location.href = miCv;
  };
  return (
    <div className="hero-container">
      <img src={fotoback} className="hero-bg" alt="" />
      <div className="hero-content p-4 md:flex items-center justify-center gap-4">
        <div>
          <img
            src={fotoport}
            alt="Image"
            style={{ width: "200px" }}
            className="object-cover rounded-full mx-auto mb-6  hidden sm:block"
          />
        </div>
        <div className="md:w-3/5 lg:w-2/3 xl:w-1/2 pl-4">
          <h2 className="text-4xl drop-shadow-md md:text-6xl font-extrabold mb-5 gradient">
            Vane Sánchez
          </h2>
          <p className="mb-4">
            Soy una desarrolladora <span className="font-bold">FRONTEND</span>{" "}
            con experiencia en la creación de sitios web interactivos y
            receptivos.
          </p>
          <p>
            Mi experiencia creando MPVs en <b>NoCountry</b> me permitió aplicar
            mis habilidades en HTML, CSS, JavaScript, React y Tailwind CSS;
            contribuyendo al desarrollo en equipo de sitios web modernos y
            eficientes.
          </p>
          <a
            href="#"
            onClick={descargarCv}
            className="flex font-bold text-white mt-6 rounded-xl text-sm items-center"
          >
            <HiOutlineDocumentDownload size={35} />
            Descargar CV
          </a>

        </div>
        
      </div>
    </div>
  );
}
