import { handleGetAllSingers } from "../services/singersServices";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    (async () => {
      const x = await handleGetAllSingers();
      console.log(x.data);
    })();
  }, []);

  return <div>Home</div>;
};

export default Home;
