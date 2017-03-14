import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//Importa a variavel reducer com o nome formReducer, pra
//evitar conflitos
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
