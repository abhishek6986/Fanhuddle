import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RedBullHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RB</span>
            </div>
            <span className="ml-3 text-xl font-bold text-foreground">Red Bull Racing</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              Energy Drinks
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              Events
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              Athletes
            </a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
              TV
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
                Energy Drinks
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
                Events
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
                Athletes
              </a>
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
                TV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}