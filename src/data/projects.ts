import { Shield, Cpu, Zap, Heart, Brain, Wrench } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Project {
  // Core info
  name: string;
  category: string;
  categoryDisplay?: string; // Optional display name for category (e.g., "Flagship Project" vs "Flagship")
  description: string;
  progress: number;
  status: string;
  image: string;
  icon: LucideIcon;
  
  // Detailed info (for full project page)
  specs?: string[];
  team?: string;
}

// ============================================
// PROJECTS DATA - Edit this section only!
// ============================================
export const projects: Project[] = [
  {
    name: 'APEX-1 Full Body Exoskeleton',
    category: 'Flagship',
    categoryDisplay: 'Flagship Project',
    description: 'Advanced full-body powered exoskeleton designed for heavy lifting applications and endurance enhancement.',
    progress: 40,
    status: 'In Development',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Shield,
    specs: [
      'Max Load Capacity: 150 kg',
      'Battery Life: 8 hours',
      'Weight: 45 kg',
      'Actuators: 12 DOF',
    ],
    team: 'Mechanical, Electrical, Software',
  },
  // Add more projects here as needed:
  // {
  //   name: 'Project Name',
  //   category: 'Category',
  //   categoryDisplay: 'Category Display Name',
  //   description: 'Project description',
  //   progress: 50,
  //   status: 'Status',
  //   image: 'image-url',
  //   icon: Cpu, // Choose from: Shield, Cpu, Zap, Heart, Brain, Wrench
  //   specs: ['Spec 1', 'Spec 2'],
  //   team: 'Team disciplines',
  // },
];

