import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. ACCEPTANCE OF TERMS',
      content: 'By accessing, browsing, purchasing, downloading, installing, or using any metas website, software, MT5 indicators, trading algorithms, Telegram communities, educational materials, or related services, you agree to be bound by these Terms of Service.\n\nIf you do not agree with these Terms, you must not use our products or services.'
    },
    {
      title: '2. ABOUT METAS',
      content: 'Metas provides digital trading-related tools and educational resources, including but not limited to:\n\n• MT5 Indicators\n• Trading Algorithms\n• Trading Automation Tools\n• License-Based Software\n• Educational Content\n• Telegram Communities\n• Market Analysis Content\n\nAll products are digital products only.\n\nNo physical products are sold or delivered.'
    },
    {
      title: '3. ELIGIBILITY',
      content: 'You must be at least 18 years old and legally capable of entering into binding agreements in your jurisdiction to use our products and services.\n\nBy using Metas products, you represent and warrant that you meet these requirements.'
    },
    {
      title: '4. NO FINANCIAL ADVICE',
      content: 'Metas is not a financial advisor, broker, investment manager, or financial institution.\n\nNothing provided through our website, software, indicators, algorithms, Telegram channels, social media, emails, documentation, or educational materials shall be considered financial advice, investment advice, trading advice, portfolio management, asset management, or solicitation to buy or sell securities.\n\nAll information is provided strictly for educational, informational, and technical purposes.\n\nYou are solely responsible for all trading decisions and financial outcomes.'
    },
    {
      title: '5. RISK DISCLOSURE',
      content: 'Trading financial markets involves significant risk.\n\nYou acknowledge and understand that:\n\n• Trading Forex involves substantial risk.\n• Trading leveraged products can result in significant losses.\n• You may lose some or all of your invested capital.\n• Past performance does not guarantee future results.\n• Backtesting results do not guarantee future performance.\n• Historical data is not predictive of future outcomes.\n\nYou accept full responsibility for any financial losses incurred while using our products or services.'
    },
    {
      title: '6. PAYMENTS',
      content: 'Metas uses third-party payment providers, including Cryptomus and other payment processors, to process payments.\n\nBy making a purchase, you agree that:\n\n• Payments must be completed successfully before access is granted.\n• Product delivery is subject to successful payment confirmation.\n• Transaction fees charged by payment processors are your responsibility.\n• Cryptocurrency transactions are irreversible once confirmed.\n• Incorrect wallet addresses, payment amounts, or network selections are solely the customer\'s responsibility.\n\nMetas reserves the right to reject or cancel any order if fraudulent, suspicious, or unauthorized activity is detected.'
    },
    {
      title: '7. PRODUCT DELIVERY',
      content: 'After successful payment confirmation:\n\n• Access credentials may be delivered by email.\n• License keys may be delivered manually or automatically.\n• Subscription access may be activated on your account.\n• Telegram access may be granted where applicable.\n\nDelivery times may vary depending on operational requirements.'
    },
    {
      title: '8. SUBSCRIPTIONS',
      content: 'Metas offers subscription-based products.\n\nSubscription periods may include:\n\n• 1 Month\n• 6 Months\n• 1 Year\n\nAccess remains active only during the purchased subscription period.\n\nAccess automatically expires at the end of the subscription period unless renewed.'
    },
    {
      title: '9. LICENSE GRANT',
      content: 'Upon successful purchase, Metas grants you a limited, revocable, non-exclusive, non-transferable license to use the purchased product.\n\nThis license is granted solely for personal use.\n\nNo ownership rights are transferred.'
    },
    {
      title: '10. LICENSE RESTRICTIONS',
      content: 'You may not:\n\n• Share your license\n• Transfer your license\n• Resell products\n• Rent products\n• Distribute products\n• Reverse engineer software\n• Modify software\n• Copy source code\n• Republish materials\n• Create derivative works\n\nAny violation may result in immediate termination of access without notice.'
    },
    {
      title: '11. TELEGRAM COMMUNITIES',
      content: 'Metas may provide access to Telegram channels, groups, communities, or educational discussions.\n\nCommunity participation must remain respectful and professional.\n\nThe following are prohibited:\n\n• Spam\n• Harassment\n• Hate speech\n• Fraudulent activity\n• Promotion of competing products\n• Sharing confidential materials\n• Distribution of licenses\n\nMetas reserves the right to remove any member without notice.'
    },
    {
      title: '12. NO PERFORMANCE GUARANTEE',
      content: 'Metas does not guarantee:\n\n• Profits\n• Trading success\n• Accuracy rates\n• Win rates\n• Future returns\n• Income generation\n\nAny examples, screenshots, demonstrations, testimonials, simulations, backtests, or performance illustrations are for informational purposes only.\n\nActual results will vary.'
    },
    {
      title: '13. NO REFUNDS',
      content: 'Due to the digital nature of our products and services, all sales are final.\n\nNo refunds, returns, exchanges, or cancellations will be provided once:\n\n• Payment has been completed\n• Product access has been delivered\n• License keys have been issued\n• Subscription access has been activated\n• Community access has been granted\n\nCustomers are responsible for reviewing all product information before purchasing.\n\nExceptions may only be provided where required by applicable law.'
    },
    {
      title: '14. CHARGEBACKS AND PAYMENT DISPUTES',
      content: 'Customers agree not to initiate chargebacks or payment disputes for valid purchases.\n\nAny attempt to obtain products or services through chargebacks, payment reversals, or fraudulent disputes may result in:\n\n• Immediate account termination\n• License deactivation\n• Community removal\n• Permanent purchase restrictions\n• Legal action where permitted\n\nMetas reserves the right to provide transaction records and access logs to payment providers during dispute investigations.'
    },
    {
      title: '15. INTELLECTUAL PROPERTY',
      content: 'All content remains the exclusive property of Metas.\n\nThis includes:\n\n• Indicators\n• Algorithms\n• Software\n• Source code\n• Graphics\n• Branding\n• Logos\n• Videos\n• Documentation\n• Educational materials\n• Website content\n\nUnauthorized use is strictly prohibited.'
    },
    {
      title: '16. PRODUCT COMPATIBILITY',
      content: 'Customers are responsible for ensuring compatibility with:\n\n• MetaTrader 5 (MT5)\n• Supported operating systems\n• Supported devices\n• Internet connectivity requirements\n\nMetas is not responsible for third-party platform limitations or compatibility issues outside stated requirements.'
    },
    {
      title: '17. LIMITATION OF LIABILITY',
      content: 'To the maximum extent permitted by law, Metas shall not be liable for:\n\n• Trading losses\n• Financial losses\n• Loss of profits\n• Business interruption\n• Loss of data\n• Loss of opportunities\n• Indirect damages\n• Consequential damages\n• Special damages\n• Punitive damages\n\nUse of our products is entirely at your own risk.'
    },
    {
      title: '18. DISCLAIMER OF WARRANTIES',
      content: 'All products and services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.\n\nMetas does not guarantee:\n\n• Continuous availability\n• Error-free operation\n• Uninterrupted service\n• Compatibility with all systems\n• Specific performance outcomes'
    },
    {
      title: '19. ACCOUNT SUSPENSION AND TERMINATION',
      content: 'Metas reserves the right to suspend, restrict, or terminate access immediately if:\n\n• These Terms are violated\n• Fraud is suspected\n• Licenses are shared\n• Unauthorized distribution occurs\n• Abuse is detected\n\nTermination may occur without refund or compensation.'
    },
    {
      title: '20. PRIVACY',
      content: 'Your use of Metas products is also governed by our Privacy Policy.'
    },
    {
      title: '21. MODIFICATIONS TO TERMS',
      content: 'Metas may update these Terms at any time.\n\nUpdated versions become effective immediately upon publication on the website.\n\nContinued use of our products and services constitutes acceptance of the updated Terms.'
    },
    {
      title: '22. GOVERNING LAW',
      content: 'These Terms shall be governed and interpreted under the laws of India.\n\nAny disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of India.'
    },
    {
      title: '23. CONTACT INFORMATION',
      content: 'For support or legal inquiries:\n\nWebsite: https://metas.one\n\nBy purchasing, downloading, installing, accessing, or using any Metas product or service, you acknowledge that you have read, understood, and agreed to these Terms of Service.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]">
      <div className="max-w-4xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <FileText className="text-[#7C3AED]" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl text-[#9CA3AF] mb-4">
            Last Updated: June 2026
          </p>
        </AnimatedSection>

        <div className="space-y-6 mt-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#7C3AED]">{section.title}</h2>
              <p className="text-[#9CA3AF] whitespace-pre-wrap leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center"
        >
          <p className="text-yellow-400">
            By using Metas products and services, you acknowledge that you have read, understood, and agreed to these Terms of Service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
