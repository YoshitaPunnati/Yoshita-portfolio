
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">💼</span> Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2"></div>
          
          <div className="space-y-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right space-y-4 md:order-1 md:pr-8">
                <h3 className="text-xl font-semibold text-primary">ML Intern</h3>
                <p className="text-muted-foreground">Jan 2025 – Feb 2025</p>
              </div>
              <div className="md:order-2 md:pl-8">
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-ml-1"></div>
                <Card className="bento-card hover-scale">
                  <h4 className="text-lg font-semibold mb-3">Up To Skills</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built ML models for predictive analytics</li>
                    <li>Suggested improvements that enhanced team outcomes</li>
                    <li>Explored innovative approaches to data science challenges</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
