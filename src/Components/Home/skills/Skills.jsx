import backend from '../../../assets/backend.png'
import frontend from '../../../assets/5338322.png'
import others from '../../../assets/others.png'
import { LuCornerDownRight } from "react-icons/lu";
const Skills = () => {
    return (
        <div className="h-[450px] container mx-auto mt-10">
            <h1 className='text-4xl text-center font-semibold pb-8 text-[#38657a]'>___Skills Overview___</h1>
            <div className="grid grid-cols-3 gap-20">
                <div className="h-[300px] bg-white rounded-lg shadow-2xl px-2">
                    <div className='flex gap-4 items-center  '>
                    <img src={frontend} className=' w-[80px] h-[80px]' />
                    <p className='text-xl font-semibold'>Front-End</p>
                    </div>
                    <div className='mt-4 font-medium'>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>HTML5</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>Tailwind CSS</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p> React.js</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="h-[300px] bg-white rounded-lg shadow-2xl px-2">
                    <div className='flex gap-4 items-center  '>
                    <img src={backend} className=' w-[80px] h-[80px]' />
                    <p className='text-xl font-semibold'>Back-End</p>
                    </div>
                    <div className='mt-4 font-medium'>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>Node.js</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>Express.js</p>
                        </div>
                       
                    </div>
                </div>
                <div className="h-[300px] bg-white rounded-lg shadow-2xl px-2">
                    <div className='flex gap-4 items-center  '>
                    <img src={others} className=' w-[80px] h-[80px]' />
                    <p className='text-xl font-semibold'>Others</p>
                    </div>
                    <div className='mt-4 font-medium'>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>C</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>C++</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>MongoDB</p>
                        </div>
                        <div className='flex gap-2 px-8 py-2'>
                        <LuCornerDownRight className='text-[#548AA3]'/>
                        <p>MySQL</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;