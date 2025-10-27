import MovieList from "./_components/MovieList";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";

export default function Page() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <HeroSection />
      <MovieList type="upcoming" title="Upcoming" />
      <MovieList type="popular" title="Popular" />
      <MovieList type="top_rated" title="Top Rated" />
    </div>
  );
}
