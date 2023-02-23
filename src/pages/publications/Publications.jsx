import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import ArticleList from "../../components/articleList/ArticleList";
import { Fragment } from "react";

function Publications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar currentPage="publications" />
      <div className="background">
        <div id="site-content">
          <main className="main-content">
            <SearchBar />
            <ArticleList />
            {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
