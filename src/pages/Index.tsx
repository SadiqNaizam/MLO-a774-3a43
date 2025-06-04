import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import SignatureItemsGrid from '../components/Home/SignatureItemsGrid';
import Testimonials from '../components/Home/Testimonials';
import FAQAccordion from '../components/Home/FAQAccordion';
import ContactForm from '../components/Home/ContactForm';

/**
 * IndexPage serves as the homepage for the Furniture Website Clone.
 * It aggregates various sections (Navbar, Hero, Signature Items, Testimonials, FAQ, Contact Form)
 * to create a cohesive single-page experience.
 *
 * The layout is structured with a fixed Navbar at the top. The main content area
 * below the Navbar stacks the different sections vertically.
 * Spacing between sections is managed by the `gap-12` class on the `main` element,
 * in conjunction with individual section paddings.
 * The HeroSection specifically handles offsetting its content to appear correctly below the fixed Navbar.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* 
        The <main> element wraps all content sections below the Navbar.
        - `flex flex-col`: Arranges child sections vertically.
        - `gap-12`: Adds a 3rem (48px) space between each direct child section.
                   This is based on the Layout Requirements for mainContent.
        The Navbar is fixed, so it's taken out of the normal document flow.
        The HeroSection component (the first child of main) has internal mechanisms
        (specifically, `mt-16` on its inner container) to ensure its content is
        pushed down to correctly appear below the fixed Navbar.
      */}
      <main className="flex flex-col gap-12">
        <HeroSection />
        <SignatureItemsGrid />
        <Testimonials />
        <FAQAccordion />
        <ContactForm />
      </main>
    </div>
  );
};

export default IndexPage;
