import { useState } from "react";
import Header from "../header/Header";
import AddForm from "../form/Form";
import List from "../list/List";
import './style.css';

const Layout = () => {
    // Deklarasi keadaan awal variabel
    const [title, setTitle] = useState("");
    const [context,setContext] = useState("");
    const [todos, setTodos] = useState([
        {
          td_id: 1,
          title: "Sample Title",
          context: "Sample Context",
          is_done: 0
        },
      ]);

    const onClickHandlerAdd = (event) => {
        event.preventDefault() //Mencegah file ter-refresh
        setTitle("") // Mengosongkan input field title
        setContext("") // Mengosongkan input field context
        setTodos([...todos, { td_id: todos.length + 1, title: title, context: context, is_done: 0}]);
     };

    const onChangeHandlerTitle = (event) => {
        const isi_handler_title = event.target.value;
        setTitle(isi_handler_title);
    }

    const onChangeHandlerContext = (event) => {
        const isi_handler_context = event.target.value;
        setContext(isi_handler_context);
    }

    return (
        <div className="Layout">
            <Header />
            <AddForm 
                title = {title}
                context = {context}
                setTitle={setTitle} 
                setContext={setContext}
                onChangeHandlerTitle={onChangeHandlerTitle}
                onChangeHandlerContext={onChangeHandlerContext}
                onClickHandlerAdd={onClickHandlerAdd}/>
            <List 
                todos = {todos}
                setTodos = {setTodos}/>
        </div>
    )
}

export default Layout;