import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const hashtags = [
  '#FIFAWORLDCUP',
  '#WEARE26', 
  '#WEARENYNJ',
  '#SOMOS26'
];

export function HeroSection() {
  const [currentHashtag, setCurrentHashtag] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHashtag((prev) => (prev + 1) % hashtags.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Animated Hashtag */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-display text-primary-foreground animate-fade-up opacity-0 animation-delay-300">
            {hashtags[currentHashtag]}
          </h2>
        </div>

        {/* Main Title */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-hero text-primary-foreground leading-tight animate-fade-up opacity-0 animation-delay-600">
            HOME OF THE FIFA WORLD CUP 26™ FINAL
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 lg:mb-16 max-w-4xl mx-auto">
          <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed animate-fade-up opacity-0 animation-delay-900">
            And we are one. Welcome to New York New Jersey, where the beautiful game lives in our streets and our souls. 
            From the City Skyline to the Jersey Shoreline, we are a soccer-impassioned metropolis, energized to host a 
            FIFA World Cup™ unlike any other.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-16 lg:mb-20">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg shadow-button animate-fade-up opacity-0 animation-delay-1200"
          >
            Get Tickets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg animate-fade-up opacity-0 animation-delay-1500"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
    </section>
  );
}