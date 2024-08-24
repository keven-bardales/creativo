import FacebookIcon from "@/modules/shared/presentation/components/icons/svg-icons/facebook.icon";
import BrandLogo from "../brand-logo/brand-logo";
import InstagramIcon from "@/modules/shared/presentation/components/icons/svg-icons/instagram.icon";
import TwitterIcon from "@/modules/shared/presentation/components/icons/svg-icons/twitter.icon";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 text-primary-foreground border-gray-300 dark:border-none bg-primary shadow-2xl dark:bg-secondary flex items-center w-full py-4 px-5">
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-y-5">
          <div className="flex items-center gap-x-2">
            <BrandLogo
              dotClassName="fill-primary-foreground"
              logoClassName="fill-primary-foreground"
              letterClassName="fill-primary-foreground"
              mode="horizontal"
            ></BrandLogo>
          </div>
          <span className="text-sm sm:text-center ">© {year} . Todos los derechos reservados.</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="">
              <FacebookIcon />
            </a>
            <a href="#" className="">
              <InstagramIcon />
            </a>
            <a href="#" className="">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div className="md:flex md:justify-between">
<div className="mb-6 md:mb-0">
  <a href="https://flowbite.com" className="flex items-center">
    <BrandLogo mode="vertical"></BrandLogo>
  </a>
</div>
<div className="grid">
  <div>
    <h2 className="mb-6 text-sm font-se uppercase">Recursos</h2>
    <ul className="">
      <li className="mb-4">
        <a href="https://flowbite.com" className="hover:underline">
          Creativo
        </a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="mb-6 text-sm font-se uppercase">Siguenos</h2>
    <ul className="">
      <li className="mb-4">
        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
          Github
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/themesberg/" className="hover:underline">
          Facebook
        </a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="mb-6 text-sm font-se uppercase">Legal</h2>
    <ul className="">
      <li className="mb-4">
        <a href="#" className="hover:underline">
          Politica de privacidad
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Terminos y condiciones
        </a>
      </li>
    </ul>
  </div>
</div>
</div> */
}
