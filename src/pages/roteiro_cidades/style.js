import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    topContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    titulo: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 40,
    },

    input: {
        height: 43,
        width: 280,
        color: '#00080A',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    titleII: {
        fontSize: 30, 
        fontFamily: 'Roboto-Bold',
        width: '90%',
        marginBottom: 15,
        color: '#0D47A1'
    },

    opcoesCidadeContainer: {
        padding: 20,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    cidadeImg:{
        height: '100%',
        width: '100%',
        justifyContent: "flex-end",
        
    },

    buttomCidade:{
        height: 280,
        width: 180,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
    },

    buttonsContainer:{
        flex: 1,
        width: '100%',
    },

    nomeCidadeText:{
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
    },

    nomeCidadeContainer:{
        width: '100%',
        alignItems: "flex-start",
        padding: 5,
    },




})