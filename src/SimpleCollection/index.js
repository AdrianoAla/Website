// import local components

import Block from './components/Block';
import Newsletter from './components/Newsletter';
import HeroBanner from './components/HeroBanner/HeroBanner'

// Import the express library
import * as expressModule from '@uniwebcms/express'; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import './index.css';

export default { ...expressModule, Block, Newsletter, HeroBanner };
