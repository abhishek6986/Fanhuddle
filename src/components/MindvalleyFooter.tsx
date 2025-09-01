import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

const quickLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Membership', href: '#membership' },
  { name: 'Community', href: '#community' },
  { name: 'About Us', href: '#about' },
  { name: 'Careers', href: '#careers' },
  { name: 'Blog', href: '#blog' },
];

const supportLinks = [
  { name: 'Help Center', href: '#help' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Cookie Policy', href: '#cookies' },
];

const categories = [
  { name: 'Mindfulness', href: '#mindfulness' },
  { name: 'Health & Fitness', href: '#health' },
  { name: 'Personal Growth', href: '#growth' },
  { name: 'Relationships', href: '#relationships' },
  { name: 'Career', href: '#career' },
  { name: 'Spirituality', href: '#spirituality' },
];

export function MindvalleyFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  Mindvalley
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                  Be extraordinary. The world's most powerful life transformation platform. 
                  Personal growth for extraordinary minds.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Stay Inspired</h4>
                <p className="text-primary-foreground/70 text-sm mb-3">
                  Get weekly insights and tips for personal growth
                </p>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Platform</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a 
                      href={category.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <p>© 2024 Mindvalley. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
              <span>Transforming lives worldwide</span>
              <span>•</span>
              <span>Personal growth for extraordinary minds</span>
              <span>•</span>
              <span>Be extraordinary</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}