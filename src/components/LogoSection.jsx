import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";

// List of tech stack icons with names
const logoIconsList = [
  { name: "React", iconComponent: <FaReact size={40} className="text-gray-300" /> },
  { name: "Next.js", iconComponent: <SiNextdotjs size={40} className="text-gray-300" /> },
  { name: "Node.js", iconComponent: <FaNodeJs size={40} className="text-gray-300" /> },
  { name: "Express", iconComponent: <SiExpress size={40} className="text-gray-300" /> },
  { name: "MongoDB", iconComponent: <SiMongodb size={40} className="text-gray-300" /> },
  { name: "Tailwind CSS", iconComponent: <SiTailwindcss size={40} className="text-gray-300" /> },
  { name: "JavaScript", iconComponent: <SiJavascript size={40} className="text-gray-300" /> },
  { name: "HTML5", iconComponent: <SiHtml5 size={40} className="text-gray-300" /> },
  { name: "CSS3", iconComponent: <SiCss3 size={40} className="text-gray-300" /> },
];

// Reusable icon component with name
const LogoIcon = ({ icon }) => (
  <div className="flex-none flex flex-col items-center justify-center p-4 marquee-item">
    {icon.iconComponent}
    <span className="mt-2 text-sm text-gray-600">{icon.name}</span>
  </div>
);

// Marquee display of icons
function LogoSection() {
  return (
    <div className="md:my-20 my-10 relative overflow-hidden">
      {/* Optional gradients on edges */}
      <div className="gradient-edge absolute left-0 top-0 h-full w-10 z-10" />
      <div className="gradient-edge absolute right-0 top-0 h-full w-10 z-10" />

      <div className="marquee h-52">
        <div className="marquee-box flex gap-10 animate-marquee">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
          {/* Duplicate for looping */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-copy-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
