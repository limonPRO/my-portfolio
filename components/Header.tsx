import Link from 'next/link';

const Header = () => {
  return (
    <header className='text-white flex flex-row items-center justify-center space-x-3 h-12 w-full bg-blue-500'>
       
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400 '>
            <Link href="/">Home</Link>
          </div>
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/about">About</Link>
          </div>
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/skills">Skills</Link>
          </div>
       
    </header>
  );
};

export default Header;