import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO make ajax post request 
    $.ajax({
      type: 'POST', 
      url: '/repos', // /repos is a URL i create on my ajax request and express server request so that the express server can respond to that url post request. 
      data: term,
      contentType: 'text/plain', //if you dont give a datatype if will send a default one where you need to use urlencoder body parser
      success: function (data) {
        console.log('success!')
      },
      error: function () {
        console.log('err') 
      }
    })
  }

  getUserRepo () {
    var that = this; 
    $.ajax({
      type: 'GET',
      url: '/repos',
      contentType: 'text/plain',
      success: function (data) {
        console.log(data);
        that.setState ({
          repos: data
        })
      },
      error: function () {
        console.log('err');
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)}/>
      <button onClick={this.getUserRepo.bind(this)}>show user repos</button> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//top most level 
//search function is getting passed down
//use contentType for ajax request (not dataType)
