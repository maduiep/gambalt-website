import React, { useState, useRef, useEffect } from "react";
import './index.css';
import { Navbar, Footer, PageHero, Logo } from './components';
import { HomePage, AboutPage, ServicesPage, ServiceDetailPage, ProjectsPage, ProjectDetailPage, HowItWorksPage, TestimonialsPage, ContactPage, RequestQuotePage, ThankYouPage } from './pages';


export default function GambaltWebsite() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const topRef = useRef(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      
      <div ref={topRef}>
        <Navbar page={page} setPage={navigate} theme={theme} setTheme={setTheme} />
        <main>
          {page === "home" && <HomePage setPage={navigate} />}
          {page === "about" && <AboutPage setPage={navigate} />}
          {page === "services" && <ServicesPage setPage={navigate} />}
          {page === "service-detail" && <ServiceDetailPage setPage={navigate} />}
          {page === "projects" && <ProjectsPage setPage={navigate} />}
          {page === "project-lagos" && <ProjectDetailPage setPage={navigate} />}
          {page === "project-detail" && <ProjectDetailPage setPage={navigate} />}
          {page === "how-it-works" && <HowItWorksPage setPage={navigate} />}
          {page === "testimonials" && <TestimonialsPage setPage={navigate} />}
          {page === "contact" && <ContactPage setPage={navigate} />}
          {page === "quote" && <RequestQuotePage setPage={navigate} />}
          {page === "thank-you" && <ThankYouPage setPage={navigate} />}
        </main>
        {page !== "thank-you" && <Footer setPage={navigate} />}
      </div>
    </>
  );
}
