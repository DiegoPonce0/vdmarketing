import Image from 'next/image';

export default function AboutUsSection() {
  const points = [
    {
      title: 'Fast Delivery',
      desc: 'We utilize agile workflows to deliver high-quality results in record time without compromising quality.',
      icon: (
        <svg className='w-5 h-5 text-[#0047AB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      )
    },
    {
      title: 'Mobile Optimized',
      desc: 'Every website is built with a mobile-first approach, ensuring flawless performance across all devices.',
      icon: (
        <svg className='w-5 h-5 text-[#0047AB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
        </svg>
      )
    },
    {
      title: 'SEO Friendly',
      desc: 'We bake search engine optimization into the core architecture of every site we launch.',
      icon: (
        <svg className='w-5 h-5 text-[#0047AB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      )
    },
    {
      title: 'Secure & Scalable',
      desc: 'Enterprise-grade security and architecture designed to grow seamlessly as your business expands.',
      icon: (
        <svg className='w-5 h-5 text-[#0047AB]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    }
  ];

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* image side */}
          <div className='lg:w-1/2'>
            <div className='relative rounded-2xl overflow-hidden shadow-xl'>
              <Image 
                src='/images/office.png' 
                alt='Modern Office' 
                width={700} 
                height={800} 
                className='w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>
          </div>

          {/* text side */}
          <div className='lg:w-1/2'>
            <h2 className='text-4xl font-black text-gray-900 mb-12'>Why Choose Us</h2>
            <div className='space-y-10'>
              {points.map((point, idx) => (
                <div key={idx} className='flex gap-6'>
                  <div className='flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center'>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>{point.title}</h3>
                    <p className='text-gray-500 leading-relaxed text-sm'>
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
