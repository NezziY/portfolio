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
    <div className="scroll-container flex flex-col justify-center items-center mt-32">
      <h1 className="text-2xl font-extrabold gradient mb-3">Skills</h1>
      <div className="scroll flex">
        <div className="scroll-slide">
          <div><img src={htmlImage} /></div>
          <div><img src={cssImage} /></div>
          <div><img src={jsImage} /></div>
          <div><img src={reactImage} /></div>
          <div><img src={node} /></div>
          <div><img src={sql} /></div>
          <div><img src={firebaseImage} /></div>
          <div><img src={tailwindImage} /></div>
          <div className="px-3"><img src={bootsT} /></div>
          <div className="px-2"><img src={wp} /></div>
        </div>
        <div className="scroll-slide">
          <div><img src={htmlImage} /></div>
          <div><img src={cssImage} /></div>
          <div><img src={jsImage} /></div>
          <div><img src={reactImage} /></div>
          <div><img src={node} /></div>
          <div><img src={sql} /></div>
          <div><img src={firebaseImage} /></div>
          <div><img src={tailwindImage} /></div>
          <div className="px-3"><img src={bootsT} /></div>
          <div className="px-2"><img src={wp} /></div>
        </div>
      </div>
      
    </div>
  );
}

export default Skills;
