import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { Tweet } from 'react-twitter-widgets'

const tweetPreview = props => {
	return (
		<Tweet tweetId={props.tweet.id_str} 
    	/>
	);
}

export default tweetPreview;
