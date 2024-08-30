import { NEWS } from "@/modules/landing/presentation/constants/blogs.constant";
import { decodeURIComponentSafe } from "@/modules/shared/presentation/utils/decode-uri-component/decode-uri-component";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next/types";

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
    <div>
      <h1>BlogDetailPage</h1>
    </div>
  );
}
