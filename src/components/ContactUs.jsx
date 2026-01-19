import React, { useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {

  const [state, handleSubmit] = useForm("xojjwajq"); 
  const formRef = useRef();

 useEffect(() => {
  if (state.succeeded) {
    toast.success("Message sent successfully! ");
    formRef.current.reset();
  }

  if (state.errors && state.errors.length > 0) {
    toast.error("Something went wrong! ");
  }
}, [state]);
  return (
    <div className="w-full h-screen min-h-screen bg-white p-4 md:p-8">
      <div className="w-full min-h-full bg-black rounded-3xl overflow-hidden bg-cover bg-center bg-[url('../src/assets/kannu.jpg')]">
        
        
        <h1 className="uppercase text-white text-[10vw] md:text-[6vw] font-bold tracking-wide m-5">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row text-white px-5 md:px-16 pb-10 gap-10 mt-[9vw]">

          
          <div className="md:w-1/2 space-y-8">

            <h2 className="uppercase text-3xl font-semibold">
              Get In Touch
            </h2>
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

   
            <a
              href="mailto:divyanshu.jangid9891@gmail.com"
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <i className="fas fa-envelope text-2xl"></i>
              <span className="text-lg">divyanshu.jangid9891@gmail.com</span>
            </a>


            <a
              href="tel:+917505074007"
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <i className="fas fa-phone text-2xl"></i>
              <span className="text-lg">+91 7505074007</span>
            </a>

            <div className="flex items-center gap-4">
              <i className="fas fa-location-dot text-2xl"></i>
              <span className="text-lg">Ghaziabad, Uttar Pradesh, India</span>
            </div>
            
            <div className="flex gap-5">
            <a
              href="https://github.com/Divyanshu9891"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <i className="fab fa-github text-2xl"></i>
             
            </a>

             <a
              href="https://www.instagram.com/dj__kannu_jangid/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
             
            </a>

             <a
              href="https://www.linkedin.com/in/divyanshu-a6b525198/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <i className="fab fa-linkedin text-2xl"></i>
           
            </a>

             </div>
            
          </div>

   
          <div className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-black/60 border border-gray-600 focus:border-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-black/60 border border-gray-600 focus:border-white outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-black/60 border border-gray-600 focus:border-white outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-white hover:text-black transition"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




