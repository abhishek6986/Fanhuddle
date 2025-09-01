import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SportyBackground } from "@/components/SportyBackground";

export const ChallengeIntro = () => {
  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl border border-border/50 p-8 md:p-12">
            <GlowingEffect
              spread={55}
              glow={true}
              disabled={false}
              proximity={90}
              inactiveZone={0.25}
              borderWidth={2}
            />
            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 font-semibold text-lg tracking-wide uppercase">
                30-Day Challenge
              </p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
                Train Like a Champion in <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">30 Days</span>
              </h2>
              
              <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
                Join our exclusive 30-day challenge designed by elite athletes. Train alongside your favorite 
                champions, learn their winning strategies, and transform your body with the same methods 
                that built Olympic and professional careers.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">Champion Workouts</span>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-purple-300/30"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">Athlete Nutrition</span>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-purple-300/30"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">Direct Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};