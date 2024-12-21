// src/components/Pagination.tsx
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  activePage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DefaultPagination({
  activePage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getItemProps = (index: number) => ({
    variant: activePage === index ? "filled" : "text",
    color: "gray",
    onClick: () => onPageChange(index),
  });

  const next = () => {
    if (activePage < totalPages) {
      onPageChange(activePage + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      onPageChange(activePage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full mt-4 px-4 sm:px-8">
      <Button
        variant="text"
        className="flex items-center gap-2 text-blueButton1 hover:text-blueButton3 focus:ring-0"
        onClick={prev}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="flex items-center gap-16 w-full max-w-full scrollbar-hide">
        {/* Muestra los números de las páginas */}
        {[...Array(totalPages).keys()].map((index) => (
          <IconButton 
            key={index + 1} 
            {...getItemProps(index + 1)}
            className="text-sm sm:text-base text-blueButton2"
            >
            {index + 1}
          </IconButton>
        ))}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2 text-blueButton1 hover:text-blueButton3 focus:ring-0"
        onClick={next}
        disabled={activePage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
