import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home',         href: '#home'     },
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about'    },
  { label: 'How It Works', href: '#how'      },
  { label: 'Reviews',      href: '#reviews'  },
  { label: 'Find Us',      href: '#stores'   },
  { label: 'Contact',      href: '#contact'  },
]

export default function Header({ dark, setDark }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [sheetOpen,  setSheetOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-surface/95 backdrop-blur-md border-b border-bdr',
        scrolled && 'shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                      grid grid-cols-[auto_1fr_auto] items-center h-[68px] gap-6">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.png"
            alt="PhoneBoss"
            className="h-12 w-auto object-contain"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <span className="text-2xl font-black tracking-tight">
            <span className="text-primary">PHONE</span>
            <span className="text-txt">BOSS</span>
          </span>
        </a>

        {/* ── Desktop nav (shadcn NavigationMenu) ── */}
        <div className="hidden lg:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              {links.map(l => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink
                    href={l.href}
                    className="px-2 py-1.5 text-sm font-medium text-txt-sub hover:text-primary hover:bg-bg-alt rounded-md transition-colors"
                  >
                    {l.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center justify-end gap-2 shrink-0">

          {/* Dark-mode toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="rounded-full w-9 h-9 border-bdr bg-bg-alt text-txt-sub
                       hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </Button>

          {/* Mobile hamburger + Sheet drawer */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="lg:hidden rounded-full w-9 h-9 border-bdr bg-bg-alt text-txt-sub
                           hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <FiMenu size={18} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-72 bg-surface border-r border-bdr p-0 flex flex-col"
            >
              <SheetHeader className="px-6 py-5 border-b border-bdr">
                <SheetTitle asChild>
                  <a
                    href="#home"
                    onClick={() => setSheetOpen(false)}
                    className="text-2xl font-black tracking-tight"
                  >
                    <span className="text-primary">PHONE</span>
                    <span className="text-txt">BOSS</span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
                {links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setSheetOpen(false)}
                    className="px-4 py-3 rounded-full text-sm font-medium text-txt-sub
                               hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="px-6 py-5 border-t border-bdr">
                <p className="text-xs text-txt-muted">Expert Phone Repairs · Same Day Service</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
