import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'; //authentication
import UserReducer from './UserReducer'; //user profile
import ItineraryFormReducer from './ItineraryFormReducer';
import ItineraryReducer from './ItineraryReducer';
import StartItnReducer from './StartItnReducer';
import BlFormReducer from './BlFormReducer';
import BlReducer from './BlReducer';
import BlCategoryReducer from './BlCategoryReducer';
import publishedItnReducer from './publishedItnReducer';
import FavItnReducer from './FavItnReducer';

export default combineReducers({
	auth: AuthReducer, //authentication
	user: UserReducer, //user profile
	itineraries: ItineraryReducer,
	itineraryForm: ItineraryFormReducer,
    StartItn: StartItnReducer,
	blogCreate: BlFormReducer,
	blogs: BlReducer,
	selectedCategory: BlCategoryReducer,
    publishedItn: publishedItnReducer,
	favItn: FavItnReducer,
});
