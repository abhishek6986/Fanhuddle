import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Instagram } from 'lucide-react';
import nycSoccerImage from '@/assets/nyc-soccer.jpg';
import stadiumImage from '@/assets/stadium-image.jpg';
import heroImage from '@/assets/hero-image.jpg';

const newsItems = [
  {
    id: 1,
    title: 'FIFA World Cup 26™ Coming to NYNJ',
    excerpt: 'The greatest sporting event returns to American soil for the first time since 1994.',
    image: heroImage,
    date: 'March 2024',
    category: 'Announcement'
  },
  {
    id: 2,
    title: 'MetLife Stadium Ready for World Cup',
    excerpt: 'Home venue confirmed for 8 matches including the historic final.',
    image: stadiumImage,
    date: 'February 2024', 
    category: 'Venue'
  },
  {
    id: 3,
    title: '39-Day Fan Festival Planned',
    excerpt: 'Liberty State Park to host the longest FIFA Fan Festival™ in history.',
    image: nycSoccerImage,
    date: 'January 2024',
    category: 'Festival'
  }
];

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            Stay Updated
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest news, updates, and behind-the-scenes content from FIFA World Cup 26™ NYNJ
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden shadow-card hover-lift group">
              <div 
                className="h-48 bg-cover bg-center relative transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent text-accent-foreground">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-primary-foreground text-sm font-medium">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-card-title text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-accent/80">
                  Read More <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Media CTA */}
        <Card className="p-8 lg:p-12 text-center shadow-card bg-gradient-hero">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-section text-primary-foreground mb-4">
              Follow Our Journey
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Stay connected with @fwc26nynj for exclusive content, behind-the-scenes updates, 
              and the latest news leading up to the FIFA World Cup 26™.
            </p>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3"
              asChild
            >
              <a href="https://www.instagram.com/fwc26nynj/" target="_blank" rel="noopener noreferrer">
                FOLLOW US
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}