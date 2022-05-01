import 'bootstrap/dist/css/bootstrap.css';

import {LocalDataSource} from './data/localDataSource';
import {HtmlDisplay} from './htmlDisplay';

const ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement> {
    const display = new HtmlDisplay();
    display.props = {
        dataSource: ds,
    };
    return display.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        displayData().then(elem => {
            const rootElement = document.getElementById('app');
            rootElement.innerHTML = '';
            rootElement.appendChild(elem);
        });
    }
};
