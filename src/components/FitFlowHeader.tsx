import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Trophy, Scale } from 'lucide-react';

export const FitFlowHeader = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Challenge', url: '/challenge', icon: Trophy },
    { name: 'Terms', url: '/terms', icon: Scale }
  ];

  return <NavBar items={navItems} />;
};