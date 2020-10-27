'use strict';

import generateCatalog from './generateCatalog.js';
import generateFooter from './generateFooter.js';
import generateHeader from './generateHeader.js';
import generateGoodsPage from './generateGoodsPage.js'
import generateItemPage from './generateItemPage.js'
import { loadData } from './loadData.js'


generateCatalog();
generateFooter();
generateHeader();
generateGoodsPage();
generateItemPage();

loadData();