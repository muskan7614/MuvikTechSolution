'use client';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import SEOHead from './SEOHead';

export default function Layout({ children, seo }) {
  return (
    <>
      <SEOHead {...seo} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}