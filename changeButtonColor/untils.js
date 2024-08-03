// export function getImageUrl(person, size) {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       size +
//       '.jpg'
//     );
//   }

export default function GetPerson(person) {
  return (
    `score: ${person.runs}  ,` + `playername: ${person.name}`
  )
} 