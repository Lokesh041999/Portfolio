import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import { locationMapUrl, personalInfo } from "@/lib/data";

export default function ContactCTA() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight">Contact</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight">
            Let’s build something amazing together! 🚀
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            I’m open to exciting frontend, full-stack, dashboard, and geospatial
            product opportunities.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-8 py-4 text-lg font-bold text-black transition hover:bg-cyan-300"
          >
            Get In Touch
            <FaArrowRight size={18} />
          </a>
        </div>

        <div className="space-y-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <IoMail className="text-cyan-300" size={26} />
            <span className="text-lg text-slate-300">{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <IoCall className="text-cyan-300" size={26} />
            <span className="text-lg text-slate-300">{personalInfo.phone}</span>
          </a>

          <a
            href={locationMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <FaLocationDot className="text-cyan-300" size={24} />

            <span className="text-lg text-slate-300">
              {personalInfo.location}
            </span>
          </a>

          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <FaLinkedin className="text-cyan-300" size={26} />
            <span className="text-lg text-slate-300">
              {personalInfo.linkedin}
            </span>
          </a>

          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <FaGithub className="text-cyan-300" size={26} />
            <span className="text-lg text-slate-300">
              {personalInfo.github}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
