import Books from "../models/books.js";
import Users from "../models/users.js";
import Transactions from "../models/transactions.js";

const newTransaction = async (req, res) => {
  const { bookId, userId, type } = req.body;

  if (!bookId || !userId || !type) {
    return res.status(400).json({ message: "Please provide all details" });
  }

  try {

    const book = await Books.findById(bookId);
    const user = await Users.findById(userId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (type === "borrow" && book.status !== "Available") {
      return res.status(400).json({ message: "Book is not available for borrowing" });
    }

    if (type === "return" && book.status === "Available") {
      return res.status(400).json({ message: "Book is already marked as 'Available'" });
    }

    const newTransaction = new Transactions({
      bookId,
      userId,
      type,
      date: Date.now(),
    });

    const savedTransaction = await newTransaction.save();

    if (type === "borrow") {
      user.borrowed.push(book._id);
      await user.save();
      book.status = "Not Available";
      await book.save();
    }

    if (type === "return") {
      user.borrowed.pull(book._id);
      await user.save();
      book.status = "Available";
      await book.save();
    }

    return res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const allTransactions = async (req, res) => {
  try {
    const allTransaction = await Transactions.find({});
    res.json(allTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserTransactions = async (req, res) => {
  const {userId}=req.params;

  try {
    const currentUser = await Users.find({userId})
    const booksBorrowed=currentUser.borrowed
    .populate("bookId","title author status year")
    .populate("userId","name");

    if(booksBorrowed.length === 0){
      res.status(404).json({message:"No Books Borrowed"});
    } 

    const countBooksBorrowed= booksBorrowed.length;
    
    res.status(200).json({
       booksBorrowed,
      countBooks:countBooksBorrowed,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }


}


export { newTransaction, allTransactions ,getUserTransactions};
