import './style.css';
const ToDoComplete = ({todos,setTodos}) => {
   
    // function onClickHandlerDelete(id){
    //     setTodos(current => current.filter(todo => {
    //         return todo.td_id !== id
    //     }),);
    //     console.log(todos)
    // }

    // function onClickHandlerComplete(id){
    //     console.log(todos)
    // };

        return (
        <div className="list_wrapper">
        {/* //     {todos.map((todo) => (
        //     <div style = {to_do_container} key={todo.td_id}>
        //         <div>
        //             <p>{todo.td_id}</p>
        //             <h2 style = {to_do_title}>{todo.title}</h2>
        //             <div>{todo.context}</div>
        //         </div>
        //         <div style = {button_set}>
        //             <button style = {delete_button} onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
        //             <button style = {complete_button} onClick={() => onClickHandlerComplete(todo.td_id)}>Done</button>
        //         </div>
        //     </div>
        //     ))} */}
            <div className="to_do_container">
                <div>
                    <h2 className = "to_do_title"> Test todo list, nanti diisi dari inputan title </h2>
                    <div> Test context, Nanti diisi inputan dari context</div>
                </div>
                <div className = "button_set">
                    <button className = "delete_button">Delete</button>
                    <button className = "complete_button">Done</button>
                </div>
            </div>

            {/* <div style = {to_do_container}>
                <div>
                    <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
                    <div> Test context, Nanti diisi inputan dari context</div>
                </div>
                <div style = {button_set}>
                    <button style = {delete_button}>Delete</button>
                    <button style = {complete_button}>Done</button>
                </div>
            </div>
            <div style = {to_do_container}>
                <div>
                    <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
                    <div> Test context, Nanti diisi inputan dari context</div>
                </div>
                <div style = {button_set}>
                    <button style = {delete_button}>Delete</button>
                    <button style = {complete_button}>Done</button>
                </div>
            </div> */}
        </div>
    )
}

const ToDoWorking = ({todos,setTodos}) => { 

    // const onClickHandlerDelete = () => {
    //     setTodos(current => current.filter(todo => {
    //         return todo.td_id !== id
    //     }),
    //     );
    //     console.log('tombol hapus')
    //     console.log(todos)
    // };


    function onClickHandlerDelete(id){
        setTodos(current => current.filter(todo => {
            return todo.td_id !== id
        }),);
        console.log(todos)
    }

    function onClickHandlerComplete(id){
        console.log(todos)
    };
    
    return (
        <div className = "list_wrapper">
            {todos.map((todo) => (
            <div className = "to_do_container" key={todo.td_id}>
                <div>
                    <p>{todo.td_id}</p>
                    <h2 className = "to_do_title">{todo.title}</h2>
                    <div>{todo.context}</div>
                </div>
                <div className = "button_set">
                    <button className = "delete_button" onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
                    <button className = "complete_button" onClick={() => onClickHandlerComplete(todo.td_id)}>Done</button>
                </div>
            </div>
            ))}
          
        </div>
    )
}

const List = ({todos,setTodos}) => {
    return (
        <div className = "list_container">
            <h2 className = "list_title">Working.. 🔥 </h2>
            <ToDoWorking
            todos = {todos}
            setTodos= {setTodos}
            />
            <h2 className = "list_title">Done..! 🎉</h2>
            <ToDoComplete
            todos = {todos}
            setTodos = {setTodos}
            />
        </div>
    )
}

export default List