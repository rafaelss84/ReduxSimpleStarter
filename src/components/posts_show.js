import React, {Component} from 'react';

class PostsShow extends Component {
  render() {
    return <div>Mostar post {this.props.params.id}</div>;
  }
}

export default PostsShow;
