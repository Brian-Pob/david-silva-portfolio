import { Link } from "react-scroll";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsArrowUpCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="text-center">
        <h2 className="font-poppins font-bold text-4xl text-[#45505b]">
          David Silva
        </h2>
        <div className="text-3xl flex flex-row space-x-8 mt-4 justify-center text-[#0678e3]">
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
          <div
            className="absolute text-4xl right-6 mt-3 hover:text-[#0563bb]"
            title="Scroll to Hero Section"
          >
            <Link to="hero" spy={true} smooth={true} duration={700}>
              <BsArrowUpCircleFill />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
