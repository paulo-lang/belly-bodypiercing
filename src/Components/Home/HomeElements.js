import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 80vh;
    width: 100vw;
    justify-content: center;
    display: flex;
    left: 0;
    background-color: blue;
`
export const BgImgContainer = styled.div`
    position:relative;
    height: 80vh;
    width: 100vw;
    max-width: 1920px;
`

export const BgImg = styled.img`
    height: 80vh;
    max-height: 1080px;
    width: 100%;
`

export const BgWeb = styled.img`
    height: 600px;
    width: 300px;
    position: absolute;
    right: 0px;
    top: 0px;
`

export const ArrowContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: calc(50% - 115px);
`