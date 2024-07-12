"use client";

/* components */
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import Catalogue from "@/components/Catalogue/Catalogue";
import Search from "@/components/Search/Search";
import Slider from "@/components/Slider/Slider";
import CardList from "@/components/CardList/CardList";

/* react */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  /* hooks */
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://649009021e6aa71680ca6400.mockapi.io/items").then(
      (response) =>
        response.json().then((data) => {
          setCards(data);
        })
    );
  }, []);

  return (
    <>
      <Header>
        <>
          <Catalogue />
          <Search />
        </>
      </Header>
      <main className="main">
        {/* <Slider  /> */}
        <CardList cards={cards} />
      </main>
    </>
  );
}
