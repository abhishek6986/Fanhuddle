import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

const matches = [
  {
    date: 'June 13, 2026',
    stage: 'GROUP STAGE',
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'June 16, 2026', 
    stage: 'GROUP STAGE',
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'June 22, 2026',
    stage: 'GROUP STAGE', 
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'June 25, 2026',
    stage: 'GROUP STAGE',
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'June 27, 2026',
    stage: 'GROUP STAGE',
    time: 'TBD', 
    venue: 'MetLife Stadium'
  },
  {
    date: 'June 30, 2026',
    stage: 'ROUND OF 32',
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'July 5, 2026',
    stage: 'ROUND OF 16',
    time: 'TBD',
    venue: 'MetLife Stadium'
  },
  {
    date: 'July 19, 2026',
    stage: 'FIFA WORLD CUP 26™ FINAL',
    time: 'TBD',
    venue: 'MetLife Stadium',
    isHighlight: true
  }
];

export function MatchSchedule() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            MATCH SCHEDULE IN NYNJ
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the beautiful game at MetLife Stadium, home to the FIFA World Cup 26™ Final
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center shadow-card hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-card-title mb-2">Transportation Info</h3>
            <p className="text-muted-foreground text-sm mb-3">Coming Soon</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </Card>

          <Card className="p-6 text-center shadow-card hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-card-title mb-2">Ticket Info</h3>
            <p className="text-muted-foreground text-sm mb-3">Coming Soon</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </Card>

          <Card className="p-6 text-center shadow-card hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-card-title mb-2">Full Match Schedule</h3>
            <p className="text-muted-foreground text-sm mb-3">FIFA Official</p>
            <Button variant="outline" size="sm">View All</Button>
          </Card>
        </div>

        {/* Match Schedule Grid */}
        <div className="grid gap-4 lg:gap-6">
          {matches.map((match, index) => (
            <Card 
              key={index} 
              className={`p-6 lg:p-8 shadow-card hover-lift transition-all duration-300 ${
                match.isHighlight 
                  ? 'bg-gradient-hero text-primary-foreground border-accent' 
                  : 'bg-card'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <div className={`text-sm font-medium mb-1 ${
                        match.isHighlight ? 'text-accent' : 'text-accent'
                      }`}>
                        {match.date}
                      </div>
                      <div className={`text-lg lg:text-xl font-display font-bold ${
                        match.isHighlight ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {match.stage}
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Clock className={`h-4 w-4 ${
                          match.isHighlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`} />
                        <span className={`text-sm ${
                          match.isHighlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}>
                          {match.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className={`h-4 w-4 ${
                          match.isHighlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`} />
                        <span className={`text-sm ${
                          match.isHighlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}>
                          {match.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button 
                    variant={match.isHighlight ? "secondary" : "outline"}
                    size="sm"
                  >
                    Ticket Info Coming Soon
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}