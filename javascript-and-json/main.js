var books = [
  {
    isbn: '123',
    title: 'JavaScript',
    author: 'Miori'
  },
  {
    isbn: '456',
    title: 'HTML',
    author: 'Kazuma'
  },
  {
    isbn: '789',
    title: 'CSS',
    author: 'Yuki'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var booksInJson = JSON.stringify(books);
console.log('JSON string of books:', booksInJson);
console.log('typeof booksInJson:', typeof booksInJson);

var student = {
  id: '1234',
  name: 'Miori'
};

var studentInJson = JSON.stringify(student);
console.log('JSON string of student:', studentInJson);
console.log('typeof studentInJson:', typeof studentInJson);

student = JSON.parse(studentInJson);
console.log('student:', student);
console.log('typeof student:', typeof student);
