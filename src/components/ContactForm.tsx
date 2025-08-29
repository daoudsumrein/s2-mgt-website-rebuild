import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Lazy load ReCAPTCHA to avoid SSR issues
const LazyReCAPTCHA = lazy(() => import('react-google-recaptcha'));

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const recaptchaRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const RECAPTCHA_SITE_KEY = "6LfBwa0rAAAAAOmCXCu2AQ2nMxM_Fog1mM5nqNYV";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaValue) {
      toast({
        title: "Please complete the CAPTCHA",
        description: "CAPTCHA verification is required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

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
        setIsSubmitting(false);
        return;
      }
      
      // reCAPTCHA verified successfully, now send email via EmailJS
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        from_email: formData.email,
        phone_number: formData.phone,
        project_requirements: formData.message,
        submission_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      await emailjs.send(
        'service_9srgxev',
        'template_n8f9d6k',
        templateParams,
        'lCvR_JwGsyx3Weo1g'
      );

      toast({
        title: "Thank you for your interest!",
        description: "We will contact you within 24 hours to discuss your IT transformation needs.",
      });

      // Reset form and reCAPTCHA
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setRecaptchaValue(null);
      recaptchaRef.current?.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      
      // Check if it's a reCAPTCHA verification error or EmailJS error
      const errorMessage = error instanceof Error && error.message.includes('fetch') 
        ? "Failed to verify reCAPTCHA. Please check your internet connection and try again."
        : "There was an error sending your message. Please try again or contact us directly.";
      
      toast({
        title: "Submission failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Reset reCAPTCHA on any error
      setRecaptchaValue(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/20">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border-input"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-foreground">
              Company *
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="bg-background border-input"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border-input"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-background border-input"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Project Requirements *
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your IT transformation needs..."
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-background border-input resize-none"
            />
          </div>
          
          {/* reCAPTCHA */}
          <div className="flex justify-center">
            {isMounted ? (
              <Suspense fallback={<div className="h-20 flex items-center justify-center text-muted-foreground">Loading captcha...</div>}>
                <LazyReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(value) => setRecaptchaValue(value)}
                  theme="light"
                />
              </Suspense>
            ) : (
              <div className="h-20 flex items-center justify-center text-muted-foreground">
                Loading captcha...
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !recaptchaValue}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50"
            size="lg"
          >
            {isSubmitting ? "Sending..." : "Request Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}