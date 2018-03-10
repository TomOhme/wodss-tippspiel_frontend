import { addTranslation } from 'react-localize-redux';

const json = require('language.json');
store.dispatch(addTranslation(json));