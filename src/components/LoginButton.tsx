import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-white bg-gradient-to-r rounded-full from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center"
  >
    LogIn
  </button>
);

export default LoginButton;
