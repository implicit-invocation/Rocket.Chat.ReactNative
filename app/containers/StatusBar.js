import React from 'react';
import { StatusBar as StatusBarRN } from 'react-native';
import PropTypes from 'prop-types';

import { themes } from '../constants/colors';

const StatusBar = React.memo(({ theme, barStyle, backgroundColor }) => {
	if (!barStyle) {
		barStyle = 'light-content';
		if (theme === 'light') {
			barStyle = 'dark-content';
		}
	}
	return <StatusBarRN backgroundColor={backgroundColor ?? themes[theme].headerBackground} barStyle={barStyle} animated />;
});

StatusBar.propTypes = {
	theme: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	barStyle: PropTypes.string,
	backgroundColor: PropTypes.string
};

export default StatusBar;
