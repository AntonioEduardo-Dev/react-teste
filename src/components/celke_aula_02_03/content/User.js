import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    render() {        
        return (
            <div className="container">
                <h2>Usuário: {this.props.name}</h2>
                <p>Idade: {this.props.age}</p>
                <p>Profissão: {this.props.job}</p>
            </div>
        );
    }
}
User.protoType = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    job: PropTypes.string,
}

// Specifies the default values for props:
User.defaultProps = {
    name: 'Faltou o nome',
    age: 0,
    job: 'Faltou o emprego',
};

export default User;