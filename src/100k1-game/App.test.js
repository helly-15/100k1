import * as ReactDOM from 'react-dom';
import { App100k1Component } from './App100k1';
import { dataFromStore } from '../data';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App100k1Component questionsData={dataFromStore} requestDataFetch={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
