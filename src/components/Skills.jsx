import htmlImage from "../images/icons8-html.svg";
import cssImage from "../images/icons8-css3.svg";
import jsImage from "../images/icons8-javascript.svg";
import tailwindImage from "../images/tailwind-svgrepo-com.svg";
import node from "../images/node-svgrepo-com.svg";
import sql from "../images/sql-database-generic-svgrepo-com.svg";
import reactImage from "../images/icons8-reaccionar.svg";
import firebaseImage from "../images/icons8-firebase.svg";
import bootsT from "../images/bootstrap-4-logo-svgrepo-com.svg";
import tux from "../images/linux-svgrepo-com.svg";

function Skills() {
  return (
    <div>
      <p className="my-5 text-2xl font-bold text-center">Skills:</p>
      <div className="flex justify-center items-center">
        <div>
          <img
            src={htmlImage}
            sizes={12}
            className="animate-fade-left animate-duration-[200ms] animate-delay-100"
          />
          <img
            src={cssImage}
            sizes={12}
            className="animate-fade-left animate-duration-[200ms] animate-delay-100"
          />
        </div>
        <div>
          <img
            src={jsImage}
            width={48}
          />
          <img
            src={reactImage}
            width={46}
          />
        </div>
        <div>
          <img
            src={node}
            width={46}
          />
          <img
            src={sql}
            width={46}
          />
        </div>
        <div>
          <img
            src={firebaseImage}
            width={48}
          />
          <img
            src={tailwindImage}
            width={48}
          />
        </div>
        <div>
          <img
            src={bootsT}
            width={38}
          />
          <img
            src={tux}
            width={58}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
