import React from 'react';
import Name from './Name';
import Index from './Index';
import BirthDate from './BirthDate';
import Address from './Address';
import Group from './Group';
import Scholarship from './Scholarship';
import Grades from './Grades';

const Students = () => {
    const studentsData = [
        {
            id: 1,
            name: "Mateusz Pruszynski",
            index: "123456",
            birthDate: "2002-01-01",
            address: "Bialystok, Most 10",
            group: "D",
            scholarship: 2000,
            grades: [1, 1, 2, 1.5],
        },
        {
            id: 2,
            name: "Przemysław Żero",
            index: "111111",
            birthDate: "2023-01-01",
            address: "Bialystok, Wioska jakas",
            group: "F",
            scholarship: 1100,
            grades: [2, 3.5, 1],
        },
    ];

    return (
        <div>
            {studentsData.map((student) => (
                <div key={student.id}>
                    <Name name={student.name} />
                    <Index index={student.index} />
                    <BirthDate birthDate={student.birthDate} />
                    <Address address={student.address} />
                    <Group group={student.group} />
                    <Scholarship scholarship={student.scholarship} />
                    <Grades grades={student.grades} />
                </div>
            ))}
        </div>
    );
};

export default Students;
