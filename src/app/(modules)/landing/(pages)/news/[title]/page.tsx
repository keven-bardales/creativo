import { NEWS } from "@/modules/landing/presentation/constants/blogs.constant";
import { decodeURIComponentSafe } from "@/modules/shared/presentation/utils/decode-uri-component/decode-uri-component";
import { notFound } from "next/navigation";

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
