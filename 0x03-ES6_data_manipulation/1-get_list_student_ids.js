export default function getListStudentIds (list) {
  if (!Array.isArray(list)) return [];
  return list.map((key) => { return key.id; });
}
