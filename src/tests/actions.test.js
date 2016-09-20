import { 
		changeLocation,
		setSelectedDate,
		setSelectedTemp, 
        setSelectedIcon,
		setData,
        setDates,
        setTemps,
        setIcons          } from '../actions/actions';

describe ('actions', function () {
	describe('changeLocation', function () {
  		it('should have a type of "CHANGE_LOCATION"', function() {
    		expect(changeLocation().type).toEqual('CHANGE_LOCATION');
  		});

  		it('should pass on the location we pass in', function() {
		    var location = 'Vienna, Austria';
		    expect(changeLocation(location).location).toEqual(location);
		});

	});

	describe('setSelectedDate', function() {
    	it('should have a type of SET_SELECTED_DATE', function() {
            expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
        });

        it('should pass on the date we pass in', function() {
            var date = '2016-01-01';
            expect(setSelectedDate(date).date).toEqual(date);
        });
  	});

    describe('setSelectedTemp', function() {
    	it('should have a type of SET_SELECTED_TEMP', function() {
            expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP');
        });

        it('should pass on the temp we pass in', function() {
            var temp = '31';
            expect(setSelectedTemp(temp).temp).toEqual(temp);
        });
  	});

    describe('setSelectedIcon', function() {
        it('should have a type of SET_SELECTED_ICON', function() {
            expect(setSelectedIcon().type).toEqual('SET_SELECTED_ICON');
        });

        it('should pass on the icon we pass in', function() {
            var icon = '02n';
            expect(setSelectedIcon(icon).icon).toEqual(icon);
        });
    });


    describe('setData', function() {
        it('should have a type of SET_DATA', function() {
            expect(setData().type).toEqual('SET_DATA');
        });

        it('should pass on the data we pass in', function() {
            var data = { some: 'data' };
            expect(setData(data).data).toEqual(data);
        });
    });

    describe('setDates', function() {
        it('should have a type of SET_DATES', function() {
            expect(setDates().type).toEqual('SET_DATES');
        });

        it('should pass on the dates we pass in', function() {
            var dates = ['2016-01-01', '2016-01-02'];
            expect(setDates(dates).dates).toEqual(dates);
        });
    });

    describe('setTemps', function() {
        it('should have a type of SET_TEMPS', function() {
            expect(setTemps().type).toEqual('SET_TEMPS');
        });

        it('should pass on the temps we pass in', function() {
            var temps = ['31', '32'];
            expect(setTemps(temps).temps).toEqual(temps);
        });
    });

    describe('setIcons', function() {
        it('should have a type of SET_ICONS', function() {
            expect(setIcons().type).toEqual('SET_ICONS');
        });

        it('should pass on the icons we pass in', function() {
            var icons = ['02n', '02n'];
            expect(setIcons(icons).icons).toEqual(icons);
        });
    });


});