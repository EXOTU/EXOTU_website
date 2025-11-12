import { Target, Lightbulb, Users, Award, LucideIcon } from 'lucide-react';

// ============================================
// MISSION STATEMENT CONTENT
// ============================================

export const missionStatement = 'EXOTU is a student-led design team dedicated to developing innovative wearable technology that enhances human strength, mobility, and endurance. Our mission is to design and build fully functional exoskeletons through collaboration between engineering, computer science, health science, and design students. By combining technical excellence with creativity, we aim to produce prototypes that will make a real difference in helping others. EXOTU strives to inspire a community of students dedicated to using design and engineering to improve lives.';

export const missionTitle = 'Redefining Human Capability';

// ============================================
// MISSION VALUES - Edit this to update the value cards
// ============================================

export interface MissionValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const missionValues: MissionValue[] = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Advancing human augmentation through innovative exoskeleton technology',
  },
  {
    icon: Lightbulb,
    title: 'Research-Focused',
    description: 'Pioneering solutions at the intersection of robotics, biomechanics, and AI',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Bringing together diverse engineering disciplines to solve complex challenges',
  },
  {
    icon: Award,
    title: 'Competition-Proven',
    description: 'Competing at the highest levels of robotics and exoskeleton engineering',
  },
];

