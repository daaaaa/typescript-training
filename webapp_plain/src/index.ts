import 'bootstrap/dist/css/bootstrap.css';

// Import {LocalDataSource} from './data/localDataSource';
import {RemoteDataSource} from './data/remoteDataSource';
import {HtmlDisplay} from './htmlDisplay';

const ds = new RemoteDataSource();

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
