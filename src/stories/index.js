import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import Popup from '../components/popup';
import configureStore from '../store';
const store = configureStore();

export default function Provider({ story }) {
    return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
console.log(Popup);
storiesOf('Popup', module)
    .addDecorator((story) => <Provider story={story()} />)
    .add('기본팝업', () => <Popup />);
