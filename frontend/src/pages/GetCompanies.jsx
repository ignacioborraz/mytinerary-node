import React, {useEffect} from 'react'
import {Link as LinkRouter} from 'react-router-dom'

import {Box,Typography} from '@mui/material'

import {useDispatch,useSelector} from 'react-redux'
import companyActions from '../redux/actions/companyActions'

export default function GetCompanies() {

    const dispatch = useDispatch() //este metodo sirve para despachar acciones al store

    useEffect( () => {
        dispatch(companyActions.getCompanies())
    },[])

    const companies = useSelector(store => store.companyReducer.companies) //defino una variable con los datos del store

    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgb(224,224,224)'}}>
            {companies.map(everyCompany => (
                <Box key={everyCompany._id} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '15px',}}>
                    <Typography variant='h4' className='responsiveH4' sx={{
                        width: '280px',
                        padding: '15px',
                        backgroundColor: 'rgb(105,24,152)',
                        color: 'rgb(224,224,224)',
                        fontFamily: 'Paytone One',
                        textAlign: 'center'}}>
                        {everyCompany.nameCompany}</Typography>
                    <img src={everyCompany.logoCompany} alt={everyCompany.nameCompany} className="list" />
                    <LinkRouter to={`/detailCompany/${everyCompany._id}`}>
                        <Typography variant='h6' className='responsiveH6' sx={{
                            width: '280px',
                            padding: '15px',
                            backgroundColor: 'rgb(2,0,3)',
                            '&:hover': {bgcolor: 'rgb(105,24,152)'},
                            color: 'rgb(224,224,224)',
                            fontFamily: 'Paytone One',
                            textAlign: 'center'}}>
                            +info</Typography>
                    </LinkRouter>
                </Box>
            ))}
        </Box>
    )

}