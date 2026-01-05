import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <a href="/" className="text-xl font-bold">
                <span className="gradient-text">Gabriel Oliveira</span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} Todos os direitos reservados.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/go830305-cripto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-card"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-oliveira-475040332/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-card"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}