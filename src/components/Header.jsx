import { TfiYoutube } from "react-icons/tfi";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsGit } from "react-icons/bs";

import miCv from "../CVBerthaVSanchezP.pdf";

function Header() {
  const descargarCv = () => {
    window.location.href = miCv;
  };
  return (
    <div>
      <header className="text-white py-4 px-6">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center my-4">
            <a
              href="https://www.youtube.com/channel/UCh7wBq4c5c16Dnb3oIN1lkA"
              className="mr-4"
            >
              <TfiYoutube size={30} style={{ color: "#ef4444" }} />
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

          <div className="flex flex-col justify-center">
            <a
              href="#"
              onClick={descargarCv}
              className="flex font-semiboldtext-white py-2 px-4 rounded-xl text-sm items-center justify-center"
            >
              <HiOutlineDocumentDownload size={25} />
              Descargar CV
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
