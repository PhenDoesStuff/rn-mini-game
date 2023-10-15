import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import Colors from './constants/colors';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(true);

	const pickedNumberHandler = pickedNumber => {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	};

	const gameOverHandler = () => {
		setGameIsOver(true);
	};

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen />;
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
