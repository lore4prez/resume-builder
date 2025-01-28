import {useState, useContext} from 'react';
import {Visible} from '../App';
import { InputField } from "./GenInfo";
import { AddBulletPoint } from './Educ';

function Experience() {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");

    const {isVisible} = useContext(Visible);

    return (
        <div className="exp-info">
            <h2>Professional Experience</h2>
            <InputField id = "Company name" show = {isVisible} value = {company} func = {(e) => setCompany(e.target.value)}></InputField>
            <InputField id = "Role" show = {isVisible} value = {role} func = {(e) => setRole(e.target.value)}></InputField>
            <AddBulletPoint></AddBulletPoint>
        </div>
    )
}

export {Experience}