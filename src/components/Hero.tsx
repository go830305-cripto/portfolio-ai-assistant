import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:2.5s]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up [animation-delay:0.2s]">
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="https://github.com/go830305-cripto" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="https://www.linkedin.com/in/gabriel-oliveira-475040332/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Featured Projects Preview */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto animate-slide-up [animation-delay:0.3s]">
            <a
              href="https://call-stats-board.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
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
              className="glass-card-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-primary">
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}