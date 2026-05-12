import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[48px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center">
              <ShieldCheck className="text-dark-900 w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">Privacy Policy & Terms</h1>
          </div>

          <div className="space-y-8 text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-gold-500" />
                1. Registration Policy
              </h2>
              <p>
                HyrEstate is a premium recruitment platform. By registering your information and CV, you agree to our processing of your data for the purpose of job matching and recruitment. The registration fee of 1,499 PKR is a processing and verification charge.
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-gold-500/5 border border-gold-500/20 text-gold-500 italic font-medium">
                "Important Note: The registration fee is strictly for file processing and verification of candidate trust. HyrEstate provides access to luxury job leads and recruitment services but does NOT provide a guarantee for employment. Job placement depends on the candidate's performance, interviews, and employer requirements."
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Information Collection</h2>
              <p>
                We collect your name, contact details, professional experience, and CV. This information is shared only with verified luxury real estate employers on our platform. We do not sell your personal data to third-party marketing companies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Fees and Refunds</h2>
              <p>
                The registration fee of 1,499 PKR is non-refundable once the verification process has started. This fee helps us maintain a high-quality pool of serious candidates for our elite partner agencies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Candidate Responsibility</h2>
              <p>
                Candidates are responsible for providing accurate information. Any falsification of credentials or experience will result in immediate disqualification from the platform without a refund.
              </p>
            </section>

            <section className="pt-8 border-t border-white/5 text-sm">
              <p>Last updated: May 2026</p>
              <p>© 2026 HyrEstate Recruitment. All rights reserved.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
