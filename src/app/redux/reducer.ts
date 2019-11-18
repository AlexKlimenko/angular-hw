import actions from './actions';

const { SELECT_IMG } = actions;
export default function reducer(state = '', action) {
  switch (action.type) {
    case SELECT_IMG:
      // tslint:disable-next-line:no-parameter-reassignment
      return action.payload;
    // {
    //   ...state,
    //   imgUrl: action.payload
    // };
    default:
      return state;
  }
}
