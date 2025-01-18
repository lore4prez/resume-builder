import {useState} from 'react';

function MainBtns() {
    const [editOn, setEdit] = useState(true);

    function toggleEdit() {
        if (editOn) setEdit(false);
        else setEdit(true);
    }

    return (
        <>
            <div>
                <button onClick = {toggleEdit} disabled = {!editOn}> Edit </button>
                <button onClick = {toggleEdit} disabled = {editOn}> Submit </button>
            </div>
        </>
    )
}

function InputField({type, value, fontSize, func}) {
    const inputStyle = {
        fontSize: fontSize + 'px'
    }

    return (
        <div>
            <input
                style = {inputStyle} type = {type} value = {value} onChange = {func}
            />
            <p style = {inputStyle}> {value} </p>
        </div>
    )
}

InputField.defaultProps = {
    type: "text",
    value: "",
    fontSize: 11
}

function GenInfo() {
    const [fullName, setFullName] = useState(""); 
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    return (
        <>
            <InputField value = {fullName} fontSize = {20} func = {(e) => setFullName(e.target.value)}/>
            <InputField value = {email} func = {(e) => setEmail(e.target.value)}/>
            <InputField value = {phoneNum} func = {(e) => setPhoneNum(e.target.value)}/>
        </>
    )
}

export {MainBtns, GenInfo}