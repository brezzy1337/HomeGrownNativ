import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import VaultPaypal from '../Payment/BrainTree/VaultPaypal';
import VaultCard from '../Payment/BrainTree/VaultCard';
import CashButton from '../Payment/CashButton';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
    children?: JSX.Element|JSX.Element[]|ReactNode|ReactNode[]
}

const AddPayment: React.FC = (props:PropsWithChildren<Props>) => {

    // const cardRef = React.useRef<any>(null);
    // const paypalRef = React.useRef<any>(null);
    // const cryptoRef = React.useRef<any>(null);
    // const cashRef = React.useRef<any>(null);

    const [openCardForm, setOpenCardForm] = useState(false);
    const [openPaypalForm, setOpenPaypalForm] = useState(false);
    const [openCryptoForm, setOpenCryptoForm] = useState(false);
    const [openCashForm, setOpenCashForm] = useState(false);

    const styles = StyleSheet.create({
        buttonLeft: {
            flex: .25, height: '25%', borderStyle: 'solid', borderWidth: 1, borderRadius: 12, marginRight: '5%', justifyContent: 'center'
        },
        buttonRight: {
            flex: .25, height: '25%', borderStyle: 'solid', borderWidth: 1, borderRadius: 12, marginLeft: '5%', justifyContent: 'center'
        },
        touched: {
            borderColor: 'black'
        },
        inactive: {
            borderColor: '#92A54A'
        }
    })


  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
        <View style={{flex: .25, height: '20%', width:'80%', alignSelf: 'center', marginTop: '15%'}}>
            <View style={{flexDirection: 'row', height: '160%', alignSelf: 'center'}}>
                <Button 
                style={[ styles.buttonLeft, openCardForm === true ? styles.inactive : styles.touched]}
                onPress={() => {setOpenCardForm(true); setOpenCryptoForm(false); setOpenCashForm(false); setOpenPaypalForm(false);}}
                
                >
                    <Icon name='credit-card' size={34} color={ openCardForm === true ? '#92A54A' : 'black'} style={{ alignSelf: 'center'}}/>
                </Button>
                <Button  
                style={[ styles.buttonRight, openCryptoForm === true ? styles.inactive : styles.touched]}
                onPress={() => {setOpenCryptoForm(true); setOpenCashForm(false); setOpenPaypalForm(false); setOpenCardForm(false);}}
                >
                    <Icon name='bitcoin' size={34} color={ openCryptoForm === true ? '#92A54A' : 'black'} style={{ alignSelf: 'center'}}/>
                </Button> 
            </View>
            <View style={{flexDirection: 'row', height: '160%', alignSelf: 'center' , marginTop: '-55%'}}>
                <Button 
                style={[ styles.buttonLeft, openPaypalForm === true ? styles.inactive : styles.touched]}
                onPress={() => {setOpenPaypalForm(true); setOpenCardForm(false); setOpenCashForm(false); setOpenCryptoForm(false);}}
                >
                    <Icon name='paypal' size={34} color={openPaypalForm === true ? '#92A54A' : 'black'} style={{ alignSelf: 'center'}}/>
                </Button>
                <Button 
                style={[ styles.buttonRight, openCashForm === true ? styles.inactive : styles.touched]}
                onPress={() => {setOpenCashForm(true); setOpenCardForm(false); setOpenCryptoForm(false); setOpenPaypalForm(false);}}
                >
                    <Icon name='dollar-sign' size={34} color={openCashForm === true ? '#92A54A' : 'black' } style={{ alignSelf: 'center'}}/>
                </Button>
            </View>
        </View>
        {openCardForm === true && <VaultCard/>}
        {openPaypalForm === true && <VaultPaypal/>}
        {openCashForm === true && <CashButton/>}
        {openCryptoForm === true && null}
    </View>
  )
}

export default AddPayment