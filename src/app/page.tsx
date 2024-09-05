import Background from "@/components/Background/Background";
import MePerdonas from "@/components/MePerdonas/MePerdonas";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Background />
      <MePerdonas />
    </main>
  );
}
export const runtime = "edge";
