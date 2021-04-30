import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Kadir KALKAN',
        email: 'kadir@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Ömer Can Danacıoğlu',
        email: 'omer@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]
export default users