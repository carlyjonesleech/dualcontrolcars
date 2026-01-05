import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is dual control car hire?",
          answer: "Dual control car hire provides learner drivers with a vehicle fitted with additional pedals on the passenger side. This allows a supervising driver to take control if needed, making it safer for learners to practice."
        },
        {
          question: "Where do you operate?",
          answer: "We operate throughout Chester and the surrounding areas including Ellesmere Port, Wrexham, Flintshire, and nearby regions. We're conveniently located near Chester test centre."
        },
        {
          question: "What are your opening hours?",
          answer: "We operate 7 days a week. Booking times are flexible to suit your schedule. Contact us to arrange a time that works for you."
        },
        {
          question: "How do I book?",
          answer: "You can book by calling us directly, sending an email, or using the contact form on our website. We aim to respond to all enquiries within 24 hours."
        }
      ]
    },
    {
      title: "Test Day Hire",
      faqs: [
        {
          question: "What is included in test day hire?",
          answer: "Our test day hire includes the use of our dual control vehicle for your driving test, collection and drop-off at the test centre, and a pre-test warm-up session to help you feel confident."
        },
        {
          question: "How early should I book for my test day?",
          answer: "We recommend booking as soon as you receive your test date to ensure availability. Popular times can fill up quickly, especially during peak periods."
        },
        {
          question: "What if my test is cancelled?",
          answer: "If your test is cancelled by the DVSA, we'll work with you to reschedule at no additional charge, subject to availability."
        },
        {
          question: "Can I have a warm-up before my test?",
          answer: "Yes, we include a warm-up session before your test to help settle any nerves and get you comfortable with the vehicle."
        }
      ]
    },
    {
      title: "Private Practice",
      faqs: [
        {
          question: "Do I need to be a qualified instructor to supervise?",
          answer: "No. Any suitable supervising driver can supervise, as per UK rules. The supervisor must be at least 21 years old and have held a full driving licence for at least 3 years."
        },
        {
          question: "Is the car insured for learner use?",
          answer: "Yes — our vehicles are fully insured for learner drivers with appropriate supervision. You don't need to worry about adding anyone to your own insurance."
        },
        {
          question: "Can we practice near the test centre?",
          answer: "Yes — local routes can be used where appropriate. Practicing near the test centre is a great way to build familiarity with the area."
        },
        {
          question: "What if my child panics while driving?",
          answer: "That's exactly why dual controls help — you can intervene calmly if needed. The additional brake and clutch pedals give the supervising driver full control when required."
        },
        {
          question: "How long can I hire the car for?",
          answer: "We offer flexible hire periods from a few hours to full days. Contact us to discuss your specific needs and we'll create a package that works for you."
        }
      ]
    },
    {
      title: "ADI Relief Hire",
      faqs: [
        {
          question: "What is ADI relief hire?",
          answer: "ADI relief hire is for qualified driving instructors who need a temporary vehicle. Whether your car is being serviced, you're between vehicles, or you need backup, we can help."
        },
        {
          question: "What type of vehicles do you have?",
          answer: "We have modern, well-maintained dual control vehicles suitable for driving instruction. Contact us for details about our current fleet."
        },
        {
          question: "Can I use the car for lessons and tests?",
          answer: "Yes, our vehicles are suitable for both driving lessons and practical tests. They're fully equipped with dual controls and meet all necessary requirements."
        },
        {
          question: "What's included in the hire?",
          answer: "Hire includes a fully insured dual control vehicle, breakdown cover, and flexible pick-up/drop-off arrangements. We can discuss specific requirements when you book."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      faqs: [
        {
          question: "How much does it cost?",
          answer: "Pricing varies depending on the service and duration required. Please contact us for a quote tailored to your needs."
        },
        {
          question: "Do you require a deposit?",
          answer: "A deposit may be required to secure your booking, particularly for test day hire. Full details will be provided when you book."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods for your convenience. Details will be provided when you make your booking."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">Help Centre</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our dual control car hire services. 
              Can't find what you're looking for? Get in touch and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card rounded-lg border border-border px-6"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help. Get in touch and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
