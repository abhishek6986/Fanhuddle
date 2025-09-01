import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { SportyBackground } from "@/components/SportyBackground";
import { MapPin, Mail, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl border border-border/50 p-8 md:p-12">
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={100}
              inactiveZone={0.3}
              borderWidth={2}
            />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center space-y-6 mb-16">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 font-semibold text-lg tracking-wide uppercase">
                  Get in Touch
                </p>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
                  We're Here to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">Help</span>
                </h2>
                
                <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
                  Have questions about our programs? Need support with your fitness journey? 
                  Our team is ready to help you succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6">Send us a message</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3 rounded-lg border border-border/20 backdrop-blur-sm bg-black/20 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3 rounded-lg border border-border/20 backdrop-blur-sm bg-black/20 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                      />
                    </div>
                    
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-border/20 backdrop-blur-sm bg-black/20 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                    />
                    
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-border/20 backdrop-blur-sm bg-black/20 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                    />
                    
                    <textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border/20 backdrop-blur-sm bg-black/20 text-white placeholder-purple-200/60 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent"
                    ></textarea>
                    
                    <Button variant="default" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center mx-auto">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      
                      <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">Visit Us</h4>
                      <p className="text-purple-200/70">
                        18214 Upper Bay Rd | #580115<br />
                        Houston, TX 77058
                      </p>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center mx-auto">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      
                      <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">Email Us</h4>
                      <p className="text-purple-200/70">
                        engage@fanhuddle.live
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-6 pt-8">
                    <a 
                      href="https://www.instagram.com/joinfanhuddle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <Instagram className="w-6 h-6 text-black" />
                    </a>
                    <a 
                      href="https://x.com/fanhuddlelive" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <Twitter className="w-6 h-6 text-black" />
                    </a>
                    <a 
                      href="https://www.facebook.com/joinfanhuddle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <Facebook className="w-6 h-6 text-black" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/fanhuddle/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      <Linkedin className="w-6 h-6 text-black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};