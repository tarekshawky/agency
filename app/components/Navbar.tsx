import ThemeSwitcher from './ThemeSwitcher';
export default function Navbar() {
    return (
        <div className="container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="font-bold text-xl cursor-pointer">Tarek<span className='text-primary'>Shawky</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='nav-link' href='#about'>About me</a></li>
                        <li><a className='nav-link' href='#projects'>Last Projects</a></li>
                        <li><a className='nav-link' href='#skills'>My Skills</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='#footer' className="btn btn-primary px-8">Contact us</a>
                    {/*<ThemeSwitcher/>*/}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                            <li><a className='nav-link' href='#about'>About me</a></li>
                            <li><a className='nav-link' href='#projects'>Last Projects</a></li>
                            <li><a className='nav-link' href='#skills'>My Skills</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
