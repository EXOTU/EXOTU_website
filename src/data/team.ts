// ============================================
// TEAM DATA - Edit this section to update team members and departments
// ============================================

export interface TeamMember {
  name: string;
  role: string;
  engineeringTitle: string;
  image: string;
}

export interface Department {
  title: string;
  description: string;
}

export const executiveLeadership: { title: string; members: TeamMember[] } = {
  title: 'Executive Leadership',
  members: [
    { 
      name: 'Wadee Al-Wahedy', 
      role: 'President & Co-Founder', 
      engineeringTitle: 'Chief Electrical Engineer',
      image: '/images/team/wadee_pfp.jpeg'
    },
    { 
      name: 'Muhammad Saad', 
      role: 'Co-Founder', 
      engineeringTitle: 'Chief Software Engineer',
      image: '/images/team/saad_pfp.jpeg'
    },
    { 
      name: 'Safwan Sabbir', 
      role: 'Co-Founder', 
      engineeringTitle: 'Chief Mechanical Engineer',
      image: '/images/team/safwan_pfp.jpeg'
    },
    { 
      name: 'Abdullah Al-Salihi', 
      role: 'Co-Founder', 
      engineeringTitle: 'Chief Systems & Quality Engineer',
      image: '/images/team/abdullah_pfp.jpeg'
    },
  ],
};

export const departments: Department[] = [
  {
    title: 'Software & IT',
    description: 'The Software & IT Department is responsible for developing the systems that bring EXOTU\'s exoskeleton to life. The team programs microcontrollers, builds control algorithms, and processes sensor data to ensure precise and reliable movement. Members also design user interfaces and testing tools that connect software, hardware, and human control into a seamless exoskeleton.',
  },
  {
    title: 'Electrical Engineering',
    description: 'The Electrical Engineering Department focuses on powering and connecting every part of the exoskeleton. The team designs and builds PCBs, wiring, and power systems that drive motors and sensors. Members ensure safe and efficient energy distribution while integrating all electrical components to support reliable performance and communication across the system.',
  },
  {
    title: 'Mechanical Engineering',
    description: 'The Mechanical Engineering Department is responsible for the structure and motion of the exoskeleton. The team designs, models, and fabricates the frame, joints, and actuators that make movement possible. Members focus on strength, stability, and ergonomics to ensure the exoskeleton is both functional and comfortable for the user.',
  },
  {
    title: 'Systems & Quality Engineering',
    description: 'The Systems & Quality Engineering Department ensures that every part of the exoskeleton operates safely and effectively as one system. The team focuses on integration, testing, and validation to confirm that all components work together as intended. Members also manage safety protocols and maintain accurate documentation from all subteams to ensure reliability and consistency throughout development.',
  },
  {
    title: 'Marketing & Outreach',
    description: 'The Marketing & Outreach Department is responsible for promoting EXOTU and building its presence within and beyond the university. The team manages social media, events, and collaborations to showcase progress and attract new members and sponsors. Members work to highlight the club\'s achievements, strengthen community engagement, and inspire interest in the innovation behind EXOTU.',
  },
  {
    title: 'Finance & Accounting',
    description: 'The Finance & Accounting Department manages EXOTU\'s budget, funding, and financial planning. The team is responsible for tracking expenses, preparing funding proposals, and ensuring that all purchases and sponsorships are properly documented. Members help secure the resources needed for the club\'s projects while maintaining transparency and accountability in all financial operations.',
  },
];

