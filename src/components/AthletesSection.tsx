import { Card, CardContent } from '@/components/ui/card';

export function AthletesSection() {
  const athletes = [
    { name: "Max Verstappen", country: "NL", image: "MAX", position: "1" },
    { name: "Sergio Pérez", country: "MX", image: "PER", position: "11" },
    { name: "Lewis Hamilton", country: "GB", image: "HAM", position: "44" },
    { name: "Charles Leclerc", country: "MC", image: "LEC", position: "16" },
    { name: "George Russell", country: "GB", image: "RUS", position: "63" }
  ];

  const athletesRow2 = [
    { name: "Carlos Sainz", country: "ES", image: "SAI", position: "55" },
    { name: "Lando Norris", country: "GB", image: "NOR", position: "4" },
    { name: "Oscar Piastri", country: "AU", image: "PIA", position: "81" },
    { name: "Fernando Alonso", country: "ES", image: "ALO", position: "14" },
    { name: "Lance Stroll", country: "CA", image: "STR", position: "18" }
  ];

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      'NL': '🇳🇱', 'MX': '🇲🇽', 'GB': '🇬🇧', 'MC': '🇲🇨', 'ES': '🇪🇸', 'AU': '🇦🇺', 'CA': '🇨🇦'
    };
    return flags[country] || '🏁';
  };

  const AthleteCard = ({ athlete, index }: { athlete: any, index: number }) => (
    <Card className="border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden bg-white">
      <CardContent className="p-0">
        {/* Driver Racing Image */}
        <div className="aspect-square bg-gradient-to-br from-muted via-muted/90 to-primary/5 flex items-center justify-center relative overflow-hidden">
          {/* Racing car silhouette */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          
          {/* Driver representation */}
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-primary/15 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20">
              <span className="text-primary font-black text-lg">
                {athlete.image}
              </span>
            </div>
            
            {/* Racing number */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
              {athlete.position}
            </div>
          </div>
          
          {/* Country Flag */}
          <div className="absolute top-3 left-3 text-lg">
            {getCountryFlag(athlete.country)}
          </div>
          
          {/* Racing stripes */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-60"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Driver Info */}
        <div className="p-4 text-center bg-white">
          <h3 className="font-black text-foreground text-sm mb-1 tracking-tight">
            {athlete.name}
          </h3>
          <p className="text-muted-foreground text-xs font-medium">
            {athlete.country}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Athletes
            </h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Meet the world's elite Formula 1 drivers who represent the pinnacle of racing excellence, 
              speed, and determination on every track around the globe.
            </p>
          </div>
        </div>

        {/* First Row - Athletes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {athletes.map((athlete, index) => (
            <AthleteCard key={index} athlete={athlete} index={index} />
          ))}
        </div>

        {/* Second Row - Athletes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {athletesRow2.map((athlete, index) => (
            <AthleteCard key={`row2-${index}`} athlete={athlete} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}