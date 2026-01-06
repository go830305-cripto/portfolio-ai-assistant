import { ArrowUpRight, BarChart3, Bot, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const projects = [
  {
    icon: Bot,
    title: "Chatbot Analista de Planilhas",
    description: "Aplicação web com chatbot inteligente que analisa planilhas e responde perguntas em linguagem natural. Automação de análise de dados focada em experiência do usuário.",
    tags: ["Python", "NLP", "IA", "UX"],
    color: "from-accent to-primary",
    link: "https://plani-bot-magic.vercel.app/",
    highlight: "Automação de análise de dados",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Análise de Dados",
    description: "Dashboard interativo com dados tratados, métricas e visualizações para tomada de decisão. KPIs claros e insights acionáveis para gestão estratégica.",
    tags: ["Dashboard", "Métricas", "KPIs", "Visualização"],
    color: "from-primary to-secondary",
    link: "https://call-stats-board.lovable.app",
    highlight: "Insights acionáveis",
  },
  {
    icon: Github,
    title: "Repositórios e Projetos de Dados",
    description: "Coleção de projetos de análise de dados, exploração de dados (EDA), modelos de machine learning básico e visualizações em Python.",
    tags: ["Python", "Pandas", "ML", "EDA"],
    color: "from-secondary to-accent",
    link: "https://github.com/go830305-cripto",
    highlight: "Machine Learning & EDA",
  },
];

export function Projects() {
  const headerReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const { setRef: setProjectRef, visibleItems: projectsVisible } = useScrollRevealMultiple(projects.length);

  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerReveal.ref}
            className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Projetos em Destaque</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Aplicações reais que transformam dados em decisões estratégicas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                ref={setProjectRef(index)}
                className={`group card-3d p-8 flex flex-col scroll-reveal-scale scroll-reveal-delay-${index + 1} ${projectsVisible[index] ? 'visible' : ''}`}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${project.color} icon-3d`}>
                  <project.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Highlight Badge */}
                <span className="inline-flex w-fit items-center rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-medium text-accent mb-4">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {project.highlight}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" className="w-fit group/btn btn-3d bg-primary/10 hover:bg-primary/20" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div 
            ref={ctaReveal.ref}
            className={`text-center mt-12 scroll-reveal ${ctaReveal.isVisible ? 'visible' : ''}`}
          >
            <Button variant="glass" size="lg" className="btn-3d" asChild>
              <a href="https://github.com/go830305-cripto" target="_blank" rel="noopener noreferrer">
                Ver mais no GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
