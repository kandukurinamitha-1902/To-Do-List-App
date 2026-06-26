import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDo-List.css';
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';




function ToDoList({ task, setTask }) {
    const [filterTask, setFilterTask] = useState([]);
    useEffect(() => {
        setFilterTask([...task]);
    }, [task]);

    const [toDoName, setToDoName] = useState();

    const backupList = task;
      // functinality for add task.
    function addToDoList() {
        //condition  written in add new task for dose not existing 30 characters we Ddd new task.
        if (toDoName.length > 30) {
            alert("Task Should Not Exceed More Then 30 Characters");
            return;
        };

        const newItem = {
            id: task.length + 1,
            name: toDoName,
            isCompleted: false
        }
        setFilterTask([...filterTask, newItem]);
    }

    // functionality for selecting all tasks.
    function selectAllToDo() {
        setFilterTask([...task]);
    }

    // functionality for selecting Done tasks
    function selectDoneToDo(id) {
        const selectDoneTask = task.filter((t) => t.isCompleted === true);
        setFilterTask(selectDoneTask);
    }

//functionality for selecting pending tasks
    function selectToDo(id) {
        const selectIncompleteTask = task.filter((t) => t.isCompleted === false);
        setFilterTask(selectIncompleteTask);
    }

 // functionality for selecting check box.
    function selectCheckBox(id) {
        const selectedItem = task.find((t) => t.id === id);
        // alert(selectedItem.id);
        if (selectedItem.isCompleted === true) {
            selectedItem.isCompleted = false;
        } else {
            selectedItem.isCompleted = true;
        }
        // if we use selectedItem we get only selectedItem object if we use ...task we get all objects.
        setFilterTask([...task]);
    };




// functionality for edit
    function editToDo(id) {
        //donot not update when edited name is empty
        //edited name should not exceed 30 char.
        const editedName = prompt("Edit Task ");

        if (editedName.length > 30) {
            alert("Task Should Not Exceed More Then 30 Characters");
            return;
        };
        if (!editedName || editedName.trim() === "") {
            alert("Task Name Cannot Be Empty");
            return;
        }
        // trim is used to reduce gap from starting and end.
        const selectedItem = filterTask.find(t => t.id == id);
        //    alert(selectedItem.name);
        selectedItem.name = editedName;
        console.log(editedName);

        // if we use selectedItem we get only selectedItem object if we use ...task we get all objects.
        setFilterTask([...filterTask]);
    };

// functionality for delete 
    const handleDelete = (id) => {

        // functionality for delete.
        const updatedTask = task.filter(t => t.id !== id);
        // console.log(updatedStudent);
        setTask(updatedTask);
        alert(" Task Is Deleted ");
    };

    function deleteDoneToDo() {

        const deleteDoneTask = filterTask.filter((t) => t.isCompleted === false);
            setFilterTask(deleteDoneTask);
    }

    function deleteallToDo() {
        setFilterTask([]);

    }

    //on click (for binding variable) when we click on button
    // on submit(use  for form submition
    //onchnage(used in search functionality) 


    return (
        <div style={{ paddingLeft: "80px", border: "solid black 1px" }}>
            <h3 style={{ padding: "20px" }}>ToDoInput</h3>
            <div style={{ width: "940px", border: "solid gray 1px", padding: "20px", alignContent: "center", paddingRight: "20px" }}>

                <div className="input-group mb-3" >
                    <span className="input-group-text">
                        📋
                    </span>
                    <input
                        type="search"
                        class="form-control me-2"
                        placeholder="Add New Todo Item"
                        onChange={(e) => setToDoName(e.target.value)} />
                </div>
                <button
                    type="submit"
                    class="btn btn-secondary" style={{ width: "900px" }}
                    onClick={() => addToDoList()}>
                    Add new task
                </button>
            </div>
            <h3 style={{ padding: "20px" }}>ToDoList</h3>

            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                <div>
                    <button type="button" class="btn btn-secondary" style={{ width: "300px" }} onClick={() => selectAllToDo()}>All</button>
                </div>
                <div>
                    <button type="button" class="btn btn-secondary" style={{ width: "300px" }} onClick={() => selectDoneToDo()}>Done</button>
                </div>
                <div>
                    <button type="button" class="btn btn-secondary" style={{ width: "280px" }} onClick={() => selectToDo()}>Todo</button>
                </div>
            </div>


            <div className="todo-container" style={{ marginRight: "130px", width: "100%" }} >
                {filterTask.map((t) => (

                    <ul className="tasks-list" >
                        <li className="task d-flex justify-content-between" style={{ border: "solid black 2px", width: "880px", alignItems: "center", padding: "10px", marginRight: "200px" }}>
                            {t.name}
                            <div>
                                <input type="checkbox" checked={t.isCompleted} onClick={() => selectCheckBox(t.id)} />


                                <button type="button" class="btn btn-light" onClick={() => editToDo(t.id)} >
                                    <EditIcon fontSize="small" />
                                    <span style={{ fontSize: '15px' }}></span>
                                </button>
                                <button type="button" class="btn btn-outline-danger" style={{ width: '50px', marginLeft: " 20px" }} onClick={() => handleDelete(t.id)} >
                                    <DeleteIcon fontSize="small" />
                                    <span style={{ fontSize: '15px' }}></span>
                                </button>
                            </div>
                        </li>


                    </ul>


                ))}
            </div>

            <div className="button-group" style={{ padding: "20px", display: "flex", gap: "90px" }}>
                <div style={{ paddingRight: "20px" }}>
                    <button class="btn btn-danger" style={{ width: "400px" }} onClick={() => deleteDoneToDo()}>
                        Delete done tasks
                    </button>
                </div>
                <div style={{ paddingRight: "40px" }}>
                    <button class="btn btn-danger" style={{ width: "400px" }} onClick={() => deleteallToDo()} >
                        Delete all tasks
                    </button>
                </div>
            </div>




        </div>



    )
};
export default ToDoList;
