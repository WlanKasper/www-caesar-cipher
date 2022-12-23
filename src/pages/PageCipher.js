import { useState, useEffect } from 'react';

import Textarea from "../components/textarea/Textarea";
import { cipher } from "../helpers/settingTextarea";
import axios from "../utils/axios";

const PageCipher = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [textResponse1, setTextResponse1] = useState('');
    const [textResponse2, setTextResponse2] = useState('');
    const [key, setKey] = useState('1');

    const handleChangeCipher = (event) => {
        setText1('');
        setText2(event.detail.value);
        setKey(event.detail.key);

    };

    const handleChangeDecipher = (event) => {
        setText1(event.detail.value);
        setText2('');
        setKey(event.detail.key);
    };


    useEffect(() => {
        if (text2 === '' || key === '') {
            return;
        }

        axios.get("/api/cipher", {
            params: {
                message: `${text2}`,
                key: `${key}`,
            },
        })
            .then(response => {
                setTextResponse2(response.data);
            })
            .catch(error => console.error(error))
    }, [text2, key]);

    useEffect(() => {
        if (text1 === '' || key === '') {
            return;
        }

        axios.get("/api/cipher", {
            params: {
                message: `${text1}`,
                key: `-${key}`,
            },
        })
            .then(response => {
                setTextResponse1(response.data);
            })
            .catch(error => console.error(error))
    }, [text1, key]);

    return (<div className="wrapper-input-output">
        <Textarea
            key={0}
            textarea={cipher[0].textarea}
            textareaValue={textResponse1}
            keyInput={cipher[0].keyInput}
            keyValue={key}
            button={cipher[0].button}
            sendText={handleChangeCipher}
        />
        <Textarea
            key={1}
            textarea={cipher[1].textarea}
            textareaValue={textResponse2}
            keyInput={cipher[1].keyInput}
            keyValue={key}
            button={cipher[1].button}
            sendText={handleChangeDecipher}

        />
    </div>);
}

export default PageCipher;