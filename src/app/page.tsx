'use client';

import {Button} from '@/components/ui/button';
import {cn} from '@/utils/utils';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { HowItWorks } from '@/components/how-it-works';
import LetsExploreButton from '@/components/ui/letsExploreButton';

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <div
        className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-[#5275A9] to-[#E6DDE4] text-center"
        style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
        <header className="text-3xl text-gray-800 font-bold mb-8 pt-8">
          VERIDYN
        </header>

        <main className="px-6 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6">
            What's the major life choice you're facing?
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-gray-700 hover:bg-white/30">
              Career
            </Button>
            <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-gray-700 hover:bg-white/30">
              Relationship
            </Button>
            <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-gray-700 hover:bg-white/30">
              Big Life Decision
            </Button>
            <Button variant="secondary" className="rounded-full px-6 py-3 bg-white/20 text-gray-700 hover:bg-white/30">
              Other
            </Button>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Clarifying purpose makes even tough decisions empowering
          </p>

          <div className="text-gray-700 mb-8">
            <input
              type="text"
              placeholder="Type here..."
              className="w-full md:w-96 px-4 py-3 rounded-full text-foreground bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-700"
            />
          </div>

          {/* <Button 
            className="bg-accent text-accent-foreground rounded-full px-8 py-4 text-lg font-medium hover:bg-accent-foreground hover:text-accent transition-colors"
            onClick={() => router.push('/onboarding')}
          >
            Let's explore →
          </Button> */}
          <LetsExploreButton/>
        </main>

        {/* How It Works Section */}
        <HowItWorks />

        {/* <div className="relative mt-12">
          <Image
            src="/goal.png"
            alt="Mountain and Flag"
            width={1000}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div> */}
        {/* Product Description Sections */}
        <section className="w-full py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/decision-making.png"
                  alt="Decision Making Process"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">Make Better Decisions</h2>
                <p className="text-lg text-gray-700">
                  Our platform helps you break down complex decisions into manageable steps. 
                  Get clarity on your options and make choices with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 ">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/analytics.png"
                  alt="Analytics Dashboard"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">Data-Driven Insights</h2>
                <p className="text-lg text-gray-700">
                  Access powerful analytics and visualizations to understand the potential 
                  outcomes of your decisions. Make informed choices backed by data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/community.png"
                  alt="Community Support"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">Community Support</h2>
                <p className="text-lg text-gray-700">
                  Connect with others facing similar decisions. Share experiences, 
                  get advice, and learn from the community's collective wisdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          {/* <Button 
            className="bg-accent text-accent-foreground rounded-full px-8 py-4 text-lg font-medium hover:bg-accent-foreground hover:text-accent transition-colors"
            onClick={() => router.push('/onboarding')}
          >
            Let's explore →
          </Button> */}
          <LetsExploreButton/>
        </div>

        {/* Reviews Section */}
        <section className="w-full py-16 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 text-gray-700">"This platform helped me make the most important decision of my career. The clarity I gained was invaluable."</p>
                <p className="font-semibold text-gray-700">- Sarah M.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 text-gray-700">"The community support and data-driven approach made my decision-making process so much easier."</p>
                <p className="font-semibold text-gray-700">- John D.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4 text-gray-700">"I was stuck in analysis paralysis until I found this platform. Now I make decisions with confidence."</p>
                <p className="font-semibold text-gray-700">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#5275A9] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-gray-700">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-700 hover:text-gray-900">FAQ</a></li>
                <li><a href="/user-stories" className="text-gray-700 hover:text-gray-900">User Stories</a></li>
                <li><a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a></li>
                <li><a href="/terms" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-gray-700 font-bold mb-4 ">Follow us on</h3>
            <div className="flex justify-center space-x-6">
              {/* TODO - add social media icons and links */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/x-icon.png" alt="X" width={32} height={32} className="hover:opacity-80" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} className="hover:opacity-80" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitter-icon.png" alt="Twitter" width={32} height={32} className="hover:opacity-80" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} className="hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
