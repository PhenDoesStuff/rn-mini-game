import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

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
			<View style={styles.inputContainer}>
				<Text style={styles.instructionText}>Enter a Number</Text>
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
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 36,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25
	},
	instructionText: {
		color: Colors.accent500,
		fontSize: 24
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
