import React from 'react';

export default function AddToDoBtn({ onClick }) {
    return (
        <div className='flex justify-center mt-5'>
            <button 
                className='bg-yellow-400 p-3 rounded-lg'
                onClick={onClick}
            >
                Add To Do +
            </button>
        </div>
    );
}
