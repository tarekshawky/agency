import { FaFacebook } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <div id='footer' className="footer-wrapper">
            <footer className="container footer text-neutral-content items-center py-8">
                <aside className="grid-flow-col items-center text-gray-400 text-sm">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by <strong>Tarek<span
                        className='text-primary'> Shawky</span></strong></p>
                </aside>
                <nav className="grid-flow-col gap-5 md:place-self-center md:justify-self-end">
                    <a target="_blank" href='https://web.facebook.com/tarek.ahmad1' aria-label="Facebook">
                        <FaFacebook className='text-primary' size={24}/>
                    </a>
                    <a target="_blank" href='https://www.freelancer.com/u/tarek752' aria-label="Freelancer">
                        <SiFreelancer className='text-primary' size={24}/>
                    </a>
                    <a target="_blank" href='https://wa.me/201027381528' aria-label="WhatsApp">
                        <FaWhatsapp className='text-primary' size={24}/>
                    </a>
                </nav>
            </footer>
        </div>
    );
}
