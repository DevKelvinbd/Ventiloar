import styled from "styled-components"
import ImgSection3 from '../../assets/Images/ImgSection3.png'

const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };

const DivSection3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 100vh;
    background-color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
        height: auto;
        padding: 6rem 0;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }
`

const DivText = styled.div`
    position: relative; /* Define o contexto de posicionamento para a camada ::before */
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 60%;
    height: 80%;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
        margin: 2rem 0;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: left;
    padding: 0 5em 1rem 5rem;  
    margin: 0;
    line-height: 1;
    font-family: 'Impact', sans-serif;
    color: #ffffff;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0.5rem 2.5rem 0.5rem 2.5rem;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        padding: 1rem 3rem 1rem 3rem; 
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        padding: 0 2rem 1rem 3rem;   
    }
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0 3em 0 5rem;  
    margin: 0rem 0 0 0;
    color: #ffffff;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0.5rem 2.5rem 0.5rem 2.5rem;
        font-size: 0.9rem;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        padding: 0 3rem 0 3rem; 
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        padding: 0 2rem 0 3rem;   
    }
`


const SpanColor = styled.span`
    color: #62EAF9;
    font-weight: 700;
`

const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 40%;
    height: 100%;
    background-color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        display: none;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        display: none;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const ImagemS3 = styled.img`
    height: 100%;
    width: auto;
    margin-left: 3rem; 

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        display: none;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const Section3En = () => {
  return (
    <DivSection3>
       <DivText>
            <Title>Solution</Title>
            <Paragraph>
            The <SpanColor>Series Fan System</SpanColor> does not have an individual motor for each blade; with a single central motor, it can drive multiple blades, thereby reducing energy consumption and, consequently, lowering electricity costs.
                <span style={{ display: 'block', marginBottom: '1rem' }}></span>
                A key differentiator of our product is its <SpanColor>durability</SpanColor>. We aim to break the taboo of <SpanColor>Planned Obsolescence</SpanColor>, where products are purchased with an expected expiration date to fail.
                <span style={{ display: 'block', marginBottom: '1rem' }}></span>
                Our proposal is to provide the customer with a functional, durable, economical, and sustainable product, reducing <SpanColor>energy consumption by up to 90%</SpanColor> with fans while delivering superior ventilation quality.
            </Paragraph>
        </DivText>

        <DivImage>
            <ImagemS3 src={ImgSection3} alt="Imagem-Devan-Ventiladores" />
        </DivImage>

    </DivSection3>
  )
}

export default Section3En