import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    const {title, message} = this.props;
    let modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    // Remove node if there is One
    $(".reveal-overlay").remove();

    // Build HTML and render to string
    let $modal = $(ReactDOMServer.renderToString(modalMarkup));

    // Attach to DOMnode
    $(ReactDOM.findDOMNode(this)).html($modal);

    //Create a new instace of a modal
    const modal = new Foundation.Reveal($('#error-modal'));

    // Open Modal
    modal.open();
  },
  render: function() {

    // Data reveal let's foundation know we're dealing with a modal
    // Data-Close with click will close
    return (
      <div>
      </div>
    );
  }
})

export default ErrorModal;
