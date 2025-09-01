import { Button } from '@/components/ui/button';

export function HondaSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Racing Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-foreground/95 to-foreground rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              {/* Racing Scene */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
              
              {/* F1 Car representation */}
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="w-32 h-20 bg-primary/30 rounded-lg mx-auto mb-4 flex items-center justify-center relative">
                    <span className="text-primary-foreground font-black text-2xl">F1</span>
                    {/* Racing stripes */}
                    <div className="absolute top-0 left-4 w-1 h-full bg-primary opacity-60"></div>
                    <div className="absolute top-0 right-4 w-1 h-full bg-accent opacity-60"></div>
                  </div>
                </div>
                
                {/* Honda Logo Area */}
                <div className="text-primary-foreground font-black text-4xl tracking-widest mb-4">
                  HONDA
                </div>
                
                {/* Racing Details */}
                <div className="text-primary-foreground/80 text-sm">
                  <div className="flex justify-center items-center space-x-4">
                    <span className="bg-primary/20 px-3 py-1 rounded">POWER</span>
                    <span className="bg-accent/20 px-3 py-1 rounded">SPEED</span>
                  </div>
                </div>
              </div>
              
              {/* Racing Flag */}
              <div className="absolute top-4 right-4 text-2xl">🏁</div>
              
              {/* Speed lines */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent/20 transform -translate-y-1/2 translate-y-2"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-8 shadow-lg">
                <span className="text-primary-foreground font-bold text-2xl">⚡</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight">
                A can has more<br />
                than one life.
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Professional Formula 1 racing demands excellence in every component. Our partnership with Honda represents decades of innovation, precision engineering, and relentless pursuit of performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every engine, every part, every detail matters when milliseconds decide victory. The quest never ends - it's about pushing boundaries, breaking limits, and achieving what others consider impossible.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  This is the Red Bull Racing spirit. This is Honda power.
                </p>
              </div>
              
              <Button className="bg-primary hover:bg-primary-variant text-primary-foreground px-8 py-3 rounded-md font-semibold shadow-lg">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}