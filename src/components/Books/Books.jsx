import BookItem from "./BookItem";
import booksData from "../../assets/data";

export default function Books({ searchTerm, sortOption }) {
  const books = booksData.books;

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort books based on selected option
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "name_asc") {
      return a.bookName.localeCompare(b.bookName);
    } else if (sortOption === "name_desc") {
      return b.bookName.localeCompare(a.bookName);
    } else if (sortOption === "year_asc") {
      return a.publishedYear - b.publishedYear;
    } else if (sortOption === "year_desc") {
      return b.publishedYear - a.publishedYear;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
