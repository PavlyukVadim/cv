const React = require('react')

module.exports = class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head lang="en">
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <meta name="google-site-verification" content="qvi1UC_wcc_9i-Y8wS0MHckX0KKK7azeDaJPeFFUeug" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
