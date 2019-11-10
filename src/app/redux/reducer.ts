import actions from './actions';

const { SELECTIMG } = actions;
export default function reducer(state = '', action) {
  switch (action.type) {
    case SELECTIMG:
      // tslint:disable-next-line:no-parameter-reassignment
      return action.payload;
    default:
      return state;
  }
}
