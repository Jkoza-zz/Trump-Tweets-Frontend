import React from 'react';
import Image from 'react';
import agent from '../../agent';

const Banner = ({ appName, randomClick, search, token }) => {
  let query = '';

  const handleRandom = ev => {
    ev.preventDefault();
    randomClick(page => agent.tweets.random(page), agent.tweets.random());
  };

  const searchChange = (ev, value) => {
    ev.preventDefault();
    query = value;
  };

  const handleSearch = (ev, query) => {
    ev.preventDefault();
      search(query, page => agent.tweets.byTag(query, page), agent.tweets.byTag(query));
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="row" style={{width: 'fit-content', margin: 'auto'}}>
          <div className="col-md-4">
            <img src="http://www.freeiconspng.com/uploads/donald-trump-png-11.png" width='100%' height = "100%"/>
          </div>
          <div className="col-md-8">
            <h1 className="logo-font">
              {appName}
            </h1>
            <p>An engine to search Trump's Twitter. </p>
            <div style={{width: 'fit-content', margin: 'auto', paddingTop : '15px'}}>
              <input type="text" placeholder="search..." style={{borderRadius: '25px', paddingLeft: '10px', height: '38', paddingRight: '10px'}} onChange={e => searchChange(e, e.target.value)} className="searcharticles" />
              <input type="submit" value="Search" onClick={e => handleSearch(e, query)} style={{marginLeft : '5px'}} className='btn btn-primary'/>
              <input type="submit" value="Random" onClick={handleRandom} className='btn' style={{marginLeft : '5px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
