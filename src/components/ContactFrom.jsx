import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import Buzon from '../images/buzon-de-correo.png';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m19wx2g",
        "template_0a6dzug",
        form.current,
        "CEV6XbbBu0Lvz2Qfx"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notifySuccess = () => {
    toast.success("Mensaje enviado con éxito", {
      duration: 4000,
      position: "bottom-center",
    });
  };

  return (
    <div className="bmb-16">
      <h1 className="text-4xl text-center font-extrabold mb-3 animate-bounce animate-duration-[2000ms] animate-ease-in gradient">Contacto</h1>
      <div className="sm:flex md:grid grid-cols-2 gap-4 items-center m-5 pb-8">
        <Toaster />
        
        <div className="mt-8 p-6 bg-white rounded-xl shadow-md md:col-span-1">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="text"
                name="user_name"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="email"
                name="user_email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensaje:
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                name="message"
                id="message"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-700 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-blue-900 focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        
        <div className="hidden md:block md:col-span-1">
          <a href={`mailto:bvanesanchezp@gmail.com`} target="_blank" rel="noopener noreferrer">
            <div className="p-4 text-center cursor-pointer">
              <img src={Buzon} className="w-40 mx-auto" alt="Buzón de correo" />
              <div className="font-semibold pt-6">bvanesanchezp@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
