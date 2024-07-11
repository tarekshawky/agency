'use client'
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
export default function Skills(){
    return(
        <div id='skills' className='py-8'>
            <div className='flex justify-center'>
                <h2 className='font-bold text-3xl text-[#5f687b]'>My Skills </h2>
            </div>
            <div className='container flex items-center justify-center flex-wrap gap-8 mt-8'>
                <div className='skills-bg'>
                    <ImHtmlFive size={70} />
                    <h2>HTML</h2>
                </div>
                <div className='skills-bg'>
                    <SiCss3 size={70} />
                    <h2>CSS</h2>
                </div>
                <div className='skills-bg'>
                    <FaBootstrap size={70} />
                    <h2>Bootstrap</h2>
                </div>
                <div className='skills-bg'>
                    <RiTailwindCssFill size={70} />
                    <h2>TailwindCss</h2>
                </div>
                <div className='skills-bg'>
                    <SiJavascript size={70} />
                    <h2>Javascript</h2>
                </div>
                <div className='skills-bg'>
                    <RiNextjsFill size={70} />
                    <h2>Nextjs</h2>
                </div>
                <div className='skills-bg'>
                    <FaWordpress size={70} />
                    <h2>Wordpress</h2>
                </div>
                <div className='skills-bg'>
                    <FaElementor size={70} />
                    <h2>Elementor Plugin</h2>
                </div>
            </div>
        </div>
    );
}