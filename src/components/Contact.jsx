import React from "react";
import Abstract from "../assets/abstract.png";

/*TODO: Add email server functionality*/

const Contact = () => {
  return (
    <div className="w-full min-h-screen lg:h-screen bg-gradient-to-r from-[#982E6F] to-[#43289F] flex lg:flex-row flex-col-reverse">
      <div className="w-full h-full flex items-center justify-center">
        <img src={Abstract} className="lg:w-full w-1/2" />
      </div>
      <div className="w-full h-full flex flex-col justify-center lg:mx-0">
        <h1 className="text-6xl font-extrabold mb-6 lg:mx-0 mx-8 lg:mt-0 mt-8 text-center lg:text-start">Get In Touch</h1>
        <form className="lg:ml-0 mx-16">
          <input
            className="w-full rounded-3xl border border-gray-300 text-xl p-4 bg-[rgba(256,256,256,0.18)] text-white h-16 mb-4 placeholder-white"
            type="text"
            placeholder="Full Name (Optional)"
          />
          <input
            className="w-full rounded-3xl border border-gray-300 text-xl p-4 bg-[rgba(256,256,256,0.18)] text-white h-16 mb-4 placeholder-white"
            type="text"
            placeholder="johndoe@example.com"
            required
          />
          <textarea
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
