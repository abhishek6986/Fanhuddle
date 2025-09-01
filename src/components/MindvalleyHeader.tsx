import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Membership', href: '#membership' },
  { 
    name: 'Categories', 
    href: '#categories',
    hasDropdown: true,
    items: [
      { name: 'Mindfulness', href: '#mindfulness' },
      { name: 'Personal Growth', href: '#personal-growth' },
      { name: 'Health & Fitness', href: '#health-fitness' },
      { name: 'Relationships', href: '#relationships' },
      { name: 'Career', href: '#career' },
      { name: 'Spirituality', href: '#spirituality' },
    ]
  },
  { 
    name: 'Community', 
    href: '#community',
    hasDropdown: true,
    items: [
      { name: 'Tribe', href: '#tribe' },
      { name: 'Events', href: '#events' },
      { name: 'Challenges', href: '#challenges' },
    ]
  },
  { 
    name: 'Results', 
    href: '#results',
    hasDropdown: true,
    items: [
      { name: 'Success Stories', href: '#success-stories' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Research', href: '#research' },
    ]
  },
  { 
    name: 'At Work', 
    href: '#at-work',
    hasDropdown: true,
    items: [
      { name: 'Corporate Programs', href: '#corporate' },
      { name: 'Team Building', href: '#team-building' },
      { name: 'Leadership', href: '#leadership' },
    ]
  },
  { name: 'Support', href: '#support' },
];

export function MindvalleyHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-foreground">
              Mindvalley
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <a
                          href={subItem.href}
                          className="text-card-foreground hover:bg-muted"
                        >
                          {subItem.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6"
            >
              Create an account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary/95 backdrop-blur-md rounded-lg mt-2 mb-4 overflow-hidden shadow-lg">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors border-b border-primary-foreground/10 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 border-t border-primary-foreground/10">
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Log In
                  </Button>
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Create an account
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}