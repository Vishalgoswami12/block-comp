import React from "react"
import { View } from "react-native";
import { Text } from "react-native-paper";
function SwaPrivacyPolicyCard(){
return(
    <View style={{padding:10}}>
        <View>
        <Text variant="bodySmall">1. Data Collection: We collect and store information you provide, such as your name, email (example@email.com), and contact details, to improve your app experience.</Text>

<Text style={{marginTop:15}} variant="bodySmall">2. Usage Information: We may collect data on how you interact with the app, including the courses you view and your test performance, to enhance our services.</Text>

<Text style={{marginTop:15}} variant="bodySmall">3. Device Information: We may gather device information like the type of device (e.g., iOS or Android), operating system, and unique identifiers to improve app functionality.</Text>

<Text style={{marginTop:15}} variant="bodySmall">4. Cookies and Analytics: We use cookies and analytics tools to collect information about your usage patterns and preferences.</Text>

<Text style={{marginTop:15}} variant="bodySmall">5. Third-Party Services: The app may link to third-party services for content and functionality. Be aware of their privacy policies.</Text>

<Text style={{marginTop:15}} variant="bodySmall">6. Security Measures: We employ security measures to protect your data. However, no method of transmission or storage is 100% secure.</Text>

<Text style={{marginTop:15}} variant="bodySmall">7. Sharing Data:** We may share your data with third parties for analytics, marketing, or app improvement. Your personal information is kept confidential.</Text>

<Text style={{marginTop:15}} variant="bodySmall">8. Data Retention: We retain your data as long as you use our services. You can request the deletion of your account and data.</Text>

<Text style={{marginTop:15}} variant="bodySmall">9. Children's Privacy: The app is not intended for children under 13. We do not knowingly collect personal information from children.</Text>

<Text style={{marginTop:15}} variant="bodySmall">10. Changes to Policy: This Privacy Policy may be updated to reflect app changes. Users will be notified of significant updates.</Text>

<Text style={{marginTop:15}} variant="bodySmall">11. Contact Us: If you have any questions or concerns about this policy, please contact us at contact@example.com.</Text>
    </View>
    </View>
)
}

export default SwaPrivacyPolicyCard;