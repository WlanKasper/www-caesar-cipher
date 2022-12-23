import "./style.css";

import React, { useState, useEffect } from 'react';

const Textarea = ({ textarea, textareaValue, keyInput, keyValue, button, sendText }) => {
    const [text, setText] = useState(textareaValue);
    const [key, setKey] = useState(keyValue);

    const sendData = (event) => {
        event.detail = {
            'value': text,
            'key': key,
        }
        setText('');
        sendText(event);
    };

    useEffect(() => {
        setText(textareaValue);
    }, [textareaValue]);

    useEffect(() => {
        setKey(keyValue);
    }, [keyValue]);

    return (<div className="wrapper-input">
        <textarea {...textarea} value={text} onChange={event => setText(event.target.value)}></textarea>
        <div className="wrapper-action-input">
            <div {...keyInput}>
                <input value={key} onChange={event => setKey(event.target.value)} className="color-main-extend" placeholder="key"></input>
                <h6 className="text-ellipsis">*the ciphers gap in alphabet </h6>
            </div>
            <button {...button} onClick={sendData}>
                <h3 className="color-main-extend">{button.value}</h3>
            </button>
        </div>
    </div>);
}

export default Textarea;