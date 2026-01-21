"use client";
import { Header } from "@/app/_features/Header";
import { Footer } from "@/app/_features/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const searchMovies = async () => {
      setLoading(true);
      const result = await fetch(
        `${BASE_URL}/search/movie?query=${query}&language=en-US`,
        { headers: { Authorization: TOKEN } },
      );
      const data = await result.json();
      setMovies(data.results || []);
      setLoading(false);
    };
    searchMovies();
  }, [query]);

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">
          {movies.length} results for “{query}”
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => router.push(`/moviesDetails/${movie.id}`)}
              className="text-center cursor-pointer hover:opacity-80 transition"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm font-medium">{movie.title}</p>
            </div>
          ))}
        </div>

        {movies.length === 0 && (
          <p className="text-center mt-20 text-gray-500">No results found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
