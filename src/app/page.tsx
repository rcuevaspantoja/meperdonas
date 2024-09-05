import Background from "@/components/Background/Background";
import MePerdonas from "@/components/MePerdonas/MePerdonas";

export const runtime = 'edge';

export default function Home() {

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Background />
      <MePerdonas />
    </main>
  );
}
