import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Fact({ onPress, children }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a462e7',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    text: {
        color: '#fff'
    }
});