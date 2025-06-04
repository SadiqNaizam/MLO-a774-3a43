import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must not exceed 500 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to a backend API
    // For now, we'll just log it and reset the form
    form.reset(); 
    // Optionally, show a success message using a toast notification
  }

  return (
    <section className={cn('py-12 md:py-16 bg-background', className)}>
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Have any query?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Feel free to contact us!
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-foreground text-lg">+880 1712 677733</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-foreground text-lg">25th South Avenue, Ford Street, Brooklyn, NY</span>
              </div>
            </div>
          </div>

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-md border border-border">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Jonathan Smith" {...field} className="bg-background border-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Ex: name@domain.com" {...field} className="bg-background border-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-card-foreground">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your text here..."
                          {...field}
                          rows={5}
                          className="bg-background border-input resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
