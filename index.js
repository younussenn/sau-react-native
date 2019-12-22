import { Navigation } from "react-native-navigation";
import startPage from './src/screens/startPage';

Navigation.registerComponent(`startPage`, () => startPage);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
       stack: {
          children: [
            {
              component:{
                name:'startPage',
                options:{
                  topBar:{
                    visible: false,
                    barStyle: 'default',
                    background: {
                      color: 'black',
                      translucent: true,
                      blur: false,
                    },
                  },
                  statusBar: {
                    visible: true,
                    style: 'light' 
                  },
                },
                
              },
            },
          ]

       }
    }
  });
});