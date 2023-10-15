import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickedNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState('');

	const numberInputHandler = enteredText => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid Number!',
				'Number has to be a number between 1 and 99.',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler
					}
				]
			);
			return;
		}

		onPickedNumber(chosenNumber);
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={styles.input}
					maxLength={2}
					keyboardType='number-pad'
					autoCorrect={false}
					onChangeText={numberInputHandler}
					value={enteredNumber}
				/>
				<View style={styles.buttons}>
					<View style={styles.button}>
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View style={styles.button}>
						<PrimaryButton onPress={confirmInputHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},
	input: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttons: {
		flexDirection: 'row'
	},
	button: {
		flex: 1
	}
});

export default StartGameScreen;
