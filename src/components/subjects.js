import React from "react"
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Subject ({myGPA, GPA, selectGPA}) {
    return (
        <ul>
            {myGPA.map((sub, index) => {
                    return (
                        <div className="p-4" key={index}>
                            <li>{sub.sub} ({sub.code}) - {sub.credit} Credits</li>
                            <Select options={GPA} placeholder="Select Grade" onChange={selectGPA(sub)} />
                        </div>
                    )}
            )}
        </ul>
    )
}