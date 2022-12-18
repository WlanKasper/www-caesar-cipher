import Textarea from "../components/textarea/Textarea";
import { cipher } from "../helpers/settingTextarea";

const PageCipher = () => {
    return (<div className="wrapper-input-output">
        {
            cipher.map((element, index) => {
                return (<Textarea
                    key={index}
                    textarea={element.textarea}
                    keyInput={element.keyInput}
                    button={element.button}
                />);
            })
        }
    </div>);
}

export default PageCipher;