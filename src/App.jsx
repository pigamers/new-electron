import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast'; // Import toast
import AddToDoBtn from './components/AddToDoBtn';
import UpdateToDoBox from './components/UpdateToDoBox';
import { ImBin } from "react-icons/im";
import { RxUpdate } from "react-icons/rx";
import AddToDoBox from './components/AddToDoBox';


function App() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);

    // Show welcome toast message
    toast.success('Click on "Add To Do" to start!', {duration: 3000});
  }, []);

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setIsAddDialogOpen(false);
    toast.success('Todo added successfully!'); // Success message
  };

  const handleCloseAddDialog = () => {
    setIsAddDialogOpen(false);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setIsUpdateDialogOpen(true);
  };

  const handleUpdateTodo = (todo) => {
    const updatedTodos = todos.map((t, index) => (index === editIndex ? todo : t));
    setTodos(updatedTodos);
    setEditIndex(null);
    setIsUpdateDialogOpen(false);
    toast.success('Todo updated successfully!'); // Success message
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    toast.success('Todo deleted successfully!'); // Success message
  };

  return (
    <div className="p-4">

      <AddToDoBtn onClick={() => setIsAddDialogOpen(true)} />

      {isAddDialogOpen && (
        <AddToDoBox
          onClose={handleCloseAddDialog}
          onSubmit={handleAddTodo}
        />
      )}

      {isUpdateDialogOpen && (
        <UpdateToDoBox
          onClose={() => setIsUpdateDialogOpen(false)}
          onSubmit={handleUpdateTodo}
          initialValue={todos[editIndex]}
        />
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Todos:</h2>
        <div className="space-y-4 mt-2">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 border flex justify-between items-center"
            >
              <span>{todo}</span>
              <div className="flex space-x-2">
                <RxUpdate onClick={() => handleEditTodo(index)} className="cursor-pointer text-blue-500" />
                <ImBin onClick={() => handleRemoveTodo(index)} className="cursor-pointer text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
