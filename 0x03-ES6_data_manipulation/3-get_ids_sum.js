export default function getStudentIdsSum (list) {
  return list.reduce((acc, cur) => { return acc + cur.id; }, 0);
}
