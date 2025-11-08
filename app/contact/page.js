'use client';
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com'; // For email sending
import { useRouter } from 'next/navigation'; // For routing
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'; // Import Tabler Icons including IconMail

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter(); // Initialize router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'prathamakkewar7@gmail.com', // The recipient email
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSent(true);
      setError(false);
    }, (error) => {
      console.error('FAILED...', error);
      setIsSent(false);
      setError(true);
    });
  };

  useEffect(() => {
    // Redirect to home page after 3 seconds if the email is sent
    if (isSent) {
      const timer = setTimeout(() => {
        router.push('/'); // Redirect to home page
      }, 3000); // Delay in milliseconds (3 seconds)
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isSent, router]);

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
      <div id="particles-js" className="fixed inset-0 z-0 h-full min-h-full"></div> 
      <div className="z-10 flex flex-col items-end justify-center w-full min-h-full mt-5 px-4 md:px-0">
        <div className="flex flex-col text-white items-center w-full md:w-[50%] max-w-3xl mb-20 md:pr-9">
          <div className="flex flex-row items-center pt-20">
            <span className="text-6xl md:text-9xl font-bold text-[#ffffff]">P</span>
            <span className="relative text-4xl md:text-6xl font-bold text-[#ffffff]">
              ratham <span className="md:inline hidden">Akkewar</span>
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-0 md:pr-5 text-2xl md:text-5xl font-bold text-[#f39c12]">
              AI-ML|FSD|GENAI
              </p>
            </span>
          </div>
          
          {/* Contact Section */}
          <div className="mt-12 glass-card p-6 md:p-8 rounded-lg backdrop-blur-lg shadow-lg w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contact Me</h2>
            <form onSubmit={sendEmail} className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 md:p-4 rounded bg-black/70 text-white border border-[#f39c12] hover:border-[#e67e22] transition-all duration-200"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 md:p-4 rounded bg-black/70 text-white border border-[#f39c12] hover:border-[#e67e22] transition-all duration-200"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="p-3 md:p-4 rounded bg-black/70 text-white border border-[#f39c12] hover:border-[#e67e22] transition-all duration-200"
                required
              />
              <button type="submit" className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
                Send Message
              </button>

              {/* Confirmation Message */}
              {isSent && <p className="text-green-500">Thank you! You will be redirected to the home page shortly.</p>}
              {error && <p className="text-red-500">Failed to send message. Try again.</p>}
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-8">
            <a href="https://github.com/prathamakkewar77" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub size={36} stroke={1.5} className="text-white hover:text-[#f39c12] transition-all duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/prathamakkewar77" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin size={36} stroke={1.5} className="text-white hover:text-[#f39c12] transition-all duration-200" />
            </a>
            <a href="mailto:prathamakkewar7@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconMail size={36} stroke={1.5} className="text-white hover:text-[#f39c12] transition-all duration-200" />
            </a>
          </div>

        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
        }

        input, textarea {
          outline: none;
        }

        button:hover {
          box-shadow: 0px 10px 15px rgba(243, 156, 18, 0.4);
        }
      `}</style>
    </>
  );
}
