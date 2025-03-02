import { useNavigate } from "react-router-dom";
import { Terminal } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-18 px-6 flex flex-col justify-center items-center">
      <img src="/404.svg" width={500} alt="Not Found" />
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="mt-4 px-4 py-2 bg-[#6366F1] flex text-white rounded-md hover:bg-blue-600 transition"
      >
        <Terminal/>
        Go back
      </button>
    </div>
  );
};
