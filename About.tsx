import { motion } from "framer-motion";
import { Target, Users, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We help businesses establish a powerful online presence through thoughtful web development and design.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Every project starts with understanding your goals. We build solutions tailored to your unique needs.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Fast, optimized, and SEO-friendly — our websites are built for speed and search engine visibility.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Our maintenance and support keeps your site running flawlessly.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[0.9] mb-6">
              Crafting the<br />
              <span className="text-primary">Web</span>, One<br />
              Pixel at a Time
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              We're a passionate team of developers and designers dedicated to building exceptional digital experiences for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black text-foreground tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DevCraft was born from a simple idea: every business deserves a beautiful, functional website without the complexity. We combine technical expertise with creative design to deliver web solutions that truly make a difference.
                </p>
                <p>
                  From portfolio sites to full-scale ecommerce platforms, we've helped hundreds of clients transform their online presence. Our approach is rooted in understanding your business first, then building technology that serves your goals.
                </p>
                <p>
                  Whether you need a sleek landing page, a robust web application, or ongoing maintenance — we're here to make it happen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "200+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="text-3xl font-black text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-12 md:p-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              Let's build something amazing together. Get in touch and let's discuss your vision.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
