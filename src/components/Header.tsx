import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Menu, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const mainNav = [
  { name: 'HOME', href: '/', subItems: [] },
  { name: 'JOBS', href: '/jobs', subItems: [] },
  { name: 'CANDIDATES', href: '/candidates', subItems: [] },
  { name: 'KANBAN BOARD', href: '/kanban', subItems: [] },
  { name: 'ASSESSMENTS', href: '/assessments', subItems: [] },
];

const NavLink = ({ item }: { item: typeof mainNav[0] }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const baseStyles = cn(
    "px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
    isDark 
      ? "text-white/90 hover:text-white hover:bg-white/10" 
      : "text-gray-800 hover:text-gray-900 hover:bg-gray-100"
  );
  
  if (item.subItems.length === 0) {
    return (
      <Link 
        to={item.href}
        className={baseStyles}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${baseStyles} flex items-center gap-1`}>
        {item.name}
        <ChevronDown className="h-4 w-4 opacity-75" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="center" 
        className={cn(
          "backdrop-blur border-border/50",
          isDark ? "bg-background/95" : "bg-white"
        )}
      >
        {item.subItems.map((subItem) => (
          <DropdownMenuItem key={subItem.href}>
            <Link to={subItem.href} className="w-full text-sm">
              {subItem.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left section */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="font-semibold text-xl text-foreground">TalentFlow</span>
          </div>
        </Link>

        {/* Center navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-4">
          <nav className={cn(
            "backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 flex-wrap justify-center",
            isDark ? "bg-white/10" : "bg-gray-100/80"
          )}>
            {mainNav.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mr-2">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={cn(
                "h-10 w-10 rounded-full border",
                isDark 
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/20" 
                  : "bg-white hover:bg-gray-50 text-gray-800 border-gray-200 shadow-sm"
              )}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Search button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "h-10 w-10 rounded-full",
                isDark 
                  ? "bg-white/10 hover:bg-white/20 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              )}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          {/* Admin profile */}
          <div className={cn(
            "flex items-center gap-2 backdrop-blur-md rounded-full p-1.5",
            isDark ? "bg-white/10" : "bg-gray-100"
          )}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/admin.jpg" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className={cn(
                  "w-56 backdrop-blur border-border/50",
                  isDark ? "bg-background/95" : "bg-white"
                )} 
                align="end"
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "h-8 w-8 rounded-full ml-1 lg:hidden",
                    isDark 
                      ? "bg-white/10 hover:bg-white/20 text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  )}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 lg:hidden">
                {mainNav.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}