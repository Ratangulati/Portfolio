import React from "react";
import classroom from '../assets/classroom.png';
import compilex from '../assets/compilex.png';
import quicksend from '../assets/quicksend.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="flex flex-col bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-500">
          {title}
        </h5>
        <p className="text-sm text-gray-300 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tag, index) => (
            <span
              key={`${index}-${tag}`}
              className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <a 
          href={git} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-center py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mt-4  mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              git={item.git}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const project = [
  {
    title: 'Classroom',
    description: 'A School Management System that streamlines administrative tasks, improves communication, and enhances overall efficiency in educational institutions.',
    image: classroom,
    git: "https://github.com/Ratangulati/Classroom",
    technologies: ['MongoDB', 'React JS', 'ExpressJS', 'NodeJS', 'Tailwind CSS']
  },
  {
    title: 'CompileX',
    description: 'A real-time collaborative code editor/compiler that helps users connect, share, code & debug together seamlessly.',
    image: compilex,
    git: 'https://github.com/Ratangulati/CompileX',
    technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'Socket.io']
  },
  {
    title: 'QuickSend',
    description: 'An easy, fast, reliable, and secure money transfer web application for sending money to friends and family with just a few clicks.',
    image: quicksend,
    git: "https://github.com/Ratangulati/QuickSend",
    technologies: ['MongoDB', 'React JS', 'ExpressJS', 'NodeJS', 'Tailwind CSS']
  }
];

export default Projects;