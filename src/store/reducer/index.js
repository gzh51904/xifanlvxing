
import {combineReducers} from 'redux';

import detail from './detail'
import common from './common'
import date from './date'

export default combineReducers({detailReducer:detail,commonReducer:common,dateReducer:date})