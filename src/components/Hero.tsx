import { useEffect, useRef } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion, useInView, useAnimation } from "framer-motion";
import Typed from "typed.js";

function Hero() {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
      strings: ["Undergraduate Student", "Aspiring Software Engineer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col bg-hero_background bg-center bg-cover bg-blend-overlay bg-white/60"
    >
      <div className="flex flex-1 items-center md:mb-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="text-center mx-auto text-[#45505b]"
        >
          <h1 className="text-4xl font-raleway font-bold md:text-6xl">
            Hi, I'm David Silva
          </h1>
          <p className="text-1xl font-poppins md:text-3xl mt-2">
            I'm an <span className="auto-type text-[#0563bb]"></span>
          </p>
          <div className="text-2xl md:text-3xl flex flex-row space-x-8 mt-5 justify-center">
            <a
              href="https://github.com/Daverhan"
              target="_blank"
              title="David Silva's GitHub Account"
              className="hover:text-[#0563bb]"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/daverhan/"
              target="_blank"
              title="David Silva's Instagram Account"
              className="hover:text-[#0563bb]"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/david-anthony-silva/"
              target="_blank"
              title="David Silva's LinkedIn Account"
              className="hover:text-[#0563bb]"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
