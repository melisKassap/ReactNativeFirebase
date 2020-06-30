import { StyleSheet, Dimensions } from 'react-native'

const styles = {

    signUpPage: StyleSheet.create({
        viewBackground: {
            flex: 1,
            backgroundColor: "#44517E",

        },

        viewPosition: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        textInputStyle: {
         
            justifyContent: 'center',
            color: 'white',
            margin: 15,
            marginVertical: 10,
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#bdbdbd',
            width: Dimensions.get('window').width / 1.2
        },

        touchableStyle:{
            padding: 10,
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#D7EEFC',
            width: Dimensions.get('window').width / 1.8
        }
    })
}

export default styles;