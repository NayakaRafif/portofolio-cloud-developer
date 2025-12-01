import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Cloud } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description: "Sarjana Informatika dari UPN Veteran Yogyakarta, lulus tahun 2025",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Bersertifikat BNSP sebagai Junior Web Developer dengan keahlian modern web technologies",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Menyelesaikan Studi Independen AWS Cloud Computing di PT CHAIROS INTERNATIONAL VENTURES",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-gradient-primary">Saya</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh graduate dengan semangat tinggi untuk berkontribusi di dunia teknologi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group cursor-pointer h-full">
                  <div className="mb-4 w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
