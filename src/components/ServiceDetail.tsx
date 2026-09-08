import { ArrowLeft, CheckCircle, AlertCircle, Phone } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

export default function ServiceDetail({ serviceId, onBack }: ServiceDetailProps) {
  const serviceDetails: Record<string, any> = {
    residential: {
      title: 'Residential Security Services',
      subtitle: 'Comprehensive protection for your home and community',
      image: '/residential-security.jpg',
      description: 'Our residential security services are designed to provide peace of mind for homeowners and residents of apartment complexes and gated communities. With trained security personnel and systematic protocols, we ensure the safety of your property and loved ones.',
      features: [
        '24/7 guard deployment at entry and exit points',
        'Resident and visitor verification and logging',
        'Package and delivery management',
        'Regular patrolling of premises',
        'CCTV monitoring and surveillance supervision',
        'Emergency response coordination',
        'Parking management',
        'Maintenance of security logs and reports',
      ],
      benefits: [
        'Enhanced safety for residents and their families',
        'Professional and courteous security staff',
        'Reduced incidents of theft and trespassing',
        'Quick emergency response',
        'Systematic visitor management',
      ],
      process: [
        'Site assessment and security requirement analysis',
        'Customized security plan development',
        'Deployment of trained security personnel',
        'Regular monitoring and supervision',
        'Periodic reviews and improvements',
      ],
    },
    corporate: {
      title: 'Corporate & Office Security',
      subtitle: 'Professional security solutions for business environments',
      image: '/corporate-office-security.webp',
      description: 'Our corporate security services ensure a safe and secure working environment for your employees and visitors. We provide professional security personnel trained in office security protocols, access control, and emergency response.',
      features: [
        'Reception area security and visitor management',
        'Access control and employee verification',
        'Office premises monitoring and patrolling',
        'After-hours security coverage',
        'Emergency evacuation assistance',
        'Asset protection and surveillance',
        'Parking area security',
        'Incident reporting and documentation',
      ],
      benefits: [
        'Professional and presentable security staff',
        'Enhanced workplace safety',
        'Protection of confidential information and assets',
        'Improved employee confidence',
        'Compliance with safety regulations',
      ],
      process: [
        'Business security needs assessment',
        'Custom security protocol development',
        'Trained personnel deployment',
        'Integration with existing systems',
        'Ongoing monitoring and support',
      ],
    },
    industrial: {
      title: 'Industrial & Factory Security',
      subtitle: 'Specialized security for manufacturing and industrial facilities',
      image: '/industrial-factory-security.webp',
      description: 'Industrial facilities require specialized security measures. Our trained personnel understand the unique challenges of factory and industrial environments, providing comprehensive security while ensuring smooth operations.',
      features: [
        'Worker entry/exit management and verification',
        'Perimeter security and surveillance',
        'Material and inventory monitoring',
        'Vehicle and goods inspection',
        'Fire safety compliance monitoring',
        'Emergency response protocols',
        'Unauthorized access prevention',
        'Shift handover coordination',
      ],
      benefits: [
        'Protection of valuable machinery and inventory',
        'Prevention of theft and unauthorized access',
        'Compliance with industrial safety standards',
        'Trained guards familiar with industrial environments',
        'Reduced security incidents',
      ],
      process: [
        'Industrial facility security audit',
        'Risk assessment and mitigation planning',
        'Deployment of specially trained personnel',
        'Implementation of security protocols',
        'Regular reviews and compliance checks',
      ],
    },
    event: {
      title: 'Event Security Services',
      subtitle: 'Expert security management for all types of events',
      image: '/event-security.jpg',
      description: 'Whether it\'s a corporate conference, wedding celebration, or large concert, our event security team ensures smooth and safe execution. We provide comprehensive crowd management, access control, and emergency response services.',
      features: [
        'Crowd control and management',
        'Entry screening and ticket verification',
        'VIP area protection and management',
        'Emergency evacuation planning and execution',
        'Parking management',
        'Conflict resolution and incident management',
        'Coordination with event organizers',
        'Post-event security coverage',
      ],
      benefits: [
        'Professional event security experience',
        'Smooth guest entry and exit management',
        'Prevention of gate-crashing and unauthorized access',
        'Quick response to incidents',
        'Enhanced guest experience through organized security',
      ],
      process: [
        'Event details and venue assessment',
        'Security plan tailored to event type and size',
        'Team briefing and coordination',
        'On-site security deployment',
        'Post-event report and feedback',
      ],
    },
    bouncers: {
      title: 'Professional Bouncers',
      subtitle: 'Trained security personnel for hospitality venues',
      image: '/professional-bouncers.webp',
      description: 'Our professional bouncers are specially trained for hospitality environments. They maintain a safe and enjoyable atmosphere while handling difficult situations with professionalism and composure.',
      features: [
        'Entry management and guest screening',
        'Crowd control inside venues',
        'Conflict resolution and de-escalation',
        'Identification verification',
        'Intoxicated guest management',
        'Professional appearance and conduct',
        'Emergency response capability',
        'Coordination with venue management',
      ],
      benefits: [
        'Enhanced safety for patrons and staff',
        'Professional and courteous service',
        'Prevention of unruly behavior',
        'Protection of venue reputation',
        'Experienced in hospitality environments',
      ],
      process: [
        'Venue assessment and requirement discussion',
        'Selection of appropriate personnel',
        'Briefing on venue policies and protocols',
        'Deployment and ongoing monitoring',
        'Regular feedback and adjustments',
      ],
    },
    vip: {
      title: 'VIP Protection & Escort Services',
      subtitle: 'Elite security for high-profile individuals',
      image: '/vip-protection-escort-security.webp',
      description: 'Our VIP protection services provide comprehensive security for high-profile individuals, dignitaries, and executives. We offer discreet yet effective protection with highly trained personnel.',
      features: [
        'Personal protection officers (PSOs)',
        'Secure transportation arrangements',
        'Advance route planning and reconnaissance',
        'Threat assessment and risk management',
        'Event security coordination',
        'Discreet and professional service',
        'Emergency evacuation procedures',
        '24/7 protection coverage',
      ],
      benefits: [
        'Highly trained and experienced PSOs',
        'Discreet security without disrupting daily activities',
        'Comprehensive threat assessment',
        'Secure travel arrangements',
        'Peace of mind for VIP clients',
      ],
      process: [
        'Detailed security needs assessment',
        'Risk and threat analysis',
        'Customized protection plan',
        'Selection and deployment of elite personnel',
        'Continuous monitoring and adaptation',
      ],
    },
    personal: {
      title: 'Personal Security Officers',
      subtitle: 'Dedicated bodyguards for individual protection',
      image: '/personal-security-officers.webp',
      description: 'Our Personal Security Officers provide close protection services for individuals who require dedicated security. Whether for daily protection or specific situations, our PSOs are trained professionals committed to your safety.',
      features: [
        'Dedicated personal protection officers',
        'Close protection during daily activities',
        'Residential security coverage',
        'Travel security and accompaniment',
        'Risk assessment and prevention',
        'Emergency response capability',
        'Confidential and discreet service',
        'Flexible deployment schedules',
      ],
      benefits: [
        'Highly trained personal security personnel',
        'Customized protection based on lifestyle',
        'Enhanced personal safety',
        'Professional and trustworthy guards',
        'Flexible arrangements (part-time or full-time)',
      ],
      process: [
        'Personal security requirements discussion',
        'Lifestyle and risk assessment',
        'PSO selection and introduction',
        'Implementation of protection plan',
        'Ongoing support and adjustments',
      ],
    },
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative h-96">
            <img
              src={service.image}
              alt={`${service.title} by V7 Securities Group in Mandi, Himachal Pradesh`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
                <p className="text-2xl text-gray-200">{service.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {service.description}
              </p>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 bg-amber-50 p-4 rounded-lg">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-700 text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your security requirements and receive a customized quote for {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/917399800007?text=I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl"
            >
              <span>Request Quote via WhatsApp</span>
            </a>
            <a
              href="tel:+919318970000"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +91-9318970000</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
