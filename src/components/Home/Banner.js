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
        <div className="row">
          <div className="col-md-3">
            <img src="http://www.freeiconspng.com/uploads/donald-trump-png-11.png" width='100%' height = "100%"/>
          </div>
          <div className="col-md-9">
            <h1 className="logo-font">
              {appName}
            </h1>
            <p>An engine to search Trump's Twitter. </p>
            <div style={{margin: 'auto', position: 'relative'}}>
              <input type="text" defaultValue="Find what Trump has to say about a certain topic" style={{borderRadius: '25px', paddingLeft: '10px'}} onChange={e => searchChange(e, e.target.value)} className="searcharticles" />
              <input type="submit" value="Search" onClick={e => handleSearch(e, query)}/>
              <div>
                <input type="submit" value="Random" onClick={handleRandom}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
