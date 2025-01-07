import React, { useState } from 'react';

const AddBook = () => {
    const [form, setForm] = useState({
        name: '',
        author: '',
        year: '',
    });
    const [books, setBooks] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.author && form.year) {
            setBooks([...books, form]);
            setForm({ name: '', author: '', year: '' }); // Clear the form
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="flex flex-col w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Update Book</h1>
                <form className="flex flex-col items-center gap-5 mb-8" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Book Name"
                        className="w-full border border-blue-300 hover:border-blue-400 focus:border-blue-500 p-3 focus:outline-none bg-white focus:ring focus:ring-blue-200 rounded-lg text-gray-700 text-base shadow-sm"
                    />
                    <input
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Author"
                        className="w-full border border-blue-300 hover:border-blue-400 focus:border-blue-500 p-3 focus:outline-none bg-white focus:ring focus:ring-blue-200 rounded-lg text-gray-700 text-base shadow-sm"
                    />
                    <input
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        placeholder="Publication Year"
                        className="w-full border border-blue-300 hover:border-blue-400 focus:border-blue-500 p-3 focus:outline-none bg-white focus:ring focus:ring-blue-200 rounded-lg text-gray-700 text-base shadow-sm"
                    />
                    <button
                        type="submit"
                        className="p-3 bg-blue-800 text-white w-80 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                    >
                        Add Book
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default AddBook;
