"use client";

/* components */
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import Catalogue from "@/components/Catalogue/Catalogue";
import Search from "@/components/Search/Search";
import Slider from "@/components/Slider/Slider";

/* react */
// import { useState } from "react";

/* hooks */
// [cards, setCards] = useState([]);

export default function Home() {
  return (
    <>
      <Header>
        <>
          <Logo />
          <Catalogue />
          <Search />
        </>
      </Header>
      <main className="main">
        {/* <Slider  /> */}
        {/* <CardList/> */}
      </main>
    </>
  );
}
