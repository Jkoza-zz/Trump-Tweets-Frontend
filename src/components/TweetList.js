import TweetPreview from './TweetPreview';
import ListPagination from './ListPagination';
import React from 'react';

const tweetList = props => {
  if (!props.tweets) {
    return (
      <div className="tweet-preview">Loading...</div>
    );
  }

  if (props.tweets.length === 0) {
    return (
      <div className="tweet-preview">
        No tweets are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.tweets.map(tweet => {
          return (
            <TweetPreview tweet={tweet}/>
          );
        })
      }

      <ListPagination
        pager={props.pager}
        tweetsCount={props.tweetsCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default tweetList;
