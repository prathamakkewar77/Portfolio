'use client'; 
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    
    const scriptStats = document.createElement('script');
    scriptStats.src = "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"; 

    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 8, "density": { "enable": false, "value_area": 1683.58 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "edge", "stroke": { "width": 1, "color": "#1e1e1e" } },
          "opacity": { "value": 0.3, "random": true },
          "size": { "value": 90, "random": false },
          "line_linked": { "enable": true, "distance": 785.67, "color": "#ffffff", "opacity": 0.53, "width": 2.4 },
          "move": { "enable": true, "speed": 1, "out_mode": "bounce" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } },
        "retina_detect": true
      });

      scriptStats.onload = () => {
        if (typeof Stats !== 'undefined') {
          var stats = new Stats();
          stats.setMode(0); 
          stats.domElement.style.position = 'absolute';
          stats.domElement.style.left = '0px';
          stats.domElement.style.top = '0px';
          document.body.appendChild(stats.domElement);

          const count_particles = document.querySelector('.js-count-particles');
          const update = () => {
            stats.begin();
            stats.end();
            if (window.pJSDom[0]?.pJS.particles?.array) {
              count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
        } else {
          console.error("Stats is not available.");
        }
      };
      document.body.appendChild(scriptStats); 
    };

    document.body.appendChild(scriptParticles); 
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 h-full"></div> 
      <div className="z-10 flex flex-col items-end justify-center w-full h-full mt-5">
      <a href="https://drive.google.com/file/d/1iqzPmLsJ98mOKDcSNl3Je5V2y8VokY_u/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="fixed top-4 right-4 bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
          View Resume
        </button></a>
        
        {/* Main Content Container */}
        <div className="flex flex-col items-start  sm:w-[70%] md:w-[50%] text-white px-4 md:px-0">
        
          {/* Name Block */}
          <div className="flex flex-row items-start pt-20">
            <span className="text-6xl md:text-9xl font-bold text-[#ffffff]">P</span>
            <span className="relative text-5xl md:text-6xl font-bold mt-1 md:mt-2 md:pt-2 text-[#ffffff]">
              ratham <span className="hidden md:inline "> Akkewar </span>
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  md:pr-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#f39c12]">
              AI-ML|FSD|GENAI
              </p>
            </span>
          </div>
      
          <div className="md:hidden block grayscale  relative">
  <img src="./pratham.png" alt="Pratham Akkewar" width={600} height={600} className="" />
  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100"></div>
</div >
          <div className="relative text-white  text-lg sm:text-xl md:text-2xl md:mt-10 mb-5 sm:mt-10">
          
            <p className="italic animate-fadeIn text-lg sm:text-xl md:text-2xl">
              <span className="text-[#f39c12] font-bold">"Coding is my way of telling stories"</span>. 
              I see myself as a <span className="text-[#61dafb] font-bold">storyteller</span> for <span className="text-[#61dafb] font-bold">computers</span>.
            </p>
            <p className="mt-4 animate-slideInUp">
              Each <span className="font-semibold text-[#f39c12]">line of code</span> is like a sentence in a story. Every bug is a twist, 
              and solving it drives the story forward.
            </p>
            <p className="mt-4 animate-slideInUp">
              Coding lets me <span className="font-bold text-[#61dafb]">create solutions</span> and build experiences that people can enjoy, 
              bringing my ideas to life.
            </p>
            
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1.5s ease-in forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-slideInUp {
          transform: translateY(30px);
          opacity: 0;
          animation: slideInUp 1.2s ease-in forwards;
        }
        @keyframes slideInUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
     </>
  );
}
