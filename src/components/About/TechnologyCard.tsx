import React, { ComponentType } from 'react';

interface TechnologyCardProps {
  title: string;
  icon: ComponentType<{ className?: string }>;
  technologies: string[];
}

export const TechnologyCard = ({ title, icon: Icon, technologies }: TechnologyCardProps) => (
  <div className="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1">
    <div className="absolute -top-3.5 -left-3.5 w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
      {Icon && React.createElement(Icon, { className: 'w-4 h-4' })}
    </div>
    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4 mt-1">
      {title}
    </h4>
    <ul className="space-y-2">
      {technologies.map((tech) => (
        <li key={tech} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex-shrink-0" />
          {tech}
        </li>
      ))}
    </ul>
  </div>
);
