import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const {post} = this.props;
    //Como os dados vem de uma api, vai ocorrer de
    //a primeira passagem por aqui estar com o objeto
    //nulo, pois a api ainda não respondeu. Como o
    //componente só renderiza novamente quando o estado
    //muda, só vai passar por aqui de novo quando a
    //api tiver respondido.
    if (!post) {
      return <div>Carregando...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categorias: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);
