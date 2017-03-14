import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//Mapeando routes para componentes
export default ( //Sempre que uma route é aninhada, o componente pai tem de
  //renderizar um this.props.children.
  //Uma IndexRoute funciona como se fosse uma route aninhada com
  //o mesmo path da route pai
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
