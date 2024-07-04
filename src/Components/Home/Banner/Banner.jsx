import { NavLink } from 'react-router-dom';
import banner from '../../../assets/hafsa.jpg'
import { GoDownload } from "react-icons/go";
import { FaChevronCircleRight } from "react-icons/fa";
const Banner = () => {
    const handleFileDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://portfolio-hafsa-rashid.vercel.app/download/6685246052b86f950ad2f9ac'; 
        link.setAttribute('download', 'Hafsa_Rashid_Web_Developer_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className="lg:h-[570px] " style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${banner})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
          }}>

            <div className='md:flex justify-between'>
                <div className='w-[60%] lg:w-[50%] px-3 md:p-8 lg:p-20 pt-4 md:pt-10 lg:mt-16 '>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-bold pb-2'>I'm <span className='text-[#548AA3]'>Hafsa Rashid</span></h1>
                    <p className='text-[#548AA3] text-[12px] md:text-xl pb-4 font-medium'>Web Developer</p>
                    <p className='pb-4 text-[10px] md:text-[16px] '>A motivated undergraduate student exploring the dynamic world of web development. I thrive on crafting intuitive, efficient web applications that enhance user experiences. With a strong foundation in modern technologies and a commitment to growth, I'm eager to contribute to impactful projects and push the boundaries of what's possible in web development.</p>

                    <div className='lg:flex gap-8 '>
                    <NavLink>
                        <button className='text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] text-[#548AA3] bg-white font-medium hover:bg-[#548AA3] hover:text-white flex items-center mb-2 gap-2' onClick={handleFileDownload}>Download Resume <GoDownload /></button>

                    </NavLink>
                    <NavLink to='/about'>
                        <button className='text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] bg-[#548AA3] text-white font-medium hover:text-[#548AA3] hover:bg-white mb-2 flex items-center gap-2'>More About Me <FaChevronCircleRight /></button>

                    </NavLink>
                    </div>

                </div>
                
                

            </div>
        </div>

    );
};

export default Banner;

