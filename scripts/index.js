'use strict'

// IMPORTS

import { useCatalog } from './useCatalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import {loadData} from './loadData.js';


  // OUTPUT_IMPORTS
generateHeader();
generateSubCatalog();
generateFooter();
generateCatalog();
loadData();



useCatalog();