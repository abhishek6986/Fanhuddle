import { SportyBackground } from "@/components/SportyBackground";

export const FitFlowFooter = () => {
  return (
    <SportyBackground>
      <footer className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              fan<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">huddle</span>
            </div>
            
            <p className="text-purple-200/80 max-w-2xl mx-auto">
              Train with champions. Transform your life. Join thousands of fans who have achieved 
              their fitness dreams with direct coaching from elite athletes and experts.
            </p>
            
            <div className="border-t border-border pt-8">
              <p className="text-sm text-purple-200/60">
                © 2024 fanhuddle. All rights reserved. | Where Champions Meet Fans
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SportyBackground>
  );
};