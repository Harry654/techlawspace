import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import ArticleCard from "../../components/articleCard/ArticleCard";
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
            <ArticleCard
              article={{
                thumbnail: "../../images/bg.jpg",
                title: "A new day",
                date: "21-02-2023",
              }}
            />
            {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
