import { motion } from "framer-motion";
import {
  Globe, ShoppingCart, Building2, Code2, Palette, Wrench, Bot, Mail, Phone, ChevronLeft, ChevronRight
} from "lucide-react";
import { useState } from "react";
import heroLaptop from "@/assets/hero-laptop.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ToolCard from "@/components/ToolCard";
import ReviewCard from "@/components/ReviewCard";

const tools = [
  {
    icon: Globe,
    label: "CMS",
    title: "WordPress",
    description: "Flexible, SEO-friendly websites powered by the world's most popular CMS — perfect for blogs, business sites, and content-driven platforms.",
  },
  {
    icon: ShoppingCart,
    label: "Service",
    title: "Shopify Development",
    description: "Lightning-fast, conversion-optimized e-commerce stores that look stunning and sell like crazy.",
  },
  {
    icon: Code2,
    label: "Development",
    title: "Custom Code",
    description: "Tailor-made web applications built from scratch with modern frameworks — no limitations, full control.",
  },
  {
    icon: Bot,
    label: "AI-Powered",
    title: "Vibe Coding",
    description: "AI-assisted development that accelerates building — smarter workflows, faster delivery, and cutting-edge innovation.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Portfolio Website Development",
    items: [
      "Personal portfolio websites",
      "Creative / Designer showcase sites",
      "Photography & media portfolios",
      "Resume & profile websites",
      "Interactive portfolio designs",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Development",
    items: [
      "Shopify Store Development",
      "WordPress + WooCommerce Stores",
      "Custom Ecommerce Solutions",
      "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
      "Product & Inventory Setup",
      "Shipping & Tax Configuration",
      "Marketplace Integration",
    ],
  },
  {
    icon: Building2,
    title: "Business Website Development",
    items: [
      "Corporate websites",
      "Startup websites",
      "Service-based business websites",
      "Company profile websites",
      "Landing pages",
      "Lead generation websites",
      "Appointment booking systems",
    ],
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    items: [
      "Custom web applications",
      "Admin dashboards",
      "CRM / ERP systems",
      "API integrations",
      "Custom features & automation",
      "Third-party integrations",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    items: [
      "Responsive web design",
      "Website redesign",
      "Landing page design",
      "Wireframing & prototyping",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    items: [
      "Website maintenance",
      "Speed optimization",
      "SEO optimization",
      "Bug fixing",
      "Security updates",
      "Hosting & domain setup",
    ],
  },
];

const reviews = [
  { name: "Rahul S.", title: "Outstanding Work!", review: "They delivered our e-commerce store ahead of schedule. The design is clean and our sales have increased significantly.", rating: 5 },
  { name: "Priya M.", title: "Highly Professional!", review: "Amazing team to work with. They understood our vision perfectly and built a stunning portfolio website.", rating: 5 },
  { name: "Amit K.", title: "Best Decision Ever!", review: "Our business website looks incredible. The attention to detail and responsiveness is top-notch.", rating: 5 },
  { name: "Sarah L.", title: "Exceeded Expectations!", review: "The custom web application they built streamlined our entire workflow. Truly talented developers.", rating: 5 },
  { name: "Deepa R.", title: "Fantastic Service!", review: "From design to deployment, everything was handled smoothly. Our Shopify store is performing great.", rating: 5 },
  { name: "Vikram T.", title: "Super Impressed!", review: "Fast delivery, great communication, and a beautiful final product. Will definitely work with them again.", rating: 5 },
];

const Index = () => {
  const [reviewPage, setReviewPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(reviewPage * reviewsPerPage, (reviewPage + 1) * reviewsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-hero-gradient min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
                Web Development Services
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-foreground mb-6">
                We Build<br />
                <span className="text-primary">Digital</span><br />
                Experiences
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-8">
                From stunning portfolios to powerful ecommerce platforms — we craft websites that drive results.
              </p>
              <div className="flex gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs">↗</span>
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.img
                src={heroLaptop}
                alt="Web Development Services"
                className="w-full max-w-lg rounded-3xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools We Use Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              Our Tech Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Tools We Use
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.title}
                icon={tool.icon}
                label={tool.label}
                title={tool.title}
                description={tool.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                items={service.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              Don't Take Our<br />Word For It
            </h2>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setReviewPage((p) => Math.max(0, p - 1))}
                disabled={reviewPage === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setReviewPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={reviewPage === totalPages - 1}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentReviews.map((review, index) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                title={review.title}
                review={review.review}
                rating={review.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Contact Us
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a
              href="mailto:jananikajk@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 bg-primary/30 rounded-2xl px-8 py-6 hover:bg-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block">Email</span>
                <span className="text-lg font-bold text-foreground">jananikajk@gmail.com</span>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/919487718584"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-4 bg-primary/30 rounded-2xl px-8 py-6 hover:bg-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block">WhatsApp</span>
                <span className="text-lg font-bold text-foreground">+91 9487718584</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Big brand text section */}
      <section className="py-16 overflow-hidden bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-text-huge text-center select-none"
        >
          DevCraft
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
