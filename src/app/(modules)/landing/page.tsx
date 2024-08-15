import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/modules/landing/presentation/components/shared/theme-swticher";

export default function LandingMain() {
  return (
    <main className="w-full min-h-screen max-h-screen overflow-auto">
      <section className="w-full">
        <div className="container mx-auto items-center flex w-full justify-evenly py-2">
          <div className="text-2xl text-primary font-bold">Creativo</div>
          <nav>
            <ul className="flex items-center gap-x-4">
              <li>Blog</li>
              <li>Documentation</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-4">
            <ModeToggle />
            <Button variant={"ghost"}>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
