import NoteForm from "@/components/NoteForm";
import Wall from "@/components/Wall";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col gap-16 items-center justify-center">
        <h1>Sticky Notes Wall</h1>
        <NoteForm />
        <Wall />
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        testing
      </footer> */}
    </div>
  );
}
