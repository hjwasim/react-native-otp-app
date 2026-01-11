import { getConfirmation } from "@/helpers/authStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function Index() {
    const { phone } = useLocalSearchParams();
    const router = useRouter();

    const verifyOTP = async (otp: string) => {
        try {
            const confirmation = getConfirmation();
            if (!confirmation) throw new Error("OTP session expired");
            await confirmation.confirm(otp);
            router.replace("/home");
        } catch (e) {
            // simply paa!! alerting for demo purposes
            console.log(e);
            alert("Invalid OTP");
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", width: 300, marginBottom: 20 }}>
                <Text style={styles.title}>Verify OTP</Text>
                <Text style={styles.subtitle}>
                    Enter the 6-digit code sent to {phone}
                </Text>
            </View>

            <OtpInput
                numberOfDigits={6}
                type="numeric"
                onTextChange={(text) => {
                    // dummy validation
                    if (text.length === 6) verifyOTP(text);
                }}
                theme={{
                    containerStyle: {
                        rowGap: 15,
                        maxWidth: 300,
                    },
                }}
            />
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
    title: { fontSize: 20,fontFamily: "Inter_Regular" },
    subtitle: { color: "#888", marginVertical: 10 },
    otp: {
        fontSize: 32,
        letterSpacing: 10,
        borderBottomWidth: 2,
        marginTop: 40,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#F1F1F1",
        padding: 20,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: "center",
        width: 300,
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
