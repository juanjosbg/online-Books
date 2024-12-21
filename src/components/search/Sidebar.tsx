import React from "react";

interface SidebarProps {
  genres: string[]; // Lista de géneros literarios
  onGenreSelect: (genre: string) => void; // Función para manejar la selección de un género
}

const Sidebar: React.FC<SidebarProps> = ({ genres, onGenreSelect }) => {
  return (
    <aside className="md:w-1/4 bg-white p-4">
      <div className="flex flex-col items-center">
        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-20 w-20 rounded-full bg-blueCont2 overflow-hidden mt-2">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_1280.jpg"
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
          </div>
          <div>
            <p className="text-blueCont4 text-lg font-bold">Bogdan Nikitin</p>
            <p className="text-blueCont1">@nikitinteam</p>
          </div>
        </div>

        {/* Libros favoritos */}
        <div className="mt-2 w-full">
          <h4 className="flex items-center justify-between p-2 bg-blueCont3 text-white rounded-md mb-4">
            <span>Libros Favoritos</span>
          </h4>
        </div>

        {/* Libros por Generos*/}
        <div className=" w-full">
          <h4 className="flex items-center justify-between p-2 bg-blueCont3 text-white rounded-md mb-4">
            <span>Generos</span>
          </h4>
          <ul className="space-y-2">
            {genres.map((genre) => (
              <li key={genre}>
                <button
                  onClick={() => onGenreSelect(genre)}
                  className="w-full text-left p-2 bg-gray-100 text-black rounded-md hover:bg-[#a9a9a950]  hover:px-6"
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
