// src/App.tsx
import "./App.css";
import ContBooks from "./pages/ContBook";
import SearchBook from "./components/SearchBook";

function App() {
  return (
    <section>
      <div className="min-h-screen flex">
        <aside className="md:w-1/4 bg-[#ced7de] p-4">
          <header>
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
              <h2 className="text-2xl tracking-tight text-white uppercase font-bold ml-4">
                Parte del Profile
              </h2>
            </div>
          </header>

          <div className="mb-6">
            .......
          </div>

          <hr />
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mt-3 h-auto mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Libros Favoritos
            </label>
          </div>

          <hr />

          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mt-3 h-auto mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Generos
            </label>
            <br />
            <div className="container mx-auto flex flex-col">dsdsd</div>
          </div>
        </aside>

        <main className="w-3/4 bg-[#e1e1e1]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <SearchBook/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              ----
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default App;
