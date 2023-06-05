import { Image, StyleSheet, View } from 'react-native';

export default function CatImage({ source }) {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: source }}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#222',
        height: '50%',
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});