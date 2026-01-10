import ExplorePlaces from "../components/ExplorePlaces";
import Packages from "../components/Packages";

const ExplorePage = () => {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-white/90">
              Discover The Heart of India
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Explore Madhya Pradesh
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
              From ancient temples to wildlife sanctuaries, from UNESCO heritage sites to pristine hill stations — 
              experience the incredible diversity of Madhya Pradesh with our curated tour packages and day trips.
            </p>
          </div>
        </div>
      </section>

      <ExplorePlaces />
      <Packages />
    </main>
  );
};

export default ExplorePage;
