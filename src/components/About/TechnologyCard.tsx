import React, { ComponentType } from 'react';

interface TechnologyCardProps {
  title: string;
  icon: ComponentType<{ className?: string }>;
  technologies: string[];
}

export const TechnologyCard = ({ title, icon: Icon, technologies }: TechnologyCardProps) => (
  <div className="group relative p-6 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 hover:border-amber-400/30 hover:dark:border-amber-400/30 hover:shadow-amber-500/10 hover:dark:shadow-amber-500/10">
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-amber-500/30">
      {Icon && React.createElement(Icon, { className: 'w-4 h-4' })}
    </div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      {title}
    </h4>
    <ul className="space-y-2">
      {technologies.map((tech) => (
        <li
          key={tech}
          className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
          {tech}
        </li>
      ))}
    </ul>
  </div>
);
