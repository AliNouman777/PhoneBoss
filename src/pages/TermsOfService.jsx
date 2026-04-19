import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FiArrowLeft } from 'react-icons/fi'
import Container from '../components/Container'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-bg text-txt">
      <Helmet>
        <title>Terms of Service – PhoneBoss</title>
        <meta name="description" content="PhoneBoss terms of service. Read our repair warranty, no fix no fee policy, payment terms and customer rights before using our services." />
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

        <h1 className="text-4xl font-black text-txt mb-2">Terms of Service</h1>
        <p className="text-txt-muted text-sm mb-10">Last updated: April 2025</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-txt-sub leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">1. Agreement to Terms</h2>
            <p>
              By bringing your device to PhoneBoss for repair, booking a repair online, or using any of our
              services, you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services. PhoneBoss reserves the right to update these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">2. Repair Services</h2>
            <p className="mb-3">When you bring a device to us for repair:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will carry out a free diagnostic assessment before any repair work begins</li>
              <li>We will inform you of the repair cost and obtain your authorisation before proceeding</li>
              <li>Quoted prices are estimates and may change if additional faults are discovered during the repair</li>
              <li>You will be contacted before any additional work is carried out that may affect the final price</li>
              <li>We use quality parts for all repairs — OEM or high-grade equivalent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">3. Turnaround Times</h2>
            <p>
              Most common repairs — including screen replacements, battery replacements, and charging port
              repairs — are completed <strong className="text-txt">while you wait</strong>, typically within 30–60 minutes.
              Complex repairs such as water damage recovery or data recovery may take longer. We will provide
              you with an estimated completion time at the point of booking or drop-off.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">4. Warranty</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All repairs carried out by PhoneBoss come with a <strong className="text-txt">12-month warranty</strong> on parts and labour</li>
              <li>The warranty covers defects in the parts we supply and workmanship errors</li>
              <li>The warranty does not cover physical damage, liquid damage, or faults unrelated to the original repair that occur after collection</li>
              <li>Warranty claims must be made by contacting us directly — we will assess the device and, if the fault falls within warranty, carry out the repair at no additional cost</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">5. No Fix, No Fee</h2>
            <p>
              If we are unable to repair your device, you will <strong className="text-txt">not be charged</strong> for the attempted repair.
              A diagnostic fee may apply in certain complex cases — this will always be communicated to you
              upfront before any work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">6. Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due upon collection of your repaired device</li>
              <li>We accept cash and major debit/credit cards</li>
              <li>Devices will not be released until full payment has been received</li>
              <li>A receipt will be provided for all transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">7. Data and Personal Content</h2>
            <p>
              We strongly advise you to back up all data on your device before handing it in for repair.
              While we take every precaution to protect your data, PhoneBoss cannot be held responsible for
              any loss of data that may occur during the repair process. By submitting your device, you
              acknowledge this risk and confirm you have made appropriate backups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">8. Uncollected Devices</h2>
            <p>
              If your repaired device is not collected within <strong className="text-txt">30 days</strong> of notification that it is ready,
              PhoneBoss reserves the right to charge a storage fee or, after reasonable notice, to dispose of
              the device to recover costs. We will always make reasonable efforts to contact you before taking
              any such action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">9. Liability</h2>
            <p className="mb-3">PhoneBoss's liability to you in connection with any repair is limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The cost of the repair itself</li>
              <li>Re-performing the repair where covered under warranty</li>
            </ul>
            <p className="mt-3">
              We are not liable for any indirect or consequential loss, loss of data, loss of profit, or any
              other loss arising from the repair or failure to repair your device, except where such liability
              cannot be excluded by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">10. Complaints and Disputes</h2>
            <p>
              If you are unhappy with the service you have received, please contact us in the first instance:
            </p>
            <div className="mt-3 space-y-1">
              <p><strong className="text-txt">Email:</strong>{' '}
                <a href="mailto:mr.shad@live.co.uk" className="text-primary hover:underline">mr.shad@live.co.uk</a>
              </p>
              <p><strong className="text-txt">Phone:</strong>{' '}
                <a href="tel:+447876660020" className="text-primary hover:underline">07876 660020</a>
              </p>
            </div>
            <p className="mt-3">
              We aim to resolve all complaints within 5 working days. If we are unable to resolve your
              complaint directly, you may seek independent advice or pursue the matter through the courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-txt mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of England and
              Wales. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of
              the courts of England and Wales.
            </p>
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
