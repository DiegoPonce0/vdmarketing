export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src='/logo.png'
        alt='VD Marketing Logo'
        className='h-16 w-auto object-contain'
      />
    </div>
  );
}
