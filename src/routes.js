import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//Mapeando routes para componentes
export default ( //Sempre que uma route é aninhada, o componente pai tem de
  //renderizar um this.props.children.
  //Uma IndexRoute funciona como se fosse uma route aninhada com
  //o mesmo path da route pai.
  //Ao usar um parametro na url do path, ele vai para o
  //this.props.params.nomedoparametro do componente
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
