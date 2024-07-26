import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './editor.css';

const Editor = ({ language, displayName, value, onChange }) => {

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <div className="editor-container">
            <div className="editor-title">
                <h3>{displayName}</h3> <IoMdArrowDropdown color='white' />
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
}

export default Editor;
