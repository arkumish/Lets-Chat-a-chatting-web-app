importScripts('/__/firebase/5.1.0/firebase-app.js');
importScripts('/__/firebase/5.1.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();



curl -H "Content-Type: application/json" \
     -H "Authorization: key=AAAAP6vmjOk:APA91bHRLcmNgtrCCAbgkBZj3mXZwDic9VE3UQyGqsmpEyUqcfk5inW6tZTLnC0wFaiJKXBOb-4gTbvgiAOo7wG9HczIR8o18mxgW2-XeScR8P2pT1H2TI1yrlJOfDxBXqOZ1Jmo9ADQ" \
     -d '{
           "notification": {
             "title": "New chat message!",
             "body": "There is a new message in FriendlyChat",
             "icon": "/images/profile_placeholder.png",
             "click_action": "http://localhost:5000"
           },
           "to": "eRhjvNKKrzU:APA91bFKGvF0ju5HvGupnB1UTfJUkND8TBzZUIY_OarWTjoouZqrI9uxuvzh3U7M2-U46AgO56rqQEP7bVivvsXJBYcHL0TkPFR8r28H0BMA9wMORIvGo5cYUj5-7--AvPU202Stay9p"
         }' \
     https://fcm.googleapis.com/fcm/send