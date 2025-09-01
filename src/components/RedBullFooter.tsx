export function RedBullFooter() {
  const footerSections = [
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Offices", "Press", "Blog"]
    },
    {
      title: "SUPPORT", 
      links: ["Contact Us", "Help Center", "FAQ", "Safety"]
    },
    {
      title: "LEGAL",
      links: ["Terms & Conditions", "Privacy & Cookies", "Accessibility", "Cookie Settings"]
    }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-sm">RB</span>
              </div>
              <span className="text-lg font-bold">Red Bull Racing</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Authentically, they are designing F-1 Strike 1st, 
              but everyone are super talented to give the 
              the wings to succeed around the world and 
              Specifically in Barcelona. And the are exposing 
              the dream to reach in Singapore. In the 
              Christmas edition Queensland 2014
            </p>
            <p className="text-xs text-primary-foreground/60">
              Design & Development by Red Bull
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-sm mb-4 text-primary-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            2025-26 All copyright Reserved
          </p>
          <p className="text-sm text-primary-foreground/60">
            Official Website
          </p>
        </div>
      </div>
    </footer>
  );
}