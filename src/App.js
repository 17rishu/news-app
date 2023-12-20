import { useEffect } from 'react';
import { useState } from 'react';
import { News } from './News';
import './App.css';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("bitcoin")
  
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=${category}&from=2023-12-14&apiKey=de36b46cd4f44d63a09148cdd9bcfcaa")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log("News: ", news.articles);
    })
    .catch((err)=>{console.log(err)})
  },[category])


  return (
    <div className="App">
      
      <header className="header">
        <h2>Parso Tak</h2>

        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
          placeholder="Search News"
        />
      </header>

      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article) => {
            return <News article={article} />;
          })
        ) : (
          <h3>No news found for your search</h3> 
        )}
      </section>

    </div>
  );
}

export default App; 