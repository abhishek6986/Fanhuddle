import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Send, Ticket, Users, Building, MessageSquare } from 'lucide-react';

const interestTypes = [
  { value: 'tickets', label: 'Ticket Information', icon: Ticket },
  { value: 'volunteer', label: 'Volunteer Opportunities', icon: Users },
  { value: 'vendor', label: 'Vendor/Supplier Opportunities', icon: Building },
  { value: 'media', label: 'Media Inquiries', icon: MessageSquare },
  { value: 'general', label: 'General Information', icon: Mail },
];

export function RegistrationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Thank you!",
      description: "Your message has been successfully submitted. We appreciate your interest in FIFA World Cup 2026™ NYNJ.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">
            REGISTER YOUR INTEREST
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of the FIFA World Cup 26™ experience. Register your interest and stay informed about opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-card-title text-foreground mb-6">Quick Information</h3>
            
            {interestTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.value} className="p-6 shadow-card hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{type.label}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {type.value === 'tickets' && 'Find ticket details and purchase information here.'}
                        {type.value === 'volunteer' && 'Join the FIFA Volunteer Community today.'}
                        {type.value === 'vendor' && 'Complete our Interest Form for future supplier opportunities.'}
                        {type.value === 'media' && 'Reach our media team for press inquiries.'}
                        {type.value === 'general' && 'General questions about FIFA World Cup 26™ NYNJ.'}
                      </p>
                      <Button variant="outline" size="sm">
                        {type.value === 'tickets' && 'Get Tickets'}
                        {type.value === 'volunteer' && 'Join Community'}
                        {type.value === 'vendor' && 'Submit Interest'}
                        {type.value === 'media' && 'Contact Media Team'}
                        {type.value === 'general' && 'Learn More'}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Registration Form */}
          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-card-title text-foreground mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Send us a message and we'll get back to you soon.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="interest">Interest Type *</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your interest or ask any questions..."
                    rows={4}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications about FIFA World Cup 26™ NYNJ.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}