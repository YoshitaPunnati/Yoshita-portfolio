import React, { useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const projects = [
    {
      title: "Network Anomaly Detection",
      description: "Real-time threat detection with Isolation Forest, Autoencoders, DBSCAN, PyShark",
      tags: ["Python", "ML", "Security", "PyShark"],
      githubUrl: "https://github.com/YoshitaPunnati/2-network-anomaly-detection",
    },
    {
      title: "Code-Based Steganography",
      description: "Secure data hiding in code without disrupting functionality",
      tags: ["Python", "Security", "Cryptography", "Steganography"],
      githubUrl: "https://github.com/YoshitaPunnati/data-hiding-using-steganography",
    },
    {
      title: "AI Codebase Assistant",
      description: "A VS Code extension that uses LLaMA 3 (70B) via Groq to provide real-time, in-editor code explanations and deep understanding of large codebases",
      tags: ["TypeScript", "VSCode Extension", "Groq", "LLaMA 3", "Python"],
      githubUrl: "https://github.com/YoshitaPunnati/AI-Codebase-Assistant",
    },
    {
      title: "Eye Disease Classification",
      description: "A deep learning project that uses CNNs to classify retinal images for early detection of eye diseases like diabetic retinopathy and glaucoma.",
      tags: ["Python", "Deep Learning", "Computer Vision", "CNN", "Medical Imaging"],
      githubUrl: "https://github.com/YoshitaPunnati/eye-disease-classification",
    },
    {
      title: "Crime Rate Prediction",
      description: "Spatial analytics to predict regional crime trends using data mining",
      tags: ["Python", "Data Mining", "ML", "Spatial Analytics"],
      githubUrl: "", // Empty means link will be skipped
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-primary">🛠️</span> Projects
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black shadow-md p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="min-w-[300px] max-w-sm flex-shrink-0 hover-scale overflow-hidden group"
              >
                <CardContent className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>

                <CardFooter className="px-6 py-4 flex flex-wrap gap-2 border-t border-border">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black shadow-md p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
