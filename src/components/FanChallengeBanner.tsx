import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SportyBackground } from '@/components/SportyBackground';
import { Button } from '@/components/ui/button';

export const FanChallengeBanner = () => {
  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 font-semibold text-lg tracking-wide uppercase mb-4">
              Fan Challenge
            </p>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6">
              Download to Win a Trip to London!
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Join the Browns vs. Vikings Fan Challenge this September, track your moves, and feel the impact—because this is the wellness platform fans actually use and benefit from. Plus, score a chance to win an all-expenses-paid trip to London for the big game.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Banner Image with Glowing Effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-border">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={100}
                inactiveZone={0.1}
                borderWidth={2}
                blur={10}
              />
              <img 
                src="/lovable-uploads/35def35a-54c1-4b7e-9ea3-3d9563f95f3f.png" 
                alt="Fan Huddle - Download to Win a Trip to London - Vikings vs Browns"
                className="w-full h-auto relative z-10"
              />
            </div>
            
            {/* Team Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <a 
                href="https://admin.wellnify.ai/check-account?inviteCode=vikes&orgName=Minnesota%20Vikings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="cta" size="lg" className="w-full sm:w-auto px-12 py-6 text-lg font-bold">
                  VIKES FAN
                </Button>
              </a>
              
              <a 
                href="https://admin.wellnify.ai/check-account?inviteCode=dawgs&orgName=Cleveland%20Browns%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="cta" size="lg" className="w-full sm:w-auto px-12 py-6 text-lg font-bold">
                  DAWGS FAN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};