const AddForm = ({
    title,
    context,
    onChangeHandlerTitle,
    onChangeHandlerContext,
    onClickHandlerAdd}) => {
    
    ////////////////////////////////////////////////////////
    const add_form = {
        backgroundColor: "#eee",
        borderRadius: "12px",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "30px",
        
        display:"flex",
        alignItems:"center",
    }
    
    const input_group = {
        alignItems: "center",
        display: "flex",
        gap: "20px",
    }

    const form_label = {
        fontSize: "16px",
        fontWeight: "700"
    }
    
    const add_input = {
        border: "none",
        borderRadius: "12px",
        height: "40px",
        padding: "0 12px",
        width: "240px"
    }
    
    const add_button = {
        backgroundColor: "teal",
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        fontWeight: "700",
        height: "40px",
        width: "140px"
    }
    
    return (
        <form style = {add_form}>
            <div style = {input_group}>
                <label style = {form_label}>Title</label>
                <input style = {add_input} value={title} onChange={onChangeHandlerTitle}></input>
                <label style = {form_label}>Context</label>
                <input style = {add_input} value={context} onChange={onChangeHandlerContext}></input>

                {/* TEST input terbaca */}
                {/* <p>title = {title}, context = {context}</p> */}
                
            </div>
            <button style = {add_button} disabled = {!title || !context} onClick={onClickHandlerAdd}>Add to-do List</button>
        </form>
    );
}

export default AddForm