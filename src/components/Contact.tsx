import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nayakarafif@gmail.com",
      href: "mailto:nayakarafif55@gmail.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Nayaka Rafif",
      href: "https://www.linkedin.com/in/nayaka-rafif-18562117b/",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "NayakaRafif",
      href: "https://github.com/NayakaRafif",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari <span className="text-gradient-accent">Terhubung</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 bg-card border-border shadow-elegant">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center shadow-glow mb-6">
                <MessageSquare className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Siap untuk memulai karir profesional
              </h3>
              <p className="text-foreground/70">
                Saya terbuka untuk peluang kerja sebagai Web Developer atau Cloud Engineer
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="gradient-accent text-accent-foreground hover:opacity-90 transition-smooth shadow-elegant px-8"
              >
                Download CV
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
