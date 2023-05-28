import Image from 'next/image'
import Header from '../components/Header';
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <div className='bg-black w-full h-[300vh]'>
         <Header/>
         <Hero/>
    </div>
   
  )
}
