import { cn } from "@/lib/utils";

interface DedicationCardProps {
  className?: string;
}
export default function DedicationCard(props: DedicationCardProps) {
  return (
    <div
      className={cn("w-full h-full hidden md:block bg-primary rounded-3xl p-3 text-primary-foreground", {
        [`${props?.className}`]: !!props?.className,
      })}
    >
      <h3 className="md:text-6xl font-bold">100%</h3>
      <h3 className="md:text-2xl mt-5 font-bold">Dedicación</h3>
      <p className="text-sm">Nos dedicamos a cada proyecto con pasión y precisión, garantizando resultados que superan tus expectativas.</p>
    </div>
  );
}
