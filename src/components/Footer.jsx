import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm font-bold">&copy; {new Date().getFullYear()} Vanessa Sánchez.</p>
        <p>Hecho con ❤️ y React.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
