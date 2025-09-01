import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Challenge = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Video Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full scale-150 md:scale-100 object-cover"
            src="https://www.youtube.com/embed/PT12nhRLSyc?autoplay=1&mute=1&loop=1&playlist=PT12nhRLSyc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            title="Challenge Hero Video Background"
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

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <img 
              src="/lovable-uploads/5b07a4b1-e6b3-4b30-a05f-6b57efba0cbf.png" 
              alt="Fan Huddle - Download to Win a Trip to London - Vikings vs Browns" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            
            <div className="text-center">
              <Link to="/terms">
                <Button variant="cta" size="lg">
                  Read Terms Here
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;