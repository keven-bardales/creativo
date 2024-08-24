import Button from "@ui/button/button";
import BrandLogo from "@landing/presentation/components/shared/brand-logo/brand-logo";
import { ModeToggle } from "@landing/presentation/components/shared/theme-switcher/theme-swticher";
import { cn } from "@/lib/utils";
import { ButtonVariants } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";
import NavbarItem from "@landing/presentation/components/shared/navbar-item/navbar-item";
import LandingContainer from "../landing-container/landing-container";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";

interface LandingNavbarProps {
  className?: string;
}

const navBarItems = [{ name: "Blog" }, { name: "Documentation" }, { name: "Pricing" }, { name: "FAQ" }];

export default function LandingNavbar(props: LandingNavbarProps) {
  return (
    <LandingContainer
      className={cn("flex w-full justify-between gap-y-3 relative flex-wrap lg:flex-nowrap items-center pt-3", {
        [`${props.className}`]: !!props.className,
      })}
    >
      <BrandLogo mode="horizontal" />
      <nav className="flex-grow justify-center md:flex hidden">
        <LandingNavBarItems items={navBarItems} />
      </nav>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <Button className="hidden md:flex" variant={ButtonVariants.GHOST}>
          Sign In
        </Button>
        <Button className="hidden md:flex">Sign Up</Button>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Icon name={AppIcons.Menu} size={24} />
          </SheetTrigger>
          <SheetContent className="md:hidden w-[250px]" side={"left"}>
            <SheetHeader>
              <BrandLogo className="mx-auto" mode="horizontal" />
            </SheetHeader>

            <div className="w-full flex justify-center mt-5">
              <LandingNavBarItems className="flex flex-col gap-y-4" items={navBarItems} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </LandingContainer>
  );
}

interface LandingNavBarItemsProps {
  className?: string;
  items: { name: string }[];
}

export function LandingNavBarItems(props: LandingNavBarItemsProps) {
  return (
    <ul
      className={cn("flex items-center gap-x-4 font-bold", {
        [`${props.className}`]: !!props.className,
      })}
    >
      {props?.items.map((item) => {
        return <NavbarItem key={item.name}>{item.name}</NavbarItem>;
      })}
    </ul>
  );
}
