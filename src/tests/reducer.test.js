import mainReducer from '../reducer/reducers';
import { fromJS } from 'immutable';

describe('mainReducer', function() {
    it('should return the initial state', function() {
        expect(mainReducer(undefined, {})).toEqual(({
            location: '',
          	data: {},
          	dates: [],
          	temps: [],
            icons: [],
          	selected: {
	            date: '',
	            temp: null,
              icon: null
	        }
        }));
    });

    it("should react to an action with the type 'CHANGE_LOCATION'", function() {
        var location = 'Vienna, Austria';
        expect(mainReducer(undefined, {
            type: 'CHANGE_LOCATION',
            location: location
        })).toEqual(({
            location: location,
          	data: {},
          	dates: [],
          	temps: [],
            icons: [],
          	selected: {
            	date: '',
            	temp: null,
              icon: null
          	}
        }));
    });

    it("should react to an action with the type 'SET_DATA'", function() {
        var data = { some: 'data' };
        expect(mainReducer(undefined, {
            type: 'SET_DATA',
            data: data
        })).toEqual(({
            location: '',
	        data: data,
	        dates: [],
	        temps: [],
          icons: [],
	        selected: {
	        	date: '',
	            temp: null,
              icon: null
	        }
        }));
    });

    it("should react to an action with the type 'SET_DATES'", function() {
        var dates = ['2016-01-01', '2016-02-02'];
        expect(mainReducer(undefined, {
            type: 'SET_DATES',
            dates: dates
        })).toEqual(({
            location: '',
          	data: {},
          	dates: dates,
          	temps: [],
            icons: [],
          	selected: {
	            date: '',
	            temp: null,
              icon: null
          	}
        }));
    });

    it("should react to an action with the type 'SET_TEMPS'", function() {
        var temps = ['31', '32'];
        expect(mainReducer(undefined, {
            type: 'SET_TEMPS',
            temps: temps
        })).toEqual(({
            location: '',
          	data: {},
          	dates: [],
          	temps: temps,
            icons: [],
          	selected: {
	            date: '',
	            temp: null,
              icon: null
	        }
        }));
    });

    it("should react to an action with the type 'SET_SELECTED_DATE'", function() {
        var date = '2016-02-01'
        expect(mainReducer(undefined, {
            type: 'SET_SELECTED_DATE',
            date: date
        })).toEqual(({
            location: '',
          	data: {},
          	dates: [],
          	temps: [],
            icons: [],
          	selected: {
	            date: date,
	            temp: null,
              icon: null
          	}
        }));
    });

    it("should react to an action with the type 'SET_SELECTED_TEMP'", function() {
        var temp = '31';
        expect(mainReducer(undefined, {
            type: 'SET_SELECTED_TEMP',
            temp: temp
        })).toEqual(({
            location: '',
          	data: {},
          	dates: [],
          	temps: [],
            icons: [],
          	selected: {
	            date: '',
	            temp: temp,
              icon: null
          	}
        }));
    });

    it("should react to an action with the type 'SET_SELECTED_ICON'", function() {
        var icon = '02n';
        expect(mainReducer(undefined, {
            type: 'SET_SELECTED_ICON',
            icon: icon
        })).toEqual(({
            location: '',
            data: {},
            dates: [],
            temps: [],
            icons: [],
            selected: {
              date: '',
              temp: null,
              icon: icon
            }
        }));
    });
});