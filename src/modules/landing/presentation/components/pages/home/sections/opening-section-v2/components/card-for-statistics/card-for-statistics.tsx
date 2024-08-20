import Card from "@/modules/shared/presentation/components/ui/card/card";
import { MainStatisticsChart } from "../../../../charts/main-statistics-chart/main-statistics-chart";
import { cn } from "@/lib/utils";

interface CardForStatisticsProps {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

export default function CardForStatistics(props: CardForStatisticsProps) {
  return (
    <Card
      className={cn("lg:absolute hidden lg:block lg:bottom-[7%] w-[50%] lg:h-[260px] bg-background border-0 lg:left-[5%] p-3", {
        [`${props?.className}`]: !!props?.className,
      })}
    >
      <div
        className={cn("flex flex-col", {
          [`${props?.contentClassName}`]: !!props?.contentClassName,
        })}
      >
        <div className="flex flex-col gap-y-1">
          <h2
            className={cn("font-bold text-sm", {
              [`${props?.titleClassName}`]: !!props?.titleClassName,
            })}
          >
            Crecimiento estadístico
          </h2>
          <h3
            className={cn("text-sm font-light", {
              [`${props?.descriptionClassName}`]: !!props?.descriptionClassName,
            })}
          >
            Mide tu crecimiento con <strong className="text-primary">Creativo</strong>
          </h3>
        </div>
        <MainStatisticsChart />
      </div>
    </Card>
  );
}
