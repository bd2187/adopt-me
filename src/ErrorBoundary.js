import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // do error logging here
        console.error("Error boundary. Caugh error", error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        if (this.state.hasError) {
            return (
                <h1>
                    Error with listing. <Link to="/">Click here</Link> to go
                    back to the homepage or wait 5 seconds.
                </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
