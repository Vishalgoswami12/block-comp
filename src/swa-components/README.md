<!-- swa-components documentation -->

1. A custom button component named swaButton with onPress, label, color, size, icon, and testID props.
   User
   <swaButton
           onPress={handlePress}
           label="Small Button"
           color="blue"
           size="small"
           icon={icon}
           testID="smallButton"
         />
2. A custom badge component named swaBadge with blue background color and size of 30.
   User
   <swaBadge
           backgroundColor="blue"
           size={30}
         />
   3.A custom avatar icon component named swaAvatarIcon with onPress, icon, size 100, blue color, yellow background, and red primary theme.
   <swaAvatarIcon
   onPress={handlePress}
   icon="as per require"
   size={100}
   color="blue"
   style={{ backgroundColor: "yellow" }}
   theme={{ colors: { primary: 'red' } }}
   />
3. (i) swaAvatar with image source, size 100, marginBottom 20.
   (ii)swaAvatar with folder icon, size 100, blue color, yellow background, and red primary theme.
   (iii)swaAvatar with text "Vishal", size 100, green color, yellow background, and red primary theme.
   User
   <swaAvatar
   onPress={handlePress}
   source={require('./avatar.png')}
   size={100}
   style={{ marginBottom: 20 }}
   />
   <swaAvatar
   onPress={handlePress}
   icon="folder"
   size={100}
   color="blue"
   style={{ backgroundColor: 'yellow' }}
   theme={{ colors: { primary: 'red' } }}
   />
   <swaAvatar
   onPress={handlePress}
   text="Vishal"
   size={100}
   color="green"
   style={{ backgroundColor: 'yellow' }}
   theme={{ colors: { primary: 'red' } }}
   />
4. A custom card component named SwaCard with a cover image sourced from a URL, styled to a height of 200 pixels. The cover image has a placeholder color set to red. It has a test ID "testCover" and an onPress event handler named handlePress.
   <SwaCard
   coverImage={{ uri: 'https://example.com/cover.jpg' }}
   coverImageStyle={{ height: 200 }}
   coverImageTheme={{ colors: { placeholder: 'red' } }}
   testId="testCover"
   onPress={handlePress}
   />
   5.A custom app bar component named swaAppBar with the following configurations:

Set to dark mode.
A status bar height of 20.
Rendered in outlined mode.
Not elevated.
Test ID "customAppBar".
Back action enabled with a white color.
Title set to "My App" with a font size of 20.
Subtitle set to "Subtitle" with a font size of 14.
onPress event handler assigned to the app bar.
Background color set to white.
Content aligned to center.
Two actions included: one for search and one for more options, both with white icons and associated onPress event handlers.
Custom content inside the app bar: "My App Bar" text with white color.

User
<swaAppBar
dark={true}
statusBarHeight={20}
mode="outlined"
elevated={false}
testID="customAppBar"
backAction={true}
backActionProps={{ color: 'white' }}
title="My App"
titleStyle={{ fontSize: 20 }}
subtitle="Subtitle"
subtitleStyle={{ fontSize: 14 }}
onPress={handlePress}
color="white"
contentStyle={{ alignItems: 'center' }}
actions={[
{ icon: 'search', color: 'white', onPress: handleSearch },
{ icon: 'more-vert', color: 'white', onPress: handleMoreOptions }
]}

> {/_ app bar content goes here _/}
> <Text style={{ color: 'white' }}>My App Bar</Text> > </swaAppBar>

6.A custom bottom navigation component named swaBottomNavigation with the following configurations:

Shifting behavior enabled.
Labels displayed for each tab.
Not compact mode.
Navigation state object for managing tab navigation.
Functions provided to render icon, label, and touchable for each tab.
Functions to get accessibility label, badge, color, label text, and test ID for each tab.
Event handlers for tab press and tab long press.
Active tab color set to blue, inactive tab color set to gray.
Animation easing set to ease-in-out.
Keyboard hides the navigation bar.
Safe area insets applied with top and bottom padding of 10.
Maximum label font size multiplier set to 1.5.
Background color of the bottom navigation set to white.
Active indicator style applied with a blue background color.
Custom theme object applied.
Test ID set to "customBottomNavigation".

