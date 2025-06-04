import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialData {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarFallback: string;
}

const testimonialData: TestimonialData = {
  id: '1',
  quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  name: 'Andy Jonson',
  role: 'Housewife',
  avatarUrl: 'https://via.placeholder.com/100x100/E1E8E3/203D37?text=AJ',
  avatarFallback: 'AJ',
};

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-secondary', className)}>
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-10 md:mb-12">
          Feedbacks from our real customers
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-card shadow-lg">
            <AvatarImage src={testimonialData.avatarUrl} alt={testimonialData.name} />
            <AvatarFallback className="text-2xl bg-muted text-muted-foreground">{testimonialData.avatarFallback}</AvatarFallback>
          </Avatar>
          <Card className="w-full max-w-2xl bg-card shadow-lg border-border">
            <CardContent className="p-6 md:p-8">
              <blockquote className="text-lg text-card-foreground italic leading-relaxed">
                <p>"{testimonialData.quote}"</p>
              </blockquote>
              <div className="mt-6 text-right">
                <p className="font-semibold text-primary">{testimonialData.name}</p>
                <p className="text-sm text-muted-foreground">{testimonialData.role}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
