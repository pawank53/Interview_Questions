Interview Questions
Q 1. Default Props in react native
Q 2. What are props drilling and how we avoid it in react native?

Q 3. Reeact native Snack bar 
Integrating Snackbar in React Native Applications
Snackbar is a useful UI component in mobile applications that displays temporary messages or notifications to users. In React Native, Snackbar is commonly used to provide feedback or alerts for various user actions. In this blog post, we will explore how to integrate Snackbar into React Native applications effectively.

What is Snackbar?

Snackbar is a small, non-modal dialog that appears at the bottom of the screen for a short period, typically to provide brief messages or notifications. It is commonly used to inform users about the status of their actions, such as successful operations, errors, or warnings. Snackbar messages are displayed briefly and automatically disappear after a specified duration or when dismissed by the user.

Installing Snackbar Library
To use Snackbar in React Native applications, we need to install a library that provides Snackbar functionality. One popular library for Snackbar in React Native is react-native-snackbar. We can install it using npm or yarn:

npm install react-native-snackbar
or 
yarn add react-native-snackbar

Integrating Snackbar into React Native Components

Once the react-native-snackbar library is installed, we can integrate Snackbar into our React Native components. Here's a step-by-step guide on how to do it:

1. Import Snackbar Component
First, we need to import the Snackbar component from the react-native-snackbar library into our component file:
import Snackbar from 'react-native-snackbar';

2. Displaying Simple Snackbar
We can display a simple Snackbar message using the Snackbar.show() method. This method accepts an object with configuration options for the Snackbar, such as the message text, duration, and action:

Snackbar.show({
        text:"Snackbar without action", // Message that you want to show 
        duration:Snackbar.LENGTH_SHORT, // Duration of time to show
        rtl:true, // Move snackbar from right to left
        backgroundColor:"#ed420e" // Background color of the snackbar
    });

3. Adding Action to Snackbar
We can also add an action button to the Snackbar by specifying the action object with text and onPress handler:

Snackbar.show({
        text:"Snackbar with action", // Message that you want to show 
        duration:Snackbar.LENGTH_LONG,// Duration of time to show snackbar
        action:{
            text:"UNDO",
            textColor:'#125c06', // Action text color
            onPress:(()=>{
                console.log("Clicked UNDO"); 
            })
        },
        textColor:'#ed420e' // Snackbar message color
    });

4. Dismissing Snackbar
Snackbar can be dismissed programmatically by calling the Snackbar.dismiss() method:
Snackbar.dismiss();

Conclusion
Snackbar is a convenient and user-friendly way to display temporary messages or notifications in React Native applications. By integrating the react-native-snackbar library and following the steps outlined in this guide, you can easily implement Snackbar functionality in your React Native projects. Whether it's providing feedback on user actions or alerting users about important information, Snackbar is a versatile component that enhances the overall user experience in mobile applications.