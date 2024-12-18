Estructura de mi proyecto 
src/
  ├── components/
  │   ├── BookList.tsx        # Lista de libros (grid y diseño organizado)
  │   ├── Sidebar.tsx         # Menú lateral
  │   └── BookCard.tsx        # Tarjeta de libro
  ├── pages/
  │   ├── Home.tsx            # Página de inicio (si el usuario no ha iniciado sesión)
  │   └── Dashboard.tsx       # Página del dashboard (si el usuario ha iniciado sesión)
  ├── services/
  │   └── API.tsx             # Llamadas a la API (obtener libros)
  ├── App.tsx                 # Componente principal
  └── App.css 
