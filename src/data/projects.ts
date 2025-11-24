import { Shield, LucideIcon } from 'lucide-react';

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
}

// ============================================
// PROJECTS DATA - Edit this section only!
// ============================================
export const projects: Project[] = [
  {
    name: 'APEX-1',
    category: 'Flagship',
    categoryDisplay: 'Flagship Project',
    description: 'Advanced lower-body powered exoskeleton designed for heavy lifting applications and endurance enhancement.',
    progress: 40,
    status: 'In Development',
    image: '/images/gallery/lower-body.png',
    icon: Shield,
    specs: [
      'Max Joint Power: 1 kW per joint',
      'Operating Voltage: ≤ 59 V DC',
      'Payload Capacity: 50 lb (ACE hard-exo standard)',
      'Adjustable Fit: Supports 5th–95th percentile body sizes',
      'Safety Systems: Dual E-Stops + 30-sec battery ejection mechanism',
    ],
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
  //   icon: Shield, // Import additional icons from 'lucide-react' if needed
  //   specs: ['Spec 1', 'Spec 2'],
  // },
];

