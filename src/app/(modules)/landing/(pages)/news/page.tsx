import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NEWS } from "@/modules/landing/presentation/constants/blogs.constant";

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS.map((post) => (
          <Card key={post.title} className="flex flex-col">
            <CardHeader className="p-0">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button asChild className="w-full">
                <Link href={`/landing/news/${post.title}`}>Leer más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
