import { TrendingUp, Users, Target, Award } from 'lucide-react';

export function FloatingStatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png"
          alt="Innovation meets athletic excellence background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Innovation <span className="text-accent">Meets</span>
            </h2>
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Athletic <span className="text-accent/80">Excellence</span>
            </h2>
          </div>

          {/* Floating Stats Cards */}
          <div className="relative">
            {/* Top Left Card */}
            <div className="absolute top-0 left-0 lg:left-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/80 text-sm">Performance Growth</span>
              </div>
              <div className="text-2xl font-bold text-white">+247%</div>
              <div className="text-white/60 text-xs">vs last quarter</div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-0 right-0 lg:right-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in animation-delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <span className="text-white/80 text-sm">Active Members</span>
              </div>
              <div className="text-2xl font-bold text-white">12.5K</div>
              <div className="text-white/60 text-xs">across all programs</div>
            </div>

            {/* Middle Left Card */}
            <div className="absolute top-32 left-4 lg:left-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in animation-delay-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-white/80 text-sm">Goal Achievement</span>
              </div>
              <div className="text-2xl font-bold text-white">89.2%</div>
              <div className="text-white/60 text-xs">success rate</div>
            </div>

            {/* Middle Right Card */}
            <div className="absolute top-32 right-4 lg:right-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in animation-delay-900">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/80 text-sm">Certifications</span>
              </div>
              <div className="text-2xl font-bold text-white">1,247</div>
              <div className="text-white/60 text-xs">completed this month</div>
            </div>

            {/* Bottom Center Card - Larger */}
            <div className="absolute top-64 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in animation-delay-1200 w-80">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">8.8</span>
                </div>
                <div className="text-white text-lg font-semibold mb-2">Overall Satisfaction</div>
                <div className="text-white/60 text-sm">Based on 50,000+ reviews</div>
                
                {/* Progress Ring Visual */}
                <div className="mt-4 flex justify-center">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2"
                        strokeDasharray="88, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer to ensure section height */}
            <div className="h-96"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
    </section>
  );
}