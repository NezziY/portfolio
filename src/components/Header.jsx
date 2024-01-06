
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsGit } from "react-icons/bs";

import miCv from "../BerthaSanchez.pdf";

function Header() {
    const descargarCv = () => {
        window.location.href = miCv;
      };
  return (
    <div><header className="bg-stone-950 text-white py-4 px-6">
    <div className="md:flex justify-between items-center">
      <div className="flex justify-center">
        <a href="mailto:bvanesanchezp@gmail.com" className="mr-4">
          <HiEnvelope size={30} />
        </a>
        <a href="https://twitter.com/QtieAlpaca" className="mr-4">
          <FaTwitterSquare size={30} style={{ color: "#38bdf8" }} />
        </a>
        <a href="https://github.com/NezziY" className="mr-4">
          <BsGit size={30} style={{ color: "f97316" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/bertha-vanessa-s%C3%A1nchez-posadas-5b05a9208/"
          className="mr-4"
        >
          <FaLinkedin size={30} style={{ color: "2563eb" }} />
        </a>
      </div>

      <h2 className="flex justify-center text-3xl font-bold py-4">
        Vanessa Sánchez
      </h2>

      <div className="flex justify-center">
        <button
          onClick={descargarCv}
          className="flex font-semibold bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-xl items-center"
        >
          <HiOutlineDocumentDownload size={25} />
          Descargar CV
        </button>
      </div>
    </div>
  </header></div>
  )
}

export default Header