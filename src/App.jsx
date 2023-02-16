import React, { useState } from "react";
import fetchData from "./services/API";

import initialData from "./halpers/initialData";
import Card from "./components/Card";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(city).then((Response) => {
      setData(Response);
    });
  };

  return (
    <main className="flex flex-col w-full h-screen items-center sm:justify-center p-4 bg-gray-900">
      <h1 className="text-3xl p-3 text-white">Consulte a temperatura de qualquer cidade!</h1>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none shadow-md shadow-purple-700 w-full flex-1 sm:max-w-[300px]"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-purple-900 p-3 rounded-lg ml-3 text-white font-bold shadow-md shadow-purple-700"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </main>
  );
}

export default App;