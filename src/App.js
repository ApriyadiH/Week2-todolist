import { useState } from "react";
import Header from "./components/header/Header";
import AddForm from "./components/form/Form";
import List from "./components/list/List";
import Layout from "./components/layout/Layout";


//  /$$                                 /$$                    
// | $$                                | $$                    
// | $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$ 
// | $$__  $$ /$$__  $$ |____  $$ /$$__  $$ /$$__  $$ /$$__  $$
// | $$  \ $$| $$$$$$$$  /$$$$$$$| $$  | $$| $$$$$$$$| $$  \__/
// | $$  | $$| $$_____/ /$$__  $$| $$  | $$| $$_____/| $$      
// | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$      
// |__/  |__/ \_______/ \_______/ \_______/ \_______/|__/      


//  /$$$$$$                                 
// /$$__  $$                                
// | $$  \__//$$$$$$   /$$$$$$  /$$$$$$/$$$$ 
// | $$$$   /$$__  $$ /$$__  $$| $$_  $$_  $$
// | $$_/  | $$  \ $$| $$  \__/| $$ \ $$ \ $$
// | $$    | $$  | $$| $$      | $$ | $$ | $$
// | $$    |  $$$$$$/| $$      | $$ | $$ | $$
// |__/     \______/ |__/      |__/ |__/ |__/

//    /$$                             /$$          
//   | $$                            | $$          
// /$$$$$$    /$$$$$$           /$$$$$$$  /$$$$$$ 
// |_  $$_/   /$$__  $$ /$$$$$$ /$$__  $$ /$$__  $$
//   | $$    | $$  \ $$|______/| $$  | $$| $$  \ $$
//   | $$ /$$| $$  | $$        | $$  | $$| $$  | $$
//   |  $$$$/|  $$$$$$/        |  $$$$$$$|  $$$$$$/
//    \___/   \______/          \_______/ \______/ 
// const ToDoComplete = ({todos,setTodos}) => {
//     const list_wrapper = {
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "12px",
//     }

//     const to_do_container = {
//         border: "4px solid teal",
//         borderRadius: "12px",
//         padding: "12px 24px 24px",
//         width: "270px"
//     }

//     const to_do_title = {
//         display: "block",
//         fontSize: "1.5em",
//         marginBlockStart: "0.83em",
//         marginBlockEnd: "0.83em",
//         marginInlineStart: "0px",
//         marginInlineEnd: "0px",
//         fontWeight: "bold"
//     }

//     const button_set = {
//         display: "flex",
//         gap: "10px",
//         marginTop: "24px",      
//     }

//     const delete_button = {
//         backgroundColor: "#fff",
//         border: "2px solid red",
//         borderRadius: "8px",
//         cursor: "pointer",
//         height: "40px",
//         width: "50%"
//     }

//     const complete_button = {
//         backgroundColor: "#fff",
//         border: "2px solid green",
//         borderRadius: "8px",
//         cursor: "pointer",
//         height: "40px",
//         width: "50%"
//     }

//     // function onClickHandlerDelete(id){
//     //     setTodos(current => current.filter(todo => {
//     //         return todo.td_id !== id
//     //     }),);
//     //     console.log(todos)
//     // }

//     // function onClickHandlerComplete(id){
//     //     console.log(todos)
//     // };

//         return (
//         <div style = {list_wrapper}>
//         {/* //     {todos.map((todo) => (
//         //     <div style = {to_do_container} key={todo.td_id}>
//         //         <div>
//         //             <p>{todo.td_id}</p>
//         //             <h2 style = {to_do_title}>{todo.title}</h2>
//         //             <div>{todo.context}</div>
//         //         </div>
//         //         <div style = {button_set}>
//         //             <button style = {delete_button} onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
//         //             <button style = {complete_button} onClick={() => onClickHandlerComplete(todo.td_id)}>Done</button>
//         //         </div>
//         //     </div>
//         //     ))} */}
//             <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div>

//             {/* <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div>
//             <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div> */}
//         </div>
//     )
// }

// const ToDoWorking = ({todos,setTodos}) => {
//     const list_wrapper = {
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "12px",
//     }

//     const to_do_container = {
//         border: "4px solid teal",
//         borderRadius: "12px",
//         padding: "12px 24px 24px",
//         width: "270px"
//     }

//     const to_do_title = {
//         display: "block",
//         fontSize: "1.5em",
//         marginBlockStart: "0.83em",
//         marginBlockEnd: "0.83em",
//         marginInlineStart: "0px",
//         marginInlineEnd: "0px",
//         fontWeight: "bold"
//     }

//     const button_set = {
//         display: "flex",
//         gap: "10px",
//         marginTop: "24px",      
//       }

