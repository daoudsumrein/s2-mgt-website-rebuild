import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { default as ReCAPTCHA } from "react-google-recaptcha";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  Building,
  Clock
} from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();
  
  // Your reCAPTCHA site key (public key)
  const RECAPTCHA_SITE_KEY = "6LfBwa0rAAAAAOmCXCu2AQ2nMxM_Fog1mM5nqNYV";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if reCAPTCHA is completed
    if (!recaptchaValue) {
      toast({
        title: "Please complete reCAPTCHA",
        description: "Please verify that you are not a robot before submitting the form.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // First, verify reCAPTCHA with your PHP script
      const recaptchaVerification = await fetch('https://s2mgt.com/verify-recaptcha.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recaptcha_response: recaptchaValue })
      });
      
      const verificationResult = await recaptchaVerification.json();
      
      if (!verificationResult.success) {
        toast({
          title: "reCAPTCHA verification failed",
          description: "Please try again or refresh the page.",
          variant: "destructive",
        });
        // Reset reCAPTCHA
        setRecaptchaValue(null);
        recaptchaRef.current?.reset();
        setIsLoading(false);
        return;
      }
      
      // reCAPTCHA verified successfully, now send email via EmailJS
      // Prepare template parameters matching your EmailJS template
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,
        send_date: new Date().toLocaleString(),
        submission_id: Math.random().toString(36).substr(2, 9),
        recaptcha_response: recaptchaValue
      };

      await emailjs.send(
        'service_9srgxev', // Your service ID
        'template_0c4b9ao', // Your template ID
        templateParams,
        'lCvR_JwGsyx3Weo1g' // Your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        interest: "",
        message: ""
      });
      
      // Reset reCAPTCHA
      setRecaptchaValue(null);
      recaptchaRef.current?.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      
      // Check if it's a reCAPTCHA verification error or EmailJS error
      const errorMessage = error instanceof Error && error.message.includes('fetch') 
        ? "Failed to verify reCAPTCHA. Please check your internet connection and try again."
        : "Failed to send message. Please try again or contact us directly.";
      
      toast({
        title: "Submission failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Reset reCAPTCHA on any error
      setRecaptchaValue(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <SEOHead 
        title="Contact S2 Management Solutions - Expert IT Consultation MENA"
        description="Get in touch with S2's expert team for IT transformation, data protection, and cybersecurity solutions. 24-hour response time. MENA region coverage."
        keywords="contact S2 Management, IT consultation MENA, data protection expert contact, disaster recovery consultation, UAE IT support"
        canonicalUrl="https://s2mgt.com/contact"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary-light to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="default" className="mb-4 text-base px-6 py-2">Get In Touch</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact S2 Management Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to discuss your IT infrastructure needs? Our team of experts is here to help 
                architect the right solution for your enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our technical team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@company.com" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 XX XXX XXXX" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <select 
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a solution area</option>
                        <option value="Data Protection & Backup">Data Protection & Backup</option>
                        <option value="Disaster Recovery">Disaster Recovery</option>
                        <option value="Application Modernization">Application Modernization</option>
                        <option value="IT Discovery & Mapping">IT Discovery & Mapping</option>
                        <option value="Secure Cloud Solutions">Secure Cloud Solutions</option>
                        <option value="Security & Ransomware Protection">Security & Ransomware Protection</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your infrastructure requirements, current challenges, or specific project needs..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    {/* Google reCAPTCHA */}
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(value) => setRecaptchaValue(value)}
                        onExpired={() => setRecaptchaValue(null)}
                        theme="light"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      disabled={isLoading || !recaptchaValue}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5" />
                      <span>Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0 animate-pulse" />
                      <div>
                        <p className="font-medium">MENA Region</p>
                        <p className="text-sm text-muted-foreground">
                          Serving enterprise clients across MENA region with offices in KSA and UAE (HQ)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@s2mgt.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          info@s2mgt.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">
                          Within 24 hours during business days
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5" />
                      <span>Direct Communication</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://wa.me/97144342221" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Business
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:admin@s2mgt.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Direct
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose S2?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Consultancy-led approach with technical expertise</li>
                      <li>• Regional focus on MENA region enterprise requirements</li>
                      <li>• Certified specialists in OpenText, TDS, and AppCURE</li>
                      <li>• End-to-end project delivery and ongoing support</li>
                      <li>• Proven track record in government and critical infrastructure</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
}