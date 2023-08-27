import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

const App = () => {
	const [userNumber, setUserNumber] = useState(null);

	const pickedNumberHandler = pickedNumber => {
		setUserNumber(pickedNumber);
	};

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	backgroundImage: {
		opacity: 0.15
	}
});

export default App;
