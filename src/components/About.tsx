import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ProfilePicture from "../assets/profile.png";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="flex flex-col max-w-screen-2xl mx-auto">
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
        <h2 className="text-4xl font-raleway font-bold">ABOUT</h2>
        <hr className="pt- w-24 inline-flex justify-center h-0.5 border-t-0 bg-blue-700 opacity-100 dark:opacity-50"></hr>
        <p className="mt-4 mx-12 lg:mx-32 xl:mx-60 2xl:mx-80">
          I am an undergraduate student at Florida State University with a
          passion for software engineering and cybersecurity. I march Euphonium
          in the FSU Marching Chiefs and I am a member of the ACM Chapter at
          FSU.
        </p>
        <div className="lg:grid grid-cols-2">
          <img
            className="object-scale-down h-52 lg:h-80 lg:ml-12 xl:ml-24 2xl:ml-32 w-full mt-8"
            src={ProfilePicture}
            alt="A picture of David Silva"
            title="David Silva"
          ></img>
          <div className="lg:flex flex-col lg:items-start lg:text-start">
            <h2 className="mt-6 mb-2 font-raleway font-bold text-[#728394] text-2xl">
              Computer Science Student
            </h2>
            <div className="flex flex-row justify-center text-start">
              <ul className="my-4">
                <li>
                  <span className="font-bold">Degree:</span> Pursuing B.A. in
                  Computer Science
                </li>
                <li>
                  <span className="font-bold">Location:</span> Florida, USA
                </li>
                <li>
                  <span className="font-bold">Email:</span> daverhan02@gmail.com
                </li>
              </ul>
            </div>
            <p className="mt-4 mx-12 lg:ml-0 xl:mr-32 2xl:mr-52">
              I am a recipient of the CyberCorps®: Scholarship for Service
              program which is funded by the National Science Foundation. This
              scholarship gives me the opportunity to start a career in
              cybersecurity with the U.S. government.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
