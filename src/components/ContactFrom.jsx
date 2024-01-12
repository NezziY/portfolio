import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

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
      duration: 4000, // Duración en milisegundos
      position: "bottom-center", // Posición del toast en la pantalla
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 items-center m-5 py-8 border-t">
      <Toaster />
      <div>
        <div className="p-4">
          Si tienes consultas, comentarios o simplemente deseas ponerte en
          contacto, ¡utiliza el formulario a continuación y te responderé lo
          antes posible!
        </div>
      </div>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
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
              className="px-4 py-2 bg-lime-600 text-white rounded-xl hover:bg-lime-800 focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
