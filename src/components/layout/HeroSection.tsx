import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefitsList: string[] = [
  'High Quality Material',
  'Lifetime Service Guarantee',
  'Designed by World Class Designers',
];

const HeroSection: React.FC = () => {
  return (
    <section className={cn('bg-primary text-primary-foreground pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20')}>
      {/* Added pt-16 to account for fixed navbar height. This might be handled by page layout instead. */}
      {/* Assuming this component is the first interactive element after Navbar, it needs offset. */}
      {/* However, overall page layout (main tag) should ideally handle this via its own padding-top. */}
      {/* For now, adding it here for visual correctness if used standalone directly under fixed navbar. */}
      <div className={cn('container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-16')}> {/* mt-16 is to clear fixed navbar */} 
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-tight tracking-tight">
              Make your home more beautiful than ever
            </h1>
            <ul className="space-y-3 pt-2">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start gap-3">
                  <Check className="h-6 w-6 text-primary-foreground/80 flex-shrink-0" />
                  <span className="text-lg text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 md:pt-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-10 py-3 text-base font-semibold h-12 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Explore Shop
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://via.placeholder.com/600x600/E1E8E3/203D37?text=Modern+Furniture"
              alt="Modern furniture including an armchair, side table, and lamp"
              className="rounded-lg shadow-2xl object-cover w-full max-w-sm sm:max-w-md md:max-w-full h-auto aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
