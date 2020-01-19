import axios from "axios";

export default {
  // Gets books from query
  getBooks: function(query) {
    return axios.get("/api/books/bookSearch", { params: { q: query} });
  },
  // Gets all books
  getBook: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};