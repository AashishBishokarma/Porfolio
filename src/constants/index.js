import project1 from "../assets/projects/Library.png";
import project2 from "../assets/projects/QuizHub.png";
import project3 from "../assets/projects/forever.png";
import project4 from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am an enthusiastic and dedicated full-stack developer with a strong passion for building dynamic and user-friendly web applications. With hands-on experience in the MERN stack (MongoDB, Express.js, React, and Node.js), I am constantly learning and refining my skills to create efficient and scalable solutions. I thrive on solving problems, exploring new technologies, and turning ideas into reality through code. My goal is to develop seamless digital experiences while continuously growing as a developer and expanding my expertise in full-stack development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "JAN 2023 - FEB 24",
    role: "Full-Stack Development Intern",
    company: "Velum AI",
    description: `Contributed to a team-based e-commerce web application, focusing on front-end development with React and supporting backend integration. Collaborated effectively using Git and GitHub for version control, pull requests, and code reviews. Additionally, developed independent projects including a responsive landing page and a JavaScript calculator, reinforcing core web development principles and collaborative workflows.`,
    technologies: ["React", "Node.js", "Git", "GitHub",]
  },
  {
    year: "JAN 2024 - FEB 24",
    role: " Full-Stack Development Intern  ",
    company: "Code Soft",
    description: `Designed and developed multiple front-end projects using HTML, CSS, and JavaScript, demonstrating strong UI/UX skills. Created a responsive landing page with modern design aesthetics and smooth navigation. Built a functional calculator with a clean interface and essential JavaScript operations. Gained practical experience in debugging, writing clean code, and ensuring cross-browser compatibility, while collaborating with mentors to enhance technical proficiency and meet project goals.`,
    technologies: ["HTML","Vanilla CSS","Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "QuestLibrary",
    image: project1,
    description:
      "Built a full-stack library management web application using the MERN stack, designed to display all books available in a college library with a live search feature. Implemented a responsive user interface for seamless browsing and integrated a real-time search experience to allow users to quickly find books by title. Developed an admin panel with secure access where librarians can add and manage books efficiently. Utilized Context API for global state management and ensured smooth client-server interactions using Node.js and Express.",
    technologies: ["React", "Context API", "Node.js", "Express", "MongoDB"],
    projectlink: "https://library-management-system-phi-ten.vercel.app/",
  }
  ,
  {
    title: "QuizHub",
    image: project2,
    description:
      "Created a full-stack quiz web application designed to test users on various tech domains including frontend, backend, CyberSecurity, MachineLearning and DevOps. The app features a clean, responsive UI built with React and supports dynamic question rendering with a set of 10 questions per topic. After completion, users receive instant scoring and are ranked on a real-time scoreboard powered by Socket.io. Integrated MongoDB for storing user data and scores, and used Node.js with Express to manage backend operations and APIs.",
    technologies: ["React","Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io"],
    projectlink: "https://quizz-bebhmmz56-ashishs-projects-e7df4efa.vercel.app/",
  }
  ,
  {
    title: "FOREVER",
    image: project3,
    description:
      "Developed a responsive e-commerce web application using React.js and Vite, ensuring fast performance and smooth user interactions. Integrated React Router for seamless navigation and utilized Context API for efficient global state management. Focused on creating a pixel-perfect UI, incorporating features like a product catalog, search functionality, login and signup pages, and a shopping cart. Ensured an optimal user experience across devices through responsive design and efficient data handling.",
    technologies: ["React", "Vite", "Context API" , "React Router" , "Tailwind CSS"],
    projectlink: "https://ecommerce-cu41c532y-ashishs-projects-e7df4efa.vercel.app/",
  },
  {
    title: "Protfolio",
    image: project4,
    description: `Designed and developed a personal portfolio website using React.js and Vite to showcase technical skills, project experience, and professional background. The site is structured into clearly defined sections including an introduction, skillset, project highlights, internship experience, and a contact form. Integrated Framer Motion to deliver smooth, modern UI animations and enhance overall user experience. Implemented EmailJS for handling contact form submissions, enabling direct communication via personal email. The portfolio emphasizes responsive design, accessibility, and clean code practices, serving as a professional online presence and resume.`,

    technologies: ["React", "Vite", "Context API" , "React Router" , "Tailwind CSS","Framer Motion"],
    projectlink: "porfolio-jade-pi.vercel.app",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
