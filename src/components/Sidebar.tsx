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
        <div className="text-center mb-6 mt-4">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_1280.jpg"
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h3 className="mt-4 text-lg font-bold text-black">Bogdan Nikitin</h3>
          <p className="text-sm text-gray-500">@nikitinteam</p>
        </div>

        {/* Navigation Menu */}

        {/* Genres Section */}
        <div className="mt-2 w-full">
          <h4 className="flex items-center justify-between p-3 bg-blueCont3 text-white rounded-md uppercase mb-4">
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
        <div className="mt-6 w-full">
          <h4 className="flex items-center justify-between p-3 bg-blueCont3 text-white rounded-md uppercase mb-4">
            <span>Libros Faoritos</span>
          </h4>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

/* <nav className="w-full">
          <ul className="space-y-4">
            <li>
              <a
                href="#news-feed"
                className="flex items-center justify-between p-3 bg-black text-white rounded-md hover:bg-gray-700"
              >
                <span>News Feed</span>
              </a>
            </li>
            <li>
              <a
                href="#messages"
                className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-md hover:bg-gray-200"
              >
                <span>Messages</span>
                <span className="bg-gray-300 text-sm text-black px-2 py-1 rounded-full">
                  6
                </span>
              </a>
            </li>
            <li>
              <a
                href="#forums"
                className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-md hover:bg-gray-200"
              >
                <span>Forums</span>
              </a>
            </li>
            <li>
              <a
                href="#friends"
                className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-md hover:bg-gray-200"
              >
                <span>Friends</span>
                <span className="bg-gray-300 text-sm text-black px-2 py-1 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-md hover:bg-gray-200"
              >
                <span>Media</span>
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-md hover:bg-gray-200"
              >
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav> */
