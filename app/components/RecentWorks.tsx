'use client'
import Image from 'next/image'
import Link from "next/link";
export default function RecentWorks() {
    return (
        <div id='projects' className='py-8 bg-base-200'>
            <div className='flex justify-center'>
                <h2 className='font-bold text-3xl text-[#5f687b]'>Last Projects</h2>
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                <Link href='https://albarzadxb.com/'  target='_blank' className='card-recent-work'>
                    <Image className='w-full' src='/img-1.jpeg' alt="albarzadxb.com" width={500} height={500}/>
                    <div className='recent-work-description'>
                        <h2>Al Barza DXB</h2>
                        <p>
                            Al Barza DXB is a modern and dynamic website designed for a Dubai-based business, showcasing their services and offerings in an engaging manner.
                        </p>
                        <button className='bg-primary text-white py-2 px-4 rounded-2xl'>
                            Visit Website
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
