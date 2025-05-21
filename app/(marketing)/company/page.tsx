export default function Page() {
  return (
    <div>
      <div className="py-48 ">
        <div className="px-12">
          <h1 className="text-7xl mb-6 font-bold tracking-widest text-white">
            COMPANY
          </h1>
          <p className="text-2xl font-bold tracking-widest text-white">
            わたしたちについて
          </p>
        </div>
      </div>

      <section className="bg-background">
        <div className="container mx-auto px-12 py-24">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold tracking-widest mb-6">MISSION</h2>
            <p className="text-3xl font-bold tracking-widest mb-12">
              テクノロジーの力で人に寄り添うまちづくりを実現する
            </p>
          </div>
        </div>
      </section>

      <div>
        <h2>Vision</h2>
        <p>Our vision is to be the best company in the world.</p>
      </div>

      <div>
        <h2>About</h2>
        <p>
          We are a company that provides the best possible service to our
          clients.
        </p>
      </div>
    </div>
  );
}
