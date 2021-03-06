/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const path = require('path');
const SkipOnWindows = require('../../scripts/SkipOnWindows');
const {run} = require('../utils');
const runJest = require('../runJest');

SkipOnWindows.suite();

it('instruments and collects coverage for typescript files', () => {
  const dir = path.resolve(__dirname, '../typescript-coverage');
  run('yarn', dir);
  const {stdout} = runJest(dir, ['--coverage', '--no-cache']);
  expect(stdout).toMatchSnapshot();
});
