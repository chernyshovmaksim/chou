import './../sass/main.scss';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import $ from 'jquery';


import { agreementFunc } from './modules/agreement';
import './modules/popups';
import './modules/bvi';
import './modules/menu';
import './modules/sliders';


$(document).ready(function () {
	agreementFunc();
});
