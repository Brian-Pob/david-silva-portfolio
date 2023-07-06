import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="flex flex-col">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="mt-10 text-center text-[#45505b] font-poppins"
      >
        <h1 className="text-4xl font-raleway font-bold">PROJECTS</h1>
        <hr className="pt- w-36 inline-flex justify-center h-0.5 border-t-0 bg-blue-700 opacity-100 dark:opacity-50"></hr>
        <p className="mt-4 mx-12">
          My GitHub will contain more in-depth information pertaining to each of
          the projects listed here.
        </p>
        <div className="lg:grid 2xl:px-72 grid-cols-2">
          <div className="my-8 px-4">
            <div className="border border-gray-400 p-4">
              <div className="text-start">
                <div className="font-raleway font-bold text-2xl hover:text-[#8397aa]">
                  <a
                    href="https://github.com/Daverhan/PracticeManagement"
                    target="_blank"
                  >
                    Practice Management Application
                  </a>
                </div>
                <p className="italic">C#, .NET MAUI</p>
                <p className="mt-4">
                  A Full-Stack Practice Management Application
                </p>
              </div>
            </div>
          </div>
          <div className="my-8 px-4">
            <div className="border border-gray-400 p-4">
              <div className="text-start">
                <div className="font-raleway font-bold text-2xl hover:text-[#8397aa]">
                  <a href="https://github.com/Daverhan" target="_blank">
                    Personal Portfolio Webpage
                  </a>
                </div>
                <p className="italic">React, TailwindCSS, Typescript</p>
                <p className="mt-4">
                  This webpage features my personal portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
