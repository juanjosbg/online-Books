import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  activePage: number; // Página activa actual
  totalPages: number; // Total de páginas
  onPageChange: (page: number) => void; // Acción para cambiar la página
}

export function DefaultPagination({
  activePage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Función para obtener propiedades de los números de página
  const getItemProps = (index: number) => ({
    onClick: () => onPageChange(index),
    className: `
      text-sm sm:text-base
      ${activePage === index ? "bg-blue-500 text-white font-bold" : "text-blueButton2"}
      px-3 py-1 rounded transition duration-200
      hover:bg-blue-100
    `,
  });

  // Función para avanzar a la siguiente página
  const next = () => {
    if (activePage < totalPages) {
      onPageChange(activePage + 1);
    }
  };

  // Función para retroceder a la página anterior
  const prev = () => {
    if (activePage > 1) {
      onPageChange(activePage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full mt-4 px-4 sm:px-8">
      {/* Botón para retroceder */}
      <Button
        variant="text"
        className={`flex items-center gap-2 ${
          activePage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blueButton1 hover:text-blueButton3"
        } focus:ring-0`}
        onClick={prev}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        Previous
      </Button>

      {/* Números de páginas */}
      <div className="flex items-center gap-2 overflow-x-auto w-full max-w-full scrollbar-hide">
        {[...Array(totalPages).keys()].map((index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>

      {/* Botón para avanzar */}
      <Button
        variant="text"
        className={`flex items-center gap-2 ${
          activePage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blueButton1 hover:text-blueButton3"
        } focus:ring-0`}
        onClick={next}
        disabled={activePage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
