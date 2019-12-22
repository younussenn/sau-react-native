import { Navigation } from 'react-native-navigation';
import NavFunc from '../functions/navigationFunction';
import {Colors} from 'react-native-ui-lib'
import homeTab from '../screens/tabs/homeTab';
import chatTab from '../screens/tabs/chatTab';
import plusTab from '../screens/tabs/plusTab';
import activityTab from '../screens/tabs/activityTab';
import todoListTab from '../screens/tabs/todoListTab';
import Drawer from '../screens/Drawer';

import metrics from '../metrics';

//Tabs
Navigation.registerComponent(`homeTab`, () => homeTab); 
Navigation.registerComponent(`chatTab`, () => chatTab); 
Navigation.registerComponent(`plusTab`, () => plusTab);
Navigation.registerComponent(`activityTab`, () => activityTab); 
Navigation.registerComponent(`todoListTab`, () => todoListTab);
Navigation.registerComponent(`Drawer`, () => Drawer);

const drawerButtonIcon = require('../assets/Images/icons/menu.png');



class tabNavigation {
    constructor() {        
        this.homeTab = () => ({
            stack: {
                id: 'tab.One',
                children: [
                    {
                        component: {
                            id: 'homeTab',
                            name: 'homeTab',                 
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text: 'Anasayfa',
                                    icon: require('../assets/Images/icons/view-grid-outline.png'),
                                    selectedIcon: require('../assets/Images/icons/view-grid-outline.png')
                                },
                                topBar: {
                                     title:{
                                            text:'Anasayfa'
                                     },
                                leftButtons: [
                                        {
                                          id: 'drawerButton',
                                          icon: drawerButtonIcon,
                                          color:'black',
                                          height:30
                                          
                                        }
                                      ]
                               
                                },
                            },
                        },
                    }
                    
                ],
            },
        })
        this.chatTab = () => ({
            stack: {
                id: 'tab.Two',
                children: [
                    {
                        component: {
                            id: 'chatTab',
                            name: 'chatTab',
                            options: {
                                bottomTab: {
                                    text: 'Sohbetler',
                                    icon: require('../assets/Images/icons/forum-outline.png'),
                                    fontSize: 10,
                                },
                                topBar: {
                                     
                                    title: {
                                      text: 'Sohbetler',
                                      
                                    },
                                  },
                            },
                        },
                    }
                ],
            },
        })
        this.plusTab = () => ({
            stack: {
                id: 'tab.Three',
                children: [
                    {
                        component: {
                            id: 'plusTab',
                            name: 'plusTab',
                            options: {
                                bottomTab: {
                                    text: 'Ekle',
                                    icon: require('../assets/Images/icons/plus-box-outline.png'),
                                    fontSize: 10,
                                },
                                topBar: {
                                     
                                    title: {
                                      text: 'Ekle',
                                        
                                    },
                                  },
                            },
                        },
                    }
                ],
            },
        })
        this.activityTab = () => ({
            stack: {
                id: 'tab.Four',
                children: [
                    {
                        component: {
                            id: 'activityTab',
                            name: 'activityTab',
                            options: {
                                bottomTab: {
                                    text: 'Etkinlikler',
                                    icon: require('../assets/Images/icons/calendar-text-outline.png'),
                                    fontSize: 10,
                                },
                                topBar: {
                                     
                                    title: {
                                      text: 'Etkinlikler',
                                       
                                    },
                                  },
                            },
                        },
                    }
                ],
            },
        })
        this.todoListTab = () => ({
            stack: {
                id: 'tab.Five',
                children: [
                    {
                        component: {
                            id: 'todoListTab',
                            name: 'todoListTab',
                            options: {
                                bottomTab: {
                                    text: 'Yapılacaklar',
                                    icon: require('../assets/Images/icons/calendar-check-outline.png'),
                                    fontSize: 10,
                                },
                                topBar: {
                                     
                                    title: {
                                      text: 'Yapılacaklar',
                                      
                                    },
                                  },
                            },
                        },
                    }
                ],
            },
        })    
    }

    pushTabBasedApp() {

        Navigation.setDefaultOptions({         
            statusBar: {
                style: 'light-content',
                blur: true,         
            },
            topBar: {
                visible: true,
                animate: false, 
                hideOnScroll: false,
                drawBehind: false,
                shadowColor: Colors.orange30,
                borderHeight: 1.3,
                borderColor: Colors.orange30,
                background: {
                    color: 'white', 
                },
                title: {
                    fontSize: 16,
                    color: '#1a1a1a',
                    fontFamily: 'Helvetica',
                    fontWeight: 'regular',
                },
                backButton:{
      
                    color:'black'
                },
                
            },
            layout: {
                orientation: ['portrait'],
            },
            bottomTabs: {
                titleDisplayMode: 'alwaysShow',
                animate: true,
                backgroundColor:'white',
                
                
            },
            blurOnUnmount:true,
            bottomTab: {

                textColor: '#1a1a1a',
                selectedTextColor: Colors.orange30,
                iconColor: '#1a1a1a',
                selectedIconColor: Colors.orange30,
                fontFamily: 'Helvetica',
                fontWeight: 'regular',
            }
        });

        Navigation.setRoot({
            root: {
              sideMenu: {
                id: 'main',
                left: {
                  component: {
                    name: 'Drawer',
                  },
                  options: {
                    layout: {
                        orientation: ['portrait']
                    },
                },
                },
                center: {
                    bottomTabs: {
                        id: 'BottomTabs',
                        children: [
                            this.homeTab(),
                            this.chatTab(),
                            this.plusTab(),
                            this.activityTab(),
                            this.todoListTab()
                        ],
                        options:{
                            bottomTabs:{
                                currentTabIndex:0
                            }
                        }
                    },
                },
                options: {
                    sideMenu: {
                        left: {
                            width: metrics.DEVICE_WIDTH * 0.68
                        },
                    },
                },
              },
            },
          }); 
    }
}

// define your styles

//make this component available to the app
export default new tabNavigation();


