import  GetPerson  from "./untils";


// export function Avatar({ person, size }) {
//     return (
//       <img
//         className="avatar"
//         src={getImageUrl(person)}
//         alt={person.name}
//         width={size}
//         height={size}
//       />
//     );
//   }

export function Player({person}){
    return (
      <div>
      details = {GetPerson(person)}
      </div>
    )
}