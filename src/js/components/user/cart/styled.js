import styled from "styled-components";

const StyleCartComponent = styled.div`
    font-family: "Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important;
    margin-left: 5%;
    margin-right: 5%;

    .cart-header {
        font-size: 46px;
        margin-top: 15px;
        text-transform: uppercase;
        font-weight: 300;
    }

    .cart-summary {
        font-size: 20px;
        margin-bottom: 16px;

        .cart-sum {
            font-weight: bold;
        }
    }

    .cart-infor {

        .cart-product {

        }

        .cart-detail {
            margin-top: 10px;
            border: 1px solid lightgray;
            max-height: 200px;
            padding-left: 2%;
            padding-right: 2%;
        }
    }

    .cart-payment {

        button {
            background-color: black;
            color: white;
            height: 50px;
            cursor: pointer;
            margin-top: 10px;
            height: 50px;
            border: none;
            background-color: black;
            color: white;
            text-transform: uppercase;

            &:hover {
                color: gray;
            }
        }
    }
`;

export { StyleCartComponent };