import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-4 sm:py-6 md:py-8 lg:py-12">
      <h3 className="lg:pb-12 pb-4 sm:pb-6 md:pb-8 text-center text-4xl font-semibold tracking-wide bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 text-transparent bg-clip-text">
        Contact Us
      </h3>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
