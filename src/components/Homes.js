import React, { useState, useEffect } from 'react';
import Home from './Home';
import Loading from './Loading';
import axios from 'axios';

const url = 'https://monir-api.herokuapp.com/api/buy-home';

const Homes = () => {
  const [loading, setLoading] = useState();
  const [house, setHouse] = useState([]);

  const removeHome = (id) => {
    const newHouses = house.filter((tour) => tour.id !== id);
    setHouse(newHouses);
  };
  const fetchHouse = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      setHouse(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHouse();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (house.length === 0) {
    return (
      <div className='container'>
        <div className='row py-100'>
          <div className='col-6 mx-auto'>
            <div className='text-center'>
              <h2 className='mb-50'>NO MORE HOMES 😢</h2>
              <button className='btn-sm' onClick={() => fetchHouse()}>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='row'>
      <div className='col-6 mx-auto'>
        {house.map((house) => (
          <article key={house.id}>
            <Home house={house} removeHome={removeHome} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Homes;
