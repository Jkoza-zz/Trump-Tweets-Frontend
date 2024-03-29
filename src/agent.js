import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://vast-beyond-44689.herokuapp.com';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const tweets = {
	all:(page)=>
	requests.get(`/tweets?page=${page ? page : 0}`),
	byTag: (tag, page) =>
    requests.get(`/tweets/search?query=${encode(tag)}&page=${page ? page : 0}`),
	random: ()=>
	requests.get(`/tweets/random`)
};


export default {
  tweets,
  setToken: _token => { token = _token; }
};