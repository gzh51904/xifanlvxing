
import {combineReducers} from 'redux';

import detail from './detail'
import common from './common'

export default combineReducers({detailReducer:detail,commonReducer:common})