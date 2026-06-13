import Link from "next/link"
import type { Metadata } from "next"
import { QRCodeSVG } from "qrcode.react"

import {
    Atom,
    Wind,
    Store,
    Globe,
    FileCode,
    Braces,
    Database,
    } from "lucide-react"
    const technologies = [
    {
    name: "Next.js",
    icon: FileCode,
    },
    {
    name: "React",
    icon: Atom,
    },
    {
    name: "Tailwind",
    icon: Wind,
    },
    {
    name: "Shopify",
    icon: Store,
    },
    {
    name: "WordPress",
    icon: Globe,
    },
    {
    name: "JavaScript",
    icon: Braces,
    },
    {
    name: "TypeScript",
    icon: FileCode,
    },
    {
    name: "Prisma",
    icon: Database,
    },
    ]
    
const services = [
"Website Design",
"Frontend Development",
"Shopify Store Development",
"WordPress Website Development",
"Landing Pages & E-commerce Websites",
"Responsive UI/UX Design",
]
export const metadata: Metadata = {
title: "Contact | Tarek Shawky",
description:
"Tarek Shawky — Web Designer & Developer specialized in Next.js, Shopify, WordPress, React, Tailwind CSS, and modern web applications.",
keywords: [
"Tarek Shawky",
"Web Designer",
"Frontend Developer",
"Next.js Developer",
"React Developer",
"Shopify Developer",
"WordPress Developer",
"Portfolio",
"UI UX",
"Tailwind CSS",
],
authors: [
{
name: "Tarek Shawky",
},
],
creator: "Tarek Shawky",
metadataBase: new URL(
"https://tarekshawky.vercel.app"
),
openGraph: {
title: "Tarek Shawky | Web Designer & Developer",
description:
  "Creating modern, responsive, and high-performance websites.",

url:
  "https://tarekshawky.vercel.app/contact",

siteName:
  "Tarek Shawky Portfolio",

locale:
  "en_US",

type:
  "website",

images: [
  {
    url: "/preview.jpg",
    width: 1200,
    height: 630,
    alt: "Tarek Shawky Portfolio",
  },
],
},
twitter: {
card: "summary_large_image",
title:
  "Tarek Shawky | Web Designer & Developer",

description:
  "Modern websites with Next.js and Shopify.",

images: [
  "/preview.jpg",
],
},
robots: {
index: true,
follow: true,
},
verification: {
google:
"QB7w0bIGg_3VBosfpXwaiVc1c0hIxpQ0qRe6DC4Muj8",
},
alternates: {
canonical:
"https://tarekshawky.vercel.app/contact",
},
}

