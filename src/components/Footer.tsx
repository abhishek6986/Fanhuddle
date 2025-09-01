import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/fwc26nynj/', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const quickLinks = [
  { name: 'Tickets', href: '#tickets' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Venue', href: '#venue' },
  { name: 'Fan Festival', href: '#fan-festival' },
  { name: 'Volunteer', href: '#volunteer' },
  { name: 'Press', href: '#press' },
];

const supportLinks = [
  { name: 'Contact Us', href: '#contact' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Accessibility', href: '#accessibility' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-display font-black mb-2">
                  FIFA WORLD CUP 26™
                </h3>
                <p className="text-xl font-display font-bold text-accent">
                  NEW YORK NEW JERSEY
                </p>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Home of the FIFA World Cup 26™ Final. Where the beautiful game lives in our streets and our souls. 
                From the City Skyline to the Jersey Shoreline.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
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
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Stay Updated</h5>
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="text-xs"
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Newsletter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <p>© 2024 FIFA World Cup 26™ NYNJ. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
              <span>Powered by FIFA</span>
              <span>•</span>
              <span>Hosted by New York New Jersey</span>
              <span>•</span>
              <span>Back in the U.S. for the first time since 1994</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}