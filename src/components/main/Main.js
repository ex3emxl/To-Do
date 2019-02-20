import React from 'react';

import './main.scss';

export class Main extends Component {

  render() {
    return (
      <main className="main">
        {this.props.children}
      </main>
    )
  }

}