export default function ContactPage() {
return (
     <main className="min-h-screen bg-[#020817] px-4 py-8 text-white"> <section className="mx-auto max-w-6xl rounded-[32px] border border-blue-400/30 bg-[#06111f]/90 p-6 shadow-[0_0_80px_rgba(37,99,235,0.25)] md:p-10">
    {/* Hero */}
    <div className="grid gap-10 md:grid-cols-[240px_1fr] md:items-center">
      <div className="flex justify-center">
        <div className="flex h-48 w-48 items-center justify-center rounded-full border-[6px] border-blue-400 bg-[#020817] text-7xl font-black shadow-[0_0_35px_rgba(59,130,246,0.9),0_0_55px_rgba(168,85,247,0.7)]">
          TS
        </div>
      </div>

      <div>
        <div className="md:flex items-center md:justify-between w-full">
        <div>
       <h1 className="text-4xl font-black tracking-wide md:text-6xl">
          TAREK SHAWKY
        </h1>

        <h2 className="mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
          WEB DESIGNER & DEVELOPER
        </h2>
       </div>
        <div className="mt-4 inline-block rounded-xl bg-white p-3">
              <QRCodeSVG
                value="https://wa.me/201027381528"
                size={150}
                includeMargin
              />
            </div> 
        </div>
        <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />

        <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
          Creating modern, responsive, and high-performance websites with
          focus on design, user experience, and business growth.
        </p>
      </div>
    </div>

    {/* Contact Cards */}
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      <a
        href="mailto:tarekshawky2016@gmail.com"
        className="rounded-3xl border border-purple-500/70 bg-[#081426] p-6 shadow-lg transition hover:-translate-y-1 hover:bg-purple-950/40"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-3xl">
          ✉️
        </div>

        <h3 className="mt-5 text-xl font-bold text-purple-400">
          EMAIL
        </h3>

        <p className="mt-5 break-all text-lg text-white">
          tarekshawky2016@gmail.com
        </p>

        <div className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-center font-medium">
          Send Email →
        </div>
      </a>

      <a
        href="https://wa.me/201027381528"
        target="_blank"
        className="rounded-3xl border border-green-500/70 bg-[#061b17] p-6 shadow-lg transition hover:-translate-y-1 hover:bg-green-950/40"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-3xl">
          💬
        </div>

        <h3 className="mt-5 text-xl font-bold text-green-400">
          WHATSAPP
        </h3>

        <p className="mt-5 text-lg text-white">
          01027381528
        </p>

        <div className="mt-8 rounded-xl bg-green-600 px-5 py-3 text-center font-medium">
          Chat on WhatsApp →
        </div>
      </a>

      <a
        href="https://tarekshawky.vercel.app"
        target="_blank"
        className="rounded-3xl border border-blue-500/70 bg-[#061426] p-6 shadow-lg transition hover:-translate-y-1 hover:bg-blue-950/40"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-3xl">
          🌐
        </div>

        <h3 className="mt-5 text-xl font-bold text-blue-400">
          PORTFOLIO
        </h3>

        <p className="mt-5 break-all text-lg text-white">
          tarekshawky.vercel.app
        </p>

        <div className="mt-8 rounded-xl bg-blue-600 px-5 py-3 text-center font-medium">
          Visit Portfolio →
        </div>
      </a>
    </div>

    {/* Services */}
    <div className="mt-10 rounded-3xl border border-white/10 bg-[#061426] p-7">
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-3xl">
          💼
        </div>
        <h2 className="text-3xl font-black">SERVICES</h2>
      </div>

      <div className="mt-6 h-px bg-gradient-to-r from-blue-500 to-purple-500" />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <p key={service} className="text-lg text-slate-200">
            <span className="mr-3 text-purple-400">✓</span>
            {service}
          </p>
        ))}
      </div>
    </div>

    {/* Technologies */}
    <div className="mt-10 rounded-3xl border border-white/10 bg-[#061426] p-7">
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-3xl">
          {"</>"}
        </div>
        <h2 className="text-3xl font-black">TECHNOLOGIES</h2>
      </div>

      <div className="mt-6 h-px bg-blue-500" />

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
      {technologies.map((tech) => { const Icon = tech.icon 
        return (
             <div key={tech.name}
         className=" group rounded-2xl border border-white/10 bg-[#020817] p-5 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.35)] " > <div className=" mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 " > <Icon size={34} className=" text-blue-400 group-hover:text-purple-400 " /> </div> <p className="mt-4 text-center text-sm font-medium"> {tech.name} </p> </div> ) })}
      </div>
    </div>

    {/* Portfolio Footer */}
    <Link
      href="https://tarekshawky.vercel.app"
      target="_blank"
      className="mt-10 flex items-center justify-between rounded-3xl border border-blue-500/40 bg-blue-950/30 p-7 transition hover:bg-blue-900/40"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-3xl">
          🌐
        </div>

        <div>
          <h3 className="text-2xl font-black text-blue-400">
            PORTFOLIO
          </h3>
          <p className="mt-2 text-xl text-white">
            tarekshawky.vercel.app
          </p>
        </div>
      </div>

      <span className="text-4xl">↗</span>
    </Link>

    <p className="mt-8 text-center text-slate-500">
      © 2026 Tarek Shawky. All Rights Reserved.
    </p>
  </section>
</main>


)
}
