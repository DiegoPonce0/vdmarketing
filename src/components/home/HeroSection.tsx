import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='pt-32 pb-20 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Left Content */}
          <div className='lg:w-1/2 animate-fade-in-up'>
            <span className='text-[10px] font-black tracking-[0.3em] text-[#0047AB] uppercase block mb-4'>
              ENGINEERED FOR SUCCESS
            </span>
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6'>
              Websites That Generate Leads and Grow Your Business
            </h1>
            <p className='text-lg text-gray-600 mb-10 max-w-lg leading-relaxed'>
              We build high-performing websites, eCommerce stores, and digital experiences designed to attract customers and increase revenue.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-[#0047AB] text-white text-xs font-black tracking-widest px-8 py-4 rounded hover:bg-[#003d96] transition-all flex items-center gap-3'>
                GET A FREE QUOTE
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </button>
              <button className='border-2 border-gray-100 text-gray-400 text-xs font-black tracking-widest px-8 py-4 rounded hover:border-gray-200 hover:text-gray-600 transition-all uppercase'>
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className='lg:w-1/2 relative'>
            <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm'>
              <Image 
                src='/images/hero.png' 
                alt='Web Solutions' 
                width={800} 
                height={600} 
                className='w-full h-auto object-cover'
              />
            </div>
            {/* Decorative background elements */}
            <div className='absolute -right-20 -bottom-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse'></div>
            <div className='absolute -left-10 -top-10 w-40 h-40 bg-gray-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
