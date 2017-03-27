import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
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
        <Link to="/">Voltar para o índice</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Deletar Post
        </button>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
