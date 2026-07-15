'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function RecentWorks() {
  return (
    <div id="projects" className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-primary uppercase tracking-widest text-xs font-semibold">
          Portfolio
        </span>
        <h2 className="font-bold text-3xl md:text-4xl">
          Last Projects
        </h2>
        <p className="text-gray-400 max-w-xl">
          A selection of recent websites and web apps I&apos;ve designed and built.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {[...projects]
          .sort((a, b) => b.id - a.id) // DESC order
          .map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              className="card-recent-work"
            >
              <div className="card-recent-work-image">
                <Image
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.alt}
                  width={500}
                  height={500}
                />
                <span className="card-recent-work-visit">
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>

              <div className="card-recent-work-body">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
