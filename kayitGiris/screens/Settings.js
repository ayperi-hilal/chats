import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ContactRow from '../components/ContactRow.js';
import { colors } from '../config/constant';
import Seperator from '../components/Seperator.js';
import Cell from '../components/Cell.js';

const Settings = () => {
    return (
        <SafeAreaView>
            <ContactRow
                name="isim"
                subtitle="mail adresi"
                style={styles.contactRow}
            />
            <Seperator />
            <Cell
                title="Logout"
                icon="log-out-outline"
                tintcolor={colors.red}
                onPress={() => {
                    alert("tıladın")
                }}
                style={{marginTop:20}}
            />



            <Cell
                title="Yardım"
                icon="informantion-outline"
                tintcolor={colors.green}
                onPress={() => {
                    alert("tıladın")
                }}
                style={{marginTop:20}}
            />


            <Cell
                title="Davet Et"
                icon="people-outline"
                tintcolor={colors.pink}
                onPress={() => {
                    alert("tıladın")
                }}
                style={{marginTop:20}}
            />




        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    contactRow: {
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
        marginTop: 16,
        borderColor: colors.border
    },
    cell: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        marginStart: 16,
        flex: 1

    },
    ıconContainer: {
        height: 32,
        width: 32,
        backgroundColor: colors.red,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Settings;