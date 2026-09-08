import { Shield, Phone, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [stats, setStats] = useState({
    experience: 0,
    personnel: 0,
    clients: 0,
    cities: 0,
  });

  useEffect(() => {
    const targetStats = {
      experience: 15,
      personnel: 500,
      clients: 250,
      cities: 20,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        experience: Math.floor(targetStats.experience * progress),
        personnel: Math.floor(targetStats.personnel * progress),
        clients: Math.floor(targetStats.clients * progress),
        cities: Math.floor(targetStats.cities * progress),
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/v7-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-8">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Professional Security Services Since 2010</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Safety Is Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Top Priority
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            Trusted security guard company based in Mandi, Himachal Pradesh. Professional personnel, 24/7 support, and comprehensive protection for your residential, corporate, and industrial needs.
          </p>
          <p className="text-sm text-gray-400 mb-12">
            Serving Mandi, Sundernagar, Shimla, Kullu, Dharamshala, Chandigarh, Mohali, Ludhiana, and 20+ cities across Himachal Pradesh, Punjab &amp; Chandigarh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://wa.me/917399800007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919318970000"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                {stats.experience}+
              </div>
              <div className="text-gray-300 text-xs lg:text-sm">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                {stats.personnel}+
              </div>
              <div className="text-gray-300 text-xs lg:text-sm">Security Personnel</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-300 text-xs lg:text-sm">Happy Clients</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                {stats.cities}+
              </div>
              <div className="text-gray-300 text-xs lg:text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
