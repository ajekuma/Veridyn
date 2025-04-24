'use client';

import {Button} from '@/components/ui/button';
import {cn} from '@/utils/utils';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#5275A9] to-[#E6DDE4] text-center"
      style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <header className="text-3xl text-gray-600 font-bold mb-8">
        VERIDYN
      </header>


      <main className="px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          What's the major life choice you're facing?
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-white hover:bg-white/30">
            Career
          </Button>
          <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-white hover:bg-white/30">
            Relationship
          </Button>
          <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-white hover:bg-white/30">
            Big Life Decision
          </Button>
          <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-white hover:bg-white/30">
            Other
          </Button>
        </div>

        <p className="text-lg text-white mb-6">
          Clarifying purpose makes even tough decisions empowering
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full md:w-96 px-4 py-3 rounded-full text-foreground bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder-white/70 text-white"
          />
        </div>

        <Button 
          className="bg-accent text-accent-foreground rounded-full px-8 py-4 text-lg font-medium hover:bg-accent-foreground hover:text-accent transition-colors"
          onClick={() => router.push('/onboarding')}
        >
          Let's explore →
        </Button>
      </main>

      <div className="relative mt-12">
        <Image
          src="/goal.png"
          alt="Mountain and Flag"
          width={1000}
          height={450}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
