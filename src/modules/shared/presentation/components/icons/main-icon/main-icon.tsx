import { ChevronRight } from "lucide-react";
import { JSXElementConstructor } from "react";

export enum AppIcons {
  ChevronRight = "ChevronRight",
}

interface IconProps {
  size?: number;
}

interface AppIconsMap {
  [key: string]: JSXElementConstructor<IconProps>;
}

const APPICONS = {
  [AppIcons.ChevronRight]: (props: IconProps) => <ChevronRight size={props.size} />,
};

interface IconComponentProps {
  name: AppIcons;
  size?: number;
}

export default function Icon(props: IconComponentProps) {
  const Comp = APPICONS?.[props.name];

  return <Comp size={props.size} />;
}
