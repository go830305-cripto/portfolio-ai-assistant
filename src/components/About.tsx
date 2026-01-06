import { BarChart3, Bot, Brain, Code2, Database, LineChart } from "lucide-react";

const skills = [
  { icon: Code2, name: "Python", description: "Pandas, Matplotlib, Plotly" },
  { icon: Database, name: "SQL", description: "Consultas e análise de dados" },
  { icon: BarChart3, name: "Power BI / Dashboards", description: "Visualizações interativas" },
  { icon: LineChart, name: "GitHub", description: "Versionamento e colaboração" },
  { icon: Bot, name: "Chatbot e IA", description: "Aplicações inteligentes" },
  { icon: Brain, name: "Machine Learning", description: "Análise exploratória e modelos" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Sobre Mim
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Dados que geram decisões</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transformando dados complexos em insights claros e ações estratégicas.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                Profissional focado em <span className="text-primary font-medium">análise de dados, visualização e construção de soluções orientadas a dados</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experiência sólida com Python, Pandas, SQL, dashboards e aplicações com chatbot. 
                Minha abordagem combina rigor analítico com visão de produto, criando ferramentas 
                que não apenas respondem perguntas, mas antecipam necessidades.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Interesse em transformar <span className="text-secondary font-medium">dados complexos em decisões claras</span>, 
                desenvolvendo desde análises exploratórias até produtos funcionais com inteligência artificial.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-3d p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground text-sm">Projetos de Dados</div>
              </div>
              <div className="stat-3d p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Dashboards Criados</div>
              </div>
              <div className="stat-3d p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">2+</div>
                <div className="text-muted-foreground text-sm">Apps com IA</div>
              </div>
              <div className="stat-3d p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Foco em Resultados</div>
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
                  className="card-3d p-6 flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 icon-3d">
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