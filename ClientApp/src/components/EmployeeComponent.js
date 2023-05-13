import { useEffect, useState } from "react"
import { Label } from "reactstrap"

const Employee = () => {
    //1. create useState
    const [employees, setEmployees] = useState([])

    //2. Api calling
    useEffect(() => {
        fetch("api/employee/GetEmployees")
            .then(response => { return response.json() })
            .then(responseJso => {
                setEmployees(responseJso)
            })
    }, [])
    //3. Get list from api call and print
    return (
        <div className="container">
            <h1>Employee List</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>EmployeeId</th>
                                <th>EmployeeName</th>
                                <th>Department</th>
                                <th>DateOfJoining</th>
                                <th>PhotoFileName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((item) => (
                                    <tr>
                                        <td>{item.employeeId}</td>
                                        <td>{item.employeeName}</td>
                                        <td>{item.department}</td>
                                        <td>{item.dateOfJoining}</td>
                                        <td>{item.photoFileName}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export const InputField = () => {
    return (
        <div className="row">
            <h2>Input field</h2>
            <div className="col-sm-12">
                <table className="table table-striped">
                    <thead>
                        <tr><th>Please enter details to save.</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <label>EmployeeName</label>
                        <input type="text" id="InputFieldId"
                            onChange={() => fHide("PostEmployeeDataMsg")} />
                        </tr>
                        <tr>
                            <lable>Department</lable>
                            <input type="text" id="DepartmentId"/>
                        </tr>
                        <tr>
                            <lable>DateOfJoining</lable>
                            <input type="text" id="DateOfJoiningId"/>
                        </tr>
                        <tr>
                            <lable>PhotoFileName</lable>
                            <input type="text" id="PhotoFileNameId"/>
                        </tr>
                        <div id="PostEmployeeDataMsg"></div>
                        <button type="submit" onClick={() => fShow("PostEmployeeDataMsg")}>Submit</button>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const PostEmployeeData = () => {
    //1. Fetching data from form on the basis of ID.
    let EmpName = document.getElementById("InputFieldId").value;
    let DepName = document.getElementById("DepartmentId").value;
    let DateOfJoinning = document.getElementById("DateOfJoiningId").value;
    let Photo = document.getElementById("PhotoFileNameId").value;

    //2. Creating the formdata object and append values on key value pairs.
    let formdata = new FormData();
    formdata.append("EmployeeName",EmpName);
    formdata.append("Department",DepName);
    //formdata.append("DateOfJoining",DateOfJoinning);
    formdata.append("PhotoFileName",Photo);

    let empInfo = {
        EmployeeName: EmpName,
        Department: DepName,
        DateOfJoining: DateOfJoinning,
        PhotoFileName: Photo
    }

    //3. Calling API for post data into database.
    fetch("api/employee/SaveEmployeesData", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(empInfo)
    }).then(result => result.json())
        .then((result) => { console.log(result) });

    console.log(formdata)
    document.getElementById("PostEmployeeDataMsg").innerText = "PostEmployeeDataMsg"
    console.log("PostEmployeeData hits");
}

const fShow = (tagId) => {
    document.getElementById("" + tagId +"").style.display = "block"
    PostEmployeeData()
}

const fHide = (tagId) => {
    console.log(tagId)
    document.getElementById("" + tagId + "").style.display = "none"
}

export default Employee
