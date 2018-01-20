import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { SET_PAGE } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: SET_PAGE, page, payload })
});


const ListPagination = props => {

  const increase = page => {
      let nextPage = props.currentPage + 1;
      props.onSetPage(nextPage, props.pager(nextPage));
  };

  const decrease = page => {
    if(props.currentPage > 0){
      let prevPage = props.currentPage - 1;
      props.onSetPage(prevPage, props.pager(prevPage));
    }
  };

  return (
    <div style={{width: 'fit-content', margin: 'auto', paddingTop: '20px'}}>
      <a onClick={decrease} className="previous round">&#8249;</a>
      <a onClick={increase} className="next round">&#8250;</a>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
