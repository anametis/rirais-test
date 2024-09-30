import NoteForm from "@/components/NoteForm";
import Wall from "@/components/Wall";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col gap-16 items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Sticky Notes Wall</h1>
        <NoteForm />
        <Wall />
      </main>
    </div>
  );
}
