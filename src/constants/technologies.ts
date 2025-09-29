import { ComponentType } from 'react';
import { FrontendIcon, BackendIcon, DataCloudIcon, ToolsIcon } from '../components/ui/TechnologyIcons';

export interface TechnologyCategory {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  technologies: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FrontendIcon,
    technologies: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'HTML5/CSS3',
      'Tailwind CSS',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: BackendIcon,
    technologies: [
      'Node.js',
      'Python',
      'Express.js',
      'NestJS',
      'RESTful APIs',
      'GraphQL',
      'Microservices',
    ],
  },
  {
    id: 'data-cloud',
    title: 'Data & Cloud',
    icon: DataCloudIcon,
    technologies: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'AWS',
      'GCP',
      'Firebase',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: ToolsIcon,
    technologies: [
      'Git & GitHub',
      'CI/CD',
      'Agile/Scrum',
      'JIRA',
      'VS Code',
      'Figma',
      'Docker Compose',
      'Kubernetes',
    ],
  },
];
