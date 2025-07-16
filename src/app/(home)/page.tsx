import Filters from "@/components/filters";

type HomeProps = {
  searchParams?: Promise<{
    query?: string;
  }>;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="h-[calc(100vh-80px)] w-screen">
      <main className="h-full w-full grid sm:grid-cols-12">
        <Filters searchParams={searchParams} />
        <section className="sm:col-span-10">
        </section>
      </main>
    </div>
  );
}