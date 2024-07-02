
import eduConnect from '../../assets/edu.png';
import resty from '../../assets/resty.png';
import artNest from '../../assets/art.png';

const Projects = () => {
    const openModal = (id) => {
        document.getElementById(id).showModal();
    };

    return (
        <div className="container mx-auto my-14">
            <h1 className="mb-16 text-4xl font-medium text-center text-[#548AA3]">___My Projects___</h1>
            <div className="flex items-center justify-center gap-10">
                <div 
                    className="relative w-96 h-60 shadow-2xl bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: `url(${eduConnect})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                    onClick={() => openModal('modal_eduConnect')}
                >
                    <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                        <div className="text-white text-2xl font-bold">EduConnect</div>
                    </div>
                </div>
                <div 
                    className="relative w-96 h-60 shadow-2xl bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: `url(${resty})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                    onClick={() => openModal('modal_restY')}
                >
                    <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                        <div className="text-white text-2xl font-bold">RestY</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div 
                    className="relative w-96 h-60 shadow-2xl bg-cover bg-center cursor-pointer" 
                    style={{ backgroundImage: `url(${artNest})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                    onClick={() => openModal('modal_artNest')}
                >
                    <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                        <div className="text-white text-2xl font-bold">ArtNest</div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <dialog id="modal_eduConnect" className="modal">
                <div className="modal-box w-full max-w-4xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">EduConnect</h3>
                    <ul className="list-disc list-inside py-2">
                        <li><a href="https://educonnect-9f39f.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/edu-connect-client" target="_blank" className="text-blue-500">Client Code</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/edu-connect-server" target="_blank" className="text-blue-500">Server Code</a></li>
                    </ul>
                    <p className="py-4">
                        EduConnect is a comprehensive Collaborative Study Platform designed to connect students, tutors, and administrators, enhancing educational collaboration, resource sharing, and user management.
                    </p>
                    <h4 className="font-bold text-md">Key Concepts</h4>
                    <p className="py-2">
                        EduConnect aims to streamline educational activities by providing a centralized platform where students can easily find study sessions, tutors can manage sessions and materials, and administrators can oversee and facilitate the entire process. It solves the problem of fragmented educational interactions by offering a cohesive environment for learning and collaboration.
                    </p>
                    <h4 className="font-bold text-md">Major Features</h4>
                    <ul className="list-disc list-inside py-2">
                        <li>Role-Based Access Control (RBAC): EduConnect excels with its robust RBAC system, ensuring secure and efficient user management across students, tutors, and administrators. This feature allows precise control over platform access and permissions, enhancing overall security and user experience.</li>
                        <li>Comprehensive Dashboard Functionality: The platform offers extensive dashboard capabilities tailored for both students and tutors. Students can efficiently manage booked sessions, create and manage personal notes, and access study materials. Tutors benefit from tools to create sessions, upload materials, and manage session details, all of which streamline administrative tasks and foster collaboration.</li>
                        <li>Dynamic Session Management: EduConnect provides dynamic session management features that facilitate seamless session creation, approval workflows, and detailed session views. This functionality supports transparent communication between tutors and administrators, ensuring clear session details and streamlined booking processes for students.</li>
                    </ul>
                    <h4 className="font-bold text-md">Technologies Used</h4>
                    <ul className="list-disc list-inside py-2">
                        <li>Frontend: Tanstack Query for efficient data fetching, JWT implementation for secure authentication, and responsive design for optimal user experience.</li>
                        <li>Backend: Node.js with Express.js for robust server-side operations, MongoDB for flexible and scalable data storage, and middleware for role-based access control.</li>
                        <li>Integration: Social login integration using Google and GitHub OAuth for seamless user authentication.</li>
                    </ul>
                </div>
            </dialog>
            
            <dialog id="modal_restY" className="modal">
                <div className="modal-box w-full max-w-4xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">RestY</h3>
                    <ul className="list-disc list-inside py-2">
                        <li><a href="https://ass10-resty-client.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/resty-client" target="_blank" className="text-blue-500">Client Code</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/resty-server" target="_blank" className="text-blue-500">Server Code</a></li>
                    </ul>
                    <p className="py-4">
                        RestY is a feature-rich hotel booking platform with user-friendly design, secure authentication, detailed room listings, booking management, and robust review capabilities for a seamless guest experience.
                    </p>
                    <h4 className="font-bold text-md">Concept and Problem Solved</h4>
                    <p className="py-2">
                        RestY is a user-friendly hotel booking platform designed to make finding and booking accommodations easy and efficient. It addresses the need for an intuitive system that provides room availability, booking options, user reviews, and special offers.
                    </p>
                    <h4 className="font-bold text-md">Key Features</h4>
                    <ul className="list-disc list-inside py-2">
                        <li>Homepage Design: Visual Banner with images or videos of hotel rooms, Interactive Map displaying the hotel's location, Featured Rooms with a "Book Now" button, and User Reviews showing authentic user ratings and comments.</li>
                        <li>User Authentication: Email/Password Login for secure account creation and login, and Google Login for easy login with Google via Firebase.</li>
                        <li>Room Management: Rooms Page listing available rooms with price and review filters, Room Details Page with detailed room information and booking options, and My Bookings Page to manage bookings, update dates, and post reviews.</li>
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
            
            <dialog id="modal_artNest" className="modal">
                <div className="modal-box w-full max-w-4xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">ArtNest</h3>
                    <ul className="list-disc list-inside py-2">
                        <li><a href="https://assignment10-artnest.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/artNest-client" target="_blank" className="text-blue-500">Client Code</a></li>
                        <li><a href="https://github.com/HFsa-RaShid/artNest-server" target="_blank" className="text-blue-500">Server Code</a></li>
                    </ul>
                    <p className="py-4">
                        ArtNest is an inclusive online platform for art enthusiasts, featuring seamless multi-platform authentication, user profile integration, CRUD operations for art items with responsive design, form validation, and filtering options for an enhanced user experience.
                    </p>
                    <h4 className="font-bold text-md">Key Features</h4>
                    <ul className="list-disc list-inside py-2">
                        <li>Multi-Platform Authentication: Versatile Login Options: Users can sign up and log in using email/password, Google, GitHub, Facebook, or Twitter. Secure Access Control: Implements JWT authentication for secure user sessions and data protection.</li>
                        <li>Comprehensive CRUD Operations: User-Friendly Interfaces: Enables users to Add, View, Update, and Delete art & craft items effortlessly. Intuitive Feedback: Provides clear and immediate feedback for actions such as item addition, updates, or deletions.</li>
                        <li>Responsive Design: Cross-Device Compatibility: Ensures a seamless and consistent user experience across mobile, tablet, and desktop devices. Enhanced Accessibility: Adapts to various screen sizes and resolutions, making the platform accessible to a wider audience.</li>
                    </ul>
                    <h4 className="font-bold text-md">Technologies Used</h4>
                    <ul className="list-disc list-inside py-2">
                        <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js</li>
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB</li>
                        <li>Authentication: Firebase, JWT</li>
                        <li>Animations: AOS (Animate on Scroll)</li>
                    </ul>
                </div>
            </dialog>
        </div>
    );
};

export default Projects;