"use client";
import {
  FaCode,
  FaPalette,
  FaTools,
  FaGraduationCap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaGithub,
  FaVuejs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaSearch,
  FaTrello,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiJira,
  SiTestinglibrary,
} from "react-icons/si";

export default function Skills() {
  const skillsByCategory = [
    {
      category: "Développement Web",
      icon: (
        <FaCode className="text-blue-200 group-hover:text-blue-400 transition-colors duration-300" />
      ),
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
    },
    {
      category: "Design",
      icon: (
        <FaPalette className="text-slate-200 group-hover:text-blue-300 transition-colors" />
      ),
      skills: [
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        {
          name: "UI/UX",
          icon: <FaPalette className="text-pink-500" />,
        },
        {
          name: "Responsive",
          icon: <FaCss3Alt className="text-blue-500" />,
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop className="text-blue-500" />,
        },
      ],
    },
    {
      category: "Outils",
      icon: (
        <FaTools className="text-slate-200 group-hover:text-blue-300 transition-colors" />
      ),
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      ],
    },
    {
      category: "Savoir-faire",
      icon: (
        <FaGraduationCap className="text-slate-200 group-hover:text-blue-300 transition-colors" />
      ),
      skills: [
        {
          name: "Agilité",
          icon: <FaTrello className="text-blue-500" />,
        },
        {
          name: "TDD",
          icon: <SiTestinglibrary className="text-red-500" />,
        },
        {
          name: "SEO",
          icon: <FaSearch className="text-blue-500" />,
        },
      ],
    },
  ];

 return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200 lg:sr-only">
          Compétences
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        {skillsByCategory.map((category, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-900/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="text-xl">{category.icon}</div>
                <h3 className="text-lg font-semibold text-blue-200 group-hover:text-blue-300 transition-colors">
                  {category.category}
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <div className="text-xl">{skill.icon}</div>
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}