import { Component } from "react";
import './work-experience.scss';

export interface WorkExperienceProps {
    className?: string;
    desc?: string;
    month?: string;
    year?: string;
}

export class WorkExperience extends Component<WorkExperienceProps, any> {
    render() {
        return (
            <div className={"work-experience " + (this.props.className || '')}>
                <p className="desc">
                    {this.props.desc}
                </p>
                <div className="circle-year">
                    <span className="month">
                        {this.props.month}
                    </span>
                    <span className="year">
                        {this.props.year}
                    </span>
                </div>
            </div>
        );
    }
}