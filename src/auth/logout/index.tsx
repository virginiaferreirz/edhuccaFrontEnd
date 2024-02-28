import { useFetcher } from "react-router-dom";

export const Logout = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/logout">
      <button className="bg-gray-300 text-white p-2 px-20 rounded-md hover:bg-gradient-to-r to-red-500 via-red-400 from-red-300 transition">
        Sair
      </button>
    </fetcher.Form>
  );
};
