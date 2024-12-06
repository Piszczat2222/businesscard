import React from 'react';

const Grades = ({ grades }) => (
    <div>
        <p>Grades:</p>
        <ul>
            {grades.map((grade, index) => (
                <li key={index}>{grade}</li>
            ))}
        </ul>
    </div>
);

export default Grades;
