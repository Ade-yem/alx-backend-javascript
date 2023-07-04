export default function getStudentsByLocation(list, city) {
  return list.filter((key) => key.location === city);
}
