import React, { Component } from "react";
import {connect} from 'react-redux'
import { Card, Button, Alert, Badge } from "react-bootstrap";
import { increment, decrement } from '../actions/counter';

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment(2)),
        decrement: () => dispatch(decrement(1))
    }
}


class Counter extends Component {

    render() {
        return (
            <Card bg="secondary" className="mx-auto w-50">
                <Card.Body className="mx-auto">
                    <Alert variant="info">
                        Conter :{" "}
                        <Badge pill variant="success">
                            {this.props.counter}
                        </Badge>
                    </Alert>
                    <Button
                        variant="danger"
                        className="fa fa-plus mx-3"
                        onClick={() => this.props.increment()}
                    />
                    <Button
                        variant="danger"
                        className="fa fa-minus m-2"
                        onClick={() => this.props.decrement()}
                    />
                </Card.Body>
            </Card>
        );
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
