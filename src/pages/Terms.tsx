const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Terms & Conditions
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="bg-white rounded-3xl shadow-card p-8 space-y-8">
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using FitFlow's website, mobile application, and services (collectively, the "Service"), 
                  you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to 
                  abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  FitFlow provides online fitness coaching, workout programs, nutrition guidance, and related wellness services. 
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personalized workout programs and fitness challenges</li>
                  <li>Nutrition guidance and meal planning resources</li>
                  <li>Progress tracking and analytics</li>
                  <li>Community features and social interaction</li>
                  <li>Educational content and wellness resources</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To access certain features of the Service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Health and Safety Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>IMPORTANT:</strong> Before beginning any fitness program, please consult with your physician, 
                  especially if you have any pre-existing health conditions. By using our services, you acknowledge that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Physical exercise involves risk of injury</li>
                  <li>You participate in activities at your own risk</li>
                  <li>FitFlow is not responsible for any injuries that may occur</li>
                  <li>You should stop exercising if you feel pain or discomfort</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Subscription and Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some aspects of our Service require payment. By subscribing to our paid services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You agree to pay all subscription fees as described at the time of purchase</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>You may cancel your subscription at any time through your account settings</li>
                  <li>Refunds are provided according to our refund policy</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. User Content and Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may submit content to our Service, including comments, photos, and progress updates. You agree that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You own or have permission to submit any content you provide</li>
                  <li>Your content does not violate any laws or third-party rights</li>
                  <li>You will not submit harmful, offensive, or inappropriate content</li>
                  <li>FitFlow may remove content that violates these terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                  to understand our practices regarding the collection and use of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the exclusive property 
                  of FitFlow and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall FitFlow, its directors, employees, partners, agents, suppliers, or affiliates be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
                  or liability, under our sole discretion, for any reason whatsoever, including without limitation if you 
                  breach the Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                  is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-muted/20 p-6 rounded-2xl mt-4">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> legal@fitflow.com<br />
                    <strong>Address:</strong> 123 Fitness Street, Wellness District, Health City, HC 12345<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;