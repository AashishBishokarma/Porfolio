import project1 from "../assets/projects/forever.png";
import project2 from "../assets/projects/weather.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an enthusiastic and dedicated full-stack developer with a strong passion for building dynamic and user-friendly web applications. With hands-on experience in the MERN stack (MongoDB, Express.js, React, and Node.js), I am constantly learning and refining my skills to create efficient and scalable solutions. I thrive on solving problems, exploring new technologies, and turning ideas into reality through code. My goal is to develop seamless digital experiences while continuously growing as a developer and expanding my expertise in full-stack development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "JAN 2023 - FEB 24",
    role: " Front-End Development Intern  ",
    company: "Code Soft",
    description: `Developed and designed three projects using HTML, CSS, and JavaScript, showcasing front-end development skills. Created a responsive landing page with modern design and seamless navigation. Built a functional calculator with a clean UI and basic operations using JavaScript. Gained experience in coding standards, debugging, and browser compatibility testing while collaborating with mentors to improve skills and meet project deadlines.`,
    technologies: ["HTML","Vanilla CSS","Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "FOREVER",
    image: project1,
    description:
      "Developed a responsive e-commerce web application using React.js and Vite, ensuring fast performance and smooth user interactions. Integrated React Router for seamless navigation and utilized Context API for efficient global state management. Focused on creating a pixel-perfect UI, incorporating features like a product catalog, search functionality, login and signup pages, and a shopping cart. Ensured an optimal user experience across devices through responsive design and efficient data handling.",
    technologies: ["React", "Vite", "Context API" , "React Router" , "Tailwind CSS"],
    projectlink: "https://ecommerce-cu41c532y-ashishs-projects-e7df4efa.vercel.app/",
  },
  {
    title: "Live Weather forecasting App",
    image: project2,
    description:
      "Integrated a weather API to fetch real-time weather data based on user-provided location names. Displayed key weather metrics, including temperature, humidity, and wind details, in a user-friendly interface. Ensured responsiveness and optimized the application for seamless performance across various devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    projectlink: "https://aashishbishokarma.github.io/Weather-App/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
