import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(data => <DialogItem name={data.name} id={data.id} key={data.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            placeholder={"Enter your message:"}
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;