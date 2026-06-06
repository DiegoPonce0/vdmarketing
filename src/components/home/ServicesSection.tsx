export default function ServicesSection() {
  const services = [
    {
      title: 'Website',
      desc: 'Corporate and institutional sites designed to reflect your brand and capture your audience.',
      icon: (
        <svg className='w-5 h-5 text-[#1E3A8A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
        </svg>
      )
    },
    {
      title: 'Landing Page',
      desc: 'High-conversion campaign pages designed to turn visitors into leads and customers.',
      icon: (
        <svg className='w-5 h-5 text-[#1E3A8A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      title: 'Ecommerce',
      desc: 'Robust online stores with seamless shopping experiences and secure payment processing.',
      icon: (
        <svg className='w-5 h-5 text-[#1E3A8A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
        </svg>
      )
    },
    {
      title: 'SEO',
      desc: 'Strategic search engine optimization to boost your visibility and drive organic growth.',
      icon: (
        <svg className='w-5 h-5 text-[#1E3A8A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      )
    }
  ];

  return (
    <section className='py-24 bg-[#F8FAFC]'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Services</h2>
          <div className='w-20 h-1 bg-[#1E3A8A] mx-auto opacity-50'></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, idx) => (
            <div key={idx} className='bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default h-full flex flex-col justify-between'>
              <div>
                <div className='w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] transition-colors'>
                  <span className='group-hover:text-white transition-colors'>{service.icon}</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed mb-6'>
                  {service.desc}
                </p>
              </div>
              <a href='#' className='text-[#1E3A8A] text-xs font-black tracking-widest flex items-center gap-2 hover:gap-3 transition-all uppercase'>
                Learn More
                <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
