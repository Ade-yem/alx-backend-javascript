export default function getStudentsByLocation (list, city) {
  return list.filter(key => { return key.location === city; });
}
