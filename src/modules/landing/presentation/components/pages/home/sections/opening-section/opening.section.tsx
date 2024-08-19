import Icon, { AppIcons } from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import Button from "@/modules/shared/presentation/components/ui/button/button";
import { ButtonSizes } from "@/modules/shared/presentation/components/ui/button/button-variants.enum";

export default function OpeningSection() {
  return (
    <>
      <div className="flex flex-col gap-y-4 text-4xl md:text-5xl lg:text-7xl text-center px-5 font-medium">
        <h1 className="text-foreground">The SaaS Solution for</h1>
        <h2 className="text-primary">Developers and founders</h2>
      </div>
      <div className="flex flex-col gap-y-8 justify-center px-5">
        <div className="flex flex-col md:text-xl lg:text-2xl text-center">
          <h3 className="font-light">Here you can write a short description of your Saas</h3>
          <h3 className="font-light">This subheading is ususally laid out on multiple lines</h3>
          <h3 className="font-light">Impress your customers, straight to the point</h3>
        </div>
        <div className="mx-auto flex flex-col gap-y-4 px-5">
          <Button size={ButtonSizes.XL} className="w-fit mx-auto shadow-2xl">
            Get Started <Icon name={AppIcons.ChevronRight} />
          </Button>
          <h3 className="font-light">Free plan, no card required</h3>
        </div>
      </div>
    </>
  );
}
