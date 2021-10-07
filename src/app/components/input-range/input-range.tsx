import { Component } from "react"
import './input-range.scss'

export interface InputRangeProps {
    value?: any;
    min?: any;
    max?: any;
    step?: any;
}
export class InputRange extends Component<InputRangeProps, any> {
    render() {
        return (
            <div className="input-control">
                <input type="range"
                    min={this.props.min || "0"}
                    max={this.props.max || "100"}
                    step={this.props.step || "1"}
                    value={this.props.value || 0}
                    readOnly />
            </div>
        );
    }
}