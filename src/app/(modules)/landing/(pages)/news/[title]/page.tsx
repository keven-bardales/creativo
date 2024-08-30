import LandingContainer from "@/modules/landing/presentation/components/shared/landing-container/landing-container";
import { NEWS } from "@/modules/landing/presentation/constants/blogs.constant";
import Card, { CardContent, CardHeader } from "@/modules/shared/presentation/components/ui/card/card";
import { decodeURIComponentSafe } from "@/modules/shared/presentation/utils/decode-uri-component/decode-uri-component";
import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next/types";
import { Separator } from "@/components/ui/separator";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";

type Props = {
  params: { slug: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const title = decodeURIComponentSafe(params.title);

  const newDetail = NEWS.find((post) => post.title === title);

  if (!newDetail) {
    notFound();
  }

  return {
    title: `${newDetail.title} - Creativo Hn`,
    description: newDetail.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { title: string } }) {
  const title = decodeURIComponentSafe(params.title);

  const newDetail = NEWS.find((post) => post.title === title);

  if (!newDetail) {
    notFound();
  }

  return (
    <LandingContainer className="mt-20">
      <Card>
        <CardHeader>
          <Image src={newDetail.image} alt={newDetail.title} width={800} height={400} className="w-full h-[400px] object-cover rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{newDetail.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <Icon name={AppIcons.CalendarCheck} className="mr-2 h-4 w-4" />
              <time dateTime={newDetail.date}>
                {new Date(newDetail.date).toLocaleDateString("es-HN", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>
          </div>
          <Separator className="mb-6" />
          <p className="text-lg font-semibold mb-4">{newDetail.excerpt}</p>
          <div className="space-y-4">
            {newDetail.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph.content}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </LandingContainer>
  );
}
