import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import L from '../../../../assets/icons/h-trending-1.svg'
import './_style.scss'

const TrendingCard = ({image, className }) => {
    return (
        <Box className={`${className ? className : ''} shadow !max-w-[270] h-[350px] p-[12px] bg-white group`}>
            <Box className='w-[247px] h-[244px] flex items-center justify-center bg-[#F5F6F8]'>
                <Image className='w-[171px] group-hover:scale-110 duration-300' src={image} alt="Dan Abramov" />
            </Box>
            <Box className='pt-[15px] text-center'>
                <Text className='text-[#151875] text-[16px] font-[700]'>Cantilever chair</Text>
                <Flex gap={'12px'} justifyContent={'center'}>
                    <Text className='text-[#151875] text-[12px] font-[400]'>$26.00</Text>
                    <Text className='text-[#cbcbf8] text-[12px] font-[400] line-through'>$42.00</Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default TrendingCard;