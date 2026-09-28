import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export const initialCourseState = [];

export function courseReducer(state = initialCourseState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));

    case SELECT_COURSE: {
      const coursesById = new Map(state.map((course) => [course.id, course]));
      const course = coursesById.get(action.index);
      if (course) {
        coursesById.set(action.index, { ...course, isSelected: true });
      }
      return Array.from(coursesById.values());
    }

    case UNSELECT_COURSE: {
      const coursesById = new Map(state.map((course) => [course.id, course]));
      const course = coursesById.get(action.index);
      if (course) {
        coursesById.set(action.index, { ...course, isSelected: false });
      }
      return Array.from(coursesById.values());
    }

    default:
      return state;
  }
}

export default courseReducer;
