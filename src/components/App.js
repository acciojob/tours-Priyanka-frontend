import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "./data";
import '../styles/App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = () => {
    setLoading(true);

    // Simulate API loading
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((oldTours) => {
      return oldTours.filter((tour) => tour.id !== id);
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <section>
          <h2>No tours left</h2>

          <button onClick={fetchTours}>
            Refresh
          </button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>

        <Tours
          tours={tours}
          removeTour={removeTour}
        />
      </section>
    </main>
  );
}

export default App;

