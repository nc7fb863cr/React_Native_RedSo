import { Dimensions, NativeModules, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;
const statusBarHeight = Platform.os === 'ios' ? 20 : StatusBarManager.HEIGHT;

export { width, height };

export const avatarSize = width * 0.25;

export const separotorWidth = width * 0.9;

export const pagePaddingTop = statusBarHeight;