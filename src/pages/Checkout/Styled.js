import styled from "styled-components";

export const Container = styled.div`
    background-color: #e4e6f0;
    margin: 0;
    padding: 0;
`

export const Content = styled.div`
    padding: 80px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.3px;
`

export const TableWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`

export const FormWrapper = styled.div`
    width: 50%;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    diplay: flex;
    flex-direction: column;
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 15px 0;
`

export const Input = styled.input`
    padding: 4px;
    height: 20px;
    width: 95%;
    font-family: Roboto, sans-serif;
    font-size: 16px;
`

export const Area = styled.textarea`
    padding: 4px;
    width: 95%;
    word-wrap: break-word;
    white-space: pre-wrap;
    resize: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
`

export const Table = styled.table`
    box-sizing: border-box;
    width: 45%;
    border: 2px solid black;
    background-color: #fff;
`

export const TableHead = styled.thead`
    padding: 5px;
`

export const TableBody = styled.tbody`
    padding: 5px;
`

export const BodyRow = styled.tr`
    height: 40px;
    width: 60%;
`

export const HeadColumn = styled.th`
    padding-bottom: 8px;
`

export const BodyColumn = styled.td`
    font-weight: 700;
    font-size: 16px;
    height: 30px;
`

export const ValueColumn = styled.td`
    height: 30px;
    width: 300px;
    overflow: auto;
    word-wrap: break-word;
    white-space: pre-wrap;
    text-align: justify;
`


// Dropdown

export const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 230px;
    border: 1px solid black;
`

export const Selections = styled.div`
    background-color: white;
    color: #000;
    padding: 4px 0 4px 10px;
    width: 95%;
    font-size: 15px;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }
`

export const ItemHolder = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    gap: 13px;
    flex-direction: column;
`

export const DropdownItem = styled.div`
    margin: 4px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    &:hover {
        cursor: pointer;
        color: salmon;
    }
`

export const False = styled.div`
    z-index: -9999;
    background-color: transparent;
`

export const ItemName = styled.span`
    font-size: 16px;
    font-weight: 600;
`

export const Image = styled.img`
    width: 28%;
`

// Button
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
        transition: all ease-in-out .3s;
    }
`