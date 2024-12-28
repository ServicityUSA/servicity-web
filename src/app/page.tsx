import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-red-500 font-bold text-4xl mb-8">Home</h1>
      <Button variant="destructive" size="sm">
        Click me
      </Button>
    </div>
  );
}
