import "./style.css";

const Textarea = ({ textarea, keyInput, button }) => {
    return (<div className="wrapper-input">
        <textarea {...textarea}></textarea>
        <div className="wrapper-action-input">
            <div {...keyInput}>
                <input className="color-main-extend" placeholder="key"></input>
                <h6 className="text-ellipsis">*the ciphers gap in alphabet </h6>
            </div>
            <button {...button}>
                <h3 className="color-main-extend">{button.value}</h3>
            </button>
        </div>
    </div>);
}

export default Textarea;