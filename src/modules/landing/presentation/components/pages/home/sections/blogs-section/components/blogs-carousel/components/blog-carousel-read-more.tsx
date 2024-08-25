"use client";

import { BLOGS } from "@/modules/landing/presentation/constants/blogs.constant";
import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import Link from "next/link";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface BlogReadMoreItemProps {
  blog: (typeof BLOGS)[0];
}

export default function BlogReadMoreItem({ blog }: BlogReadMoreItemProps) {
  const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="bg-primary text-primary-foreground rounded-3xl p-3 !max-h-fit mt-2">
            <Icon name={AppIcons.Eye} className="h-4 w-4 md:h-4 md:w-4" />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[95%] text-foreground dark:bg-secondary border-none md:max-w-[500px] max-h-[90vh] rounded-3xl overflow-auto">
          <DialogHeader className="text-left">
            <DialogTitle>{blog.title}</DialogTitle>
            <p className="text-sm font-light mb-4">{`Fecha: ${dateFormatter.format(new Date(blog.date))}`}</p>
            <DialogDescription>
              <Image src={blog.image} alt={blog.image} width={500} height={300} className="rounded-sm mx-auto mb-4" />
              <p className="text-base leading-relaxed text-left text-foreground">{blog.content}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
