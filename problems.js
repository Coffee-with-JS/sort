// let items = [
//     { name: "Banana", price: 50 },
//     { name: "Apple", price: 20 },
//     { name: "Orange", price: 30 }
// ];

// // sort in ascending order

// items.sort((a,b) => a.price - b.price)

// console.log(items)


// let employees = [
//         { name: "Hannah", department: "Finance" },
//         { name: "Sarah", department: "IT" },
//         { name: "Zryan", department: "Finance" },
//         { name: "Mike", department: "IT" },
//         { name: "Yshley", department: "Finance" },
//         { name: "Jeff", department: "IT" }
// ];

// sort these obj based on their departmrnt in descending  order
// now if two department are same then sort it out based on their name in descending order

// employees.sort((a,b)=>{
//     if(a.department > b.department){
//         return 1
//     }
//     else if(a.department < b.department){
//         return -1
//     }
//     else if(a.department == b.department){
//         if(a.name > b.name){
//              return  -1
//         }
//         else if(a.name < b.name){
//             return  1
//         }
//     }
// })

// console.log(employees)


// "Tam" - "Zryan" // NaN



// let books = [
//     { title: "Book B", author: { firstName: "John", lastName: "Doe" } },
//     { title: "Book A", author: { firstName: "Jane", lastName: "Doe" } },
//     { title: "Book C", author: { firstName: "Alice", lastName: "Johnson" } },
//     { title: "Book D", author: { firstName: "Mike", lastName: "Smith" } }
//   ];

  // sort it based on author's last name in  descending order
  // if last name is same then sort it out based on author's first name in ascending order


//   books.sort((a,b)=>{
//      if(a.author.lastName > b.author.lastName){
//          return -1
//      }
//      else if(a.author.lastName < b.author.lastName){
//          return  1
//      }
//      else if(a.author.lastName == b.author.lastName){

//           if(a.author.firstName > b.author.firstName){
//               return 1
//           }
//         else if(a.author.firstName < b.author.firstName){
//                 return -1
//         }
//      }
//   })

//   console.log(books)