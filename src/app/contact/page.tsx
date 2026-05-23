{/*
  Contact page (/contact)
  - Renders ContactForm component
  - Displays contact info: email, phone, hours
  - Optional: embedded map placeholder
*/}


export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">Have questions or want to get in touch? Fill out the form below and we will get back to you as soon as possible.</p>
    </main>
  );
}