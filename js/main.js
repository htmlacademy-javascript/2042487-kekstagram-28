import {getPhotoWithComments} from './data.js';
import {renderGallary} from './gallary.js';
import './hidden-favicon.js';

renderGallary(getPhotoWithComments());
