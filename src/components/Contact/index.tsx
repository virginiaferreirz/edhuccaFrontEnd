import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="fixed bottom-2 right-2 py-14 bg-transparent">
      <button className="bg-gradient-to-r from-blue-300 via-green-400 to-green-500 py-2 px-3 rounded-full shadow-md">
        <div className="flex items-center bg-transparent">
          <a>
            <MdEmail className="text-white bg-blue-300 text-4xl w-6 h-6" />
          </a>
          <a
            href="https://wa.link/rn85kr"
            target="_blank"
            className=" text-white bg-transparent text-lg px-2"
          >
            Suporte
          </a>
        </div>
      </button>
    </div>
  );
};
