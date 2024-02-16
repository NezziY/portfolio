import htmlImage from "../images/icons8-html.svg";
import cssImage from "../images/icons8-css3.svg";
import jsImage from "../images/icons8-javascript.svg";
import tailwindImage from "../images/tailwind-svgrepo-com.svg";
import node from "../images/node-svgrepo-com.svg";
import sql from "../images/sql-database-generic-svgrepo-com.svg";
import reactImage from "../images/icons8-reaccionar.svg";
import firebaseImage from "../images/icons8-firebase.svg";
import bootsT from "../images/bootstrap-4-logo-svgrepo-com.svg";
import wp from "../images/wordpress-color-svgrepo-com.svg";

function Skills() {
  return (
    <div>
      <p className="my-5 text-2xl font-bold text-center">Skills:</p>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-2 items-center">
          <img src={htmlImage} sizes={12} />
          <img src={cssImage} sizes={12} />
          <img src={jsImage} width={48} />
          <img src={reactImage} width={42} />
          {/* <img src={node} width={40} /> */}
          {/* <img src={sql} width={46} /> */}
          <img src={firebaseImage} width={48} />
          <img src={tailwindImage} width={48} />
          <img src={bootsT} width={34} />
          <img src={wp} width={40} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
