import { useState, useEffect } from 'react';

import Textarea from "../components/textarea/Textarea";
import { bruteForce } from "../helpers/settingTextarea";
import axios from "../utils/axios";

const PageCipher = () => {
    const [text2, setText2] = useState('');
    const [textResponse2, setTextResponse2] = useState('');

    const handleChangeCipher = (event) => {
        setText2(event.detail.value);
    };

    useEffect(() => {
        if (text2 === '') {
            return;
        }

        axios.get("/api/bruteforce", {
            params: {
                message: `${text2}`,
            },
        })
            .then(response => {
                if (response.data === '' || response.data === null) {
                    setTextResponse2('Undefinde');
                } else {
                    setTextResponse2(`Message: ${response.data.message}\n\nKey: ${response.data.key}`);
                }
            })
            .catch(error => console.error(error))
    }, [text2]);

    return (<div className="wrapper-input-output">
        <Textarea
            key={0}
            textarea={bruteForce[0].textarea}
            keyInput={bruteForce[0].keyInput}
            button={bruteForce[0].button}
            sendText={handleChangeCipher}
        />
        <Textarea
            key={1}
            textarea={bruteForce[1].textarea}
            textareaValue={textResponse2}
            keyInput={bruteForce[1].keyInput}
            button={bruteForce[1].button}
        />
    </div>);
}

export default PageCipher;