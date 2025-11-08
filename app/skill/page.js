'use client';
import { useEffect } from "react";
import Image from "next/image";
import { 
  IconCode, IconDatabase, IconTools, IconBrandReact, IconBrandNextjs, IconBrandNodejs, 
  IconBrandJavascript, IconDeviceDesktopAnalytics, IconBrandGithub, IconBrain, IconLanguage ,IconBook
} from '@tabler/icons-react'; // Import icons from Tabler Icons

export default function Home() {
  useEffect(() => {
    // Dynamically load particles.js for background effect
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 8, "density": { "enable": false, "value_area": 1683.58 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "edge", "stroke": { "width": 1, "color": "#1e1e1e" } },
          "opacity": { "value": 0.3, "random": true },
          "size": { "value": 90, "random": false },
          "line_linked": { "enable": true, "distance": 785.67, "color": "#ffffff", "opacity": 0.53, "width": 2.4 },
          "move": { "enable": true, "speed": 2, "out_mode": "bounce" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } },
        "retina_detect": true
      });
    };
    document.body.appendChild(scriptParticles);
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 min-h-full"></div>
      <div className="z-10 flex flex-col items-end justify-center w-full min-h-full  mt-5 mb-5 p-0 ">
        <div className="flex flex-col text-white items-start w-full md:w-[50%] mb-20">
          <div className="flex  md:flex-row items-start pt-10 md:pt-20">
            <span className="text-7xl md:text-9xl font-bold text-[#ffffff]">P</span>
            <span className="relative text-5xl md:text-6xl font-bold mt-2 pt-2 text-[#ffffff]">
              ratham Akkewar
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl lg:text-5xl font-bold text-[#f28d35]">
                AI-ML|FSD|GENAI
              </p>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 text-lg hologram-container mt-10 ml-5 mr-5 text-[#f39c12]">
  
  <div className="hologram-panel">
    <IconCode size={48} stroke={1.5} />
    <p className="mt-2">Programming Languages</p>
    <span className="text-sm">Python, C, Java, C++</span>
  </div>

  <div className="hologram-panel">
    <IconBrandReact size={48} stroke={1.5} />
    <p className="mt-2">Frameworks</p>
    <span className="text-sm">TensorFlow, Keras, Flask, Express.js, React.js, Streamlit, CMR, Apex</span>
  </div>

  <div className="hologram-panel">
    <IconDatabase size={48} stroke={1.5} />
    <p className="mt-2">Databases</p>
    <span className="text-sm">MySQL, PostgreSQL, Firebase, MongoDB</span>
  </div>

  <div className="hologram-panel">
    <IconBrain size={48} stroke={1.5} />
    <p className="mt-2">Technologies</p>
    <span className="text-sm">
      GenAI, Data Science, Machine Learning, Artificial Intelligence, Neural Networks, Deep Learning, DevOps, NLP, Blockchain, DSA, Cloud Computing (AWS, Docker)
    </span>
  </div>

  <div className="hologram-panel">
    <IconTools size={48} stroke={1.5} />
    <p className="mt-2">Tools</p>
    <span className="text-sm">
      Git, GitHub, Jupyter Notebooks, VS Code, PyCharm, Sublime Text, REST APIs, Bash, Unix/Linux, IBM Tools, Salesforce Tools
    </span>
  </div>

  <div className="hologram-panel">
    <IconDeviceDesktopAnalytics size={48} stroke={1.5} />
    <p className="mt-2">Web Development</p>
    <span className="text-sm">
      Frontend (HTML, CSS, JavaScript, Bootstrap, React.js, Next.js), Backend (Node.js, Express.js)
    </span>
  </div>

  <div className="hologram-panel">
    <IconBrain size={48} stroke={1.5} />
    <p className="mt-2">Soft Skills</p>
    <span className="text-sm">
      Leadership, Problem-Solving, Communication, Adaptability, Teamwork, Attention to Detail
    </span>
  </div>

  <div className="hologram-panel">
    <IconLanguage size={48} stroke={1.5} />
    <p className="mt-2">Languages Spoken</p>
    <span className="text-sm">
      English, Hindi, Marathi
    </span>
  </div>

</div>
</div>
</div>

      <style jsx>{`
        .hologram-container {
          perspective: 1000px;
        }
        .hologram-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
          transform: rotateY(20deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .hologram-panel:hover {
          transform: rotateY(0deg) scale(1.1);
          box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
        }
        .hologram-panel a {
          color: inherit;
        }
        .hologram-panel p, .hologram-panel span {
          opacity: 0.8;
          text-align: center;
        }

        .w-full h-5 {
          height: 5px;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 3.5rem;
          }
          .text-5xl {
            font-size: 2rem;
          }
          .hologram-panel {
            padding: 15px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
            transform: none; /* Remove tilt on small screens */
          }
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        /* Hide bottom image on small screens */
        @media (max-width: 768px) {
          .hidden.md\\:block {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
