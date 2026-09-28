import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import store from '../store';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const boundSelectCourse = bindActionCreators(selectCourse, store.dispatch);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse, store.dispatch);
