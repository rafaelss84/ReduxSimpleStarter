import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

const Greeting =() => {
  return <div>Hey There!</div>;
};

//Mapeando routes para componentes
export default ( //Sempre que uma route é aninhada, o componente pai tem de
  //renderizar um this.props.children
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);
