import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import ArticleList from "../../components/articleList/ArticleList";
import axios from "axios";
import { useContext } from "react";
import { ServerContext } from "../../context/ServerContext";

function Publications() {
  const searchParams = new URLSearchParams(document.location.search);
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [articleCategory, setArticleCategory] = useState(
    searchParams.get("c") || ""
    );
    const [tag, setTag] = useState(searchParams.get("t") || "");
  let limit = 10;
  const { API_SERVER_URL } = useContext(ServerContext);

  async function fetchArticles(query = search, category = articleCategory, articleTag = tag) {
    // console.log(`${API_SERVER_URL}/v1/posts/?search=${query}&category=${category}&tag=${articleTag}&limit=${limit}`);
    try {
      const res = await axios.get(
        `${API_SERVER_URL}/v1/posts/?search=${query}&category=${category}&tag=${articleTag}&limit=${limit}`
      );
      let { posts, success } = res.data;
      // return console.log(post)

      if (success) {
        setArticles(posts);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(`${error.message}`);
    }
  }
  function filterSearch(e) {
    setSearch(e.target.value);
    fetchArticles(e.target.value);
  }
  function filterCategory(category) {
    setArticleCategory(category);
    fetchArticles(search, category);
  }
  function clearTags() {
    setTag("");
    fetchArticles(search, articleCategory, "");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavBar currentPage="publications" />
      <div className="background">
        <div id="site-content">
          {articles && (
            <main className="main-content">
              <SearchBar
                search={search}
                filterSearch={filterSearch}
                articleCategory={articleCategory}
                filterCategory={filterCategory}
                tag={tag}
                clearTags={clearTags}
              />
              <ArticleList articles={articles} />
            </main>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
