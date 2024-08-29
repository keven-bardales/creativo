"use client";
import { cn } from "@/lib/utils";
import { useLandingNavStore } from "../../../stores/nav-bar.store";
import handleElementIntoView from "@/modules/shared/presentation/utils/handle-into-view/handle-element-into-view";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  mode: "horizontal" | "vertical";
  logoClassName?: string;
  dotClassName?: string;
  letterClassName?: string;
  onClick?: () => void;
}

export default function BrandLogo(props: BrandLogoProps) {
  const pathname = usePathname();

  const setIsOpenMobileMenu = useLandingNavStore((state) => state.setIsOpenMobileMenu);

  const getComponent = () => {
    switch (props.mode) {
      case "horizontal":
        return BrandLogoHorizontal;
      case "vertical":
        return BrandLogoVertical;
      default:
        return BrandLogoHorizontal;
    }
  };

  const Component = getComponent();

  return (
    <Link
      href={pathname === "/landing" ? "#" : "/landing"}
      onClick={(event) => {
        setIsOpenMobileMenu(false);
      }}
    >
      <Component {...props} />
    </Link>
  );
}

function BrandLogoVertical(props: BrandLogoProps) {
  return (
    <svg
      className={cn("cursor-pointer", {
        [`${props.className}`]: !!props.className,
      })}
      width={props?.width ?? 80}
      height={props?.height ?? 80}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347.33 332.77"
    >
      <defs></defs>
      <g>
        <path
          className="cls-1"
          d="M30.88,332.77c-17.11,0-30.88-10.51-30.88-29.71s13.77-29.71,30.88-29.71c12.94,0,19.19,5.42,19.19,5.42l-5.01,15.86s-5.84-5.01-12.94-5.01-13.19,4.17-13.19,13.19,6.51,12.93,13.19,12.93,11.27-2.75,13.77-5.26l5.42,15.02c-2.09,2.09-7.93,7.26-20.45,7.26Z"
        />
        <path
          className="cls-1"
          d="M73.44,289.21l-.25,5.42c2.75-4.59,6.09-6.26,10.68-6.26,2.92,0,4.17.83,4.17.83l-.83,17.11h-.83c-.83-.42-2.92-1.25-5.42-1.25s-4.67,1.17-5.84,2.75c-1.17,1.5-1.67,3.92-1.67,7.26v16.69h-18.78v-42.56h18.78Z"
        />
        <path
          className="cls-1"
          d="M112.83,332.77c-13.52,0-23.95-7.59-23.95-22.2s10.85-22.2,24.2-22.2,22.53,8.34,22.53,21.28c0,2.5-.25,5.26-.25,5.26h-27.96c.67,3.92,4.84,4.76,8.18,4.76s7.93-.83,11.68-3.34l7.09,9.18c-2.09,1.67-7.93,7.26-21.53,7.26ZM112.83,300.06c-3.09,0-5.17,2.09-5.42,5.01h10.85c-.17-2.92-2.25-5.01-5.42-5.01Z"
        />
        <path
          className="cls-1"
          d="M154.72,332.77c-7.93,0-16.27-3.5-16.27-13.94s10.51-12.85,16.69-13.1l9.85-.42v-.42c0-2.34-1.92-4.01-6.93-4.01s-10.43,2.09-13.35,3.75l-4.59-11.85c4.17-1.92,11.68-4.42,20.45-4.42s13.77,1.67,17.52,5.01c3.76,3.34,5.67,7.93,5.67,15.02v23.37h-17.77l-.42-3.76c-2.09,2.09-5.42,4.76-10.85,4.76ZM157.22,318c0,2.5,2.09,3.34,4.17,3.34s3.34-1.25,3.76-1.67v-5.26l-3.76.25c-2,.08-4.17.83-4.17,3.34Z"
        />
        <path
          className="cls-1"
          d="M207.96,332.77c-5.42,0-9.18-1.42-11.68-3.67-2.5-2.34-3.76-6.09-3.76-12.35v-13.77h-5.84v-13.77h5.84v-10.43h18.78v10.43h8.76v13.77h-8.76v11.68c0,1.19.28,1.91.81,2.34.57.47,1.44.58,2.53.58,2.09,0,4.17-.58,4.17-.58l.83,14.35c-1.67.42-6.26,1.42-11.68,1.42Z"
        />
        <path
          className="cls-1"
          d="M233.17,269.85c6.09,0,10.01,3.5,10.01,8.93s-3.92,8.93-10.01,8.93-10.01-3.51-10.01-8.93,4.01-8.93,10.01-8.93ZM242.59,289.21v42.56h-18.78v-42.56h18.78Z"
        />
        <path className="cls-1" d="M264.71,289.21l6.84,22.11,6.93-22.11h19.19l-17.36,42.56h-17.94l-17.27-42.56h19.61Z" />
        <path
          className="cls-1"
          d="M322.71,288.37c14.19,0,24.62,8.01,24.62,22.2s-10.43,22.2-24.62,22.2-24.62-8.01-24.62-22.2,10.43-22.2,24.62-22.2ZM328.55,310.32c0-4.42-2.09-7.34-5.84-7.34s-5.84,2.92-5.84,7.34,2.09,7.26,5.84,7.26,5.84-2.92,5.84-7.26Z"
        />
      </g>
      <path
        className="cls-1"
        d="M249.64,77.61c14.02,1.11,25.64-10.51,24.53-24.53-.87-11.03-9.81-19.97-20.84-20.84-14.02-1.11-25.64,10.51-24.53,24.53.87,11.03,9.81,19.97,20.84,20.84Z"
      />
      <path
        className="cls-2"
        d="M192.28,44.1c2.71-.39,5.2-1.15,7.51-2.65,6.25-4.07,10.5-11.15,10.3-19.18-.18-12.42-9.95-21.56-22.81-22.16-9.32-.44-19.18.56-28.34,2.34-17.98,3.47-36.01,9.64-51.87,19.19-13.21,7.95-24.91,18.22-33.83,31.24-27.67,39.75-29.01,94.81-2.83,135.61,29.07,46.76,89.42,67.59,141.54,50.57,34.67-10.6,63.55-38.3,76.35-72.08,4.31-10.92,7.09-22.35,8.69-33.88,1.74-12.37-7.03-23.8-19.42-25.32-12.27-1.52-23.45,7.2-24.97,19.47-.51,4.14-1.2,8.21-2.11,12.19-2.68,11.52-7.54,22.74-14.65,32-9.31,12.39-22.39,21.57-37.19,26.26-39.02,12.59-79.75-5.76-96.45-43.12-9.25-20.79-10.19-46.21.41-66.62,7.27-13.21,17.8-24.05,30.99-31.65.09-.05.18-.1.28-.16,12.46-7.05,26.55-10.73,40.86-10.99,5.1-.09,11.44-.37,17.57-1.05Z"
      />
    </svg>
  );
}

