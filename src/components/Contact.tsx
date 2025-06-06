
import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Download from '@/components/Download';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">👩🏻‍💻</span> Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bento-card h-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Write your message here..." className="min-h-[120px]" required />
                </div>
                
                <Button type="submit" className="w-full md:w-auto group">
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="bento-card h-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:punnatiyoshita@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      punnatiyoshita@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/yoshita-punnati-a90412256/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Yoshita Punnati
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/YoshitaPunnati" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      YoshitaPunnati
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild variant="secondary" className="w-full">
                    <a href="Yoshita_Punnati.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" /> View Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
