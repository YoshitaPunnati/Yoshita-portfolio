
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Network Anomaly Detection",
      description: "Real-time threat detection with Isolation Forest, Autoencoders, DBSCAN, PyShark",
      tags: ["Python", "ML", "Security", "PyShark"],
      githubUrl: "https://github.com/YoshitaPunnati",
    },
    {
      title: "Code-Based Steganography",
      description: "Secure data hiding in code without disrupting functionality",
      tags: ["Python", "Security", "Cryptography", "Steganography"],
      githubUrl: "https://github.com/YoshitaPunnati",
    },
    {
      title: "Crime Rate Prediction",
      description: "Spatial analytics to predict regional crime trends using data mining",
      tags: ["Python", "Data Mining", "ML", "Spatial Analytics"],
      githubUrl: "https://github.com/YoshitaPunnati",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">🛠️</span> Projects
        </h2>
        
        <div className="bento-grid">
          {projects.map((project, index) => (
            <Card key={index} className="bento-card hover-scale overflow-hidden group">
              <CardContent className="p-6 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </CardContent>
              
              <CardFooter className="px-6 py-4 flex flex-wrap gap-2 border-t border-border">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/80">{tag}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
