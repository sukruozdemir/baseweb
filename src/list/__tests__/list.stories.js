/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Scenario as ListItemArtworkSizes } from './list-item-artwork-sizes.scenario.js';
import { Scenario as ListItemMenuAdapter } from './list-item-menu-adapter.scenario.js';
import { Scenario as ListItemOverrides } from './list-item-overrides.scenario.js';
import { Scenario as ListItemRtl } from './list-item-rtl.scenario.js';
import { Scenario as ListItem } from './list-item.scenario.js';
import { Scenario as ListHeading } from './list-heading.scenario.js';

export const ItemArtworkSizes = () => <ListItemArtworkSizes />;
export const ItemMenuAdapter = () => <ListItemMenuAdapter />;
export const ItemOverrides = () => <ListItemOverrides />;
export const ItemRtl = () => <ListItemRtl />;
export const Item = () => <ListItem />;
export const Heading = () => <ListHeading />;

export default {
  title: 'List',
};
