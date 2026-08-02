import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function TopNav() {
  const location = useLocation();

  const links = [
    { name: 'Flavours', path: '/menu' },
    { name: 'Why Overnight?', path: '/why-baasi' },
    { name: 'The Drop', path: '/drop' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-oat border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="font-cabinet font-black text-2xl text-ink tracking-tight">
              BAASI.
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-[14px] font-semibold transition-colors hover:text-spice",
                    location.pathname === link.path ? "text-spice" : "text-ink"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link
              to="/drop"
              className="inline-flex items-center justify-center bg-ink text-oat px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-spice transition-colors whitespace-nowrap"
            >
              August Drop: 84/100 Left
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
