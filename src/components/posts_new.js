import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props; //Sintaxe ES6

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Criar novo Post</h3>

        <div className="form-group">
          <label>Título</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categorias</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Conteúdo</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Criar</button>
      </form>
    );
  }
}

// A função é chamada sempre que o form é alterado, e previne que o form seja enviado
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Informe um título'; //o nome da propriedade deve ser o nome do campo
  }

  return errors;
}

//Aqui é passada a configuração do form para o ReduxForm, tem o mesmo comportamento
//do connect do React.
//connect: primeiro argumento é o mapStateToProps, segundo é o mapDispatchToProps
//redurForm: primeiro é configuração do form, depois os do connect
export default reduxForm({
  form: 'PostsNewForm', //não precisa ser o mesmo nome do componente, mas tem de ser único
  fields: ['title', 'categories', 'content'],
  validate //função declarada para validação
}, null, {createPost})(PostsNew);

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