//     const delete_button = {
//         backgroundColor: "#fff",
//         border: "2px solid red",
//         borderRadius: "8px",
//         cursor: "pointer",
//         height: "40px",
//         width: "50%"
//     }

//     const complete_button = {
//         backgroundColor: "#fff",
//         border: "2px solid green",
//         borderRadius: "8px",
//         cursor: "pointer",
//         height: "40px",
//         width: "50%"
//     }

//     // const onClickHandlerDelete = () => {
//     //     setTodos(current => current.filter(todo => {
//     //         return todo.td_id !== id
//     //     }),
//     //     );
//     //     console.log('tombol hapus')
//     //     console.log(todos)
//     // };


//     function onClickHandlerDelete(id){
//         setTodos(current => current.filter(todo => {
//             return todo.td_id !== id
//         }),);
//         console.log(todos)
//     }

//     function onClickHandlerComplete(id){
//         console.log(todos)
//     };
    
//     return (
//         <div style = {list_wrapper}>
//             {todos.map((todo) => (
//             <div style = {to_do_container} key={todo.td_id}>
//                 <div>
//                     <p>{todo.td_id}</p>
//                     <h2 style = {to_do_title}>{todo.title}</h2>
//                     <div>{todo.context}</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button} onClick={() =>onClickHandlerDelete(todo.td_id)} >Delete</button>
//                     <button style = {complete_button} onClick={() => onClickHandlerComplete(todo.td_id)}>Done</button>
//                 </div>
//             </div>
//             ))}
//             {/* <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div>
//             <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div>
//             <div style = {to_do_container}>
//                 <div>
//                     <h2 style = {to_do_title}> Test todo list, nanti diisi dari inputan title </h2>
//                     <div> Test context, Nanti diisi inputan dari context</div>
//                 </div>
//                 <div style = {button_set}>
//                     <button style = {delete_button}>Delete</button>
//                     <button style = {complete_button}>Done</button>
//                 </div>
//             </div> */}
//         </div>
//     )
// }


//  /$$ /$$             /$$    
// | $$|__/            | $$    
// | $$ /$$  /$$$$$$$ /$$$$$$  
// | $$| $$ /$$_____/|_  $$_/  
// | $$| $$|  $$$$$$   | $$    
// | $$| $$ \____  $$  | $$ /$$
// | $$| $$ /$$$$$$$/  |  $$$$/
// |__/|__/|_______/    \___/  

// const List = ({todos,setTodos}) => {
//     const list_container = {
//         padding: "0 24px"
//     }

//     const list_title = {
//         display: "block",
//         fontSize: "1.5em",
//         marginBlockStart: "0.83em",
//         marginBlockEnd: "0.83em",
//         marginInlineStart: "0px",
//         marginInlineEnd: "0px",
//         fontWeight: "bold"
//     }


//     return (
//         <div style = {list_container}>
//             <h2 style = {list_title}>Working.. 🔥 </h2>
//             <ToDoWorking
//             todos = {todos}
//             setTodos= {setTodos}
//             />
//             <h2 style = {list_title}>Done..! 🎉</h2>
//             <ToDoComplete
//             todos = {todos}
//             setTodos = {setTodos}
//             />
//         </div>
//     )
// }

//  /$$                                           /$$    
// | $$                                          | $$    
// | $$  /$$$$$$  /$$   /$$  /$$$$$$  /$$   /$$ /$$$$$$  
// | $$ |____  $$| $$  | $$ /$$__  $$| $$  | $$|_  $$_/  
// | $$  /$$$$$$$| $$  | $$| $$  \ $$| $$  | $$  | $$    
// | $$ /$$__  $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
// | $$|  $$$$$$$|  $$$$$$$|  $$$$$$/|  $$$$$$/  |  $$$$/
// |__/ \_______/ \____  $$ \______/  \______/    \___/  
//                /$$  | $$                              
//               |  $$$$$$/                              
//                \______/     

const App = () => {
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

    /////////////////////////////////////////////////////
   <Layout />

    return (
        <div style = {Layout}>
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

export default App;


// TO DO LIST BENERAN
// data diambil di input test SELESAI
// Tombol bisa ditekan SELESAI
// Tombol berubah state saat input terisi SELESAI
// Data dikirim dan ngubah state SELESAI
// Data yang dikirim diubah jadi tambahan tdl SELESAI
// coba tombol delete SELESAI
// coba tombol done
// data terikirim buat tombol done
// data terkirim jadi daftar selesai
// coba tombol hapus yg selesai
// coba tombol batal yang selesai
// ambil data tombol kalau selesai
// tambahin tdl baru jika tekan tombol selesai
// Rapihin