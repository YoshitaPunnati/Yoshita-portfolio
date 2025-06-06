import React from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChevronDown from '@/components/ChevronDown';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-10">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary mb-2">
              <MapPin size={14} className="mr-1" />
              Bangalore, India
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Yoshita</span>
              <span className="block gradient-text">Punnati</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Software Engineer • ML Enthusiast • Data Explorer
            </h2>

            <p className="text-muted-foreground max-w-xl">
              A passionate Software Engineer with a strong foundation in backend systems,
              intelligent algorithms, and creative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="group">
                <a href="Yoshita_Punnati.pdf" target="_blank">
                  <Download size={18} className="mr-2" />
                  View Resume
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button asChild variant="outline" className="group">
                <a href="#projects">
                  See My Work
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 justify-center items-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl animate-float">
              <img
                src="/image.jpg"
                alt="Yoshita Punnati"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} className="text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
