import React, { useState, useEffect } from 'react'
export default function Form() {
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [firstnameFocus, setFirstNameFocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [firstnameError, setErrorFirstName] = useState(false)
    const [emailError, setErrorEmail] = useState(false)
    const [passwordError, setErrorPassword] = useState(false)
    const [formData, setFormObj] = useState([])

    const handleInput = (e) => {

        let name = e.target.name
        let value = e.target.value
        if (name == "firstName") {
            setFirstName(value)
            setErrorFirstName(false)
            setFirstNameFocus(false)

        }
        if (name == "email") {
            setEmail(value)
            setErrorEmail(false)
            setEmailFocus(false)
        }
        if (name == "password") {
            setPassword(value)
            setErrorPassword(false)
            setPasswordFocus(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let firstName = firstname;
        let Email = email
        let Password = password;

        if (!firstName) {
            setErrorFirstName(true)
            setFirstNameFocus(true)
        }
        else {
            setErrorFirstName(false)
            setFirstNameFocus(false)

        }

        if (!Email) {
            setErrorEmail(true)
            setEmailFocus(true)
        }
        else {
            setErrorEmail(false)
            setEmailFocus(false)
        }

        if (!Password) {
            setErrorPassword(true)
            setPasswordFocus(true)

        }
        else {
            setErrorPassword(false)
            setPasswordFocus(false)
        }
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        let FormObj = {
            FirstName: firstName,
            email: Email,
            password: Password
        }
        setFormObj(FormObj)
    }

    return (
        <>
            <div>
                <h3>Sign up</h3>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">first Name</label>
                    <input type="text" className={`${firstnameFocus ? "border-danger form-control" : "form-control border-white"}`} id="exampleInputEmail1" placeholder="Enter firstname" value={firstname} onFocus={setFirstNameFocus} onChange={handleInput} name='firstName' />
                    {firstnameError ? <label style={{ color: 'red' }}>FirstName is required</label> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className={`${emailFocus ? "border-danger form-control" : " form-control"}`} id="exampleInputEmail1" placeholder="Enter email" value={email} onFocus={setEmailFocus} onChange={handleInput} name='email' />
                    {emailError ? <label style={{ color: 'red' }}>email is required</label> : ""}

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={`${passwordFocus ? "border-danger form-control" : " form-control"}`} id="exampleInputPassword1" placeholder="password" value={password} onFocus={setPasswordFocus} onChange={handleInput} name='password' />
                    {passwordError ? <label style={{ color: 'red' }}>password is required</label> : ""}
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            <div >
                {
                    <div className='dataContainer'>
                        <p>Name : {formData.FirstName}</p>
                        <p>Email : {formData.email}</p>
                        <p>Password : {formData.password}</p>
                    </div>
                }
            </div>
        </>
    )
}
