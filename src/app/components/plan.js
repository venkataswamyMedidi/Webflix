/**
 * Created by Medidi venkata swamy on 6/25/2017.
 */
import React from "react";
import {Link} from "react-router";

export class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basic: '',
            standard: '',
            premium: ''
        };
        this.onClickBasic = this.onClickBasic.bind(this);
        this.onClickStandard = this.onClickStandard.bind(this);
        this.onClickPremium = this.onClickPremium.bind(this);

    }

    onClickBasic() {
        this.refs.basic.checked = 'yes';
    }

    onClickPremium() {
        this.refs.premium.checked = 'yes';

    }

    onClickStandard() {
        this.refs.standard.checked = 'yes';


    }


    render() {
        return (
            <div className="container-fluid ">
                <div className="row col-md-offset-2">
                    <div className="row">
                        <h3>STEP 1 of 2</h3>
                        <h3>Choose a plan that's right for you</h3>
                        <h3>WELCOME ,Upgrade now</h3>
                    </div>
                    <div className="row table table-striped " id="plan-table">
                        <thead >
                        <tr>
                            <th style={{width: "13%"}}/>

                            <th style={{width: "13%"}}>
                                <button type="button" onClick={this.onClickBasic} className="button1">
                                    Basic
                                </button>
                            </th>
                            <th style={{width: "13%"}}>
                                <button type="button" onClick={this.onClickStandard}
                                        className="button1">Standard
                                </button>
                            </th>
                            <th style={{width: "13%"}}>
                                <button type="button" onClick={this.onClickPremium}
                                        className="button1">Premium
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th><strong>UPGRADE</strong></th>
                            <th>
                                <hgroup>6.99</hgroup>
                            </th>
                            <th>
                                <hgroup>7.99</hgroup>
                            </th>
                            <th>
                                <hgroup>11.99</hgroup>
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th scope="row">HD available</th>
                            <td><i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
                            </td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i>

                            </td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Ultra HD</th>
                            <td><i className="glyphicon glyphicon-remove" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-remove" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                        </tr>

                        <tr>
                            <th scope="row">Screens share</th>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th scope="row">Unlimted watch</th>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">Cancel</th>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                            <td><i className="glyphicon glyphicon-ok" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">Choose</th>
                            <td><input type="radio" className="radio-inline"
                                       onChange={e => {
                                           this.setState({basic: e.target.value})
                                       }} ref="basic" name="plan" id="idPlan"/></td>
                            <td><input type="radio" className="radio-inline"
                                       onChange={e => {
                                           this.setState({standard: e.target.value})
                                       }} name="plan" id="idPlan" ref="standard"/></td>
                            <td><input type="radio" onChange={e => {
                                this.setState({premium: e.target.value})
                            }} ref="premium" className="radio-inline" name="plan"
                                       id="idPlan"/></td>
                        </tr>
                        </tbody>
                        <p>
                            HD and Ultra HD availability subject to your Internet service and device capabilities.
                            Not all
                            content available in HD or Ultra HD.
                        </p>
                    </div>
                    <div className="row plan_continue_btn">

                        <div className="col-md-5 col-md-offset-3">
                            <Link to="/register" className="btn btn-primary btn-block ">CONTINUE</Link>
                        </div>
                    </div>

                </div>
                <br/>
            </div>
        )
    }
}






