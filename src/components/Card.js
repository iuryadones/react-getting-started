import React from 'react'


class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      app: <div>Wait Click App</div>
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.selectApp = this.selectApp.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  selectApp(event) {
    const _id = event.target.id
    const component = this.props.apps[_id].cmp
    this.setState({ app: component})
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Apps
        </button>

        {
          this.state.showMenu
            ? (
              <div
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {this.props.apps.map(
                  (app, index) => (
                      <button
                        key={index}
                        id={index}
                        onClick={this.selectApp}>
                        {app.name}
                      </button>
                  )
                )}
              </div>
            )
            : (
              null
            )
        }
        <hr />
        {this.state.app}
      </div>
    );
  }
}


export default Card
