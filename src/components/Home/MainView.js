import TweetList from '../TweetList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { RESET } from '../../constants/actionTypes';

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.reset(agent.tweets.all, agent.tweets.all('0'));
  };
  return (
    <li className="nav-item" style={{width: 'fit-content', margin: 'auto'}}>
      <a
        href=""
        className={ 'nav-link active' }
        onClick={clickHandler}>
       All
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.tweets
});

const mapDispatchToProps = dispatch => ({
  reset: (pager, payload) => dispatch({ type: RESET, pager, payload })
});

const MainView = props => {
  return (
    <div className="col-md-8">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

          <GlobalFeedTab tab={props.tab} reset={props.reset} />
        </ul>
      </div>

      <TweetList
        tweets={props.tweets}
        pager={props.pager} 
        currentPage={props.currentPage}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
