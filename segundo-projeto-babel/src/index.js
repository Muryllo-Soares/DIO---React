import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./app";
import Button from "./button";

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<div>
            <App/> 
            <Button />
            </div>)