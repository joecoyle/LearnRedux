var redux = require('redux');

console.log('starting redux example');
console.log('now');
var stateDefault = {
  name:'Anon',
  hobbies:[],
  movies:[]
};

var nextHobbyID = 1;
var nextMovieID = 1;


var reducer = (state=stateDefault,action)=>{
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyID++,
            hobby: action.hobby
          }
        ]
      };

    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie)=> movie.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id:nextMovieID++,
            title:action.title,
            genre:action.genre,
          }
        ]
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log(state);
});

store.dispatch({
  type:'CHANGE_NAME',
  name:'Joe'
});


store.dispatch({
  type:'ADD_HOBBY',
  hobby:'Eating'
});

store.dispatch({
  type:'ADD_HOBBY',
  hobby:'Drinking'
});


store.dispatch({
  type:'CHANGE_NAME',
  name:'Dom'
});


store.dispatch({
  type:'ADD_MOVIE',
  title:'Star Trek',
  genre:'SciFi'
});

store.dispatch({
  type:'ADD_MOVIE',
  title:'Django',
  genre:'Drama'
});

store.dispatch({
  type:'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type:'REMOVE_MOVIE',
  id: 1
});
