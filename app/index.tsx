import { clubhouseLogo } from "@/helpers";
import { router } from "expo-router";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";


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
                <Text style={styles.title}>HjWaz App</Text>
                <Text style={styles.welcomeText}>
                    Welcome to our Hjwaz App. This app demonstrates how to
                    connect with Firebase for OTP verification.
                </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate("/signup")}
            >
                <Text style={styles.buttonText}>Get Started!</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 32,
        fontWeight: "700",
        marginVertical: 5,
        letterSpacing: 0.6,
        fontFamily: "Inter_Regular",
    },
    button: {
        backgroundColor: "#111",
        padding: 12,
        borderRadius: 25,
        width: "70%",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        fontFamily: "Inter_Regular",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_Regular",
    },
});
