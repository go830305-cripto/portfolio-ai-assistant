import { ArrowUpRight, BarChart3, Bot, PieChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: BarChart3,
    title: "Dashboard de Vendas",
    description: "Dashboard interativo com métricas de performance, tendências de mercado e insights acionáveis para tomada de decisão estratégica.",
    tags: ["Power BI", "Python", "SQL"],
    color: "from-primary to-cyan-400",
    link: "#",
  },
  {
    icon: TrendingUp,
    title: "Análise de Inadimplência",
    description: "Modelo preditivo utilizando Machine Learning para identificar clientes com maior risco de inadimplência, reduzindo perdas em 30%.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    color: "from-accent to-purple-400",
    link: "#",
  },
  {
    icon: Bot,
    title: "Chatbot Analítico",
    description: "Assistente inteligente que analisa planilhas automaticamente e responde perguntas sobre os dados em linguagem natural.",
    tags: ["Python", "NLP", "API"],
    color: "from-emerald-500 to-teal-400",
    link: "#",
  },
  {
    icon: PieChart,
    title: "EDA de Churn",
    description: "Análise exploratória completa para entender padrões de cancelamento de clientes, identificando fatores-chave de retenção.",
    tags: ["Python", "Plotly", "Pandas"],
    color: "from-orange-500 to-amber-400",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Projetos em Destaque</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada projeto representa uma solução única para desafios reais de negócio.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group glass-card-hover p-8 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                  <project.icon className="h-7 w-7 text-white" />
                </div>

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
                      className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" className="w-fit group/btn" asChild>
                  <a href={project.link}>
                    Ver Projeto
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="glass" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
