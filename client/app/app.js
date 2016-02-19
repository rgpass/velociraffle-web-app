// Base CSS
import 'normalize.css';
import '../stylesheets/bootstrap.scss';

// App modules
import {appDirective} from './app.directive';
import {defaultRoute} from './app.default.route';
import {shared} from './shared/shared';
import {welcome} from './components/welcome/welcome';
import {activeRaffles} from './components/active.raffles/active.raffles';

// Modules for this file
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {scrollTop} from './shared/misc/scroll.top';

angular
  .module('vr', [
    uiRouter,
    shared.name,
    welcome.name,
    activeRaffles.name
  ])
  .directive('app', appDirective)
  .config(defaultRoute)
  .run(scrollTop);
