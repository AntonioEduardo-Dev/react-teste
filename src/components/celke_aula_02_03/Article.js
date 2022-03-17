import React from 'react';
import User from './content/User';

class Article extends React.Component {
    render() {        
        return (
            <div>
                <User name="John" age="20" job="Cabeleiro"/>
            </div>
        );
    }
}

export default Article;