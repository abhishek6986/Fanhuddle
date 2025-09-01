import { useEffect, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const FitFlowStats = () => {
  const [activeFans, setActiveFans] = useState(0);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [poundsLost, setPoundsLost] = useState(0);

  useEffect(() => {
    const animateNumber = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateNumber(setActiveFans, 50000, 2000);
    animateNumber(setWorkoutsCompleted, 500, 2500);
    animateNumber(setPoundsLost, 10, 3000);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl border border-border/50 p-8 md:p-12">
          <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.2}
            borderWidth={2}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                {activeFans.toLocaleString()}+
              </div>
              <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide uppercase">
                Active Members
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                {workoutsCompleted.toLocaleString()}K+
              </div>
              <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide uppercase">
                Workouts Completed
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                {poundsLost}M+
              </div>
              <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide uppercase">
                Pounds Lost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};