
import { LuCornerDownRight } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";


const About = () => {
    return (
        <div className="container mx-auto my-8 ">
            <h1 className="mb-16 text-4xl font-medium text-center text-[#548AA3]">___About Me___</h1>
            <div className="flex gap-20 px-20">
                <div className="w-[60%]">
                    <h1 className="text-2xl font-semibold pb-8">Personal Information</h1>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Name: Hafsa Rashid</p>

                    </div>
                    <div className="flex items-center gap-4 ">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl py-2">Address: Farida Monjil, Sagordi, Barishal Sadar, barishal-8200, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Email: <span className="text-blue-700 hover:underline">hafsa.cse7.bu@gmail.com</span> </p>

                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Mobile: +880 1838551941</p>

                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Nationality: Bangladeshi </p>
                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Technical Experience: N/A </p>
                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Language: Bangla, English, Hindi </p>
                    </div>
 
                </div>
                <div className="w-[40%]">
                    <h1 className="text-2xl font-semibold">Education</h1>
                        <ul className="steps steps-vertical">
                        <li>
                            <div className="flex">
                            <PiGraduationCap className="text-5xl" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2020-Present</p>
                            <p className="pl-16">Computer Science & Engineering:  University of Barishal</p>
                            <p className="pl-16">Expected Graduation: 2025</p>
                            <p className="pl-16">Current CGPA- 3.56</p>
                            </li>
                        <li>
                            <div className="flex">
                            <FaGraduationCap className="text-5xl text-[#548AA3]" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2019</p>
                            <p className="pl-16">Higher Secondary:  Barishal Govt. Women's College</p>
                            <p className="pl-16">GPA- 5.00</p>
                            </li>
                            <li>
                            <div className="flex">
                            <FaGraduationCap className="text-5xl text-[#548AA3]" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2017</p>
                            <p className="pl-16">Secondary:  Barishal Model School & College</p>
                            <p className="pl-16">GPA- 5.00</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default About;