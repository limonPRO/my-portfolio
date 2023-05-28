import Link from 'next/link';

const Header = () => {
  return (
    <header className='text-white flex flex-row justify-around items-center h-12 w-full bg-[#2b106a]'>
         <div className='flex space-x-4'>
         <div className='h-8 w-40 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400 '>
           <p>Limon Shah</p>
          </div>
          {/* <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/about">About</Link>
          </div>
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/skills">Skills</Link>
          </div> */}
         </div>
         <div className='flex space-x-4'>
         <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400 '>
            <Link href="/">Github</Link>
          </div>
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/about">LinkedIn</Link>
          </div>
          <div className='h-8 w-20 bg-slate-600 rounded flex items-center justify-center hover:bg-black text-white-400'>
            <Link href="/skills">Facebook</Link>
          </div>
         </div>
         
       
    </header>
  );
};

export default Header;