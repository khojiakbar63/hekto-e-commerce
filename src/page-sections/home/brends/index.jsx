import React from 'react';
import Brands from '../../../assets/images/brands.svg'
import { Image } from '@chakra-ui/react';

const Brends = () => {
    return (
        <div className='py-[96px] flex justify-center'>
            <Image src={Brands} alt="Brands" />
        </div>
    );
};

export default Brends;