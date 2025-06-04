import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ItemCardProps {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
}

const signatureItemsData: ItemCardProps[] = [
  {
    id: '1',
    imageUrl: 'https://via.placeholder.com/300x300/E1E8E3/203D37?text=Pillow+Chair',
    name: 'Pillow Chair',
    price: '$68',
  },
  {
    id: '2',
    imageUrl: 'https://via.placeholder.com/300x300/E1E8E3/203D37?text=Arm+Chair',
    name: 'Arm chair',
    price: '$68',
  },
  {
    id: '3',
    imageUrl: 'https://via.placeholder.com/300x300/E1E8E3/203D37?text=Leather+Chair',
    name: 'Leather Chair',
    price: '$68',
  },
  {
    id: '4',
    imageUrl: 'https://via.placeholder.com/300x300/E1E8E3/203D37?text=Guest+Chair',
    name: 'Guest Chair',
    price: '$68',
  },
];

interface SignatureItemsGridProps {
  className?: string;
}

const SignatureItemsGrid: React.FC<SignatureItemsGridProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-background', className)}>
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-10 md:mb-12">
          Signature Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {signatureItemsData.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-square bg-muted/50 flex items-center justify-center">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-card-foreground truncate">{item.name}</h3>
                <p className="text-primaryText font-semibold mt-1">{item.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 px-6 text-base">
            Explore All Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureItemsGrid;
