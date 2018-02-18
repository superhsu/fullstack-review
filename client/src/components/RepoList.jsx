import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => {
console.log(props.repos);
return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  <div> 
    {props.repos.map((ele) => (
      <RepoEntry ele={ele}/> 
    ))}
    </div>
  </div>
)
}

export default RepoList;