import { getAuth, signInWithPhoneNumber } from "@/firebase";
import { setConfirmation } from "@/helpers/authStore";
import { router } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
    const [phone, setPhone] = useState("");
    const [isPhoneNumValid, setIsPhoneNumValid] = useState(true);

    const sendOtp = async () => {
        let authInstance = await getAuth();

        // I have disabled App verification because this is for testing purpose!! 
        authInstance.settings.appVerificationDisabledForTesting = true;
        const confirmation = await signInWithPhoneNumber(authInstance, phone);

        setConfirmation(confirmation);

        router.push({
            pathname: "/otp-verify",
            params: { phone },
        });
    };

    function setPhoneNumber(text: string): void {
        // simple indian number validation and formatting
        text = text.replace(/^\+91/, "").replace(/\D/g, "");
        text = text.slice(0, 10);
        setIsPhoneNumValid(text.length !== 10);
        setPhone("+91 " + text);
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", width: 300 }}>
                <Text style={styles.title}>Lets get you signed up!</Text>
                <Text
                    style={{
                        marginBottom: 20,
                        color: "#555",
                        textAlign: "center",
                    }}
                >
                    Enter your phone number to receive a One Time Password (OTP)
                    for verification.
                </Text>
            </View>

            <TextInput
                placeholder="+91 123 456 7890"
                keyboardType="number-pad"
                value={phone}
                onChangeText={(text) => setPhoneNumber(text)}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                disabled={isPhoneNumValid}
                onPress={sendOtp}
            >
                <Text style={styles.buttonText}>Send OTP</Text>
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
    title: { fontSize: 24, marginBottom: 20, fontFamily: "Inter_Regular" },

    input: {
        backgroundColor: "#F1F1F1",
        padding: 20,
        borderRadius: 25,
        fontSize: 20,
        fontFamily: "Inter_Regular",
        letterSpacing: 0.5,
        width: 260,
    },
    button: {
        backgroundColor: "#111",
        marginTop: 30,
        padding: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_Regular",
    },
});
