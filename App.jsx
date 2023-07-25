import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { ImageBackground } from 'react-native';

const App = () => {
	return (
		<LinearGradient
			colors={['#4e0329', '#ddb52f']}
			style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}>
				<StartGameScreen />
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
