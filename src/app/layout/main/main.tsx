import { Component } from "react";
import { Sperator } from "../../components/sperator/sperator";
import { WorkExperience, WorkExperienceProps } from "../../components/work-experience/work-experience";
import './main.scss';


export class Main extends Component {
    jobTitle = "Software Engineer";
    intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    workExperiences: WorkExperienceProps[] = [
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            month: 'now',
            year: '2021'
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            month: '09',
            year: '2021'
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            month: '03',
            year: '2021'
        },
        {
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            month: '03',
            year: '2020'
        }
    ];

    genSperator(index: number) {
        if (index > 0) {
            if (index % 2) {
                return <Sperator className={"arrow"} />;
            } else {
                return <Sperator className={"arrow reverse"} />;
            }
        }
        return <Sperator />;
    }

    render() {
        const works = this.workExperiences.map((work, index) => {
            return (
                <div key={index}>
                    {this.genSperator(index)}
                    <WorkExperience className={index % 2 ? "reverse" : ''} desc={work.desc} month={work.month} year={work.year} />
                </div>
            );
        });

        return (
            <aside className="main">
                <h1 className="job-title">
                    {this.jobTitle}
                </h1>
                <p className="intro">
                    {this.intro}
                </p>

                {works}

            </aside>
        );
    }
}