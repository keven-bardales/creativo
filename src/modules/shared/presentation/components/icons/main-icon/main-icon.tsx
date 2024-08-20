import { ChevronRight, Globe } from "lucide-react";
import { JSXElementConstructor } from "react";

export enum AppIcons {
  ChevronRight = "ChevronRight",
  Globe = "Globe",
}

interface IconProps {
  size?: number;
  className?: string;
}

interface AppIconsMap {
  [key: string]: JSXElementConstructor<IconProps>;
}

const APPICONS = {
  [AppIcons.ChevronRight]: (props: IconProps) => <ChevronRight size={props.size} className={props.className} />,
  [AppIcons.Globe]: (props: IconProps) => <Globe size={props.size} className={props.className} />,
};

interface IconComponentProps {
  name: AppIcons;
  size?: number;
  className?: string;
}

export default function Icon(props: IconComponentProps) {
  const Comp = APPICONS?.[props.name];

  return <Comp size={props.size} className={props.className} />;
}
