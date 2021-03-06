
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdEventBusy extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.6 31.6v-18.2h-23.2v18.2h23.2z m0-26.6c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h1.6v-3.4h3.4v3.4h13.2v-3.4h3.4v3.4h1.6z m-16.1 23.4l-1.7-1.8 4-4.1-4-4.1 1.7-1.8 4.1 4.1 4.1-4.1 1.7 1.8-4.1 4.1 4.1 4.1-1.7 1.8-4.1-4.1z"/></g>
            </IconBase>
        );
    }
}
