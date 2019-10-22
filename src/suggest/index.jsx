
import { render } from 'react-dom';
import React from 'React';

export default class SuggestionList extends React.Component {
    normalizeIndex = (selectedIndex, max) => {
        let index = selectedIndex % max;
        if (index < 0) {
            index += max;
        }
        return index;
    }

    render() {
        const {
            suggestionsState
        } = this.props;
        const {
            left,
            top,
            array,
            selectedIndex
        } = suggestionsState;
        if (!array) {
            return null;
        }
        return (<ul style={{
            position: 'absolute',
            left,
            top,
            borderRadius: 3,
            margin: 0,
            padding: 0,
            background: 'white',
            zIndex: 1000,
            boxShadow: '0 0 0 1px rgba(0, 0, 0, .1), 0 1px 10px rgba(0, 0, 0, .35)',
            listStyleType: 'none'
        }}>
            {
                array.map((person, index) => {
                    return (

                        index === selectedIndex ? <li style={{

                            margin: 0,
                            padding: '16px 24px',
                            background: '#a7b5bf',
                            color: 'white',
                            borderRadius: 3

                        }} key={person}>
                            {person}
                        </li> : <li style={{

                            margin: 0,
                            padding: '16px 24px',
                            color: '#343d46'
                        }} key={person}>
                                {person}
                            </li>


                    );
                }, this)
            }


        </ul>)
    }
}
