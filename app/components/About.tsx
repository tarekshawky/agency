import Image from 'next/image'
import { LuShieldCheck } from "react-icons/lu";

export default function About() {
    return (
        <div className='py-8 container grid grid-col-1 md:grid-cols-2 gap-4 items-center'>
            <div>
                <Image className='w-full' src='/about.png' alt="About Image" width={500} height={500}/>
            </div>
            <div>
                <h2 className='font-bold text-3xl text-[#5f687b]'>
                    About Me
                </h2>
                <p className='text-md my-2'>
                   I'm Tarek Shawky, a passionate frontend developer specializing in crafting engaging user experiences with HTML, CSS, JavaScript, Bootstrap, TailwindCSS, WordPress, and Elementor plugin.
                </p>
                    <ul className='flex flex-col gap-2'>
                        <h2 className='text-2xl font-bold text-[#5f687b]'>Services</h2>
                    <li className='flex items-center gap-2'>
                        <LuShieldCheck  className='text-green-950'/>
                        Responsive Website Design
                    </li>
                    <li className='flex items-center gap-2'>
                        <LuShieldCheck  className='text-green-950'/>
                        Frontend Development
                    </li>
                    <li className='flex items-center gap-2'>
                        <LuShieldCheck  className='text-green-950'/>
                        UI/UX Design Optimization
                    </li>
                </ul>
            </div>
        </div>
);
}
