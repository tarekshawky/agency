import Image from 'next/image'

export default function About() {
    return (
        <div className='py-8 container grid grid-col-1 md:grid-cols-2 gap-4 items-start'>
            <div>
                <Image className='w-full' src='/about.png' alt="About Image" width={500} height={500}/>
            </div>
            <div>
                <h2 className='font-bold text-3xl text-[#5f687b]'>
                    Voluptatem dignissimos provident quasi corporis voluptates
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                    <li>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </li>
                    <li>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                    </li>
                    <li>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda
                    </li>
                </ul>
            </div>
        </div>
);
}
