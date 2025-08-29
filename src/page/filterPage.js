"use client";
import { useState } from "react";

import FooterForFilter from "../component/FooterForFilter.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { filter } from "../component/Filter.js";
import PageView from "../component/PageView.js";

const FilterPage = () => {
  const [query] = useState("");
  const [filters, setFilters] = useState({
    aw: false,
    color: false,
    ev: false,
    font: false,
    game: false,
    icon: false,
    model: false,
    trading: false,
  });

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered_Cards = filter.filter((card) => {
    const matchQuery = card.label?.toLowerCase().includes(query.toLowerCase());

    // รวม category ที่ถูกเลือก
    const activeFilters = Object.entries(filters)
      .filter(([_, value]) => value) // เอาเฉพาะ true
      .map(([key]) => key);

    // map state key → category จริงใน data
    const categoryMap = {
      aw: "AW",
      color: "Color",
      ev: "EV",
      font: "Font",
      game: "Game",
      icon: "Icon",
      model: "Model",
      trading: "Trading",
    };

    const selectedCategories = activeFilters.map((key) => categoryMap[key]);

    // ถ้าไม่มี filter ถูกเลือก → โชว์ทั้งหมด
    const matchCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(card.category)
        : false;

    return matchQuery && matchCategory;
  });

  return (
    <div className="dark">
       <div className="board-position">
        <div className="board-center">
          <div className="board-filter">
            <h1>
              <span className="animate__animated animate__bounceInDown">
                <i className="bx bx-search-alt-2"></i> Category
              </span>
              <div className="button-reset">
                <button
                  onClick={() =>
                    setFilters({
                      aw: false,
                      color: false,
                      ev: false,
                      font: false,
                      game: false,
                      icon: false,
                      model: false,
                      trading: false,
                    })
                  }
                >
                  Reset
                </button>
              </div>
            </h1>

            <div className="board-flexbox">
              <div className="show-card">
                {Object.keys(filters).map((key) => {
                  const icons = {
                    aw: "bxs-chip",
                    color: "bx-palette",
                    ev: "bx-extension",
                    font: "bx-font",
                    game: "bx-game",
                    icon: "bx-child",
                    model: "bx-body",
                    trading: "bx-line-chart",
                  };
                  const labels = {
                    aw: "Automation / Workflow",
                    color: "Color",
                    ev: "Extension VSCode",
                    font: "Font",
                    game: "Game",
                    icon: "Icon",
                    model: "Model",
                    trading: "Trading View",
                  };

                  return (
                    <div className="checkbox-wrapper-16" key={key}>
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          className={`checkbox-input ${
                            filters[key] ? "active" : ""
                          }`}
                          checked={filters[key]}
                          onChange={() => toggleFilter(key)}
                        />
                        <span className="checkbox-tile">
                          <span className="checkbox-icon">
                            <i className={`bx ${icons[key]}`}></i>
                          </span>
                          <span className="checkbox-label">{labels[key]}</span>
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-filter">
        <section id="up" className="home section">
        <div className="board-app">
          <div className="index-board">
            {filtered_Cards.length === 0 ? (
              <div className="load_er">
                <DotLottieReact
                  src="https://lottie.host/1e1d385f-2aa4-4611-a254-d8ec47550b58/kpciOIoK19.lottie"
                  className="img-loading"
                  width={500}
                  height={300}
                  loop
                  autoplay
                />
              </div>
            ) : (
              filtered_Cards.map((card) => (
                <div className="card" key={card.id}>
                  <img
                    className="logo max-w-[85px]"
                    src={card.logo}
                    alt={card.alt}
                  />
                  <div className="card__content">
                    <p className="card__title">{card.label}</p>
                    <p className="card__description">{card.des1}</p>
                    <p className="card__description">{card.linkInstall}</p>
                    <p className="card__description">{card.mainURL}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      </div>
      
      <PageView />

      <FooterForFilter />
      
    </div>
  );
};

export default FilterPage;
