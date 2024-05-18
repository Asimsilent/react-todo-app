import React from "react";
import HomeHero from "./components/HomeHero";
import Layout from "../../components/layout/Layout";
import TodoList from "../../components/TodoList";

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <TodoList />
    </Layout>
  );
};

export default Home;
