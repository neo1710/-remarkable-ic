import styled from "@emotion/styled"
import Navbar from "../Components/Navbar"
import { ProductList } from "../Components/ProductList"
import { ProductFilters } from "../Components/ProductFilters"
import Footer from "../Components/Footer"

export const ProductPage=()=>{

    return (
<DIV>
<Navbar/>
<div className="banner"><img src="https://socialweb.ro/wp-content/uploads/2019/10/ads-headphone.png" alt="" /></div><br />

<h1 className="Title">Find Your Favourite Products Here</h1>

<ProductFilters/><br />

<ProductList/>

<Footer/>
</DIV>
    )
}


const DIV=styled.div`
.banner{
    width: 100%;
}
    .banner>img{
        width: 100%;
    }
.Title{
    font-size: larger;
    color: #00472F ;
    text-align: center;
}
`