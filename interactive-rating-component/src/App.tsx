import { GlobalStyle } from "./styles/global";
import { Card } from "./components/Card";
import { ThankYouCard } from "./components/ThankYouCard";
import { useState } from "react";

function App() {
  const [ratings, setRatings] = useState(false);

  function handleRatingsOnSubmit() {
    setRatings(true);
  }

  return (
    <>
      <GlobalStyle />
      {ratings ? (
        <ThankYouCard />
      ) : (
        <Card handleRatingsOnSubmit={handleRatingsOnSubmit} />
      )}
    </>
  );
}

export default App;
