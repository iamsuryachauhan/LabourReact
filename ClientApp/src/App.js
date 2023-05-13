import { useEffect, useState } from "react"
import Employee, { InputField } from "./components/EmployeeComponent"
import Homepage from "./components/NavMenu"

const App = () => {
    return (
        <div className="container">
            <Homepage />
            <Employee />
            <InputField/>
        </div>
    )
}


export default App