import 'zone.js';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting());

/**
 * Mocks básicos del DOM
 */
Object.defineProperty(window, 'CSS', { value: null });

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    display: 'none',
    appearance: ['-webkit-appearance'],
  }),
});
