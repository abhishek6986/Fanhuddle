import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users } from 'lucide-react';
import stadiumImage from '@/assets/stadium-image.jpg';
import nycSoccerImage from '@/assets/nyc-soccer.jpg';

const locations = [
  {
    id: 'stadium',
    title: 'New York New Jersey Stadium',
    subtitle: 'MetLife Stadium',
    description: 'Home to the FIFA World Cup 26™ Final and 7 other matches',
    icon: MapPin,
    image: stadiumImage,
    link: 'https://www.metlifestadium.com/',
    category: 'Stadium'
  },
  {
    id: 'fan-festival',
    title: 'FIFA Fan Festival™',
    subtitle: 'Liberty State Park',
    description: 'A 39-day celebration of football culture and community',
    icon: Calendar,
    image: nycSoccerImage,
    link: 'https://inside.fifa.com/tournament-organisation/fifa-fan-festival',
    category: 'Entertainment'
  }
];

export function EventMap() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            EVENT MAP
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the venues and attractions that will make FIFA World Cup 26™ an unforgettable experience
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-12">
          <Card className="p-8 text-center shadow-card bg-gradient-card">
            <div className="max-w-4xl mx-auto">
              <div 
                className="aspect-video bg-cover bg-center rounded-lg mb-6 shadow-lg"
                style={{ backgroundImage: `url(${nycSoccerImage})` }}
              >
                <div className="w-full h-full bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                      Interactive Map Coming Soon
                    </h3>
                    <p className="text-primary-foreground/80">
                      Explore venues, transportation, and attractions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {locations.map((location) => {
            const IconComponent = location.icon;
            return (
              <Card key={location.id} className="overflow-hidden shadow-card hover-lift">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${location.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                      {location.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-card-title text-foreground mb-1">
                        {location.title}
                      </h3>
                      <p className="text-sm font-medium text-accent mb-2">
                        {location.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {location.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={location.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Fan Zones Section */}
        <Card className="p-8 text-center shadow-card">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-section text-foreground mb-4">
              NYNJ Fan Zones
            </h3>
            <p className="text-muted-foreground mb-6">
              Additional fan zones and viewing parties will be announced throughout the New York New Jersey area. 
              Stay tuned for more locations to celebrate the beautiful game.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Coming Soon!
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}