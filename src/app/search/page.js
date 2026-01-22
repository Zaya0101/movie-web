// app/search/page.js
import { Suspense } from "react";
import SearchClient from "./searchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
