import { Code2, Lightbulb, Rocket, Brain, Database } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building scalable web apps with MERN, Supabase, and Firebase while keeping performance and maintainability in mind.",
  },
  {
    icon: Brain,
    title: "AI + NLP Integration",
    description:
      "Applying RoBERTa, FAISS, LangChain, and Gemini APIs to create RAG chatbots and real-time journaling analysis.",
  },
  {
    icon: Database,
    title: "Clean Data & Architecture",
    description:
      "Designing REST APIs, JWT authentication, modular backend services, and secure data flows.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Actively learning, solving 400+ DSA problems, and exploring research in sentiment + sarcasm detection.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Crafting solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Computer Science student (B.Tech '27) and a{" "}
                <strong>full-stack developer</strong> who loves building practical
                products that solve real problems. My journey started with MERN
                apps, and now I’m expanding into{" "}
                <strong>AI-powered systems, NLP, and RAG architecture</strong>.
              </p>
              <p>
                Recently, I built <strong>Reflecto</strong> — a mental health
                journaling platform that integrates{" "}
                <strong>RoBERTa-Large for NLP</strong>, a{" "}
                <strong>6,189-entry dataset</strong> I curated myself, and a{" "}
                <strong>Gemini-powered AI advisor</strong> for contextual guidance.
                The project made me deeply interested in{" "}
                <strong>multi-task learning (sentiment + sarcasm)</strong>,
                which I'm now exploring through research.
              </p>
              <p>
                I enjoy combining <strong>clean UI</strong> with{" "}
                <strong>solid backend architecture</strong> — shipping interfaces
                that feel good to use and systems that are a joy to maintain.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to build software that is not just functional, but
                genuinely helpful — whether that's through a clean UX, a well-designed
                API, or an AI model that understands the user.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
