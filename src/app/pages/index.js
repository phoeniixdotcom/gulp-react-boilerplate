'use strict';

(function (Index) {
    var React = require('react'),
        ReactDOM = require('react-dom');//,
        //ExampleApp;

    Index = React.createClass({
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

    ReactDOM.render(
        /*jshint ignore:start */
        <ExampleApp />,
        /*jshint ignore:end */
        document.getElementById('app')
    );
})(
    {}
);


