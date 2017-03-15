import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props; //Sintaxe ES6

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Criar novo Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Título</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categorias</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Conteúdo</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Criar</button>
        <Link to="/" className="btn btn-danger">Cancelar</Link>
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

  if (!values.categories) {
    errors.categories = 'Informe pelo menos uma categoria'; //o nome da propriedade deve ser o nome do campo
  }

  if (!values.content) {
    errors.content = 'Preencha o conteúdo'; //o nome da propriedade deve ser o nome do campo
  }

  return errors;
}

//Aqui é passada a configuração do form para o ReduxForm, tem o mesmo comportamento
//do connect do React.
//connect: primeiro argumento é o mapStateToProps, segundo é o mapDispatchToProps
//reduxForm: primeiro é configuração do form, depois os do connect
export default reduxForm({
  form: 'PostsNewForm', //não precisa ser o mesmo nome do componente, mas tem de ser único
  fields: ['title', 'categories', 'content'],
  validate //função declarada para validação
}, null, {createPost})(PostsNew);

//Anotação apenas para registro. O que o ReduxForm faz é criar a seguinte
//estrutura (neste exemplo) dentro do Estado da aplicação
/*
state === {
  form: {
    PostsNewForm: { //Por isso o nome do form tem de ser único
      title: 'campo do form com dados inseridos pelo usuario',
      categories: 'campo do form com dados inseridos pelo usuario'
      content: 'campo do form com dados inseridos pelo usuario'
    }
  }
}
*/
