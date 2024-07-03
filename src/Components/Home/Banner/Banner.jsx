import { NavLink } from 'react-router-dom';
import banner from '../../../assets/bannerimg.jpg'
import { GoDownload } from "react-icons/go";
const Banner = () => {
    const handleFileDownload = () => {
        const link = document.createElement('a');
        link.href = 'http://localhost:5000/download/6685246052b86f950ad2f9ac'; 
        link.setAttribute('download', 'Hafsa_Rashid_Web_Developer_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className="h-[550px]"  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='flex'>
                <div className='w-[50%] p-20 mt-16'>
                    <h1 className='text-5xl font-bold pb-2'>I'm <span className='text-[#548AA3]'>Hafsa Rashid</span></h1>
                    <p className='text-[#548AA3] text-xl pb-4 font-medium'>Web Developer</p>
                    <p className='pb-4'>A motivated undergraduate student exploring the dynamic world of web development. I thrive on crafting intuitive, efficient web applications that enhance user experiences. With a strong foundation in modern technologies and a commitment to growth, I'm eager to contribute to impactful projects and push the boundaries of what's possible in web development.</p>

                    <div className='flex gap-8'>
                    <NavLink>
                        <button className='px-4 py-2 border-2 border-[#548AA3] text-[#548AA3] bg-white font-medium hover:bg-[#548AA3] hover:text-white flex items-center' onClick={handleFileDownload}>Download Resume    <GoDownload /></button>

                    </NavLink>
                    <NavLink to='/about'>
                        <button className='px-4 py-2 border-2 border-[#548AA3] bg-[#548AA3] text-white font-medium hover:text-[#548AA3] hover:bg-white'>More About Me</button>

                    </NavLink>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Banner;


