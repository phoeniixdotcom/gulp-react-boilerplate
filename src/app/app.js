'use strict';

var App = {};

// any app initialization tasks we need to do on every page load occur here.
// app.start() is called in our server side layout.
App.start = function () {
    console.log('App loaded...');
};

var React = require('react'),
    ExampleApp;

ExampleApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, React</h2>
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);

