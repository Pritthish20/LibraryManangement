import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col mt-4 gap-6 px-4 md:px-8">
            {/* Summary Cards */}
            <div className="flex flex-wrap gap-4">
                <div className="h-48 w-48 flex flex-col items-center justify-center rounded-lg bg-blue-100 shadow-lg border">
                    <span className="text-3xl font-semibold text-blue-600">34</span>
                    <span className="text-gray-600 font-normal text-xl">Total Books</span>
                </div>
                <div className="h-48 w-48 flex flex-col items-center justify-center rounded-lg bg-blue-100 shadow-lg border">
                    <span className="text-3xl font-semibold text-blue-600">12</span>
                    <span className="text-gray-600 font-normal text-xl">Borrowed by You</span>
                </div>
            </div>

            {/* Responsive Tables */}
            <div className="flex flex-wrap gap-6">
                {/* Transaction Table */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Transactions</h2>
                    <div className="overflow-y-auto max-h-96">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wide">
                                    <th className="px-4 py-3 border">User</th>
                                    <th className="px-4 py-3 border">Book</th>
                                    <th className="px-4 py-3 border">Date</th>
                                    <th className="px-4 py-3 border">Type</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Array(20).fill(1).map((_, index) => (
                                    <tr
                                        className="text-gray-800 hover:bg-gray-100 text-sm"
                                        key={index}
                                    >
                                        <td className="px-4 py-3 border">User {index + 1}</td>
                                        <td className="px-4 py-3 border">Book {index + 1}</td>
                                        <td className="px-4 py-3 border">Date</td>
                                        <td className="px-4 py-3 border">Borrow</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Books Table */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Books</h2>
                    <div className="overflow-y-auto max-h-96">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wide">
                                    <th className="px-4 py-3 border">Name</th>
                                    <th className="px-4 py-3 border">Author</th>
                                    <th className="px-4 py-3 border">Year</th>
                                    <th className="px-4 py-3 border">Update</th>
                                    <th className="px-4 py-3 border">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(20).fill(1).map((_, index) => (
                                    <tr
                                        className="text-gray-800 hover:bg-gray-100 text-sm"
                                        key={index}
                                    >
                                        <td className="px-4 py-3 border">Book {index + 1}</td>
                                        <td className="px-4 py-3 border">Author {index + 1}</td>
                                        <td className="px-4 py-3 border">{2000 + index}</td>
                                        <td className="px-4 py-3 border text-center">
                                            <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded cursor-pointer">
                                                Update
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 border text-center">
                                            <button className="px-2 py-1 bg-red-100 text-red-600 rounded cursor-pointer">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
