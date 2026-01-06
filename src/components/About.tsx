import { BarChart3, Bot, Brain, Code2, Database, LineChart } from "lucide-react";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const skills = [
  { icon: Code2, name: "Python", description: "Pandas, Matplotlib, Plotly" },
  { icon: Database, name: "SQL", description: "Consultas e análise de dados" },
  { icon: BarChart3, name: "Power BI / Dashboards", description: "Visualizações interativas" },
  { icon: LineChart, name: "GitHub", description: "Versionamento e colaboração" },
  { icon: Bot, name: "Chatbot e IA", description: "Aplicações inteligentes" },
  { icon: Brain, name: "Machine Learning", description: "Análise exploratória e modelos" },
];

export function About() {
  const headerReveal = useScrollReveal();
  const contentLeftReveal = useScrollReveal();
  const contentRightReveal = useScrollReveal();
  const skillsTitleReveal = useScrollReveal();
  const { setRef: setSkillRef, visibleItems: skillsVisible } = useScrollRevealMultiple(skills.length);

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerReveal.ref}
            className={`text-center mb-16 scroll-reveal ${headerReveal.isVisible ? 'visible' : ''}`}
          >
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
            <div 
              ref={contentLeftReveal.ref}
              className={`space-y-6 scroll-reveal-left ${contentLeftReveal.isVisible ? 'visible' : ''}`}
            >
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
            <div 
              ref={contentRightReveal.ref}
              className={`grid grid-cols-2 gap-4 scroll-reveal-right ${contentRightReveal.isVisible ? 'visible' : ''}`}
            >
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
            <h3 
              ref={skillsTitleReveal.ref}
              className={`text-2xl font-bold text-center mb-10 scroll-reveal ${skillsTitleReveal.isVisible ? 'visible' : ''}`}
            >
              Tecnologias & Ferramentas
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  ref={setSkillRef(index)}
                  className={`card-3d p-6 flex items-start gap-4 scroll-reveal-scale scroll-reveal-delay-${Math.min(index + 1, 5)} ${skillsVisible[index] ? 'visible' : ''}`}
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
