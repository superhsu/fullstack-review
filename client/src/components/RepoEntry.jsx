import React from 'react';
import RepoList from './RepoList.jsx';


const RepoEntry = (props) => (
<div>
<div> {props.ele.id} </div>
<div> {props.ele.fullName} </div> 
<div> {props.ele.owner.login} </div> 
<div> {props.ele.link} </div> 
 <div> {props.ele.name} </div> 
</div>
)

export default RepoEntry; 