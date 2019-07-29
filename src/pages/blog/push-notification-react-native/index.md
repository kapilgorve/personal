# How to add Push Notification in React Native

We are going to use react-native-firebase to add push notification in our react-native app and utilize firebase cloud messaging.  
Steps involved:-  
1. Create react-native project
2. Create application on firebase console
3. Add react-native-firebase 
4. Test Notification on Device
5. Listen to notification  

Let's start

## Create a React Native Project
We need to React Native project to actually add push notification service. So let's create one. I'm using react-native@0.60.4 which is latest at the time of writing this article. Go to terminal and run this command.
> react-native init pushnotification

You can replace `pushnotification` with project name of your choice.

## Create application on firebase console
We have create an application on firebase console to use the firebase SDK. Go [here](https://console.firebase.google.com/) and create an application. 
* Click on Add Project.
* Add iOS and Android app and follow the steps. Make sure project name in **Register app** section matches with your react-native project.  
// image
* Download `google-services.json` and paste it inside `/pushnotification/android/app/`. Make sure the location is correct.  
// image
* Add libraries as instructed and Sync Project. This will look something like this:-  
// image

## Add react-native-firebase
Go to your project and run this command.
> npm i react-native-firebase --save

(Optional) Link the module if your react-native version is less than 0.60. Run this command.
> react-native link react-native-firebase

React Native takes care of the linking itself above 0.60. No need if you're following along this tutorial.

## Test notification on device
Now we have added all the libraries required and we should be able to receive notification. 
> Make sure your app is in background.
1. Go to firebase console
2. Click on **Cloud Messaging** on left panel.
3. Click on **Send your first message**.
4. Enter **Notification text**-> Click **Next**->Choose **Target**->Select app in **User Segment**.
5. Test it.  
// image

Great our push notification service is working correctly.

## Listen to notification
This part involves two steps: -
1. Ask for permissions.
2. Listen to notification.

### Ask for permission
To start listening to notification, we have to ask for user's permission first. We want to ask for permission when the user opens app. So we will be adding code to `App.js`.
Follow these steps:-  
1. Import firebase module.  
```javascript
import firebase from 'react-native-firebase';
```
2. Check for permission in `componentDidMount()`. If permission hasn't been granted then ask for permission in `askPermission()` otherwise fetch the `token`.
```javascript
async componentDidMount(){
    const granted = await firebase.messaging().hasPermission();
    if (granted) {
        this.fetchToken();
    } else {
        this.askPermission();
    }
}
```
3. Ask permission if not already granted. Fetch token once the permission is granted
```javascript
    async askPermission(){
        try{
            await firebase.messaging().requestPermission();
            console.log('Permissions allowed');
            this.fetchToken();
        } catch(error) {
            console.log('Permissions denied');
        }
    }
```
4. Check if the token is already saved. If not then `getToken` from `firebase` module and save it in `AsyncStorage`.
```javascript
    async fetchToken(){
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }
```