#!/usr/bin/env node
import newGame from '..';
import even from '../games/even';

try {
  // if something unexpected
  newGame(even());
  throw new Error('Something unexpected has occurred.');
} catch (e) {
  console.error(e);
}
