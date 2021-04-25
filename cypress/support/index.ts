import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, Runnable) => {
  const video = `${Cypress.config('videosFolder')}/${Cypress.spec.name}.mp4`;
  const specName = `${Cypress.spec.name}`;
  const screenshot = `${Cypress.config('screenshotsFolder')}/${
    Cypress.spec.name
  }/${Runnable.parent.title} -- ${test.title} (failed).png`;
  if (test.state === 'failed') {
    addContext({ test }, screenshot);
  }
  if (specName !== Cypress.env('specfile')) {
    addContext({ test }, video);
    Cypress.env('specfile', specName);
  }
});
