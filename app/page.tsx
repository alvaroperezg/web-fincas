import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";


export default function HomePage() {
return (
<div className="min-h-screen bg-background">
<Header />
<Hero />
<Services />
<About />
{/* <Testimonials />     */}
<Contact />
<Footer />
</div>
);
}