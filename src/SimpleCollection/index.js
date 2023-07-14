// import local components

import Block from './components/Block';
import Newsletter from './components/Newsletter';
import HeroBanner from './components/HeroBanner/HeroBanner'
import Features from './components/FAQ'
import Timeline from './components/Timeline'
import HighlightedFeatures from './components/HighlightedFeatures'
import Testimonials from './components/Testimonials';
import Customize from './components/Customize';
import Solutions from './components/Solutions';
import EnterpriseSolutions from './components/EnterpriseSolutions';
import Blog from './components/Blog';
import LogoCloud from './components/LogoCloud';

// Import the express library
import * as expressModule from '@uniwebcms/express'; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import './index.css';

export default {
    ...expressModule,
    Block,
    Newsletter,
    HeroBanner,
    Features,
    Timeline,
    HighlightedFeatures,
    Testimonials,
    Customize,
    Solutions, 
    EnterpriseSolutions,
    Blog,
    LogoCloud,
};
