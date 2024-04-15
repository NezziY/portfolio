import { TfiYoutube } from "react-icons/tfi";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <div className="flex justify-center ">
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
    </div>
  );
}

export default Navbar;
