import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<View>
				<Text>Higher or Lower?</Text>
			</View>
			{/* <View>Log Rounds</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#ddb52f',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#ddb52f',
		padding: 12
	}
});

export default GameScreen;
