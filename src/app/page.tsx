import { Header } from "@/components/mvpblocks/Header";
import { Hero } from "@/components/mvpblocks/Hero";
import { Features } from "@/components/mvpblocks/Features";
import { BentoGrid } from "@/components/mvpblocks/Bento";
import { Contact } from "@/components/mvpblocks/Contact";
import { Faq } from "@/components/mvpblocks/FAQ";
import { Footer } from "@/components/mvpblocks/Footer";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <>  
      <Header />
      <main className="space-y-16 md:space-y-24">
        <section className="pt-20 md:pt-24">
          <Hero />
        </section>
        
        <section>
          <Features />
        </section>
        
        <section>
          <BentoGrid />
        </section>
        
        <section>
          <Contact />
        </section>
        
        <section>
          <Faq />
        </section>
        
        <section>
          <Footer />
        </section>
      </main>
    </>
    
  );
}
