import EmberRouter from '@ember/routing/router';
import config from 'dpm-ember-1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
