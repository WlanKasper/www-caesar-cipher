const cipher = [
    {
        textarea: {
            placeholder: 'Write some normal text here ...',
            readOnly: false,
        },
        keyInput: {
            className: 'key-input',
        },
        button: {
            className: '',
            value: 'Cipher',
        },
    },
    {
        textarea: {
            placeholder: 'Write some encoded text here ...',
            readOnly: false,
        },
        keyInput: {
            className: 'key-input',
        },
        button: {
            className: '',
            value: 'Decipher',
        },
    }
];

const bruteForce = [
    {
        textarea: {
            placeholder: 'Write some encoded text here ...',
            readOnly: false,
        },
        keyInput: {
            className: 'hidden',
        },
        button: {
            className: '',
            value: 'Brout force',
        },
    },
    {
        textarea: {
            placeholder: 'Here will be brute forced text ...',
            readOnly: true,
        },
        keyInput: {
            className: 'hidden',
        },
        button: {
            className: 'hidden',
            value: '',
        },
    }
];

export { cipher, bruteForce };