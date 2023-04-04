import React from "react"
import FeatureList from '../../list/FeatureList'
import {
    Container,
    AboutIconWrapper,
    AboutIcon,
    Card,
    CardLine,
    TitleCard,
    TextCard,
    Image
} from './Styled'

const Feature = () => {
    const Icon = () => {
        return (
            FeatureList.map((icon, index) => {
                return (
                    <AboutIcon key={index}>
                        <Card>
                            <Image src={icon.image} alt={icon.title} className="image-card"/>
                            <TitleCard>{icon.title}</TitleCard>
                            <TextCard>{icon.text}</TextCard>
                        </Card>
                        {index !== FeatureList.length -1 && <CardLine />}
                    </AboutIcon>
                )
            })
        )
    } 


    return (
        <Container>
            <AboutIconWrapper>
                <Icon />
            </AboutIconWrapper>
        </Container>
    )
}

export default Feature
