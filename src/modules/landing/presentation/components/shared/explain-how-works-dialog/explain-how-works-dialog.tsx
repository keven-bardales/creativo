import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Button from "@/modules/shared/presentation/components/ui/button/button";
import { ButtonVariants } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";
import { AppDialog } from "@/modules/shared/presentation/components/ui/dialog/app-dialog";
import { ContactDialog } from "../contact/first-contact-dialog";

export function ExplanationDialog() {
  return (
    <AppDialog
      header="¿Cómo funciona?"
      trigger={
        <Button className="grow shrink-0" variant={ButtonVariants.OUTLINE}>
          Explicame Como funciona
        </Button>
      }
      content={
        <DialogDescription>
          En Creativo, nos especializamos en transformar tus ideas en realidades digitales. Nos enfocamos en ofrecer soluciones personalizadas en
          diseño web, desarrollo web, y marketing digital, adaptadas específicamente para minoristas locales, negocios de alimentos y bebidas, y otros
          servicios en Honduras.
          <br />
          <br />
          <strong>¿Qué pasa cuando envías tu información?</strong>
          <br />
          <br />
          <strong>Recepción y Revisión:</strong> Una vez que envíes tus datos a través de nuestro formulario de contacto, nuestro equipo los recibe de
          inmediato. Revisamos cuidadosamente la información proporcionada para entender mejor tus necesidades y objetivos específicos.
          <br />
          <br />
          <strong>Evaluación y Propuesta:</strong> Basándonos en la información que nos has proporcionado, analizamos las mejores opciones para
          ayudarte a alcanzar tus metas. Luego, te enviaremos una propuesta gratuita y personalizada que incluye un plan detallado de cómo podemos
          ayudarte a mejorar tu presencia digital, ya sea a través de un sitio web optimizado, una estrategia de marketing digital efectiva, o ambos.
          <br />
          <br />
          <strong>Contacto Personalizado:</strong> Uno de nuestros especialistas se pondrá en contacto contigo a la mayor brevedad para discutir los
          detalles de la propuesta y resolver cualquier duda que puedas tener. Este contacto puede ser vía email, llamada telefónica, o
          videoconferencia, según tu preferencia.
          <br />
          <br />
          <strong>Inicio del Proyecto:</strong> Si decides trabajar con nosotros, te guiaremos a través de todo el proceso, desde la planificación
          hasta la ejecución, asegurándonos de que estás informado en cada etapa. Nuestro objetivo es hacer el proceso lo más fluido y eficiente
          posible para que puedas enfocarte en lo que mejor haces: manejar tu negocio.
          <br />
          <br />
          <strong>Privacidad y Seguridad:</strong> Tu información es tratada con la máxima confidencialidad. No compartimos tus datos con terceros sin
          tu consentimiento, y los utilizamos únicamente para ofrecerte el mejor servicio posible.
        </DialogDescription>
      }
      footerContent={<ContactDialog />}
    />
  );
}
