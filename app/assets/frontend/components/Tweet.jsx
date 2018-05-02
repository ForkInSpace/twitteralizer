import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar teal lighten-5">
         <img src={this.props.gravatar} alt="" className="circle" />
         <span className="title">{this.props.name}</span>
         <p>{this.props.body}</p>
         <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
         <time className="right">{this.props.formattedDate}</time>
      </li>
    )
  }
}
