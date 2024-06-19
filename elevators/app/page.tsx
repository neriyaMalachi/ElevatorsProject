"use client";
import axios from "axios";
// import { useEffect } from "react";

export default  function Home() {
    axios.get("/api/server/testFolder");

  return <div className="Home">hellow</div>;
}
