import Header from "./components/Header";
import Footer from "./components/Footer";
import RecommendCard from "./components/RecommendCard";
import SectionTitle from "./components/SectionTitle";
import { movies, series } from "./data/recommendations";
import "./styles/layout.css";

function App() {
  return (
    <div className="app">
      <Header title="영화, 시리즈 추천 페이지"/>

      <main className="main">
        <section className="intro">
          <h1>추천 모음</h1>
        </section>

        <section className="content-section">
          <SectionTitle title="추천 영화" />
          <div className="card-list">
            {movies.map((movie) => (
              <RecommendCard key={movie.id} title={movie.title} category={movie.genre} />
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionTitle title="추천 시리즈" />
          <div className="card-list">
            {series.map((item) => (
              <RecommendCard key={item.id} title={item.title} category={item.genre} />
            ))}
          </div>
        </section>
      </main>

      <Footer text="추천 영화와 시리즈 모음입니다." />
    </div>
  );
}

export default App;
