import styled from "styled-components";

export const Container = styled.div`
    background-color: #e4e6f0;
    margin: 0;
    padding: 0 0 120px 0;
`

export const Content = styled.div`
    padding: 80px 20px 0 20px;
`

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
    text-align: center;
`

export const Line = styled.hr`
    font-size: 30px;
    border-width: 1.5px;
    border-color: #666;
`

export const TableWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const HeadWrapper = styled.thead`
    border: 1px solid black;
`

export const TableHead = styled.th`
    padding: 5px;
    font-weight: 700;
    background-color: #fff;
    letter-spacing: 1.2px;
`

export const ColumnNumber = styled.td`
    width: 35px;
    padding: 5px;
    text-align: center;
`

export const ColumnImage = styled.td`
    width: 120px;
    padding: 5px;
    text-align: center;
`

export const Image = styled.img`
    width: 100%;
    height: 140px;
`

export const ColumnProduct = styled.td`
    width: 360px;
    padding: 5px;
    font-size: 18px;
    letter-spacing: 1.2px;
    font-weight: 600;
`

export const ColumnPrice = styled.td`
    width: 125px;
    padding: 5px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1.2px;
`

export const ColumnQuantity = styled.td`
    padding: 5px;
    width: 100px;
`

export const QuantityWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    padding: 3px;
    box-sizing: border-box;
    width: 90%;
    margin: auto;
`

export const QuantitySpan = styled.span`
    font-size: 18px;
    margin-bottom: -1px;
    cursor: pointer;
`

export const Count = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: -1px;
    display: inline-block;
    width: 35px;
    text-align: center;
`

export const Navigate = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5%;
    padding-top: 30px;
`

export const ToNavigate = styled.span`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1.3px;
    padding: 4px 12px;
    color: #fff;
    background-color: #2c365a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    &:hover {
        cursor: pointer;
        transform: scale(1.08);
        transition: all ease-in-out .5s;
    }
`