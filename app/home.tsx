import { clubhouseLogo } from "@/helpers";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <View
                style={{ alignItems: "center", marginBottom: 50, width: 300 }}
            >
                <Image
                    source={clubhouseLogo}
                    style={{ width: 80, height: 80 }}
                />
                <Text style={styles.title}>Welcome Hj!</Text>
                <Text style={styles.welcomeText}>
                    we have successfully logged you in.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF7ED",
        justifyContent: "center",
        alignItems: "center",
    },
    title: { fontSize: 20, marginBottom: 20, fontFamily: "Inter_Regular" },
    welcomeText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        fontFamily: "Inter_Regular",
    },
});
