
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "Java", "HTML/CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Development",
      skills: ["Node.js", "React.js"]
    },
    {
      title: "Concepts",
      skills: ["OOPs", "DBMS", "Data Structures", " Computer Networks"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Windows"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Collaboration", "Adaptability", "Decision-making"]
    }
  ];

  const certifications = [
    {
      title: "Interactive Programming in Python",
      issuer: "Rice University",
      year: "2023"
    },
    {
      title: "Intro to Generative AI",
      issuer: "Google",
      year: "2024"
    },
    {
      title: "NoSQL Essentials",
      issuer: "IBM",
      year: "2024"
    },
    {
      title: "Digital Skills: AI",
      issuer: "Accenture",
      year: "2025"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-primary">⚙️</span> Skills & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bento-card">
                  <h4 className="text-lg font-medium mb-3 text-primary">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bento-card">
                  <h4 className="text-lg font-medium text-primary">{cert.title}</h4>
                  <div className="flex justify-between mt-2">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="text-sm font-semibold px-3 py-0.5 bg-secondary rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
