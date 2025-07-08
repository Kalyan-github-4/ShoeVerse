import "./Products.css";
import { useEffect, useRef, useState } from "react";

const Products = ({ result }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add loaded class after component mounts for smoother animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (containerRef.current) {
        containerRef.current.classList.add('loaded');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [result]);

  // Optional: Enhanced intersection observer for cards
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all cards
    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [result]);

  return (
    <div>
      <section 
        ref={containerRef}
        className={`card-container ${isLoaded ? 'loaded' : 'loading'}`}
      >
        {/* ALL COMPONENTS */}
        {result}
      </section>
    </div>
  );
};

export default Products;