import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
  Collapse,
  Card,
  CardBody
} from 'reactstrap';

import classnames from 'classnames';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: '1',
      cSelected: [],
      dropdownOpen: false,
      collapse: false,
      status: 'Closed'
    };

    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Headings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Paragraphs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Lists
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Tables
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Buttons
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Collapse
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="mt-4">
            <h4 className="mb-3">Headings</h4>
            <div>
              <h1>h1 heading</h1>
              <h2>h2 heading</h2>
              <h3>h3 heading</h3>
              <h4>h4 heading</h4>
              <h5>h5 heading</h5>
              <h6>h6 heading</h6>
            </div>
          </TabPane>
          <TabPane tabId="2" className="mt-4">
            <h4 className="mb-3">Paragraphs</h4>
            <div>
              <p>Suspendisse non laoreet felis. Vestibulum eu lectus et metus vestibulum tincidunt sed id risus. Proin sagittis a nibh at malesuada. Donec ac dolor eu odio cursus iaculis. Nunc iaculis lectus nisl, vitae dapibus elit ultrices vitae. Ut at varius dui, a ultricies nisl. Vestibulum nec dui pellentesque, condimentum nisi eu, porta mauris. Maecenas vitae diam tortor. Praesent tristique malesuada arcu, non lobortis libero vehicula in. Sed congue tellus quis nulla convallis cursus.</p>
              <p>Suspendisse non laoreet felis. Vestibulum eu lectus et metus vestibulum tincidunt sed id risus. Proin sagittis a nibh at malesuada. Donec ac dolor eu odio cursus iaculis. Nunc iaculis lectus nisl, vitae dapibus elit ultrices vitae. Ut at varius dui, a ultricies nisl. Vestibulum nec dui pellentesque, condimentum nisi eu, porta mauris. Maecenas vitae diam tortor. Praesent tristique malesuada arcu, non lobortis libero vehicula in. Sed congue tellus quis nulla convallis cursus.</p>
            </div>
          </TabPane>
          <TabPane tabId="3" className="mt-4">
            <div>
              <h4 className="mb-3">Lists</h4>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coke</li>
              </ul>
              <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Coke</li>
              </ol>
            </div>
          </TabPane>
          <TabPane tabId="4" className="mt-4">
            <div>
              <h4>Tables</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-inverse">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPane>
          <TabPane tabId="5" className="mt-4">
            <div>
              <h4>Buttons</h4>
              <div className="mb-4">
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button>
              </div>
              <div className="mb-4">
                <Button outline color="primary">primary</Button>{' '}
                <Button outline color="secondary">secondary</Button>{' '}
                <Button outline color="success">success</Button>{' '}
                <Button outline color="info">info</Button>{' '}
                <Button outline color="warning">warning</Button>{' '}
                <Button outline color="danger">danger</Button>
              </div>
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
              </ButtonGroup>
              <p>Selected: {this.state.rSelected}</p>
              <h5>Checkbox Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
              </ButtonGroup>
              <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </div>
          </TabPane>
          <TabPane tabId="6" className="mt-4">
            <div>
              <h4>Collapse</h4>
              <div className="mb-4">
                <Button color="primary" onClick={this.toggleCollapse} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <h5>Current state: {this.state.status}</h5>
                <Collapse
                  isOpen={this.state.collapse}
                  onEntering={this.onEntering}
                  onEntered={this.onEntered}
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                >
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit,
                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
                     anim keffiyeh helvetica, craft beer labore wes anderson cred
                     nesciunt sapiente ea proident.
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </div>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

const Components = () => (
  <div className="page mb-5">
    <Tabs />
  </div>
);

export default Components;
