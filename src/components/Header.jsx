import React from "react";
import MyLinks from "../components/MyLinks";
import fotoport from "../images/fotoport.webp";
import fotoback from "../images/cascade.webp";
import miCv from "../BerthaSanchezES.docx";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Header() {
  const descargarCv = () => {
    window.location.href = miCv;
  };
  return (
    <div className="hero-container pt-12">
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
            mis habilidades en HTML, CSS, JavaScript, React y Tailwind CSS.
            Tengo experiencia trabajando de manera Freelance con WordPress.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              onClick={descargarCv}
              className="flex font-bold text-white mt-6 rounded-xl text-sm items-center"
            >
              <HiOutlineDocumentDownload size={35} />
              Descargar CV
            </a>
            <MyLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
