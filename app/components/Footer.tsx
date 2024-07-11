import { FaFacebook } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer(){
    return(
        <div id='footer' className='bg-base-200'>
            <footer className="container footer text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center text-[#5f687b]">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved By <strong>Tarek<span
                        className='text-primary'> Shawky</span></strong></p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a target="_blank" href='https://web.facebook.com/tarek.ahmad1'>
                        <FaFacebook  className='text-primary' size={30}/>
                    </a>
                    <a target="_blank" href='https://www.freelancer.com/u/tarek752'>
                        <SiFreelancer className='text-primary' size={30}/>
                    </a>
                    <a target="_blank" href='https://wa.me/201027381528'>
                        <FaWhatsapp  className='text-primary' size={30}/>
                    </a>
                </nav>
            </footer>
        </div>
    );
}