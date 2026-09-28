import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('course action creators', () => {
  it('selectCourse returns the right action', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse returns the right action', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
