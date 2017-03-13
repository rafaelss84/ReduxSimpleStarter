import React, {Component} from 'react';

class PostsIndex extends Component {
  //Método do ciclo de vida do componente,
  //o nome é definido pelo React
  componentWillMount() {
    console.log('chamar o action creator aqui para buscar os posts');
  }

  render() {
    return (
      <div>Lista de posts do blog</div>
    );
  }
}

export default PostsIndex;
