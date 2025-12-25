import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Pendidikan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Latar belakang pendidikan formal saya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth shadow-elegant">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-accent font-medium">2025</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Sarjana Informatika
                </h3>
                
                <p className="text-xl text-foreground font-semibold mb-4">
                  UPN Veteran Yogyakarta
                </p>
                
                <p className="text-foreground/70 leading-relaxed">
                  Menyelesaikan program studi Informatika dengan fokus pada pengembangan 
                  software, web development, dan cloud computing. Memperoleh pemahaman 
                  mendalam tentang algoritma, struktur data, dan best practices dalam 
                  pengembangan aplikasi modern.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
