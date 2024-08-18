import Button from "@ui/button/button";
import BrandLogo from "@landing/presentation/components/shared/brand-logo/brand-logo";
import { ModeToggle } from "@landing/presentation/components/shared/theme-switcher/theme-swticher";
import { cn } from "@/lib/utils";
import { ButtonVariants } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";
import NavbarItem from "@landing/presentation/components/shared/navbar-item/navbar-item";

interface LandingNavbarProps {
  className?: string;
}

const navBarItems = [{ name: "Blog" }, { name: "Documentation" }, { name: "Pricing" }, { name: "FAQ" }];

export default function LandingNavbar(props: LandingNavbarProps) {
  return (
    <div
      className={cn("container mx-auto items-center flex w-full justify-between gap-y-3 relative flex-wrap lg:flex-nowrap", {
        [`${props.className}`]: !!props.className,
      })}
    >
      <BrandLogo />
      <nav className="flex-grow flex justify-center">
        <ul className="flex items-center gap-x-4 font-bold">
          {navBarItems.map((item) => {
            return <NavbarItem key={item.name}>{item.name}</NavbarItem>;
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <Button variant={ButtonVariants.GHOST}>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
