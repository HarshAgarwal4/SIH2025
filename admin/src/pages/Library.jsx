import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ---------------- LIBRARIAN PANEL ----------------
const LibrarianPanel = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [users, setUsers] = useState([]); // {name, issuedBooks: []}
  const [transactions, setTransactions] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", stock: 1 });
  const [newUser, setNewUser] = useState("");
  const navigate = useNavigate()

  const calculateFine = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    if (today > due) {
      const diffDays = Math.ceil((today - due) / (1000 * 60 * 60 * 24));
      return diffDays * 2; // ₹2 per day
    }
    return 0;
  };

  // ---------------- BOOK MANAGEMENT ----------------
  const handleAddBook = () => {
    if (newBook.title.trim() === "" || newBook.author.trim() === "") return;
    setLibraryBooks((prev) => [...prev, { ...newBook }]);
    setNewBook({ title: "", author: "", stock: 1 });
  };

  const handleDeleteBook = (title) => {
    setLibraryBooks(libraryBooks.filter((b) => b.title !== title));
  };

  // ---------------- USER MANAGEMENT ----------------
  const handleAddUser = () => {
    if (newUser.trim() === "") return;
    if (users.some((u) => u.name === newUser)) {
      alert("⚠️ User already exists!");
      return;
    }
    setUsers((prev) => [...prev, { name: newUser, issuedBooks: [] }]);
    setNewUser("");
  };

  // ---------------- ISSUE BOOK ----------------
  const handleIssueBook = (userName, bookTitle) => {
    const user = users.find((u) => u.name === userName);
    const book = libraryBooks.find((b) => b.title === bookTitle);

    if (!user || !book) return;
    if (user.issuedBooks.length >= 2) {
      alert("⚠️ User can issue maximum of 2 books only!");
      return;
    }
    if (book.stock <= 0) {
      alert("⚠️ Book out of stock!");
      return;
    }

    const today = new Date();
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + 14);

    const newIssuedBook = {
      title: book.title,
      author: book.author,
      issueDate: today.toLocaleDateString(),
      dueDate: dueDate.toLocaleDateString(),
    };

    // Update user
    const updatedUsers = users.map((u) =>
      u.name === userName
        ? { ...u, issuedBooks: [...u.issuedBooks, newIssuedBook] }
        : u
    );
    setUsers(updatedUsers);

    // Decrease stock
    setLibraryBooks(
      libraryBooks.map((b) =>
        b.title === book.title ? { ...b, stock: b.stock - 1 } : b
      )
    );

    // Log transaction
    setTransactions((prev) => [
      ...prev,
      `Issued: "${book.title}" to ${userName} on ${today.toLocaleDateString()} (Due: ${dueDate.toLocaleDateString()})`,
    ]);
  };

  // ---------------- RETURN BOOK ----------------
  const handleReturnBook = (userName, bookTitle) => {
    const user = users.find((u) => u.name === userName);
    if (!user) return;

    const book = user.issuedBooks.find((b) => b.title === bookTitle);
    const fine = calculateFine(book.dueDate);

    // Update user
    const updatedUsers = users.map((u) =>
      u.name === userName
        ? { ...u, issuedBooks: u.issuedBooks.filter((b) => b.title !== bookTitle) }
        : u
    );
    setUsers(updatedUsers);

    // Increase stock
    setLibraryBooks(
      libraryBooks.map((b) =>
        b.title === bookTitle ? { ...b, stock: b.stock + 1 } : b
      )
    );

    // Log transaction
    setTransactions((prev) => [
      ...prev,
      fine > 0
        ? `Returned: "${bookTitle}" by ${userName} late with fine ₹${fine} on ${new Date().toLocaleDateString()}`
        : `Returned: "${bookTitle}" by ${userName} on ${new Date().toLocaleDateString()}`,
    ]);
  };

  // ---------------- REPORT ----------------
  const calculateTotalFine = () => {
    let total = 0;
    transactions.forEach((t) => {
      const match = t.match(/₹(\d+)/);
      if (match) total += parseInt(match[1]);
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📖 Librarian Dashboard</h1>
        <button onClick={() => {navigate('/')}}>Back</button>
      </header>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Management */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="font-semibold mb-3">📚 Manage Books</h2>
          <input
            type="text"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            placeholder="Book Title"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            placeholder="Author"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            value={newBook.stock}
            onChange={(e) => setNewBook({ ...newBook, stock: parseInt(e.target.value) })}
            min="1"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddBook}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-3"
          >
            Add Book
          </button>

          <h3 className="font-semibold mt-4">All Books</h3>
          <ul className="mt-2">
            {libraryBooks.length === 0 && <li>No books available</li>}
            {libraryBooks.map((book, index) => (
              <li key={index} className="flex justify-between items-center border-b py-1">
                <span>
                  {book.title} by {book.author} — Stock: {book.stock}
                </span>
                <button
                  onClick={() => handleDeleteBook(book.title)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* User Management */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="font-semibold mb-3">👤 Manage Users</h2>
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter user name"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddUser}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-3"
          >
            Add User
          </button>

          <h3 className="font-semibold mt-4">All Users</h3>
          <ul className="mt-2">
            {users.length === 0 && <li>No users available</li>}
            {users.map((user, idx) => (
              <li key={idx} className="border-b py-2">
                <strong>{user.name}</strong>
                <ul className="ml-4 mt-2">
                  {user.issuedBooks.length === 0 && <li>No books issued</li>}
                  {user.issuedBooks.map((book, i) => (
                    <li key={i} className="flex justify-between items-center">
                      {book.title} (Due: {book.dueDate})
                      <button
                        onClick={() => handleReturnBook(user.name, book.title)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 ml-2"
                      >
                        Return
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Issue Book Dropdown */}
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      handleIssueBook(user.name, e.target.value);
                      e.target.value = "";
                    }
                  }}
                  className="border p-2 rounded mt-2"
                >
                  <option value="">-- Issue Book --</option>
                  {libraryBooks
                    .filter((b) => b.stock > 0)
                    .map((b, i) => (
                      <option key={i} value={b.title}>
                        {b.title}
                      </option>
                    ))}
                </select>
              </li>
            ))}
          </ul>
        </div>

        {/* Transactions & Reports */}
        <div className="bg-white shadow rounded-lg p-5 col-span-2">
          <h2 className="font-semibold mb-3">📊 Transactions & Reports</h2>
          {transactions.length === 0 ? (
            <p>No transactions yet</p>
          ) : (
            <ul>
              {transactions.map((t, index) => (
                <li key={index}>• {t}</li>
              ))}
            </ul>
          )}
          <p className="mt-3 font-bold">
            Total Fine Collected: ₹{calculateTotalFine()}
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------- MAIN APP ----------------
const LibrarySystem = () => {
  return <LibrarianPanel />;
};

export default LibrarySystem;
