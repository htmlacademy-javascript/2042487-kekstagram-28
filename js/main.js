import {getPhotoWithComments} from './data.js';
import {renderGallery} from './gallery.js';
import './hidden-favicon.js';
import './form.js';

renderGallery(getPhotoWithComments());
