import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Criar novo Post</h3>
        
        <div className="form-group">
          <label>Título</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categorias</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Conteúdo</label>
          <textarea className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Criar</button>
      </form>
    );
  }
}

//Aqui é passada a configuração do form para o ReduxForm
export default reduxForm({
  form: 'PostsNew', //não precisa ser o mesmo nome do componente, mas tem de ser único
  fields: ['title', 'categories', 'content']
})(PostsNew);

//Anotação apenas para registro. O que o ReduxForm faz é criar a seguinte
//estrutura dentro do Estado da aplicação
/*
state === {
  form: {
    PostsNewForm: { //Por isso o nome do form tem de ser único
      title: 'dados inseridos pelo usuario',
      categories: 'dados inseridos pelo usuario'
      content: 'dados inseridos pelo usuario'
    }
  }
}
*/
