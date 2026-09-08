import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Aarav Sharma',
      role: 'Property Manager',
      company: 'Green Valley Apartments, Shimla',
      image: '/irm14.jpg',
      imagePosition: 'object-top',
      content: 'v7 Securities has been managing security for our 200+ unit complex for over 3 years. Their guards are professional, punctual, and residents feel much safer. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Riya Jindal',
      role: 'HR Director',
      company: 'TechCorp Solutions, Mohali',
      image: '/irf12.jpg',
      content: 'We have been using their corporate security services for our office premises. The team is well-trained and their response time is excellent. Very satisfied with their service.',
      rating: 5,
    },
    {
      name: 'Jaiveer Mehra',
      role: 'Plant Manager',
      company: 'Himalayan Industries, Baddi',
      image: '/irm12.jpg',
      content: 'Managing security for an industrial facility requires expertise and dedication. v7 Securities provides both. Their systematic approach and trained personnel have made our operations much more secure.',
      rating: 5,
    },
    {
      name: 'Vedansh Mathur',
      role: 'Event Coordinator',
      company: 'Royal Events, Chandigarh',
      image: '/irm11.jpg',
      content: 'We have worked with v7 Securities for multiple large-scale events including weddings and corporate conferences. Their crowd management and professional conduct is impeccable.',
      rating: 5,
    },
    {
      name: 'Meher Khanna',
      role: 'Restaurant Owner',
      company: 'The Grand Lounge, Ludhiana',
      image: '/irf11.jpg',
      imagePosition: 'object-top',
      content: 'The bouncers provided by v7 Securities are courteous yet firm. They handle difficult situations with professionalism and have been a valuable asset to our establishment.',
      rating: 5,
    },
    {
      name: 'Vihaan Chauhan',
      role: 'Business Owner',
      company: 'Mandi',
      image: '/irm3.jpg',
      content: 'As someone who travels frequently, having a PSO from v7 Securities gives me and my family peace of mind. Their personnel are discreet, professional, and highly reliable.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <Quote className="w-12 h-12 text-amber-400 mb-6" />

            <div className="mb-6">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className={`w-16 h-16 rounded-full object-cover border-2 border-amber-400 ${testimonials[activeIndex].imagePosition || ''}`}
              />
              <div>
                <div className="font-semibold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-amber-400 text-sm">{testimonials[activeIndex].role}</div>
                <div className="text-gray-400 text-sm">{testimonials[activeIndex].company}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-amber-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center border border-amber-100">
            <div className="text-5xl font-bold text-slate-900 mb-2">250+</div>
            <div className="text-gray-600 font-medium mb-2">Happy Clients</div>
            <div className="text-sm text-gray-500">Across HP, Punjab & Chandigarh</div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center border border-amber-100">
            <div className="text-5xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium mb-2">Average Rating</div>
            <div className="flex justify-center space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center border border-amber-100">
            <div className="text-5xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-gray-600 font-medium mb-2">Client Retention</div>
            <div className="text-sm text-gray-500">Long-term partnerships</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Family of Satisfied Clients</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the peace of mind that comes with professional security services. Get in touch today for a free consultation.
          </p>
          <a
            href="https://wa.me/917399800007?text=I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
