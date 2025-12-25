import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Cpu,
  Mail,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Supabase",
  "Firebase",
  "PyTorch",
  "RoBERTa (NLP)",
  "FAISS",
  "LangChain",
  "Gemini API",
  "Tailwind CSS",
  "JWT Auth",
  "REST APIs",
  "DSA",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#0A846B",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                14 + Math.random() * 18
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Full-Stack Developer • AI / NLP Explorer
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building{" "}
              <span className="text-primary glow-text">intelligent</span>
              <br />
              web experiences with
              <br />
              <span className="font-serif italic font-normal text-white">
                purpose.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I’m <strong>Shaurya Rajput</strong> — a CS undergraduate
              passionate about{" "}
              <strong>full-stack development & applied AI</strong>.  
              I build MERN apps, design modular APIs, and create AI features using
              <strong> RoBERTa, FAISS, LangChain & Gemini LLMs</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {/* <Button size="lg" as="a" href="#contact">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button> */}

              <a
                href="https://drive.google.com/file/d/1opu8F7_WQ4szKDNjVkn0--BqiA_cVFb6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  View Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Connect:</span>

              <a
                href="https://github.com/shaurya2425"
                className="p-2 rounded-full glass hover:bg-primary/10 transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/shauryarajput2401"
                className="p-2 rounded-full glass hover:bg-primary/10 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:askshauryarajput@gmail.com"
                className="p-2 rounded-full glass hover:bg-primary/10 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="relative">
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/profile-photo.jpeg"
                  alt="Shaurya Rajput"
                  className="w-full aspect-[4/5] rounded-2xl object-cover"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">Open to Opportunities</span>
                  </div>
                </div>

                {/* No fake experience */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">Student</div>
                  <div className="text-xs text-muted-foreground">
                    2027 Graduate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee gap-8">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className="text-lg text-muted-foreground/50 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
