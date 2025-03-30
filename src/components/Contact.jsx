import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

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
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="text-center tracking-tighter">
        <form className="flex text-center flex-col justify-center gap-4 mt-10 w-1/2 mx-auto">
          <div className="flex flex-col sm:flex-row lg:flex-col justify-between gap-4">
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className="p-4 border-2 rounded-2xl border-white"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-4 border-2 rounded-2xl border-white"
            name="Message"
            placeholder="Message"
            id=""
            required
          ></textarea>
          <button
            className="p-4 rounded-2xl bg-black text-white text- hover:bg-white hover:text-black border duration-300 ease-in-out"
            type="Submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
