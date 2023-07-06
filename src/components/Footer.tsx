import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl text-[#45505b]">
          David Silva
        </h1>
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
        </div>
      </div>
    </section>
  );
}

export default Footer;
