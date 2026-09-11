export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-1.5 ${className}`}>
      <span className='text-2xl font-black tracking-tight text-[#0047AB]'>VD</span>
      <span className='text-2xl font-bold tracking-[0.2em] text-gray-900 uppercase'>
        Marketing
      </span>
    </div>
  );
}
