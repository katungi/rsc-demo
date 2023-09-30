import React from "react";
import { hydrateRoot } from "react-dom/client";
import Layout from "./layout";
import List from "./pages/list";
import Detail from "./pages/detail";

const searchParams = new URLSearchParams(location.search);
const characterId = searchParams.get("id");

const root = hydrateRoot(
  document,
  <Layout bgColor="white">
    {location.pathname === "/list" ? <List /> : <Detail id={characterId} />}
  </Layout>
);
