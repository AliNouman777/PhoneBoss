import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FiArrowLeft } from 'react-icons/fi'
import Container from '../components/Container'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-bg text-txt">
      <Helmet>
        <title>Privacy Policy – PhoneBoss</title>
        <meta name="description" content="PhoneBoss privacy policy. Learn how we collect, use and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Top bar */}
      <div className="bg-surface border-b border-bdr sticky top-0 z-50">
        <Container className="flex items-center gap-4 h-17">
          <Link to="/" className="flex items-center gap-2 text-txt-sub hover:text-primary transition-colors text-sm font-medium">
            <FiArrowLeft size={16} /> Back to Home
          </Link>
          <span className="text-bdr">|</span>
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PhoneBoss" className="h-9 w-auto object-contain" />
            <span className="text-xl font-black">
              <span className="text-primary">PHONE</span><span className="text-txt">BOSS</span>
            </span>
          </Link>
        </Container>
      </div>

      <Container className="py-16 max-w-3xl">

        <h1 className="text-4xl font-black text-txt mb-2">Privacy Policy</h1>
        <p className="text-txt-muted text-sm mb-10">Last updated: April 2025</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-txt-sub leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">1. Who We Are</h2>
            <p>
              PhoneBoss ("we", "us", "our") is a phone repair service operating across the United Kingdom.
              We are committed to protecting your personal information and your right to privacy.
              If you have any questions about this policy, please contact us at{' '}
              <a href="mailto:mr.shad@live.co.uk" className="text-primary hover:underline">mr.shad@live.co.uk</a> or call{' '}
              <a href="tel:+447876660020" className="text-primary hover:underline">07876 660020</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">2. Information We Collect</h2>
            <p className="mb-3">When you use our services, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-txt">Personal identifiers</strong> — your name, email address, and phone number</li>
              <li><strong className="text-txt">Device information</strong> — make, model, IMEI number, and serial number of the device being repaired</li>
              <li><strong className="text-txt">Repair records</strong> — details of the fault, work carried out, and parts used</li>
              <li><strong className="text-txt">Payment information</strong> — transaction records (we do not store full card details)</li>
              <li><strong className="text-txt">Communication data</strong> — emails, messages, or calls you make to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carry out the repair service you have requested</li>
              <li>Contact you about the status or completion of your repair</li>
              <li>Process payments and issue receipts</li>
              <li>Maintain service and warranty records</li>
              <li>Comply with our legal and regulatory obligations</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">4. Legal Basis for Processing</h2>
            <p>
              We process your personal data under the following lawful bases as set out in the UK GDPR and the
              Data Protection Act 2018:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-txt">Contract</strong> — processing is necessary to perform the repair service you have requested</li>
              <li><strong className="text-txt">Legal obligation</strong> — we may need to retain certain records to comply with UK law</li>
              <li><strong className="text-txt">Legitimate interests</strong> — to operate and improve our business, provided your rights are not overridden</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">5. Data Sharing</h2>
            <p>
              We do <strong className="text-txt">not sell</strong> your personal data to third parties. We may share your information only in
              the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>With parts suppliers where necessary to source components for your repair</li>
              <li>With payment processors to handle transactions securely</li>
              <li>With legal or regulatory authorities if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it
              was collected — including for the purposes of satisfying any legal, accounting, or reporting
              requirements. Repair records are typically kept for a period of 12 months following the
              completion of your repair.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">7. Data Security</h2>
            <p>
              We have implemented appropriate technical and organisational security measures to protect your
              personal information against accidental or unlawful destruction, loss, alteration, unauthorised
              disclosure, or access. Access to personal data is restricted to authorised personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">8. Your Rights</h2>
            <p className="mb-3">Under UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-txt">Right of access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-txt">Right to rectification</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong className="text-txt">Right to erasure</strong> — request deletion of your data where there is no compelling reason for its continued processing</li>
              <li><strong className="text-txt">Right to restrict processing</strong> — request that we limit how we use your data</li>
              <li><strong className="text-txt">Right to data portability</strong> — request a transferable copy of your data</li>
              <li><strong className="text-txt">Right to object</strong> — object to processing based on legitimate interests</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:mr.shad@live.co.uk" className="text-primary hover:underline">mr.shad@live.co.uk</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">9. Complaints</h2>
            <p>
              If you are not satisfied with how we handle your personal data, you have the right to lodge a
              complaint with the UK's data protection authority:
            </p>
            <p className="mt-3">
              <strong className="text-txt">Information Commissioner's Office (ICO)</strong><br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a><br />
              Helpline: 0303 123 1113
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please reach out:</p>
            <div className="mt-3 space-y-1">
              <p><strong className="text-txt">Email:</strong>{' '}
                <a href="mailto:mr.shad@live.co.uk" className="text-primary hover:underline">mr.shad@live.co.uk</a>
              </p>
              <p><strong className="text-txt">Phone:</strong>{' '}
                <a href="tel:+447876660020" className="text-primary hover:underline">07876 660020</a>
              </p>
            </div>
          </section>

        </div>
      </Container>

      {/* Footer bar */}
      <div className="border-t border-bdr mt-16">
        <Container className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-txt-muted">
          <p>© 2025 PhoneBoss. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
