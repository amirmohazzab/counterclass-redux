import React, { Component} from "react";
import { Alert } from "react-bootstrap";
import Counter from "./components/Counter";


class App extends Component {

    render() {
        return (
            <div className="container rtl">
                <Alert variant="info" className="w-50 mx-auto text-center mt-5">
                    Redux is easier than you suppose
                    <span role="img" aria-label="😁">
                        😁
                    </span>
                </Alert>
                <Counter />
            </div>
        );
    }
}

export default App;
