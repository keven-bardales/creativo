"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [
  { month: "Enero", Visitas: 186, Contactados: 80 },
  { month: "Febrero", Visitas: 305, Contactados: 200 },
  { month: "Marzo", Visitas: 237, Contactados: 120 },
  { month: "Abril", Visitas: 73, Contactados: 190 },
  { month: "Mayo", Visitas: 209, Contactados: 130 },
  { month: "Junio", Visitas: 214, Contactados: 140 },
];

const chartConfig = {
  Visitas: {
    label: "Visitas",
    color: "hsl(var(--primary))",
  },
  Contactados: {
    label: "Contactados",
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

interface MainStatisticsChartProps {
  className?: string;
}

export function MainStatisticsChart(props: MainStatisticsChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("min-h-[200px] w-full", {
        [`${props.className}`]: !!props.className,
      })}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Visitas" fill="hsl(var(--primary))" radius={4} />
        <Bar dataKey="Contactados" fill="hsl(var(--foreground))" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
