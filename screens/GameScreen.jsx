import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (min, max, exclude) => {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber == exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' }
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		setCurrentGuess(
			generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'greater')}>
							+
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'lower')}>
							-
						</PrimaryButton>
					</View>
				</View>
			</Card>
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
		color: Colors.accent500,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: 12
	},
	instructionText: {
		marginBottom: 12
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1
	}
});

export default GameScreen;
