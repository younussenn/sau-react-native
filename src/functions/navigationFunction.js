import { Navigation } from 'react-native-navigation';
import metrics from '../metrics';

export default {
    Modalshow(componentId, props) {
        Navigation.showModal({

            component: {
                name: componentId,
                passProps: props,
                options: {
                    modalPresentationStyle: 'overCurrentContext',
                    statusBar:{
                        drawBehind:false
                    },
                    animations: {
                        showModal: {

                            y: {
                                from: metrics.DEVICE_HEIGHT * 4,
                                to: 0,
                                duration: 500,
                                interpolation: 'decelerate',
                            }
                        },
                        dismissModal: {

                            y: {
                                from: 0,
                                to: metrics.DEVICE_HEIGHT * 4,
                                duration: 350,
                                interpolation: 'decelerate',
                            }
                        }
                    }
                }
            }
        });
    },
    ModalshowRightToLeft(componentId) {
        Navigation.showModal({

            component: {
                name: componentId,
                options: {
                    modalPresentationStyle: 'overCurrentContext',
                    animations: {
                        showModal: {

                            x: {
                                from: metrics.DEVICE_WIDTH * 4,
                                to: 0,
                                duration: 500,
                                interpolation: 'decelerate',
                            }
                        },
                        dismissModal: {

                            x: {
                                from: 0,
                                to: metrics.DEVICE_WIDTH * 4,
                                duration: 350,
                                interpolation: 'decelerate',
                            }
                        }
                    }
                }
            }
        });
    },
    showModalScale(componentId, props) {
        Navigation.showModal({

            component: {
                name: componentId,
                passProps: props,
                options: {
                    modalPresentationStyle: 'overCurrentContext',
                    animations: {
                        showModal: {

                            scaleX: {
                                from: 0,
                                to: 1,
                                duration: 400
                            },
                            scaleY: {
                                from: 0,
                                to: 1,
                                duration: 400
                            },
                            alpha: {
                                from: 0,
                                to: 1,
                                duration: 500
                            }
                        },
                        dismissModal: {
                            scaleX: {
                                from: 1,
                                to: 0,
                                duration: 200
                            },
                            scaleY: {
                                from: 1,
                                to: 0,
                                duration: 200
                            },
                            alpha: {
                                from: 1,
                                to: 0,
                                duration: 200
                            }
                        }
                    }
                }
            }
        });
    },
    showModalFade(componentId, props) {
        Navigation.showModal({

            component: {
                name: componentId,
                passProps: props,
                options: {
                    modalPresentationStyle: 'overCurrentContext',
                    animations: {
                        showModal: {


                            alpha: {
                                from: 0,
                                to: 1,
                                duration: 300
                            }
                        },
                        dismissModal: {

                            alpha: {
                                from: 1,
                                to: 0,
                                duration: 200
                            }
                        }
                    }
                }
            }
        });
    },
    OpenDrawer() {
        Navigation.mergeOptions('Drawer', {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
    },
    CloseDrawer() {
        Navigation.mergeOptions('Drawer', {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });
    },
    tabSwitch(componentId,index) {
        Navigation.mergeOptions(componentId, {
            bottomTabs: {
                currentTabIndex: index
            }
        })
    },
    push(screenName){
        Navigation.push(this.props.componentId,{
            component:{
                name:screenName
            }
        })
    },
    setRoot(rootName) {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [{
                        component: {
                            name: rootName,
                            options: {
                                topBar: {
                                    visible: false,
                                    height: 0
                                },
                                statusBar: {
                                    style: 'light'
                                }
                            }
                        }
                    }]
                }
            }
        });

    }
};