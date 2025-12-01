import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code2, Cloud } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Code2,
      title: "Junior Web Developer",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
      description: "Sertifikasi profesional yang memvalidasi kemampuan dalam pengembangan web menggunakan teknologi modern dan best practices industry",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "Web Standards"],
      color: "primary",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Computing",
      issuer: "PT CHAIROS INTERNATIONAL VENTURES",
      description: "Program Studi Independen intensif yang mencakup fundamental cloud computing, AWS services, dan implementasi cloud architecture",
      skills: ["AWS Services", "Cloud Architecture", "DevOps", "Serverless"],
      color: "accent",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Sertifikasi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sertifikasi profesional yang mendukung keahlian teknis saya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth group h-full flex flex-col">
                  <div className="mb-6 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Sertifikat Profesional
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {cert.title}
                  </h3>

                  <p className="text-lg text-primary font-semibold mb-4">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
