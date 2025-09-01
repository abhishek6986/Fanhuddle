import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function DiscoverSection() {
  const cards = [
    {
      title: "UNLEASH YOUR RACING POTENTIAL",
      subtitle: "MASTER YOUR ABILITIES ON KEY",
      description: "Discover how to unlock your racing potential and master your abilities with our comprehensive training program designed for champions.",
      size: "large",
      bgColor: "from-muted to-muted/80"
    },
    {
      title: "RACE TIMER", 
      subtitle: "",
      description: "Precision timing technology for every racing moment.",
      size: "medium",
      bgColor: "from-primary/10 to-primary/5"
    },
    {
      title: "BUILD YOUR MENTAL STRENGTH",
      subtitle: "WITH DEEP BREATHING EXERCISE", 
      description: "Mental fitness is crucial for racing success. Learn breathing techniques used by professional F1 drivers.",
      size: "medium",
      bgColor: "from-accent/10 to-accent/5"
    },
    {
      title: "A PLAYER MORE THAN ONE LIFE",
      subtitle: "",
      description: "Every racer has multiple chances to prove themselves on the track and achieve greatness.",
      size: "small",
      bgColor: "from-muted to-muted/60"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Discover the World of FanHuddle
          </h2>
          <Button className="bg-primary hover:bg-primary-variant text-primary-foreground px-6 py-2 rounded-md text-sm font-semibold">
            Load More
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Large Card - Takes 2 columns and 2 rows */}
          <Card className="md:col-span-2 md:row-span-2 border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
            <CardContent className="p-0 h-full">
              {/* Image Section */}
              <div className="h-80 bg-gradient-to-br from-muted via-muted/90 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🏎️</span>
                  </div>
                  <div className="text-primary font-bold text-lg">RACING</div>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                <div className="mb-4">
                  <h3 className="font-black text-lg text-foreground mb-1 leading-tight">
                    {cards[0].title}
                  </h3>
                  <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">
                    {cards[0].subtitle}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cards[0].description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary-variant text-primary-foreground px-4 py-2 rounded-md text-xs font-semibold"
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Medium Cards */}
          {cards.slice(1, 3).map((card, index) => (
            <Card key={index + 1} className="border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="h-48 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center relative overflow-hidden">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-bold text-lg">
                      {index === 0 ? '⏱️' : '🧠'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <h3 className="font-black text-sm text-foreground mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-variant text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Small Card */}
          <Card className="border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
            <CardContent className="p-0">
              {/* Image Section */}
              <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-accent font-bold">🏁</span>
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 bg-white">
                <h3 className="font-black text-xs text-foreground mb-2 leading-tight">
                  {cards[3].title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                  {cards[3].description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary-variant text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold"
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}