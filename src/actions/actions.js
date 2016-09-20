import xhr from 'xhr';

export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  };
};


export function setSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp: temp
  };
};

export function setData(data) {
	return {
		type:'SET_DATA',
		data: data
	}
};

export function setDates(dates) {
	return {
		type:'SET_DATES',
		dates: dates
	}
};

export function setTemps(temps) {
	return {
		type:'SET_TEMPS',
		temps: temps
	}
};

export function setIcons(icons) {
  return {
    type: 'SET_ICONS',
    icons: icons
  }
}

export function changeLocation(location) {
	return {
		type: 'CHANGE_LOCATION',
		location: location
	}
};

export function setSelectedIcon(icon) {
  return {
    type: 'SET_SELECTED_ICON',
    icon: icon
  }
};

export function fetchData(url) {
  return function thunk(dispatch) {
    xhr({
      url: url
    }, function (err, data) {

      var body = JSON.parse(data.body);
      var list = body.list;
      var dates = [];
      var temps = [];
      var icons = [];
      for (var i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
        icons.push(list[i].weather[0].icon)
      }

      dispatch(setData(body));
      dispatch(setDates(dates));
      dispatch(setTemps(temps));
      dispatch(setIcons(icons));
      dispatch(setSelectedDate(''));
      dispatch(setSelectedTemp(null));
      dispatch(setSelectedIcon(null))
    });
  }
}


