import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-community/async-storage';

export const getCookieValue = async (name: string) => {
	await CookieManager.clearAll() //clearing cookies stored 
                                       //natively before each 
                                       //request
	const cookie = await AsyncStorage.getItem(name);
    console.log(cookie);
	return cookie;
}