import React, { useState } from 'react';

const Home = ({ house, removeHome }) => {
  const { id, name, image, info, sellerImage, sellerName, price } = house;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='seller'>
          <div className='seller-img'>
            <img src={sellerImage} alt='' />
          </div>
          <div className='seller-info'>
            <h3>{sellerName}</h3>
          </div>
        </div>
        <div className='close-icon'>
          <button
            type='button'
            className='btn-sm'
            onClick={() => removeHome(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className='card-body'>
        <img src={image} alt='' />
        <div className='pa-30 '>
          <div>
            <h2>${price}</h2>
            <h3>{name}</h3>
          </div>
          <div>
            <p>
              {readMore ? info : `${info.substring(0, 180)}...`}
              <button
                type='button'
                className='read-more'
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Show less' : '  Read more'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
