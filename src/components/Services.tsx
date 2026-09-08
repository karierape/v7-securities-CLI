import { Home, Building2, Factory, CalendarCheck, Users, UserCheck, Shield, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  onLearnMore: () => void;
  image?: string;
}

function ServiceCard({ icon, title, description, features, onLearnMore, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={`${title} in Mandi, Himachal Pradesh - V7 Securities Group`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              {icon}
            </div>
          </div>
        </div>
      )}
      {!image && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
          <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onLearnMore}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-amber-600 hover:to-orange-700 transition-all flex items-center justify-center space-x-2 group"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
  showViewAllButton?: boolean;
  onNavigate?: (page: string) => void;
}

export default function Services({ onServiceClick, showViewAllButton = false, onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'residential',
      icon: <Home className="w-7 h-7" />,
      title: 'Residential Security',
      description: 'Comprehensive protection for apartment complexes and gated communities',
      image: '/residential-security.jpg',
      features: [
        'Resident & visitor entry management',
        'Package handling and delivery coordination',
        '24/7 patrolling and monitoring',
        'Emergency response protocols',
        'CCTV surveillance supervision',
      ],
    },
    {
      id: 'corporate',
      icon: <Building2 className="w-7 h-7" />,
      title: 'Corporate & Office Security',
      description: 'Professional security solutions for business premises',
      image: '/corporate-office-security.webp',
      features: [
        'Reception area management',
        'Access control systems',
        'Office premises monitoring',
        'After-hours security',
        'Employee and visitor screening',
      ],
    },
    {
      id: 'industrial',
      icon: <Factory className="w-7 h-7" />,
      title: 'Industrial & Factory Security',
      description: 'Specialized security for manufacturing and industrial sites',
      image: '/industrial-factory-security.webp',
      features: [
        'Worker entry/exit management',
        'Perimeter security',
        'Asset protection',
        'Material and inventory monitoring',
        'Fire and safety compliance',
      ],
    },
    {
      id: 'event',
      icon: <CalendarCheck className="w-7 h-7" />,
      title: 'Event Security',
      description: 'Expert security management for all types of events',
      image: '/event-security.jpg',
      features: [
        'Crowd control and management',
        'Entry screening and ticketing support',
        'VIP area protection',
        'Emergency evacuation planning',
        'Conferences, weddings, concerts coverage',
      ],
    },
    {
      id: 'bouncers',
      icon: <Users className="w-7 h-7" />,
      title: 'Professional Bouncers',
      description: 'Trained security personnel for hospitality venues',
      image: '/professional-bouncers.webp',
      features: [
        'Club and restaurant security',
        'Private party management',
        'Conflict resolution',
        'Guest screening',
        'Professional appearance and conduct',
      ],
    },
    {
      id: 'vip',
      icon: <UserCheck className="w-7 h-7" />,
      title: 'VIP Protection & Escort',
      description: 'Elite security services for high-profile individuals',
      image: '/vip-protection-escort-security.webp',
      features: [
        'Personal protection officers',
        'Secure transportation',
        'Advance route planning',
        'Threat assessment',
        'Discreet and professional service',
      ],
    },
    {
      id: 'personal',
      icon: <Shield className="w-7 h-7" />,
      title: 'Personal Security Officers',
      description: 'Dedicated bodyguards for individual protection',
      image: '/personal-security-officers.webp',
      features: [
        'Trained PSO personnel',
        'Close protection services',
        'Risk assessment and management',
        'Daily security coverage',
        'Confidential service',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential complexes to corporate offices, we provide tailored security services across Mandi, Shimla, Chandigarh, Mohali, Ludhiana, and 20+ cities in Himachal Pradesh, Punjab, and Chandigarh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              onLearnMore={() => onServiceClick(service.id)}
              image={service.image}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Security Solution?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every security requirement is unique. Contact us to discuss your specific needs and get a tailored security plan.
          </p>
          <a
            href="https://wa.me/917399800007?text=I%20need%20a%20custom%20security%20solution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {showViewAllButton && onNavigate && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
