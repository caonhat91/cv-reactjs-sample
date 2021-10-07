import { Component } from "react";
import './sperator.scss';

interface SperatorProps {
    className?: string;
}

export class Sperator extends Component<SperatorProps, any> {
    render() {
        return (
            <div className={"sperator-line-dash " + (this.props.className ? this.props.className : '')} />
        );
    }
}