<swaBottomNavigation
shifting={true}
labeled={true}
compact={false}
navigationState={/_ navigation state object _/}
renderIcon={/_ function to render icon _/}
renderLabel={/_ function to render label _/}
renderTouchable={/_ function to render touchable _/}
getAccessibilityLabel={/_ function to get accessibility label _/}
getBadge={/_ function to get badge _/}
getColor={/_ function to get color _/}
getLabelText={/_ function to get label text _/}
getTestID={/_ function to get test ID _/}
onTabPress={/_ function to handle tab press _/}
onTabLongPress={/_ function to handle tab long press _/}
activeColor="blue"
inactiveColor="gray"
animationEasing="ease-in-out"
keyboardHidesNavigationBar={true}
safeAreaInsets={{ top: 10, bottom: 10 }}
labelMaxFontSizeMultiplier={1.5}
style={{ backgroundColor: 'white' }}
activeIndicatorStyle={{ backgroundColor: 'blue' }}
theme={/_ custom theme object _/}
testID="customBottomNavigation"
/>
7.A custom segmented button component named swaSegmentedButton with the following configurations:

Buttons defined by the buttons prop.
Density set to medium.
Vertical margin of 10 applied to the style.
Custom theme object provided with primary color set to blue and text color set to white.

<swaSegmentedButton
buttons={buttons}
density="medium"
style={{ marginVertical: 10 }}
theme={{ colors: { primary: 'blue', text: 'white' } }}
/>
8.A custom iOS-style checkbox component named swaCheckboxIOS configured with the following settings:

Status of the checkbox determined by the checked state: 'checked' if checked is true, otherwise 'unchecked'.
Checkbox is enabled (not disabled).
onPress event handler assigned to handlePress.
Checkbox color set to blue.
Custom theme object provided with the primary color set to blue.
Test ID set to "swaCheckboxIOS".

<swaCheckbox
status={checked ? 'checked' : 'unchecked'}
disabled={false}
onPress={handlePress}
color="blue"
theme={{ colors: { primary: 'blue' } }}
testID="customCheckboxIOS"
/>

9.  A button component triggering the display of a custom dialog component (swaDialog) when pressed, configured with the following properties:

Visibility determined by the visible state variable.
Dismiss action assigned to hideDialog function.
Dialog title set to "Dialog Title".
Dialog content set to "Dialog Content".
Dialog actions containing two buttons: one labeled "Cancel" with an onPress action to hide the dialog, and another labeled "Ok" with an onPress action to hide the dialog.
Dialog icon set to "info".
Icon color set to blue.
Icon size set to 30.

<Button onPress={showDialog}>Show Dialog</Button>
<swaDialog
visible={visible}
onDismiss={hideDialog}
title="Dialog Title"
content="Dialog Content"
actions={
<>
<Button onPress={hideDialog}>Cancel</Button>
<Button onPress={hideDialog}>Ok</Button>
</>
}
icon="info"
iconColor="blue"
iconSize={30}
/>

10. A custom icon component named swaIcon configured with the following properties:

Size set to 30.
Font scaling allowed.
Icon sourced from "check".
Color set to blue.
Test ID set to "customIcon".
Custom theme object provided with the primary color set to blue.

<swaIcon
size={30}
allowFontScaling={true}
source="check"
color="blue"
testID="customIcon"
theme={{ colors: { primary: 'blue' } }}
/>
11.A custom activity indicator component named swaActivityIndicator configured with the following properties:

Animating state set to true, indicating that the activity indicator should be in the animating state.
Color of the activity indicator set to blue.
Size of the activity indicator set to large.
When not animating, the activity indicator is hidden.
Margin top applied with 20 units of space.
Custom theme object provided with the primary color set to blue.
<swaActivityIndicator
animating={true}
color="blue"
size="large"
hidesWhenStopped={true}
style={{ marginTop: 20 }}
theme={{ colors: { primary: 'blue' } }}
/> 12. A custom chip component named swaChip configured with the following properties:

Display mode set to outlined.
Chip selected state set to true.
onPress event handler assigned to log a message when the chip is pressed.
Text style applied with a blue color.
Vertical margin of 10 units applied to the style.
Custom theme object provided with the primary color set to blue.
Test ID set to "customChip".
<swaChip
mode="outlined"
selected={true}
onPress={() => console.log('Chip pressed')}
textStyle={{ color: 'blue' }}
style={{ marginVertical: 10 }}
theme={{ colors: { primary: 'blue' } }}
testID="customChip" >
13.A custom radio button component named swaRadioButtonAndroid configured with the following properties:

