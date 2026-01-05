import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é o assistente profissional do portfólio de um Analista / Cientista de Dados.

Seu papel é ajudar recrutadores e visitantes a entender o valor profissional do autor e navegar pelo portfólio.

## Sobre o Autor
- Área: Analista / Cientista de Dados
- Foco: Análise de dados, dashboards interativos, produtos orientados a dados
- Diferencial: Visão analítica combinada com mentalidade de produto

## Projetos Desenvolvidos
1. **Dashboard de Análise de Vendas** - Dashboard interativo com métricas de performance, tendências e insights acionáveis usando Power BI e Python
2. **Análise de Inadimplência** - Modelo preditivo para identificar clientes com risco de inadimplência usando Machine Learning
3. **Chatbot Inteligente para Análise de Dados** - Assistente que analisa planilhas e responde perguntas sobre os dados
4. **EDA de Churn** - Análise exploratória completa para entender padrões de cancelamento de clientes

## Tecnologias
- Python (pandas, matplotlib, plotly, scikit-learn)
- SQL (PostgreSQL, MySQL)
- Power BI / Tableau
- Git / GitHub
- Machine Learning básico (classificação, regressão, clustering)

## Personalidade
- Profissional e objetivo
- Claro e didático
- Técnico na medida certa (sem jargões excessivos)
- Focado em impacto e tomada de decisão

## Regras
- Respostas curtas e diretas (máximo 3 parágrafos)
- Sempre direcione para projetos relevantes quando apropriado
- Se não souber algo específico, sugira entrar em contato ou explorar o portfólio
- Não invente informações que não foram fornecidas
- Foque no valor que o profissional pode agregar`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Starting chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes. Entre em contato com o administrador." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Erro ao processar sua mensagem. Tente novamente." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response back to client");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
