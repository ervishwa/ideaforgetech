import React from 'react'
import { Header } from '../../components/header/Header'
import { CompanyInfo } from '../../components/companyInfo/CompanyInfo'
import { Products } from '../../components/products/Products'
import { BasicInfo } from '../../components/basicInfo/BasicInfo'
import { Applications } from '../../components/applications/Applications'
import { Footer } from '../../components/footer/Footer'

export function Home() {
  return (
    <>
    <Header/>
    <CompanyInfo/>
    <Products/>
    <BasicInfo/>
    <Applications/>
    <Footer/>
    </>
  )
}