Value set to "radioButtonValue".
Status of the radio button determined by the checked state: 'checked' if checked is true, otherwise 'unchecked'.
onPress event handler assigned to handlePress.
Radio button color set to blue.
Color for unchecked radio buttons set to gray.
Custom theme object provided with the primary color set to blue.
Test ID set to "customRadioButtonAndroid".
<swaRadioButtonAndroid
value="radioButtonValue"
status={checked ? 'checked' : 'unchecked'}
onPress={handlePress}
color="blue"
uncheckedColor="gray"
theme={{ colors: { primary: 'blue' } }}
testID="customRadioButtonAndroid"
/> 14.
A custom helper text component named swaHelperText configured with the following properties:

Type set to "error", indicating it's an error message.
Visibility set to true, making the helper text visible.
Padding set to "normal".
Not disabled.
Margin top applied with 10 units of space.
Custom theme object provided with the error color set to red.
Test ID set to "customHelperText".
Content of the helper text is "This is an error message".
<swaHelperText
type="error"
visible={true}
padding="normal"
disabled={false}
style={{ marginTop: 10 }}
theme={{ colors: { error: 'red' } }}
testID="customHelperText" >
This is an error message
</swaHelperText> 15.
A text input component with the label "Email" and an icon on the right side, provided by a custom component named swaTextInputIcon, which triggers the handlePress function when pressed.
<TextInput
label="Email"
right={<swaTextInputIcon icon="email" onPress={handlePress} />}
/> 16.
A custom surface component named swaSurface configured with the following properties:

Style includes a margin of 10, padding of 10, and a border radius of 5.
Elevation set to 5 for a shadow effect.
Display mode set to "outlined".
Custom theme object provided with the surface color set to white.
Test ID set to "customSurface".
Content inside the surface includes a text saying "This is a custom surface" wrapped in a View component.
<swaSurface
style={{ margin: 10, padding: 10, borderRadius: 5 }}
elevation={5}
mode="outlined"
theme={{ colors: { surface: 'white' } }}
testID="customSurface" >
<View>
<Text>This is a custom surface</Text>
</View>
</swaSurface> 17.
A custom list accordion component named swaListAccordian configured with the following properties:

Title set to "Accordion Title".
Description set to "Accordion Description".
Initial state of the accordion set to collapsed (expanded={false}).
onPress event handler assigned to log a message when the accordion is pressed.
Title text styled with bold font weight.
Description text styled with italic font style.
Test ID set to "customAccordion".
Content inside the accordion includes a text saying "Accordion Content" wrapped in a View component.
<swaListAccordian
title="Accordion Title"
description="Accordion Description"
expanded={false}
onPress={() => console.log('Accordion pressed')}
titleStyle={{ fontWeight: 'bold' }}
descriptionStyle={{ fontStyle: 'italic' }}
testID="customAccordion" >
<View>
<Text>Accordion Content</Text>
</View>
</swaListAccordian> 18.
A custom list item component named swaListItem configured with the following properties:

Title set to "List Item Title".
Description set to "List Item Description".
onPress event handler assigned to handlePress.
Custom theme object provided with the primary color set to blue.
Title text styled with bold font weight.
Description text styled with italic font style.
<swaListItem
title="List Item Title"
description="List Item Description"
onPress={handlePress}
theme={{ colors: { primary: 'blue' } }}
titleStyle={{ fontWeight: 'bold' }}
descriptionStyle={{ fontStyle: 'italic' }}
/>
19.A custom list section component named swaListSection configured with the following properties:

Title set to "Section Title".
Custom theme object provided with the primary color set to blue.
Title text styled with bold font weight.
Background color of the section set to light gray.
Content inside the section includes three list items with titles "Item 1", "Item 2", and "Item 3".
<swaListSection
title="Section Title"
theme={{ colors: { primary: 'blue' } }}
titleStyle={{ fontWeight: 'bold' }}
style={{ backgroundColor: 'lightgray' }} >
<List.Item title="Item 1" />
<List.Item title="Item 2" />
<List.Item title="Item 3" />
</swaListSection>
