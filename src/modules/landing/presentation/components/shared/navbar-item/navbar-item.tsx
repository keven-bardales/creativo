import { cn } from "@/lib/utils";

interface NavbarItemProps {
  className?: string;
  children: React.ReactNode;
}
export default function NavbarItem(props: NavbarItemProps) {
  return (
    <li
      {...props}
      className={cn("", {
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </li>
  );
}
