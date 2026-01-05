import { ArrowDown, Github, Linkedin, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating Shapes */}
      <div className="floating-shape top-1/4 left-1/4 w-96 h-96 bg-primary/15" style={{ animationDelay: '0s' }} />
      <div className="floating-shape bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15" style={{ animationDelay: '2s' }} />
      <div className="floating-shape top-1/3 right-1/3 w-64 h-64 bg-accent/15" style={{ animationDelay: '4s' }} />
      
      {/* 3D Geometric Elements */}
      <div className="geometric-3d w-32 h-32 top-20 left-20 opacity-20" style={{ animationDuration: '25s' }} />
      <div className="geometric-3d w-24 h-24 bottom-32 right-32 opacity-15" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
      <div className="geometric-3d w-16 h-16 top-1/2 left-10 opacity-10" style={{ animationDuration: '20s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponível para novas oportunidades
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">Transformo dados em</span>
            <br />
            <span className="gradient-text">insights, dashboards</span>
            <br />
            <span className="text-foreground">e </span>
            <span className="gradient-text-accent">produtos inteligentes</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up [animation-delay:0.1s]">
            Análise de dados, visualização e automação com foco em decisão.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up [animation-delay:0.2s]">
            <Button variant="hero" size="xl" className="btn-3d" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button variant="glass" size="xl" className="animate-tilt" asChild>
              <a href="https://github.com/go830305-cripto" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="glass" size="xl" className="animate-tilt" asChild>
              <a href="https://www.linkedin.com/in/gabriel-oliveira-475040332/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="glass" size="xl" className="bg-secondary/20 border-secondary/30 hover:bg-secondary/30 animate-tilt" asChild>
              <a href="https://wa.me/5551992652959" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Fale Comigo
              </a>
            </Button>
          </div>

          {/* Featured Projects Preview */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto animate-slide-up [animation-delay:0.3s]">
            <a
              href="https://call-stats-board.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20">
                <ExternalLink className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Dashboard de Dados</h3>
                <p className="text-sm text-muted-foreground">KPIs e insights acionáveis</p>
              </div>
            </a>
            <a
              href="https://plani-bot-magic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/20">
                <ExternalLink className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Chatbot Analítico</h3>
                <p className="text-sm text-muted-foreground">Análise de planilhas com IA</p>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#sobre"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary shadow-lg"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}