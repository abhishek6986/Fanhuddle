import { Button } from '@/components/ui/button';
import heroImage from '@/assets/mindvalley-hero.jpg';

export function MindvalleyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-variant to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-hero font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
              A better you{' '}
              <span className="block">every day</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
              Be part of the world's most powerful life transformation platform
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-600">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg rounded-full min-w-[200px]"
              >
                Become a member
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg rounded-full min-w-[200px]"
              >
                Explore programs
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto animate-fade-in animation-delay-900">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mindvalley Platform Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
    </section>
  );
}