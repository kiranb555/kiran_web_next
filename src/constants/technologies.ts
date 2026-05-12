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
      'React.js/Next.js',
      'Redux/Zustand/Tanstack',
      'Tailwind CSS/Scss',
      'ShadCN/Material-UI',
      'd3.js/Three.js/Canvas',
      'RTL/playwright',
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
  {
    id: 'AI',
    title: 'Artificial Intelligence',
    icon: DataCloudIcon,
    technologies: [
      'Python',
      'Windsurf',
      'Claude',
      'Codex'
    ],
  }
];
