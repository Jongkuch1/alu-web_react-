import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export function coursesNormalizer(data) {
  const normalized = normalize(data, [course]);

  return normalized.entities.courses;
}

export default coursesNormalizer;
