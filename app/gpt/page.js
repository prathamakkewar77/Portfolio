'use client';
import Image from "next/image";
import { FloatingDockDemo } from '../../components/navbar'; // Ensure FloatingDockDemo is correctly imported
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Dynamically load particles.js
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    
    // Dynamically load Stats.js
    const scriptStats = document.createElement('script');
    scriptStats.src = "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"; 

    scriptParticles.onload = () => {
      // Initialize particles.js
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

      // Initialize Stats.js after particles.js is loaded
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
        <div className="flex flex-col text-white items-start w-[50%]">
          <div className="flex flex-row items-start pt-20">
            <span className="text-9xl font-bold text-[#61dafb]">P</span>
            <span className="relative text-6xl font-bold mt-2 pt-2 text-[#61dafb]">
              ratham Akkewar
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold text-[#f39c12]">
                AI-ML|FSD|GENAI
              </p>
            </span>
          </div>
          {/* Passion for Coding with Text Styling */}
         
        </div>
      </div>
     </>
  );
}




