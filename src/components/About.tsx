import { Shield, Award, Clock, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  showViewMoreButton?: boolean;
  onNavigate?: (page: string) => void;
}

export default function About({ showViewMoreButton = false, onNavigate }: AboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 text-sm font-medium">About v7 Securities Group</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Security Partner Since 2010
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              V7 Securities Group has been at the forefront of providing comprehensive security solutions across Himachal Pradesh, Punjab, and Chandigarh. With over 15 years of experience serving clients in Mandi, Sundernagar, Shimla, Kullu, Chandigarh, and beyond, we have established ourselves as the most reliable security guard company in the region.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Sundar Nagar, Mandi, our team of highly trained security professionals serves diverse sectors including residential complexes, corporate offices, industrial facilities, and special events. We pride ourselves on our commitment to excellence, integrity, and unwavering dedication to our clients' safety.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Trained Personnel</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Quick Response</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/v7-about.jpg"
                alt="V7 Securities Group professional security team in Mandi, Himachal Pradesh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose v7 Securities Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Experienced Team</h4>
              <p className="text-gray-600">
                Our security personnel undergo rigorous training and background verification to ensure the highest standards of professionalism.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">
                Round-the-clock emergency support and rapid response teams ready to handle any security situation at any time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Local Expertise</h4>
              <p className="text-gray-600">
                Deep understanding of the region with extensive coverage across Himachal Pradesh, Punjab, and Chandigarh.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Customized Solutions</h4>
              <p className="text-gray-600">
                Tailored security plans designed to meet your specific requirements and budget, from small offices to large industrial sites.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Meet Our Founders</h3>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              v7 Securities Group was founded by <span className="font-bold text-amber-600">Mrs. Veena</span> and <span className="font-bold text-amber-600">Mr. Dinesh Kumar</span>, who bring decades of combined experience in security management and operations. Their vision of creating a security service that prioritizes client trust, professional excellence, and community safety has shaped v7 Securities Group into the premier security provider it is today.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Under their leadership, the company has grown from a small local operation to a trusted name across Himachal Pradesh, Punjab, and Chandigarh, serving hundreds of satisfied clients with dedication and integrity.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To provide unparalleled security services that protect lives, assets, and peace of mind. We are committed to maintaining the highest standards of professionalism, integrity, and customer service in everything we do.
              </p>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized as the most trusted and reliable security service provider in North India, setting industry benchmarks for quality, innovation, and client satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-gray-300">Trained Guards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">250+</div>
                <div className="text-gray-300">Active Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
                <div className="text-gray-300">Cities Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {showViewMoreButton && onNavigate && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:scale-105"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
