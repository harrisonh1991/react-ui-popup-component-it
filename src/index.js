import React from 'react';
import ReactDOM from 'react-dom';
import ITPopupMenu from './components/ITPopup.jsx';

ReactDOM.render(
    <React.StrictMode>
        <ITPopupMenu {...{
            title: 'Lorem Ipsum',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            theme: 'light',
            background: {
                dataSets: {
                    0: 'https://images.unsplash.com/photo-1612404748636-568ca4155994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    1024: 'https://media-exp1.licdn.com/dms/image/C511BAQE0NnIkjkotGA/company-background_10000/0/1541489744017?e=2159024400&v=beta&t=8CzJngJh5TrtF6_WFRYSlDeycAkT52hAfb4qLYGYnv8'
                },
                alt: 'test'
            },
            href: "https://www.google.com/",
            eventLabel: "Lorem Ipsum",
            eventCategory: 'homepage_popup'
        }}/>
        <>123</>
    </React.StrictMode>,
    document.getElementById('root')
);