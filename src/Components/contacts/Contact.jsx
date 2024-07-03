
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/hafsarashid28/', '_blank');
    };

    const openGitHub = () => {
        window.open('https://github.com/HFsa-RaShid', '_blank');
    };
    return (
        <div className="container mx-auto my-8 p-8">
            <h1 className="mb-8 text-4xl font-medium text-center text-[#548AA3]">___Get In Touch___</h1>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Contact Form */}
                <div className="w-full md:w-1/2 p-6">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" 
                                type="text" 
                                placeholder="Your name" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="email" 
                                placeholder="Your email" 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="message" 
                                rows="5" 
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="bg-[#548AA3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                <div className=" px-4">
                
                <p className="text-lg ">
                Have questions or feedback? Feel free to get in touch with me. I'd love to hear from you!
                </p>
                <p className="text-lg mt-4">
                    Email: <span className="text-blue-700">hafsa.cse7.bu@gmail.com</span><br />
                    Phone: +880 1838551941
                </p>
                <div className="mt-6 flex  space-x-4">
                    <button onClick={openLinkedIn}>
                        <FaLinkedin className="w-8 h-8 cursor-pointer" />
                    </button>
                    <button onClick={openGitHub}>
                        <FaGithub className="w-8 h-8 cursor-pointer" />
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
