import { MapPin, Building2, Mountain, Users, ArrowRight } from 'lucide-react';

interface CoverageProps {
  showViewMoreButton?: boolean;
  onNavigate?: (page: string) => void;
}

export default function Coverage({ showViewMoreButton = false, onNavigate }: CoverageProps) {
  const regions = [
    {
      name: 'Himachal Pradesh',
      icon: <Mountain className="w-6 h-6" />,
      cities: [
        'Mandi', 'Shimla', 'Kullu', 'Solan', 'Dharamshala',
        'Hamirpur', 'Bilaspur', 'Una', 'Kangra', 'Chamba',
        'Baddi', 'Paonta Sahib', 'Nahan', 'Sundernagar'
      ],
      description: 'Professional security guard services in Mandi, Sundernagar, Shimla, Kullu, Solan, Dharamshala, Baddi, and across all major cities of Himachal Pradesh',
      mapUrl: '/himachal-map.jpg',
      citiesLabel: 'Major Cities Covered:'
    },
    {
      name: 'Punjab',
      icon: <Building2 className="w-6 h-6" />,
      cities: [
        'Mohali', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala',
        'Bathinda', 'Pathankot', 'Hoshiarpur', 'Kapurthala', 'Fazilka'
      ],
      description: 'Trusted security agency providing guard services in Mohali, Ludhiana, Amritsar, Jalandhar, Patiala, and throughout Punjab state',
      mapUrl: '/punjab-map.jpg',
      citiesLabel: 'Major Cities Covered:'
    },
    {
      name: 'Chandigarh',
      icon: <Users className="w-6 h-6" />,
      cities: [
        'Sector 17', 'Sector 22', 'Sector 35', 'Industrial Area',
        'Panchkula', 'Mohali', 'Zirakpur', 'Kharar'
      ],
      description: 'Complete security services across Chandigarh, Panchkula, Mohali, Zirakpur, and the entire tri-city area including industrial zones',
      mapUrl: '/chandigarh-map.png',
      citiesLabel: 'Major Areas Covered:'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Our Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serving Across Northern India
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With our headquarters in Sundar Nagar, Mandi, we provide comprehensive security services across three major regions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all border border-white/10"
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={region.mapUrl}
                  alt={`V7 Securities Group coverage area in ${region.name} - security services map`}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                  {region.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-amber-400 mb-3">{region.citiesLabel}</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city, cityIndex) => (
                      <span
                        key={cityIndex}
                        className="bg-slate-800 px-3 py-1 rounded-full text-xs text-gray-300"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Main Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-gray-300">
                      Jawahar Park, Sundar Nagar<br />
                      Mandi, Himachal Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Regional Presence</div>
                    <p className="text-gray-300">
                      Multiple operational bases across HP, Punjab & Chandigarh for quick deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/v7-offcie-pp.jpeg"
                alt="V7 Securities Group main office at Jawahar Park, Sundar Nagar, Mandi, Himachal Pradesh"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-2">20+</div>
            <div className="text-gray-300">Cities & Towns</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-2">3</div>
            <div className="text-gray-300">States Covered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-gray-300">Service Available</div>
          </div>
        </div>

        {showViewMoreButton && onNavigate && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('coverage')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:scale-105"
            >
              <span>View Full Coverage</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
