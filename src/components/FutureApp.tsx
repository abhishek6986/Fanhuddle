import { Bot, Smartphone, Utensils } from "lucide-react";
import { SportyBackground } from "@/components/SportyBackground";
import { Button } from "@/components/ui/button";

export const FutureApp = () => {
  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 font-semibold text-lg tracking-wide uppercase">
              Coming Soon
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
              Full-Stack Wellness: <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">From Passion to Precision Health</span>
            </h2>
            
            <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
              Get ready for the next-generation in fitness and training. Where athlete-led motivation joins physician-trusted diagnostics to turn fan engagement into measurable, preventive care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 p-6 rounded-2xl border border-border/20 backdrop-blur-sm bg-black/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                AI Personal Trainer
              </h3>
              <p className="text-purple-200/80">
                Get personalized workouts powered by artificial intelligence and athlete expertise.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl border border-border/20 backdrop-blur-sm bg-black/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                Mobile Experience
              </h3>
              <p className="text-purple-200/80">
                Train anywhere with our cutting-edge mobile app designed for champions.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl border border-border/20 backdrop-blur-sm bg-black/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                Smart Nutrition
              </h3>
              <p className="text-purple-200/80">
                AI-powered meal planning based on your training goals and preferences.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-purple-200/80 mb-6">
              Be among the first to experience the future • Expected launch Q2 2024
            </p>
            <Button variant="default" size="lg" className="hover:scale-105 transition-transform">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};