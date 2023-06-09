import axios from 'axios'
const url = "http://localhost:5000"

const register = async (userData) => {
    const response = await axios.post(`${url}/api/users`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
const login = async (userData) => {
    const response = await axios.post(`${url}/api/users/login`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const logout = () => {
    localStorage.removeItem('user')
}



const authService = {
    register,
    logout,
    login
}


export default authService