import React, { useEffect, useState } from 'react'
import { studentDB } from '../Firebase/firebase'
import MyContext from './MyContext'
import { collection, getDocs, query, where, addDoc, onSnapshot, deleteDoc, doc, setDoc } from 'firebase/firestore';

function MyState(props) {

    const [student, setstudent] = useState({
        name: "",
        image: "",
        email: "",
        phone: "",
        address: "",
        City: "",
        State: "",
        dob: "",
        gender: "",
        course: "",
        enrollmentDate: "",
        status: ""
    })
    //  get all student data

    const [allStudents, setAllStudents] = useState([]);

    const getStudent = async () => {
        try {
            const q = query(
                collection(studentDB, "students"),
                // orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let studentArray = [];
                QuerySnapshot.forEach((doc) => {
                    // data and id
                    studentArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id)
                    console.log(doc.data())
                })
                setAllStudents(studentArray)
            })

            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStudent();
    }, [])


    // Add Student Data 

    const addStudent = async () => {
        // validtion
        if (student.name == "" || student.image == "" || student.email == "" || student.phone == "" || student.address == "" || student.City == "" || student.State == "" || student.dob == "" || student.gender == "" || student.course == "" || student.enrollmentDate == "" || student.status == "") {
            return alert("All Fields are required")
            console.log(student)
        }

        // student refrence
        // collection add karva studentDB mathi and collection name
        const StudentRef = collection(studentDB, "students")

        try {

            // student data , usestate to students
            await addDoc(StudentRef, student)
            getStudent()
            alert("Student added successfully");
            setTimeout(() => {
                window.location.href = "/"
            }, 300)
            setstudent("");

        } catch (error) {
            console.log(error)
        }
    }

    // delete function
    const deleteStudent = async (value) => {
        try {
            // deletdoc method use doc (dirdb,collection,item.id)
            await deleteDoc(doc(studentDB, "students", value.id))
            getStudent();
            alert("Student Data delete Successfully");

        } catch (error) {
            console.log(error)
        }
    }


    //  Student Data Update Data

    // allstudents Data aayega
    const editStudenthandle = (value) => {
        setstudent(value)
    }

    // edit handle function

    const editStudent = async (value) => {
        try {
            // setdoc data aayega usko change karege

            await setDoc(doc(studentDB, 'students', student.id), student)
            getStudent();
            alert("Student  data update successFully");
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setstudent("")
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <MyContext.Provider value={{ student, setstudent, getStudent, allStudents, addStudent, deleteStudent, editStudent,editStudenthandle }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState
