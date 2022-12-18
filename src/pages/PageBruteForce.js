import Textarea from "../components/textarea/Textarea";
import { bruteForce } from "../helpers/settingTextarea";

const PageCipher = () => {
    return (<div className="wrapper-input-output">
        {
            bruteForce.map((element) => {
                return (<Textarea
                    textarea={element.textarea}
                    keyInput={element.keyInput}
                    button={element.button}
                />);
            })
        }
    </div>);
}

export default PageCipher;