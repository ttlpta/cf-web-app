import React from 'react';

export default class Page500 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error(error);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>Page500</div>;
    }

    const { children } = this.props;
    return children;
  }
}
