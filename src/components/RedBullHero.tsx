import { Button } from '@/components/ui/button';

export function RedBullHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-2xl"></div>
        
        {/* Orange geometric shape in background */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 transform rotate-45 rounded-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left relative">
            <h1 className="text-7xl lg:text-9xl font-black text-foreground mb-2 tracking-tight leading-none">
              NO PAIN
            </h1>
            
            <div className="mb-8 max-w-md">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed uppercase tracking-wide">
                THIS GAME PROMOTES PHYSICAL ACTIVITY MOVEMENT, 
                CHALLENGING, GETTING OUT HEALTHY AND ORGANIZED IN ENGLISH 
                FOUNDATIONS UNTIL IT'S
              </p>
              <Button className="bg-primary hover:bg-primary-variant text-primary-foreground px-8 py-3 rounded-md font-semibold text-sm">
                Read More
              </Button>
            </div>

            {/* Side Helmet Image */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-32 h-40 bg-muted border border-border rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">🏎️</span>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">HELMET</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center">
            {/* Main Driver Figure */}
            <div className="relative z-20">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-muted via-muted/90 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Driver silhouette */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🏁</span>
                      </div>
                      <span className="text-lg font-bold text-primary">MAX</span>
                    </div>
                  </div>
                  
                  {/* Racing stripes */}
                  <div className="absolute top-0 left-1/4 w-1 h-full bg-primary opacity-30"></div>
                  <div className="absolute top-0 right-1/4 w-1 h-full bg-accent opacity-30"></div>
                </div>
              </div>
            </div>
              
            {/* NO GAIN Text - positioned absolutely */}
            <div className="absolute -bottom-8 -right-8 z-30">
              <h2 className="text-7xl lg:text-9xl font-black text-foreground tracking-tight leading-none">
                NO GAIN
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}