import { createContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";
import Cookies from 'js-cookie';

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
    const [studentDetails, setStudentDetails] = useState({})
    const [assignments, setAssignments] = useState([])    
    const [sessions, setSessions] = useState([]);
    const [attendances, setAttendances] = useState([]);

    const token = Cookies.get('token');

    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const [studentResponse, assignmentsResponse, sessionsResponse, attendancesResponse] = await Promise.all([
                    
                    fetch(`${BACKEND_URL}/students/student-profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),

                    fetch(`${BACKEND_URL}/courses/assignments/`, {
                        method:"GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),
                    fetch(`${BACKEND_URL}/courses/sessions/`, {
                        method:"GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),
                    fetch(`${BACKEND_URL}/students/attendances/`, {
                        method:"GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })
                ]);
    
                const studentData = await studentResponse.json();
                const assignmentsData = await assignmentsResponse.json()
                const sessionsData = await sessionsResponse.json()
                const attendancesData = await attendancesResponse.json()
                setStudentDetails(studentData);
                setAssignments(assignmentsData);  
                setSessions(sessionsData)      
                setAttendances(attendancesData)
                
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchCategoriesData();
    }, []);
    

    return <DataContext.Provider value={{ studentDetails, assignments, sessions, attendances }}>
        {children}
    </DataContext.Provider>
}