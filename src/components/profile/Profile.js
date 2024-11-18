const Profile = (props) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td rowSpan={7}>
                            <img
                                className="profile"
                                src={require("../../assets/img/profilepic/" + props.stu.profilePic)}
                                alt="profile" />
                        </td>
                        <td>
                            ID: {props.stu.studentId}
                        </td>
                    </tr>
                    <tr>
                        <td>Full Name: {props.stu.firstName + " " + props.stu.lastName}</td>
                    </tr>
                    <tr>
                        <td>Age: {props.stu.age}</td>
                    </tr>
                    <tr>
                        <td>Course: {props.stu.course}</td>
                    </tr>
                    <tr>
                        <td>Gender: {props.stu.gender}</td>
                    </tr>
                    <tr>
                        <td>Address: {props.stu.address.city}</td>
                    </tr>
                    <tr>
                        <td>Skills: {props.stu.skills.map(skill => skill + ", ")}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Profile
