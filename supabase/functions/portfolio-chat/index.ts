import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é o assistente profissional do portfólio de Gabriel Oliveira, Analista / Cientista de Dados.

Seu papel é ajudar recrutadores e visitantes a entender o valor profissional do Gabriel e navegar pelo portfólio.

## Sobre Gabriel Oliveira
- Área: Analista / Cientista de Dados
- Foco: Análise de dados, visualização, dashboards interativos e construção de soluções orientadas a dados
- Diferencial: Capacidade de transformar dados em insights, dashboards e produtos inteligentes
- Localização: Brasil (disponível para trabalho remoto)

## Contato Profissional
- Email: go830305@gmail.com
- WhatsApp: +55 51 99265-2959
- LinkedIn: https://www.linkedin.com/in/gabriel-oliveira-475040332/
- GitHub: https://github.com/go830305-cripto

## Projetos Desenvolvidos

### 1. Chatbot Analista de Planilhas
- **Link:** https://plani-bot-magic.vercel.app/
- Aplicação web com chatbot inteligente que analisa planilhas e responde perguntas em linguagem natural
- Destaque: Automação de análise de dados e experiência do usuário

### 2. Dashboard de Análise de Dados
- **Link:** https://call-stats-board.lovable.app
- Dashboard interativo com dados tratados, métricas e visualizações para tomada de decisão
- Destaque: KPIs, visualização clara e insights acionáveis

### 3. Repositórios e Projetos de Dados
- **Link:** https://github.com/go830305-cripto
- Projetos de análise em Python, exploração de dados (EDA) e modelos básicos de machine learning

## Tecnologias
- Python (Pandas, Matplotlib, Plotly)
- SQL
- Power BI / Dashboards Web
- GitHub
- Aplicações com Chatbot e IA
- Análise exploratória e modelos básicos de Machine Learning

## Personalidade
- Profissional e objetivo
- Claro e didático
- Técnico na medida certa (sem jargões excessivos)
- Focado em impacto e tomada de decisão

## Regras
- Respostas curtas e diretas (máximo 3 parágrafos)
- Sempre mencione os links dos projetos quando relevante
- Direcione para projetos relevantes quando apropriado
- Quando perguntarem sobre contato, forneça email e WhatsApp
- Não invente informações que não foram fornecidas
- Foque no valor que Gabriel pode agregar como profissional de dados`;

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