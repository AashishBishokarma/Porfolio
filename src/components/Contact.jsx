import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventdefault();

  const serviceId = "service_tupgqgb";
  const templateId = "service_tupgqgb";
  const publicKey = "0k2iOqLVfAsZYWco2";

  const templateParams = {
    from_name : username,
    from_email: email,
    to_name: "Aashish Bishokarma",
    message:message,
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully", response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error("Error sending email", error);
    });

}

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>


        <form 
          onSubmit={handleSubmit}
          className="flex text-center flex-col justify-center gap-4 mt-10 w-1/2 mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row  justify-between gap-4">
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              type="text"
              placeholder="First Name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              type="text"
              placeholder="Last Name"
            />
          </motion.div>

          <motion.input
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-4 border-2 rounded-2xl border-white"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.textarea
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-4 border-2 rounded-2xl border-white"
            name="Message"
            placeholder="Message"
            id=""
            required
          ></motion.textarea>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-2xl bg-gray-50 text-stone-900 border font-bold duration-300 ease-in-out hover:bg-black hover:text-white"
            type="Submit"
          >
            SUBMIT            
          </motion.button>
        </form>
    </div>
  );
};

export default Contact;
