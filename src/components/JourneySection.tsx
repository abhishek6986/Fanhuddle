import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export function JourneySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-display font-bold text-foreground mb-6">
            Begin your journey today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Unlock your fullest potential in any field with only 20-minutes a day of 
            invaluable coaching from the world's best
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg rounded-full mb-12"
          >
            Become a member
          </Button>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent" />
              <div className="w-16 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">1M+</span>
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Over 1 million subscribers</p>
              <p className="text-sm text-muted-foreground">
                since 2020 • growth in all areas
              </p>
            </div>
          </div>

          {/* Programs Overview */}
          <div className="mt-16 text-left max-w-3xl mx-auto">
            <h3 className="text-headline font-bold text-foreground mb-4">
              100+ of the world's top programs for personal growth and transformation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Forge lasting transformations in your mind, body, soul, love and career with 
              20-minute micro-coaching sessions each day led by top-tier teachers worldwide.
            </p>
          </div>

          {/* Program Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { name: 'Mindfulness', color: 'bg-purple-100 text-purple-700' },
              { name: 'Fitness', color: 'bg-blue-100 text-blue-700' },
              { name: 'Career', color: 'bg-green-100 text-green-700' },
              { name: 'Relationships', color: 'bg-pink-100 text-pink-700' },
              { name: 'Spirituality', color: 'bg-indigo-100 text-indigo-700' },
              { name: 'Health', color: 'bg-emerald-100 text-emerald-700' },
              { name: 'Parenting', color: 'bg-orange-100 text-orange-700' },
              { name: 'Entrepreneurship', color: 'bg-red-100 text-red-700' },
            ].map((category, index) => (
              <div
                key={category.name}
                className={`${category.color} p-4 rounded-lg text-center font-medium animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}