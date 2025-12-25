import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "askshauryarajput@gmail.com",
    href: "mailto:askshauryarajput@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8630892313",
    href: "tel:+918630892313",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bijnor, Uttar Pradesh, India",
    href: "#",
  },
];

export const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState({
  //   type: null,
  //   message: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setSubmitStatus({ type: null, message: "" });

  //   try {
  //     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  //     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  //     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //     if (!serviceId || !templateId || !publicKey) {
  //       throw new Error("EmailJS config missing in .env — add keys to continue.");
  //     }

  //     await emailjs.send(serviceId, templateId, formData, publicKey);

  //     setSubmitStatus({
  //       type: "success",
  //       message: "Message sent! I'll reply within 24 hours. 😊",
  //     });

  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (err) {
  //     console.error("EmailJS Error:", err);
  //     setSubmitStatus({
  //       type: "error",
  //       message: "Something went wrong. Please try again, or email directly.",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm uppercase tracking-wider">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary-foreground">
            Shaurya Rajput{" "}
            <span className="font-serif italic text-white">
              — Full-Stack & AI Developer
            </span>
          </h2>

          <p className="text-muted-foreground mt-4">
            Open to internships, freelance opportunities, and collaborations in
            full-stack development, AI/NLP, and product-building.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 justify-items-center gap-12 max-w-5xl mx-auto">
          
          {/* FORM AREA COMMENTED OUT */}
          {/* 
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 outline-none resize-none"
                />
              </div>

              <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          */}

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Open To Work</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Seeking Internship / Freelance roles in{" "}
                <strong>Full-Stack Development, AI/NLP, RAG Applications</strong>, and
                impactful product engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
