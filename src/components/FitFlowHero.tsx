import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SportyBackground } from "@/components/SportyBackground";
import { ChevronDown } from "lucide-react";

export const FitFlowHero = () => {
  return (
    <SportyBackground>
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Video - Mobile Optimized */}
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full scale-150 md:scale-100 object-cover"
            src="https://www.youtube.com/embed/oMMouY3tNt4?autoplay=1&mute=1&loop=1&playlist=oMMouY3tNt4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            title="Hero Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              pointerEvents: 'none'
            }}
          ></iframe>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]"></div>
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-end pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Main Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-end">
              
              {/* Left Side - Main Headline */}
              <div className="space-y-6 md:space-y-8 animate-fade-up lg:pb-8">
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-[0.85] tracking-tight font-black">
                    Train with
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-[0.85] tracking-tight font-black">
                    Your
                  </h1>
                  <div className="relative inline-block">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 leading-[0.85] tracking-tight font-black">
                      Heroes.
                    </h1>
                    <GlowingEffect 
                      disabled={false} 
                      glow={true} 
                      proximity={0} 
                      spread={100} 
                      blur={15}
                      borderWidth={3}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Description & CTA */}
              <div className="space-y-6 md:space-y-8 lg:pl-8">
                <p className="text-lg sm:text-xl md:text-2xl text-purple-200/80 leading-relaxed font-medium mb-4">
                  FanHuddle is where Passion Meets Wellness
                </p>
                
                <p className="text-base sm:text-lg text-purple-200/70 leading-relaxed font-normal">
                  Football isn't just about Sundays—it's about how fans live every day. FanHuddle turns game-day energy into healthier, happier lives through athlete-led challenges that motivate real improvements in fitness, nutrition, and lifestyle.
                </p>
                
                <div className="relative inline-block">
                  <Button variant="cta" size="lg" className="group">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <GlowingEffect 
                    disabled={false} 
                    glow={true} 
                    proximity={0} 
                    spread={60} 
                    blur={10}
                    borderWidth={2}
                    className="rounded-full"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-10">
          <div className="flex flex-col items-center space-y-2 text-purple-200/70">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};