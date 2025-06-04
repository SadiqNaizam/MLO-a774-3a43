import React from 'react';
import { Search, ShoppingCart, ChevronDown, Menu as MenuIcon, Sofa } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'Shop', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Feedbacks', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact us', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b border-border",
        "flex items-center"
      )}
    >
      <div className="container max-w-screen-lg mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-semibold text-primary shrink-0">
          <Sofa className="h-6 w-6" />
          <span>Furnitica</span>
        </a>

        {/* Center: Navigation Links & Search (Desktop) */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          <ul className="flex items-center gap-3 lg:gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Search Input for larger desktop screens */}
          <div className="relative items-center hidden lg:flex">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="h-9 pl-8 pr-2 text-sm w-36 xl:w-44 bg-secondary text-secondary-foreground placeholder:text-muted-foreground rounded-md border-input focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </nav>

        {/* Right: Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Search icon button for medium screens where full input is hidden from nav */}
          <Button variant="ghost" size="icon" aria-label="Search" className="hidden md:inline-flex lg:hidden">
            <Search className="h-5 w-5 text-foreground" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground px-2 md:px-3">
                EN
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5 text-foreground" />
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-6 w-6 text-foreground" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */} 
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-md p-4",
            "transition-all duration-300 ease-in-out" // Basic animation hint
          )}
        >
          <ul className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Search Input */}
          <div className="relative flex items-center w-full">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="h-10 pl-10 pr-3 text-sm w-full bg-secondary text-secondary-foreground placeholder:text-muted-foreground rounded-md border-input focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
