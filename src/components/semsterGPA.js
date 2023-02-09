
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SemesterGPA.css";
function SemsterGPA({ semsters }) {

    return (
        <ul className="ulboard">
            {semsters.map((sem, index) => {
                return (
                    <table className="table" key={index}>
                        <thead>
                            <tr>
                                <th colSpan="4">Semester Name - {sem.sem}</th>
                            </tr>
                            <tr>
                                <th colSpan="4">Average GPA - {sem.avgGPA}</th>
                            </tr>
                            <tr>
                                <th >Subject Name</th>
                                <th>Subject Code</th>
                                <th>Credit</th>
                                <th>Grade</th>


                            </tr>
                        </thead>
                        <tbody>
                            {sem.myGPA.map((sub, index) => (
                                <tr key={index}>
                                    <td>{sub.sub}</td>
                                    <td>{sub.code}</td>
                                    <td>{sub.credit}</td>
                                    <td>{sub.grade} GPA</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            })}

        </ul>
    )
}

export default SemsterGPA
