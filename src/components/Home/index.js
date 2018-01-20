import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import Tags from './Tags';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  RANDOM_TWEET
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onClickRandom: (pager, payload) =>
    dispatch({ type: RANDOM_TWEET, pager, payload }),
  onSearch: (query, pager, payload) =>
    dispatch({ type: RANDOM_TWEET, query, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const tweetsPromise = agent.tweets.all;

    this.props.onLoad(tab, tweetsPromise, Promise.all([agent.tweets.byTag, tweetsPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <Banner appName={'Daily Dose of Trump'} randomClick={this.props.onClickRandom} search={this.props.onSearch}/>

        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-4">
              <div className="sidebar">

                <p>Popular Searches</p>

                <Tags
                  tags={['Fake News', 'CNN', 'NBC', 'Russia', 'Mexico', 'Obama', 'Obamacare', 'deals', 'NFL', 'New York Times', 'MAGA']}
                  onClickTag={this.props.onClickTag} />

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
