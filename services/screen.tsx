import {Dimensions, Platform} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const isMobile = (Platform.OS !== 'web' && Platform.OS !== 'windows') && windowWidth < 768;

export default isMobile;