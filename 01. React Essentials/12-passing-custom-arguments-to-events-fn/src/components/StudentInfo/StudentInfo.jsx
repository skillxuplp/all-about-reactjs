export default function StudentInfo ({fullName, age, emailAddress, children, onSelect}) {
    return (
        <>
            <div id="student-info-1" style={{border: "1px solid #000", display: "inline-block", width: "300px", margin: "10px", padding: "10px"}} onClick = {onSelect}>

                <div className="info">
                    <p>Full Name : {fullName}</p>
                    <p>Age : {age}</p>
                    <p>Email Address : {emailAddress}</p>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </>
    )
}