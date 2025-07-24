
import React from 'react';
import { Card } from '@/components/ui/card';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">🎓</span> Education
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"></div>
          
          <div className="space-y-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right space-y-4 md:order-1 md:pr-8">
                <h3 className="text-xl font-semibold text-primary">Bachelor of Technology</h3>
                <p className="text-muted-foreground">2022 – 2026</p>
              </div>
              <div className="md:order-2 md:pl-8">
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-ml-1"></div>
                <Card className="bento-card hover-scale">
                  <h4 className="text-lg font-semibold mb-3">Jain University, Bangalore</h4>
                  <p className="text-muted-foreground">Computer Science & Engineering</p>
                  <p className="mt-2"><span className="font-medium">CGPA:</span> 9.14</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
