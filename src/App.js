import { useEffect, useState } from 'react'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import { createResource as fetchData } from './helper'

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);
  console.log(search);

  useEffect(() => {
    if (search) {
      setData(fetchData(search));
    }
  }, [search]);

  const handleSearch = (e, searcTerm) => {
    e.preventDefault();
    setSearch(searcTerm);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}
export default App