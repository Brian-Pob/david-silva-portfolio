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
        <h1 className="text-4xl font-raleway font-bold">ABOUT</h1>
        <hr className="pt- w-24 inline-flex justify-center h-0.5 border-t-0 bg-blue-700 opacity-100 dark:opacity-50"></hr>
        <p className="mt-4 mx-12 lg:mx-32 xl:mx-60 2xl:mx-80">
          I am an Undergraduate Senior Student at Florida State University. I
          enjoy studying computer science and enhancing my knowledge
          specifically in the field of Software Engineering. I am in the FSU
          Marching Chiefs and play Euphonium. I am also a part of the ACM
          Chapter at FSU where I attend weekly programming club meetings as well
          as periodically hosted presentations that cover topics in Computer
          Science.
        </p>
        <div className="lg:grid grid-cols-2">
          <img
            className="object-scale-down h-52 lg:h-80 lg:ml-12 xl:ml-24 2xl:ml-36 w-full mt-8 "
            src={ProfilePicture}
          ></img>
          <div className="lg:flex flex-col lg:items-start lg:text-start">
            <h1 className="mt-6 mb-2 font-raleway font-bold text-[#728394] text-2xl">
              Aspiring Software Engineer
            </h1>
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
                <li>
                  <span className="font-bold">Age:</span> 21
                </li>
              </ul>
            </div>
            <p className="mt-4 mx-12 lg:ml-0 xl:mr-32 2xl:mr-52">
              I will be adding projects that I am working on that showcase my
              programming skills and knowledge of Software Engineering
              principles to the projects section of this website. I will be
              looking to learn the latest technologies that will help further
              advance my career. I plan on pursuing an M.S. in Computer Science
              and I will be exploring Software Engineering Internship
              opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
