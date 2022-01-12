import MessagesContainer from "../../containers/MessagesContainer";
import SendContainer from "../../containers/SendContainer";
import React from "react";


const Home = () => {
  return (
    <>
      <h2 className="home-title">Chat APP</h2>
      <div id="container">
        <main>
          <MessagesContainer />
          <SendContainer />
        </main>
      </div>
    </>
  );
};
export default Home;