function BrandLogoHorizontal(props: BrandLogoProps) {
  return (
    <svg
      width={props?.width ?? 130}
      height={props?.height ?? 50}
      className={cn("cursor-pointer", {
        [`${props.className}`]: !!props.className,
      })}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 415.15 159.77"
    >
      <defs></defs>
      <g>
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M194.33,99.92c-11.94,0-21.55-7.34-21.55-20.73s9.61-20.73,21.55-20.73c9.03,0,13.4,3.79,13.4,3.79l-3.5,11.06s-4.08-3.49-9.03-3.49-9.2,2.91-9.2,9.2,4.54,9.03,9.2,9.03,7.86-1.92,9.61-3.67l3.78,10.48c-1.46,1.46-5.53,5.07-14.27,5.07Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M224.03,69.52l-.17,3.79c1.92-3.2,4.25-4.37,7.45-4.37,2.04,0,2.91.58,2.91.58l-.58,11.94h-.58c-.58-.29-2.04-.87-3.79-.87s-3.26.82-4.08,1.92c-.82,1.05-1.17,2.74-1.17,5.07v11.65h-13.1v-29.7h13.1Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M251.52,99.92c-9.43,0-16.71-5.3-16.71-15.49s7.57-15.49,16.89-15.49,15.72,5.82,15.72,14.85c0,1.75-.17,3.67-.17,3.67h-19.51c.47,2.74,3.38,3.32,5.71,3.32s5.53-.58,8.15-2.33l4.95,6.41c-1.45,1.16-5.53,5.07-15.02,5.07ZM251.52,77.09c-2.16,0-3.61,1.46-3.79,3.49h7.57c-.12-2.04-1.57-3.49-3.79-3.49Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M280.75,99.92c-5.53,0-11.36-2.45-11.36-9.73s7.34-8.97,11.65-9.14l6.87-.29v-.29c0-1.63-1.34-2.8-4.83-2.8s-7.28,1.46-9.32,2.62l-3.2-8.27c2.91-1.34,8.15-3.09,14.27-3.09s9.61,1.17,12.23,3.49c2.62,2.33,3.96,5.53,3.96,10.48v16.31h-12.4l-.29-2.62c-1.46,1.46-3.78,3.32-7.57,3.32ZM282.5,89.61c0,1.75,1.46,2.33,2.91,2.33s2.33-.87,2.62-1.16v-3.67l-2.62.18c-1.4.06-2.91.58-2.91,2.33Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M317.9,99.92c-3.78,0-6.41-.99-8.15-2.56-1.75-1.63-2.62-4.25-2.62-8.62v-9.61h-4.08v-9.61h4.08v-7.28h13.1v7.28h6.12v9.61h-6.12v8.15c0,.83.2,1.33.56,1.63.4.33,1,.41,1.77.41,1.46,0,2.91-.41,2.91-.41l.58,10.02c-1.16.29-4.37.99-8.15.99Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M335.49,56.01c4.25,0,6.99,2.45,6.99,6.23s-2.74,6.23-6.99,6.23-6.99-2.45-6.99-6.23,2.8-6.23,6.99-6.23ZM342.07,69.52v29.7h-13.1v-29.7h13.1Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M357.5,69.52l4.78,15.43,4.83-15.43h13.4l-12.11,29.7h-12.52l-12.05-29.7h13.69Z"
        />
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.letterClassName}`]: !!props.letterClassName,
          })}
          d="M397.97,68.94c9.9,0,17.18,5.59,17.18,15.49s-7.28,15.49-17.18,15.49-17.18-5.59-17.18-15.49,7.28-15.49,17.18-15.49ZM402.05,84.25c0-3.09-1.46-5.12-4.08-5.12s-4.08,2.04-4.08,5.12,1.45,5.07,4.08,5.07,4.08-2.04,4.08-5.07Z"
        />
      </g>
      <g>
        <path
          className={cn("fill-foreground dark:fill-secondary-foreground stroke-0", {
            [`${props.dotClassName}`]: !!props.dotClassName,
          })}
          d="M129.19,50.62c9.15.72,16.72-6.85,16-16-.57-7.2-6.4-13.03-13.59-13.59-9.15-.72-16.72,6.85-16,16,.57,7.2,6.4,13.03,13.59,13.59Z"
        />
        <path
          className={cn("fill-primary dark:fill-primary stroke-0", {
            [`${props.logoClassName}`]: !!props.logoClassName,
          })}
          d="M91.77,28.77c1.77-.26,3.39-.75,4.9-1.73,4.08-2.66,6.85-7.27,6.72-12.51-.12-8.1-6.49-14.06-14.88-14.46-6.08-.29-12.51.36-18.49,1.52-11.73,2.26-23.49,6.29-33.83,12.52-8.61,5.18-16.25,11.89-22.07,20.38-18.05,25.93-18.92,61.85-1.84,88.46,18.96,30.5,58.33,44.09,92.32,32.98,22.61-6.91,41.45-24.99,49.8-47.02,2.81-7.12,4.63-14.58,5.67-22.1,1.13-8.07-4.58-15.52-12.67-16.52-8.01-.99-15.3,4.69-16.29,12.7-.33,2.7-.79,5.36-1.38,7.95-1.75,7.52-4.92,14.83-9.56,20.88-6.08,8.08-14.6,14.07-24.26,17.13-25.45,8.21-52.02-3.76-62.91-28.13-6.03-13.56-6.65-30.14.27-43.46,4.74-8.61,11.61-15.69,20.22-20.65.06-.03.12-.07.18-.1,8.13-4.6,17.32-7,26.65-7.17,3.33-.06,7.46-.24,11.46-.69Z"
        />
      </g>
    </svg>
  );
}
