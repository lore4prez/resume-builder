import {useState, useContext} from "react";
import { Visible } from '../App';
import { InputField } from "./GenInfo"

function AddBulletPoint() {
    const [numBP, setNumBP] = useState(1);  // Tracks the number of bullet points
    const [bpList, setBPList] = useState([]);  // List of bullet points
    const [newBullet, setNewBullet] = useState("");  // Input value for new local bullet
  
    const { isVisible } = useContext(Visible); 
  
    // Function to add a new bullet point to the list
    function addBP() {
      setNumBP(numBP + 1);
      setBPList(prevList => [...prevList, newBullet]);
      setNewBullet(""); 
    }
  
    // Function to update the most recent item in bpList
    function updateList(index, value) {
      setBPList(prevList => {
        const updatedList = [...prevList];
        updatedList[index] = value;  // Update the item at the specified index
        return updatedList;
      });
    }
  
    return (
      <div>
        <ul>
          {bpList.map((bullet, index) => (
            <li key={index}>
              <InputField
                show={isVisible}
                showLabel={false}
                value={bullet}  // Set the current bullet point as the value
                func={(e) => updateList(index, e.target.value)}  // Update the item at this index
              />
            </li>
          ))}
        </ul>
        <button style={{ display: isVisible ? "none" : "block" }} onClick={addBP}>
          +
        </button>
      </div>
    );
  }

function Education() {
    const [uni, setUni] = useState("");
    const [major, setMajor] = useState("");

    const {isVisible} = useContext(Visible);

    return (
        <div className="edu-info">
            <h2>Education</h2>
            <InputField id = "University Name" show = {isVisible} value = {uni} func = {(e) => setUni(e.target.value)}></InputField>
            <InputField id = "Major" show = {isVisible} value = {major} func = {(e) => setMajor(e.target.value)}></InputField>
            <AddBulletPoint></AddBulletPoint>
        </div>
    )
}

// function AddEducation() {
//     const [uniList, setUniList] = useState([]); // List of uni

//     const {isVisible} = useContext(Visible);

//     // Add a university/education background to the list
//     function addUni() { 
//         setUniList(prevList => [...prevList, AddEducation])
//     }

//     return (
//         <div>
//             <h2>Education</h2>
//             <button style={{ display: isVisible ? "none" : "block" }} >+</button>
//             {/* <AddEducation></AddEducation> */}
//         </div>
//     )
// }

export {Education, AddBulletPoint}