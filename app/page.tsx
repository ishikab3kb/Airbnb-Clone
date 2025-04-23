import CategoriesAndFilters from "./components/categories/CategoriesAndFilters";

export default function Home() {
  return (
    <div className="w-100vw">
      <main className="w-full px-2">
        <CategoriesAndFilters />
      </main>
      <footer></footer>
    </div>
  );
}
