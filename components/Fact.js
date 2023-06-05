import { StyleSheet, Text, View } from 'react-native';

export default function Fact({ text }) {
    return (
        <View style={styles.factContainer}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    factContainer: {
        flex: 1,
        backgroundColor: '#222',
        height: '10%',
        width: '100%',
        borderRadius: 15,
        padding: 15
    },
    text: {
        color: '#fff'
    }
});