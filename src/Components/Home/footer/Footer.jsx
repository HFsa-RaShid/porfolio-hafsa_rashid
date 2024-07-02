import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/hafsarashid28/', '_blank');
    };

    const openGitHub = () => {
        window.open('https://github.com/HFsa-RaShid', '_blank');
    };

    return (
        <footer className="footer footer-center bg-[#D9EDED] text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <NavLink to='about' className="link link-hover">About Me</NavLink>
    <NavLink to='contact' className="link link-hover">Contact</NavLink>
    
    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <div className="mt-6 flex justify-center space-x-4">
                    <button onClick={openLinkedIn}>
                        <FaLinkedin className="w-8 h-8 cursor-pointer" />
                    </button>
                    <button onClick={openGitHub}>
                        <FaGithub className="w-8 h-8 cursor-pointer" />
                    </button>
                </div>
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Hafsa rashid</p>
  </aside>
</footer>
    );
};

export default Footer;