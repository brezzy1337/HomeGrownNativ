import React, { useState } from 'react'
import { View } from 'react-native'
import { IconContext } from "react-icons";
import { BsCreditCard } from 'react-icons/bs';
import { GrPaypal } from 'react-icons/gr';
import { AiOutlineDollar } from 'react-icons/ai';
import { SiBitcoin } from 'react-icons/si';
import VaultPaypal from '../Payment/BrainTree/VaultPaypal';
import VaultCard from '../Payment/BrainTree/VaultCard';

const AddPayment: React.FC = () => {

    const [paymentType, setPaymentType] = useState<string>('');
    const [openCardForm, setOpenCardForm] = useState<boolean>(false);   
    const [openPaypalForm, setOpenPaypalForm] = useState<boolean>(false);
    const [openCryptoForm, setOpenCryptoForm] = useState<boolean>(false);
    const [openCashForm, setOpenCashForm] = useState<boolean>(false);

    let togglepaymenttype = () => {
        if (paymentType === "card") {
            setOpenCardForm(true);   
            setOpenPaypalForm(false);
            setOpenCryptoForm(false);
            setOpenCashForm(false);
        }
        if (paymentType === "paypal") {
            setOpenPaypalForm(true);
            setOpenCardForm(false);   
            setOpenCryptoForm(false);
            setOpenCashForm(false);

        }
        if (paymentType === "cash") {
            setOpenCashForm(true);
            setOpenCardForm(false);
            setOpenPaypalForm(false);
            setOpenCryptoForm(false);
        }
        if (paymentType === "bitcoin") {
            setOpenCryptoForm(true);
            setOpenCardForm(false);
            setOpenPaypalForm(false);
            setOpenCashForm(false);

        }
    };

  return (
    <View>
         <div className="paymentTypesContainer">
                <div className="paymentTypeContainer">
                    <div className={`paymentTypeCard ${openCardForm ? 'is-toggled': ''}`}>
                        <IconContext.Provider value={{ color: "Black", className: "HomeIcon", size: "2.5em",  }}>
                            <BsCreditCard onClick={() => {
                                setPaymentType("card");
                                togglepaymenttype();
                            }}/>
                        </IconContext.Provider> 
                    </div>
                </div>
                <div className="paymentTypeContainer">
                    <div className={`paymentTypePaypal ${openPaypalForm ? 'is-toggled': ''}`}>
                        <IconContext.Provider value={{ color: "Black", className: "HomeIcon", size: "2.5em",  }}>
                        <GrPaypal onClick={() =>{
                            setPaymentType("paypal");
                            togglepaymenttype();
                        }}/>
                        </IconContext.Provider> 
                    </div>
                </div>
                <div className="paymentTypeContainer">
                    <div className={`paymentTypeCash ${openCashForm ? 'is-toggled': ''}`}>
                        <IconContext.Provider value={{ color: "Black", className: "HomeIcon", size: "2.5em",  }}>
                            <AiOutlineDollar onClick={() => {
                                setPaymentType("cash");
                                togglepaymenttype();
                        }}/>
                        </IconContext.Provider> 
                    </div>
                </div>
                <div className="paymentTypeContainer">
                    <div className={`paymentTypeBitcoin ${openCryptoForm? 'is-toggled': ''}`}>
                        <IconContext.Provider value={{ color: "Black", className: "HomeIcon", size: "2.5em",  }}>
                            <SiBitcoin  onClick={() => {
                                setPaymentType("bitcoin");
                                togglepaymenttype();
                        }}/>
                        </IconContext.Provider> 
                    </div>
                </div>
            </div>
            {/* paypal and card methods will are vaulted by braintree */}
            {openCardForm && <VaultCard/>}
            {openPaypalForm && <VaultPaypal/>}
            {/* {openBitcoinForm && <bitcoinForm/>} */}
    </View>
  )
}

export default AddPayment