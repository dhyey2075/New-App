import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewsItem from "./components/NewsItem.jsx";
import Navbar from "./components/Navbar.jsx";
import DetailNews from "./components/DetailNews.jsx";

function App(props) {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    setCategory(props.category);
    // console.log(props.category)
  })

  useEffect(() => {
    // console.log("updating news list...")
    async function fetchData() {
      setIsLoading(true);
      // Replace the commented-out fetch call with your API call if needed
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${page}&category=${category}&apiKey=1e778d7882ff40c0af09a9a08f21d699`);
      const data = await response.json();

      // Mock data
      const list = data.articles;
      setNewsList(list);
      setIsLoading(false);
    }

    fetchData();
  }, [page, category]); // Depend on `page` and `category`

  const handleNext = () => {
    setPage(prevPage => prevPage + 1);
  }

  const handlePrev = () => {
    setPage(prevPage => prevPage - 1);
  }

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        {isLoading && <h1>Loading...</h1>}
        <div className="row my-2">
          {!isLoading && newsList.map((item, index) => (
            <div className="new-container col-md-4" key={index}>
              <NewsItem
                title={item.title}
                header={item.description}
                imageURL={item.urlToImage}
                url={item.url}
              />
            </div>
          ))}
        </div>
        
        <div className="d-flex justify-content-around">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}>&larr; Previous </button>
          <button type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
    </>
  );
}

export default App;
