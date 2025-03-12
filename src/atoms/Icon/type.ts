import {SvgProps} from 'react-native-svg';

export interface Icon extends SvgProps {
	size?: string | number;
	accentColor?: string;
}
