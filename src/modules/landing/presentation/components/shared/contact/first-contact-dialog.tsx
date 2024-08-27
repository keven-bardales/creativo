"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactDialogForm } from "./components/dialog-contact.form";
import { useState } from "react";

export function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="grow shrink-0">Obtén tu propuesta gratuita</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95%] rounded-3xl sm:max-w-[425px] bg-background border-none">
        <DialogHeader>
          <DialogTitle>Contáctanos</DialogTitle>
          <DialogDescription>
            Rellena los campos a continuación para enviarnos un mensaje. Te responderemos lo antes posible. Y recibiras tu propuesta gratis.
          </DialogDescription>
        </DialogHeader>
        <ContactDialogForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
