import { Button } from "@/components/ui/button";
import { SportyBackground } from "@/components/SportyBackground";

export const QRJoinChallenge = () => {
  return (
    <SportyBackground>
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/dc0bb4f1-3897-45b9-9cb3-e79ec6b5712e.png" 
            alt="Geometric gradient background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - QR Code */}
              <div className="text-center">
                <div className="rounded-2xl p-8 border border-border/20 backdrop-blur-sm bg-black/20 max-w-md mx-auto">
                  <div className="w-64 h-64 rounded-2xl mx-auto flex items-center justify-center shadow-inner border border-border/20 backdrop-blur-sm bg-black/30">
                    {/* QR Code placeholder */}
                    <div className="w-48 h-48 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black/80' : 'bg-black'} rounded-sm`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-purple-200/70 mt-4">
                    Scan to join instantly
                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
                  Ready to Start Your 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300"> Journey?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed">
                  Scan the QR code with your phone camera or click the button below to join 
                  the challenge instantly. Get immediate access to your first workout and 
                  join our community of motivated individuals.
                </p>

                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  Join Challenge Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};