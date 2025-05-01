import {Button} from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function LetsExploreButton () {
    const router = useRouter();
    return (
        <Button 
            className="bg-accent text-accent-foreground rounded-full px-8 py-4 text-lg font-medium hover:bg-accent-foreground hover:text-accent transition-colors"
            onClick={() => router.push('/onboarding')}
          >
            Let's explore →
          </Button>
    );

}