import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactSection() {
  return (
    <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
              <div className="grid gap-8 md:grid-cols-2">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
    </section>
  );
}
