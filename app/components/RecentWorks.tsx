'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function RecentWorks() {
  return (
    <div id="projects" className="py-8 bg-base-200">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl text-[#5f687b]">
          Last Projects
        </h2>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {[...projects]
          .sort((a, b) => b.id - a.id) // DESC order
          .map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              className="card-recent-work"
            >
              <Image
                className="w-full"
                src={project.image}
                alt={project.alt}
                width={500}
                height={500}
              />

              <div className="recent-work-description">
                <h1>{project.title}</h1>
                <p>{project.description}</p>

                <button className="bg-primary text-white py-2 px-4 rounded-2xl">
                  Visit Website
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
