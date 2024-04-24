// import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./app/App"
import store from "./store/store"
import AuthMiddleware from './features/auth/AuthMiddleware';

const container = document.getElementById("root")

if (container) {
    const root = createRoot(container)

    root.render(
        // <React.StrictMode>
        <Provider store={store}>
            <AuthMiddleware>
                <App />
            </AuthMiddleware>
        </Provider>
        // </React.StrictMode>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}
