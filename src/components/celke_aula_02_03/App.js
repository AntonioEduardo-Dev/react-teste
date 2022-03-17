import React from 'react';

import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

// Você também pode usar uma classe ES6 para definir um componente
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Headers />
//                 <Article />
//                 <Footer />
//             </div>
//         );
//     }
// }

function App (props) {
    return (
        <div>
            <Headers />
            <Article />
            <Footer />
        </div>
    );
};

export default App;