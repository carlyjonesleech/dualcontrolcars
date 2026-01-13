import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Chester Dual Control Car Hire Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you use our services, including test day car hire, ADI relief hire, mock tests, and private practice sessions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and postal address</li>
                    <li><strong>Driving Information:</strong> Provisional or full driving licence details, test booking references</li>
                    <li><strong>Payment Information:</strong> Payment card details (processed securely through our payment provider)</li>
                    <li><strong>Booking Information:</strong> Service preferences, booking dates, and special requirements</li>
                    <li><strong>Communication Data:</strong> Records of correspondence with us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Process and manage your bookings</li>
                    <li>Provide our car hire and driving instruction services</li>
                    <li>Communicate with you about your bookings and our services</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                    <li>Improve our services and customer experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Basis for Processing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We process your personal data on the following legal bases: performance of a contract (to provide 
                    our services), legitimate interests (to improve our services and communicate with you), legal 
                    obligation (to comply with applicable laws), and consent (where you have given specific consent).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Our network of approved driving instructors (for mock tests and lessons)</li>
                    <li>Payment processors for secure transaction handling</li>
                    <li>Legal authorities when required by law</li>
                    <li>Professional advisers such as accountants and legal counsel</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as necessary to fulfil the purposes for which 
                    it was collected, including to satisfy legal, accounting, or reporting requirements. Typically, 
                    we retain booking records for 6 years after your last interaction with us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Under UK GDPR, you have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Restrict processing of your personal data</li>
                    <li>Data portability</li>
                    <li>Object to processing of your personal data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organisational measures to protect your personal data 
                    against unauthorised access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may use cookies to enhance your browsing experience. You can set your browser to 
                    refuse cookies, but this may limit some functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-foreground font-semibold">Chester Dual Control Car Hire Ltd</p>
                    <p className="text-muted-foreground">Email: info@chesterdualcontrolcarhire.co.uk</p>
                    <p className="text-muted-foreground">Phone: 07402 181356</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
