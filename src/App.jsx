import React from "react";
import {useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    // Restore scroll position on mount
    window.scrollTo(0, sessionStorage.getItem("scrollPosition") || 0);

    // Save scroll position before unmounting
    const saveScroll = () => sessionStorage.setItem("scrollPosition", window.scrollY);
    window.addEventListener("beforeunload", saveScroll);

    return () => window.removeEventListener("beforeunload", saveScroll);
  }, []);
  
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Project/>
        <Experience/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
