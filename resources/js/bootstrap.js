import * as FilePond from 'filepond';
import Alpine from 'alpinejs';
import axios from 'axios';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import zh_TW from 'filepond/locale/zh-tw.js';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Alpine = Alpine;

Alpine.start();

FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.setOptions(zh_TW);
window.FilePond = FilePond;
