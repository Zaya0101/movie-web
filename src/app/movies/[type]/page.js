"use client";

import { Header } from "../../_features/Header";
import { Footer } from "../../_features/Footer";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BASE_URL = "https://api.themoviedb.org/3";

export default function MoviePage() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { type } = useParams();

  const getData = async (pageNumber = 1) => {
    const data = await fetch(
      `${BASE_URL}/movie/${type}?language=en-US&page=${pageNumber}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY",
        },
      }
    );
    const result = await data.json();
    setMovieData(result.results);
    setTotalPages(result.total_pages);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <Header />

      <div className="w-full max-w-[1440px] mx-auto overflow-hidden py-[50px] px-[90px] flex flex-col flex-wrap">
        <div className="flex justify-between pb-7">
          <h2 className="text-2xl font-semibold capitalize">
            {type.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h2>
        </div>

        <div className="flex flex-wrap gap-5 rounded-md">
          {movieData.map((movie, index) => (
            <div key={index}>
              <div
                className="w-[230px] h-[340px] bg-cover bg-center rounded-md shadow-md"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                }}
              ></div>

              <div className="w-[230px] h-[94px] bg-gray-100 rounded-b-md">
                <div className="flex pt-1 px-2">
                  <span className="text-yellow-400 text-[14px]">★</span>
                  <span className="text-[14px]">{movie.vote_average}</span>
                  <span className="text-[14px] text-gray-400">/10</span>
                </div>
                <h1 className="px-2 text-sm font-medium">{movie.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(page - 1)}
                />
              </PaginationItem>
              {getPageNumbers().map((num) => (
                <PaginationItem key={num}>
                  <PaginationLink
                    href="#"
                    isActive={page === num}
                    onClick={() => handlePageChange(num)}
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {page < totalPages - 2 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <Footer />
    </div>
  );
}
