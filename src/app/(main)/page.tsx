import { monserrat } from "@/config/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${monserrat.className} font-bold`}>Home Page</h1>
    </main>
  );
}
