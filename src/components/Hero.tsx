import { useEffect, useRef } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion, useInView, useAnimation } from "framer-motion";
import Typed from "typed.js";

function Hero() {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
      strings: [
        "Computer Science Student",
        "CyberCorps®: Scholarship for Service Recipient",
      ],
      typeSpeed: 80,
      backSpeed: 40,
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
      id="hero"
      className="h-screen flex flex-col bg-hero_background bg-center bg-cover bg-blend-overlay bg-white/60 justify-center"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="text-center text-[#45505b] min-w-full"
      >
        <h1 className="font-raleway font-bold text-5xl">David Silva</h1>
        <p
          className="font-poppins text-3xl mt-2"
          aria-label={
            "I'm a Computer Science Student and a CyberCorps®: Scholarship for Service Recipient"
          }
        >
          I'm a <span className="auto-type text-[#0563bb]"></span>
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
    </section>
  );
}

export default Hero;
