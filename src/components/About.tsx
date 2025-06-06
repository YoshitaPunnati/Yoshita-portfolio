
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">🧠</span> About Me
        </h2>
        
        <Card className="bg-secondary/50 border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <CardContent className="p-6 md:p-10">
            <p className="text-lg leading-relaxed max-w-3xl">
              A passionate Software Engineer with a strong foundation in backend systems, 
              intelligent algorithms, and creative problem-solving. I build fast, efficient, 
              and elegant systems with a focus on ML, security, and scalability. 
              Always learning, always building.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Education</h3>
                <p className="font-semibold">Jain University, Bangalore</p>
                <p className="text-sm text-muted-foreground">B.Tech in Computer Science & Engineering (2022 – Present)</p>
                <p className="text-sm">CGPA: <span className="font-semibold">9.13</span></p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-primary">Contact</h3>
                <p className="font-semibold">punnatiyoshita@gmail.com</p>
                <p className="text-sm text-muted-foreground">+91 9705807572</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-primary">On the web</h3>
                <div className="flex flex-col gap-1">
                  <a href="https://www.linkedin.com/in/yoshita-punnati-a90412256/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
                  <a href="https://github.com/YoshitaPunnati" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
