import { Component } from "react";
import { ReactComponent as Address } from '../../../assets/images/address.svg';
import Avatar from '../../../assets/images/avatar-chibi.jpg';
import CssLogo from '../../../assets/images/css-logo.png';
import { ReactComponent as Email } from '../../../assets/images/email.svg';
import HtmlLogo from '../../../assets/images/html-logo.png';
import JavaLogo from '../../../assets/images/java-logo.png';
import JavascriptLogo from '../../../assets/images/javascript-logo.png';
import { ReactComponent as Telephone } from '../../../assets/images/telephone.svg';
import { InputRange } from '../../components/input-range/input-range';
import './sidebar.scss';

export class Sidebar extends Component {
    fullName = "Bùi Văn Áo";
    contracts = [
        {
            type: 'phone',
            info: '0966969696'
        },
        {
            type: 'email',
            info: 'email@gmail.com'
        },
        {
            type: 'address',
            info: 'Phố A, Quận B, TP Hà Nội'
        }
    ];
    skills = [
        {
            logo: JavaLogo,
            skill: 'Java',
            value: '80%',
            maxValue: 5
        },
        {
            logo: JavascriptLogo,
            skill: 'Javascript',
            value: '70%',
            maxValue: 5
        },
        {
            logo: HtmlLogo,
            skill: 'HTML',
            value: '80%',
            maxValue: 5
        },
        {
            logo: CssLogo,
            skill: 'CSS',
            value: '60%',
            maxValue: 5
        }
    ];
    note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    genContract() {
        return (
            <ul className="contract">
                {this.contracts.map((contract, index) => (
                    <li className="item" key={index}>
                        {(() => {
                            if (contract.type === 'phone')
                                return <Telephone className="icon" />
                            else if (contract.type === 'email')
                                return <Email className="icon" />
                            else if (contract.type === 'address')
                                return <Address className="icon" />
                        })()}
                        <div className="info">
                            {contract.info}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    genSkill() {
        return (
            <ul className="skills">
                {this.skills.map((skill, index) => (
                    <li className="item" key={index}>
                        <div className="icon">
                            <img src={skill.logo} alt="" className="logo" />
                        </div>
                        <div className="info">
                            <div className="skill">
                                <span>{skill.skill}</span>
                                <span>{skill.maxValue}</span>
                            </div>
                            <InputRange value={skill.value} />
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <nav className="sidebar">
                <div className="avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="fullname">
                    {this.fullName}
                </div>

                {this.genContract()}

                {this.genSkill()}

                <section className="notes">
                    {this.note}
                </section>
            </nav>
        );
    }
}