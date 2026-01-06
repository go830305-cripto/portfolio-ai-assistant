import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const subject = encodeURIComponent(`Contato do Portfólio - ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    window.open(`mailto:go830305@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    toast({
      title: "Redirecionando para o email...",
      description: "Complete o envio no seu cliente de email.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Vamos Conversar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-3d p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Conecte-se Comigo
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href="mailto:go830305@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        go830305@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/5551992652959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 group-hover:from-secondary/30 group-hover:to-primary/30 transition-colors">
                      <MessageCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="text-foreground group-hover:text-secondary transition-colors">
                        +55 51 99265-2959
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/gabriel-oliveira-475040332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        Gabriel Oliveira
                      </p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/go830305-cripto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        go830305-cripto
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="text-foreground">Brasil • Disponível Remoto</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="https://wa.me/5551992652959" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" className="flex-1" asChild>
                    <a href="mailto:go830305@gmail.com">
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="card-3d p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar por Email
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}