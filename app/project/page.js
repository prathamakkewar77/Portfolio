'use client';
import { useEffect } from "react";
import Image from "next/image";

// Define your project details
const projects = [
  {
    title: "Twitter Clone: Scalable Social Media Platform | Java, Spring Boot, ReactJS, MySQL, Docker",
    description: "Developed a full-stack social media platform with a modular microservices architecture to ensure scalability and reliability under high user traffic. Implemented essential features such as user authentication, tweet creation, follow/unfollow, and real-time notifications with complete backend logic. Optimized backend APIs and database operations through caching and asynchronous processing, resulting in improved performance and reduced latency.",
    githubLink: "https://github.com/prathamakkewar77/Twitter-Clone"
  },
  {
    title: "AI Resume Analyzer | Python, Flask, NLP, OpenAI API, Streamlit",
    description: "Built an AI-powered resume analysis system leveraging NLP and machine learning models to evaluate resumes based on skill extraction and job-role alignment. Integrated OpenAI API and keyword-matching algorithms to generate intelligent, data-driven feedback and suggestions for resume enhancement. Designed and deployed an interactive Streamlit dashboard that enables real-time scoring, visualization, and detailed reporting for users.",
    githubLink: "https://github.com/prathamakkewar77/Resume_Analyzer"
  },
  {
    title: "Fashion Store | HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, Azure",
    description: "Developed a dynamic and responsive e-commerce platform for fashion products, featuring user authentication, cart management, and real-time product listings. Implemented secure backend services using PHP and MySQL to ensure reliable data handling and seamless transactions. Deployed the application on Azure Static Web Apps, providing scalability, high availability, and consistent performance across devices.",
    githubLink: "https://github.com/prathamakkewar77/fashion-website"
  },
  {
    title: "Gym Website | MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
    description: "Created a comprehensive Gym Management System using the MERN stack to automate member registration, scheduling, and operations. Implemented secure JWT-based authentication and authorization to maintain data privacy and controlled access. Designed a responsive and visually appealing interface using React.js and Tailwind CSS, delivering an intuitive user experience optimized for both desktop and mobile devices.",
    githubLink: "https://github.com/prathamakkewar77/Gym_Website_Mern_Stack"
  },
  {
    title: "FASTag Fraud Detection | Python, Machine Learning, Flask, Scikit-learn, MySQL",
    description: "Developed a machine learning-based system to detect fraudulent FASTag transactions by analyzing toll patterns, vehicle behavior, and anomaly detection metrics. Implemented data preprocessing, feature engineering, and classification models using Scikit-learn to identify irregularities with high accuracy. Integrated the model into a Flask web application connected to a MySQL database for real-time prediction and monitoring of potential fraud cases.",
    githubLink: "https://github.com/prathamakkewar77/Fastag-Fraud-Detection"
  },
  {
    title: "Master Chess Game | Java, JavaFX, Object-Oriented Programming",
    description: "Designed and developed an interactive two-player chess application using Java and JavaFX, adhering to Object-Oriented Design principles. Implemented core game logic including valid move generation, turn-based gameplay, and check/checkmate detection. Enhanced the user experience with an intuitive graphical interface, ensuring smooth gameplay and responsiveness across platforms.",
    githubLink: "https://github.com/prathamakkewar77/Master_Chess_Game"
  }
];

export default function Home() {
  useEffect(() => {
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";

    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#61dafb" },
          "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
          "opacity": { "value": 0.5, "random": true },
          "size": { "value": 4, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#61dafb", "opacity": 0.4, "width": 1 },
          "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "retina_detect": true
      });
    };

    document.body.appendChild(scriptParticles);
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 h-full"></div> 

      <div className="z-10 flex flex-col items-end justify-center w-full h-full mt-5 px-6 md:px-24">
        <div className="flex flex-col text-white items-start w-full md:w-[60%]">
          <div className="flex flex-row items-start pt-20">
            <span className="text-9xl font-bold text-[#ffffff]">P</span>
            <span className="relative text-6xl font-bold mt-2 pt-2 text-[#ffffff]">
              ratham Akkewar
              <br />
              <p className="absolute animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl font-bold text-[#f39c12]">
                 AI-ML|FSD|GENAI
              </p>
            </span>
          </div>

          {/* Project Showcase */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Updated Title with Orange Color */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#f39c12]">{project.title}</h2>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">{project.description}</p>

                {/* Buttons for GitHub and Live Demo */}
                <div className="mt-6 flex space-x-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                    View on GitHub
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#61dafb] hover:bg-[#21a1f1] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
