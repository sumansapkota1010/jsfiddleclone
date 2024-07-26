import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { CiPlay1 } from "react-icons/ci";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineBolt } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import circle from "../../assets/circle.svg";
import Editor from "../EditorComponent/Editor";

import "./content.css";

const Content = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
               <html>
<head>
    <style>
        body {
            color: white;
            background-color: #202123; 
        }
    </style>
</head>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>
`);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <>
            <div className="code-pane">
                <div className="navbar">
                    <div className="nav-left">
                        <img src={logo} color="#00008B" alt=" " />
                        <CiPlay1 color="white" />
                        <a> Run</a>
                        <LiaCloudUploadAltSolid color="white" />
                        <a> Save</a>
                        <FiMessageSquare color="white" />
                        <a> Collaborate</a>
                        <strong className="fiddle">New</strong>
                        <a> Import fiddles as modules</a>
                    </div>
                    <div className="nav-right">
                        <button>
                            <MdOutlineBolt color="#ffb82e" />
                            <p>Go PRO</p>
                        </button>
                        <GiSettingsKnobs color="white" />
                        <a> Settings</a>
                        <a> Sign in</a>
                    </div>
                </div>

                <div className="content">
                    <div className="left-box">
                        <h2 style={{ fontSize: "14px", fontWeight: "700" }}>Fiddle meta</h2>
                        <input type="text" placeholder="Untitled fiddle" /> <br />
                        <input type="text" placeholder="No description" />
                        <h3 className="private">
                            <img src={circle} alt="" />
                            Private fiddle<button className="pro-btn"> Pro</button>
                        </h3>
                        <h2>
                            Groups <button className="pro-btn">Pro</button>
                        </h2>
                        <h2>
                            Resources <p>URL</p>
                            <p>cdnjs</p>
                        </h2>
                        <h2>Async requests</h2>
                        <h2>Others (links, license)</h2>
                    </div>
                    <div className="middle-box">
                        <div className="html">
                            <Editor
                               
                               language="xml"
                               displayName="HTML"
                               value={html}
                               onChange={setHtml}
                           />
                           
                            
                        </div>
                        <div className="js">
                            <Editor
                                langauge="javascript"
                                displayName="JS"
                                value={js}
                                onChange={setJs}
                            />
                        </div>
                    </div>
                    <div className="middle-left-box">
                        <div className="css">
                            <Editor
                                langauge="css"
                                displayName="CSS"
                                value={css}
                                onChange={setCss}
                            />
                        </div>
                        <div className="output">
                            <iframe
                                srcDoc={srcDoc}
                                className="results"
                                title="output"
                                sandbox="allow-scripts"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
