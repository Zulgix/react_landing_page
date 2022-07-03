import React from 'react'
import icon1 from '../../images/svg-1.jpg'
import icon2 from '../../images/svg-2.jpg'
import icon3 from '../../images/svg-3.jpg'
import { ServicesContainer, ServicesH1, ServicesWrapper,CardWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './StyledServices'

function Services({lightBg,id}) {
  return (
    <ServicesContainer lightBg={lightBg} id={id}>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
        <CardWrapper>
        <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>Nail Art</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet. </ServicesP>
        </ServicesCard>
        </CardWrapper>
        <CardWrapper>
        <ServicesCard>
            <ServicesIcon src={icon2}/>
            <ServicesH2>Premium Quiality</ServicesH2>
            <ServicesP>Best top of the line poish ONLY!. </ServicesP>
        </ServicesCard>
        </CardWrapper>
        <CardWrapper>
        <ServicesCard>
            <ServicesIcon src={icon3}/>
            <ServicesH2>Best Service</ServicesH2>
            <ServicesP>maintaning healthy nails . </ServicesP>
        </ServicesCard>
        </CardWrapper>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;