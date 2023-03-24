import {getPhotoWithComments} from './data.js';
import {renderGallary} from './gallary.js';
import './hidden-favicon.js';
import './form.js';

renderGallary(getPhotoWithComments());
