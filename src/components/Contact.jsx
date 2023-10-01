import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Abstract from "../assets/abstract.png";


/*PERF: Add email server functionality*/

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l6c1rpo', 'template_gsy43pw', form.current, 'AHlQL5Kdi3xirCbrw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="w-full min-h-screen lg:h-screen bg-gradient-to-r from-[#982E6F] to-[#43289F] flex lg:flex-row lg:pt-0 pt-16 flex-col-reverse">
      <div className="w-full h-full flex items-center justify-center">
        <img src={Abstract} className="lg:w-full w-1/2" />
      </div>
      <div className="w-full h-full flex flex-col justify-center lg:mx-0">
        <h1 className="sm:text-6xl text-5xl font-extrabold sm:mb-6 mb-10 lg:mx-0 mx-8 lg:mt-0 mt-8 text-center lg:text-start">Get In Touch</h1>
        <form ref={form} onSubmit={sendEmail} className="lg:ml-0 mx-16">
          <input
            className="w-full rounded-3xl border border-gray-300 text-xl p-4 bg-[rgba(256,256,256,0.18)] text-white h-16 mb-4 placeholder-white"
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input
            className="w-full rounded-3xl border border-gray-300 text-xl p-4 bg-[rgba(256,256,256,0.18)] text-white h-16 mb-4 placeholder-white"
            type="email"
            name="user_email"
            placeholder="johndoe@example.com"
            required
          />
          <textarea
            name="message"
            className="w-full h-72 rounded-3xl border border-gray-300 text-xl p-4 bg-[rgba(256,256,256,0.18)] text-white col-span-full row-span-full placeholder-white"
            type="text"
            placeholder="Message"
            required
          />
          <button className="relative border bg-white border-white px-14 font-extrabold py-4 mr-12 mt-8 text-lg text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-0">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
