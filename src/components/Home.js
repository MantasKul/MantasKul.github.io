import { Fragment } from "react";
import { TypeAnimation } from 'react-type-animation';

export const Home = () => {
    return (
        <Fragment>
            <div>
                <h1>Hello</h1>
                <h2>My name is&nbsp;
                    <TypeAnimation 
                        sequence={['Mantas Kulikauskas']}
                        wrapper="span"
                        speed={{type: 'keyStrokeDelayInMs', value: 100}}
                    />
                </h2>
                <p><a href="mailto:m.kulikauskas01@gmail.com"><img src=""/></a></p>
            </div>
        </Fragment>
    );
}