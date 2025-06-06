
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center h-16">
        <a href="#" className="text-lg font-semibold tracking-tight">
          <span className="text-primary">Y</span>oshita<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/YoshitaPunnati" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yoshita-punnati-a90412256/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <Button onClick={scrollToContact} className="bg-secondary hover:bg-secondary/80 text-primary hidden md:flex">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
