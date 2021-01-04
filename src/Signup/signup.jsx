import React from 'react';
import '../css/sign.css';
export class Signup extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label forName="user"> Username: </label>
                    <input id="user" type="text" name="user" />
                </div>
                <div>
                    <label forName="pwd"> Password: </label>
                    <input id="pwd" type="password" name="user" />
                </div>
                <div>
                    <label forName="cnfpwd">Confirm Password: </label>
                    <input id="cnfpwd" type="password" name="cnfpwd" />
                </div>
                <div>
                    <input type="button" value="Register" />
                </div>
            </form>
        );
    }
}