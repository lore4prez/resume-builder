import {useState, useContext} from 'react';
import { Visible } from '../App';
import '../styles/GenInfo.css'

// Component for the two main buttons: edit and submit
// Clicking edit will remove all of the displayed values and show input fields, clicking submit will remove the input fields and show the input values
function MainBtns() {
    const {isVisible, toggleVisibility} = useContext(Visible);

    return (
        <>
            <div className='main-btns'>
                <button onClick = {toggleVisibility} disabled = {!isVisible}> Edit </button>
                <button onClick = {toggleVisibility} disabled = {isVisible}> Submit </button>
            </div>
        </>
    )
}

// Component for all general input fields
// label, input, text (p)
function InputField({id, show, type, value, fontSize, func}) {
    const inputStyle = {
        fontSize: fontSize + 'px',
        display: {show}
    }
    // This label element is where you  last stopped
    return (
        <div>
            <label htmlFor={id} style = {{...inputStyle, display: show ? "none" : "block"}} >{id} <br></br></label>
            <input
                style = {{...inputStyle, display: show ? "none" : "block"}} id = {id} type = {type} value = {value} onChange = {func}
            />
            <p style = {{...inputStyle, display: show ? "block" : "none"}}> {value} </p>
        </div>
    )
}

InputField.defaultProps = {
    id: "",
    show: "block",
    showLabel: true,
    type: "text",
    value: "",
    fontSize: 11
}

// Component that shows the general info: name, email, phone #
function GenInfo() {
    const [fullName, setFullName] = useState(""); 
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const {isVisible} = useContext(Visible);

    return (
        <div className='gen-info'>
            <InputField id = "Full Name" show = {isVisible} value = {fullName} fontSize = {20} func = {(e) => setFullName(e.target.value)}/>
            <InputField id = "Email" show = {isVisible} value = {email} func = {(e) => setEmail(e.target.value)}/>
            <InputField id = "Phone Number" show = {isVisible} value = {phoneNum} func = {(e) => setPhoneNum(e.target.value)}/>
        </div>
    )
}

export {MainBtns, GenInfo, InputField}