import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SportyBackground } from "@/components/SportyBackground";

export const FitFlowAbout = () => {
  return (
    <SportyBackground>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto w-full text-center space-y-12">
            
            {/* Main Content */}
            <div className="space-y-8">
              <div className="relative inline-block">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-[0.85] tracking-tight font-black mb-6">
                  FanHuddle is where Passion Meets Wellness
                </h1>
                <GlowingEffect 
                  disabled={false} 
                  glow={true} 
                  proximity={0} 
                  spread={120} 
                  blur={20}
                  borderWidth={4}
                  className="rounded-3xl"
                />
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-purple-200/80 leading-relaxed font-light max-w-4xl mx-auto mb-6">
                Football isn't just about Sundays—it's about how fans live every day. FanHuddle turns game-day energy into healthier, happier lives through athlete-led challenges that motivate real improvements in fitness, nutrition, and lifestyle.
              </p>
              
              <p className="text-base sm:text-lg text-purple-200/70 leading-relaxed font-normal max-w-3xl mx-auto">
                More Than Just Fandom, With FanHuddle, cheering turns into action. Every step, meal, and healthy choice is fueled by the same passion you bring to the game. Our platform connects athlete inspiration with real-world wellness, giving fans a simple way to move more, eat smarter, and feel better—while unlocking rewards from the teams and brands they love.
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative inline-block">
              <Button variant="cta" size="lg" className="group px-12 py-6 text-lg">
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <GlowingEffect 
                disabled={false} 
                glow={true} 
                proximity={0} 
                spread={80} 
                blur={12}
                borderWidth={2}
                className="rounded-full"
              />
            </div>
            
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-purple-400/30 animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-pink-400/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-8 rounded-full bg-orange-400/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center space-y-2 text-purple-200/70">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};