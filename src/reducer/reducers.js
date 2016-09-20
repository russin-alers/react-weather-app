var initialState = {
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
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
	case 'CHANGE_LOCATION':
	  return {...state, location: action.location};
	case 'SET_DATA':
	  return {...state, data: action.data};
	case 'SET_DATES':
	  return {...state, dates: action.dates};
	case 'SET_TEMPS':
	  return {...state, temps: action.temps};
	case 'SET_ICONS':
		return {...state, icons:action.icons}
	case 'SET_SELECTED_DATE':
	  return {...state, selected: {
		  date: action.date,
		  temp: state.selected.temp,
		  icon: state.selected.icon
		}
	  };
	case 'SET_SELECTED_TEMP':
	  return {...state, selected: {
			date: state.selected.date,
			temp: action.temp,
			icon: state.selected.icon
		}
	  };
	case 'SET_SELECTED_ICON':
		return {...state, selected: {
			date: state.selected.date,
			temp: state.selected.temp,
			icon: action.icon
		}};
	default:
	  return state;
  }
}