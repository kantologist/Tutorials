import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//components and directives
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import Syllabus from './syllabus.components';
componentsModule.component('syllabus', Syllabus);

export default componentsModule;
