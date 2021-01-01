import { createWrapper } from 'next-redux-wrapper';
import configureStore from './configureStore';

const wrapper = createWrapper(configureStore);

export default wrapper;