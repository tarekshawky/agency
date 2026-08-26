import Image from 'next/image'
import { LuShieldCheck } from "react-icons/lu";
import Reveal from './Reveal';

const services = [
    'Responsive Website Design',
    'Frontend Development',
    'UI/UX Design Optimization',
];

const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'Bootstrap', 'WordPress', 'Elementor',
];

export default function About() {
    return (
        <div id='about' className='container py-20'>
            <div className="flex flex-col items-center gap-3 text-center mb-12">
                <span className="text-primary uppercase tracking-widest text-xs font-semibold">
                    About
                </span>
                <h2 className="font-bold text-3xl md:text-4xl">Get to Know Me</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
                <Reveal>
                    <div className='about-image-frame'>
                        <Image className='w-full rounded-2xl' src='/about.png' alt="About Image" width={500} height={500}/>
                    </div>
                </Reveal>

                <Reveal delay={150}>
                    <div>
                        <h3 className='text-2xl font-bold mb-3'>About Me</h3>
                        <p className='text-gray-300 leading-relaxed'>
                            I am Tarek Shawky, a passionate frontend developer specializing in crafting engaging user experiences with HTML, CSS, JavaScript, Bootstrap, TailwindCSS, WordPress, and Elementor plugin.
                        </p>

                        <div className='flex flex-wrap gap-2 mt-5'>
                            {skills.map((skill) => (
                                <span key={skill} className='skill-chip'>{skill}</span>
                            ))}
                        </div>

                        <h3 className='text-xl font-bold mt-8 mb-3'>Services</h3>
                        <ul className='flex flex-col gap-3'>
                            {services.map((service) => (
                                <li key={service} className='service-item'>
                                    <LuShieldCheck className='text-primary shrink-0' size={20}/>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
