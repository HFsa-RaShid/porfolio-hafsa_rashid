import eduConnect from "../../assets/edu.png";
import resty from "../../assets/resty.png";
import MeetUp from "../../assets/MeetUp.png";
import banner from "../../assets/bg.jpg";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from "aos";

const Projects = () => {
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="md:h-[550px] pb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Projects | Hafsa_Rashid</title>
      </Helmet>
      <div className=" container mx-auto">
        <div className="App ">
          <h1 className="mb-16 py-8 text-4xl font-medium text-center text-[#38657a]">
            {"___"}
            <span>
              <Typewriter
                words={["Projects___"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        {/* <h1 className="mb-16 py-8 text-4xl font-medium text-center text-[#548AA3]">___My Projects___</h1> */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10"
          data-aos="fade-left"
        >
            <div
            className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url(${MeetUp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => openModal("modal_MeetUp")}
          >
            <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <div className="text-white text-2xl font-bold">MeetUp</div>
            </div>
          </div>
          <div
            className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url(${eduConnect})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => openModal("modal_eduConnect")}
          >
            <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <div className="text-white text-2xl font-bold">EduConnect</div>
            </div>
          </div>
          <div
            className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url(${resty})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => openModal("modal_restY")}
          >
            <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <div className="text-white text-2xl font-bold">RestY</div>
            </div>
          </div>
          
        </div>
        {/* <div className="flex justify-center mt-8">
                
            </div> */}

        {/* Modals */}
        <dialog id="modal_MeetUp" className="modal">
          <div className="modal-box w-full max-w-4xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">MeetUp</h3>
            <ul className="list-disc list-inside py-2">
              <li>
                <a
                  href="https://meetup-d48c4.web.app"
                  target="_blank"
                  className="text-blue-500"
                >
                  Live URL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/takbirgazi/meetup-client"
                  target="_blank"
                  className="text-blue-500"
                >
                  Client Code
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/takbirgazi/meetup-server"
                  target="_blank"
                  className="text-blue-500"
                >
                  Server Code
                </a>
              </li>
            </ul>
            <p className="py-4">
              MeetUp is a video conferencing app designed to make collaboration
              and connection easier, no matter where you are.
            </p>
            <h4 className="font-bold text-md">Key Features</h4>
            <ul className="list-disc list-inside py-2">
              <li>
                Team Meeting: Start group calls instantly with chat, screen
                share, whiteboard, and host controls.
              </li>
              <li>
                Schedule A Meeting: Set future meetings with countdowns and
                details.
              </li>
              <li>
                Support Chatbot: Offers quick responses with options for AI or
                human-assisted replies.
              </li>
              <li>
                ToDo tasks: The to-do task feature in MeetUp helps users manage
                and prioritize meeting-related tasks efficiently by creating,
                editing, and tracking to-dos within the app.
              </li>
            </ul>
            <h4 className="font-bold text-md">Technologies Used</h4>
            <ul className="list-disc list-inside py-2">
              <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
              <li>Authentication: Firebase, JWT</li>
              <li>Real-time Communication: ZEGOCLOUD </li>
              <li>Email Service: Nodemailer, Email.js</li>
              <li>Date/Time Management: Moment.js</li>
              <li>Chatbot Integration: Tidio</li>
            </ul>
          </div>
        </dialog>

        <dialog id="modal_eduConnect" className="modal">
          <div className="modal-box w-full max-w-4xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">EduConnect</h3>
            <ul className="list-disc list-inside py-2">
              <li>
                <a
                  href="https://educonnect-9f39f.web.app/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Live URL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HFsa-RaShid/edu-connect-client"
                  target="_blank"
                  className="text-blue-500"
                >
                  Client Code
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HFsa-RaShid/edu-connect-server"
                  target="_blank"
                  className="text-blue-500"
                >
                  Server Code
                </a>
              </li>
            </ul>
            <p className="py-4">
              EduConnect is a comprehensive Collaborative Study Platform
              designed to connect students, tutors, and administrators,
              enhancing educational collaboration, resource sharing, and user
              management.
            </p>
            <h4 className="font-bold text-md">Key Concepts</h4>
            <p className="py-2">
              EduConnect aims to streamline educational activities by providing
              a centralized platform where students can easily find study
              sessions, tutors can manage sessions and materials, and
              administrators can oversee and facilitate the entire process. It
              solves the problem of fragmented educational interactions by
              offering a cohesive environment for learning and collaboration.
            </p>
            <h4 className="font-bold text-md">Major Features</h4>
            <ul className="list-disc list-inside py-2">
              <li>
                Role-Based Access Control (RBAC): EduConnect excels with its
                robust RBAC system, ensuring secure and efficient user
                management across students, tutors, and administrators. This
                feature allows precise control over platform access and
                permissions, enhancing overall security and user experience.
              </li>
              <li>
                Comprehensive Dashboard Functionality: The platform offers
                extensive dashboard capabilities tailored for both students and
                tutors. Students can efficiently manage booked sessions, create
                and manage personal notes, and access study materials. Tutors
                benefit from tools to create sessions, upload materials, and
                manage session details, all of which streamline administrative
                tasks and foster collaboration.
              </li>
              <li>
                Dynamic Session Management: EduConnect provides dynamic session
                management features that facilitate seamless session creation,
                approval workflows, and detailed session views. This
                functionality supports transparent communication between tutors
                and administrators, ensuring clear session details and
                streamlined booking processes for students.
              </li>
            </ul>
            <h4 className="font-bold text-md">Technologies Used</h4>
            <ul className="list-disc list-inside py-2">
              <li>
                Frontend: HTML, Tailwind CSS, React.js, JavaScript,Tanstack
                Query, JWT implementation
              </li>
              <li>
                Backend: Node.js with Express.js, MongoDB, and middleware{" "}
              </li>
              <li>
                Integration: Social login integration using Google and GitHub
                OAuth for seamless user authentication.
              </li>
            </ul>
          </div>
        </dialog>

        <dialog id="modal_restY" className="modal">
          <div className="modal-box w-full max-w-4xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">RestY</h3>
            <ul className="list-disc list-inside py-2">
              <li>
                <a
                  href="https://ass10-resty-client.web.app/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Live URL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HFsa-RaShid/resty-client"
                  target="_blank"
                  className="text-blue-500"
                >
                  Client Code
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HFsa-RaShid/resty-server"
                  target="_blank"
                  className="text-blue-500"
                >
                  Server Code
                </a>
              </li>
            </ul>
            <p className="py-4">
              RestY is a feature-rich hotel booking platform with user-friendly
              design, secure authentication, detailed room listings, booking
              management, and robust review capabilities for a seamless guest
              experience.
            </p>
            <h4 className="font-bold text-md">Concept and Problem Solved</h4>
            <p className="py-2">
              RestY is a user-friendly hotel booking platform designed to make
              finding and booking accommodations easy and efficient. It
              addresses the need for an intuitive system that provides room
              availability, booking options, user reviews, and special offers.
            </p>
            <h4 className="font-bold text-md">Key Features</h4>
            <ul className="list-disc list-inside py-2">
              <li>
                Homepage Design: Visual Banner with images or videos of hotel
                rooms, Interactive Map displaying the hotel's location, Featured
                Rooms with a "Book Now" button, and User Reviews showing
                authentic user ratings and comments.
              </li>
              <li>
                User Authentication: Email/Password Login for secure account
                creation and login, and Google Login for easy login with Google
                via Firebase.
              </li>
              <li>
                Room Management: Rooms Page listing available rooms with price
                and review filters, Room Details Page with detailed room
                information and booking options, and My Bookings Page to manage
                bookings, update dates, and post reviews.
              </li>
            </ul>
            <h4 className="font-bold text-md">Technologies Used</h4>
            <ul className="list-disc list-inside py-2">
              <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js, MongoDB</li>
              <li>Authentication: Firebase, JWT</li>
              <li>Animations: AOS (Animate on Scroll)</li>
              <li>Mapping: Pigeon-maps</li>
            </ul>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Projects;
