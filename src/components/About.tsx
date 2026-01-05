import { BarChart3, Brain, Code2, Database, LineChart, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, name: "Python", description: "pandas, matplotlib, plotly, scikit-learn" },
  { icon: Database, name: "SQL", description: "PostgreSQL, MySQL, queries complexas" },
  { icon: BarChart3, name: "Power BI", description: "Dashboards interativos e relatórios" },
  { icon: LineChart, name: "Tableau", description: "Visualização de dados avançada" },
  { icon: Brain, name: "Machine Learning", description: "Classificação, regressão, clustering" },
  { icon: Sparkles, name: "Git & GitHub", description: "Versionamento e colaboração" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Sobre Mim
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Dados que contam histórias</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Apaixonado por transformar números em narrativas que impulsionam decisões de negócio.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                Com experiência em análise de dados e ciência de dados, ajudo empresas a 
                <span className="text-primary font-medium"> descobrir insights ocultos</span> em seus dados 
                e transformá-los em ações estratégicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha abordagem combina rigor analítico com visão de negócio, criando soluções 
                que não apenas respondem perguntas, mas antecipam necessidades futuras. 
                Especializado em dashboards interativos, modelos preditivos e automação de processos analíticos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que os melhores insights surgem quando combinamos dados sólidos com 
                uma comunicação clara e impactante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-muted-foreground text-sm">Projetos Entregues</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Dashboards Criados</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-muted-foreground text-sm">Anos de Experiência</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Comprometimento</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-10">
              Tecnologias & Ferramentas
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card-hover p-6 flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
