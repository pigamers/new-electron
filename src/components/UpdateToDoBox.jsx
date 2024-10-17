import React, { useState, useEffect } from 'react';

export default function UpdateToDoBox({ onClose, onSubmit, initialValue }) {
    const [todo, setTodo] = useState('');

    // Set the initial value when the component mounts
    useEffect(() => {
        setTodo(initialValue);
    }, [initialValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            onSubmit(todo); // Submit the updated todo
            setTodo(''); // Reset the input
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Update the Todo</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Enter your todo"
                        className="border border-gray-300 h-40 rounded-lg p-2 w-full mb-4"
                    />
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                        >
                            Update Todo
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
