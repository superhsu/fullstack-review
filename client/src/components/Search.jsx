import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

//remember to use .bind on methods when passing it down to a component and onChange or onClick
//needed to use this binding because its another stateful component 
export default Search;

//onChange is changing the state of the input text value in the search bar we are passing it down to the input tag
//e.target.value to capture input text 
//the onClick is invoking the search function which is invoking the ajax call 