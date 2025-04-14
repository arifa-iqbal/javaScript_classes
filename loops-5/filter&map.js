// let start filter today's topic
// filter is a method that creates a new array with all elements that pass the test implemented by the provided function
// let understand filter with example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNbrs = numbers.filter((num) => num > 5);

// so filter returns a callback function that returns a new array with all elements that pass the test implemented by the provided function
// what if i want to do the same work in foreach loop

// const newNumbers = [];
// numbers.forEach((num) => {
//   if (num > 5) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);
// let creat a mine array of books and filter the books there genre is history
const books = [
  { title: "book1", genre: "history", publish: 1990, edition: 2000 },
  { title: "book2", genre: "fiction", publish: 1996, edition: 2001 },
  { title: "book3", genre: "history", publish: 1987, edition: 1999 },
  { title: "book4", genre: "non-fiction", publish: 1994, edition: 2010 },
  { title: "book5", genre: "science", publish: 1988, edition: 2000 },
  { title: "book6", genre: "fiction", publish: 1997, edition: 2022 },
  { title: "book7", genre: "fiction", publish: 1995, edition: 2012 },
  { title: "book8", genre: "non-fiction", publish: 1993, edition: 2020 },
  { title: "book9", genre: "history", publish: 1996, edition: 2016 },
  { title: "book10", genre: "science", publish: 1990, edition: 2018 },
  { title: "book11", genre: "science", publish: 1980, edition: 2001 },
  { title: "book12", genre: "fiction", publish: 1988, edition: 2000 },
  { title: "book13", genre: "non-fiction", publish: 1989, edition: 2001 },
  { title: "book14", genre: "non-fiction", publish: 1998, edition: 2010 },
  { title: "book15", genre: "history", publish: 1999, edition: 2009 },
  { title: "book16", genre: "science", publish: 2000, edition: 2015 },
  { title: "book17", genre: "history", publish: 1994, edition: 2005 },
];
// const userBooks = books.filter((bks) => bks.genre === "fiction");
const userBooks = books.filter((bks) => bks.publish <= 1990);
console.log(userBooks);
