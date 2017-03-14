import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  //Método do ciclo de vida do componente,
  //o nome é definido pelo React
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Adicionar Postagem
          </Link>
        </div>
        Lista de posts do blog
      </div>
    );
  }
}
//Um atalho para não precisar usar a mapDispatchToProps
//junto com a sintaxe ES6 pra atribuição de variáveis
//com mesmo nome fetchPosts
export default connect(null, {fetchPosts})(PostsIndex);