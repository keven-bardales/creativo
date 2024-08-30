import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This type represents the structure of a blog post
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for Effective Digital Marketing",
    excerpt: "Learn the top strategies to boost your online presence and engage with your audience.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "10-tips-for-effective-digital-marketing",
  },
  {
    id: "2",
    title: "The Future of AI in Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the marketing landscape.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "future-of-ai-in-marketing",
  },
  {
    id: "3",
    title: "Building a Strong Brand Identity",
    excerpt: "Explore the key elements that make up a memorable and impactful brand identity.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "building-strong-brand-identity",
  },
];

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader className="p-0">
              <Image src={post.imageUrl} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button asChild className="w-full">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
