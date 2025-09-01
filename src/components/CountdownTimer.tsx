import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface TimeUnit {
  value: number;
  label: string;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    // FIFA World Cup 2026 starts June 11, 2026
    const targetDate = new Date('2026-06-11T00:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' },
        ]);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            UNTIL FIFA WORLD CUP 26™ KICKOFF
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
          {timeLeft.map((unit, index) => (
            <Card key={unit.label} className="p-6 lg:p-8 text-center shadow-card hover-lift">
              <div className="text-4xl lg:text-6xl font-display font-black text-primary mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm lg:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            The world's greatest sporting event returns to American soil
          </p>
        </div>
      </div>
    </section>
  );
}