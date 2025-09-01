export function MeditationSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
                  1,000+ immersive experiences
                </span>
                <h2 className="text-display font-bold text-foreground mb-4">
                  1,000+ customised tracks to elevate your mindset and feelings
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a push of a button — experience brain changing hypnotic audios, 
                  sound healings, meditations and instant mood elevations. Take charge of your mind.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'Guided meditations for every mood',
                  'Hypnotic audios for deep transformation',
                  'Sound healing frequencies',
                  'Instant mood elevations',
                  'Binaural beats for focus',
                  'Sleep enhancement tracks'
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-primary to-accent rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-gray-100 flex items-center justify-between px-6 text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-center font-bold text-gray-800 mb-4">
                      Mindvalley Meditations
                    </h3>
                    
                    {/* Track List */}
                    {[
                      { name: 'Morning Energy', duration: '15 min', color: 'bg-blue-100' },
                      { name: 'Focus Flow', duration: '10 min', color: 'bg-purple-100' },
                      { name: 'Stress Relief', duration: '20 min', color: 'bg-green-100' },
                      { name: 'Deep Sleep', duration: '30 min', color: 'bg-indigo-100' },
                      { name: 'Confidence Boost', duration: '12 min', color: 'bg-pink-100' },
                    ].map((track) => (
                      <div key={track.name} className={`${track.color} p-3 rounded-lg flex justify-between items-center`}>
                        <div>
                          <p className="font-medium text-sm">{track.name}</p>
                          <p className="text-xs text-gray-600">{track.duration}</p>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[6px] border-l-gray-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}