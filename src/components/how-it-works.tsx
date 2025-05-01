import type { FC } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import LetsExploreButton from '@/components/ui/letsExploreButton';
import { cn } from '@/lib/utils';

interface StepProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: FC<StepProps> = ({ icon, title, description, isLast = false }) => {
  const IconComponent = Icons[icon];
  return (
    <div className="relative flex flex-col items-center text-center md:flex-1">
      <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-200 bg-purple-50 text-purple-600">
        <IconComponent className="h-8 w-8" />
      </div>
      {!isLast && (
        <div className="absolute top-8 left-1/2 hidden h-0.5 w-full bg-purple-200 md:block" />
      )}
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export const HowItWorks: FC = () => {
  const steps: StepProps[] = [
    {
      icon: 'drama',
      title: 'Self Profile',
      description: 'Discover who you are when facing big life choices',
    },
    {
      icon: 'search',
      title: 'Key Question',
      description: "Clarify the real choice you're wrestling with",
    },
    {
      icon: 'globe',
      title: 'Context Mapping',
      description: 'See what forces are shaping your path (family, finance, goals)',
    },
    {
      icon: 'target',
      title: 'Decision Simulation',
      description: 'Play with outcomes, see possibilities, gain clarity',
      isLast: true,
    },
  ];

  return (
    <section className="w-full mx-auto py-12 px-4 md:px-6 rounded-lg mt-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700">How It Works</h2>
        <p className="text-gray-700">
          You'll go through four steps to gain clarity on an important decision.
        </p>
      </div>
      <div className="text-gray-700 relative mb-12 flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
      {/* <div className="text-center">
        <LetsExploreButton />
      </div> */}
    </section>
  );
};
