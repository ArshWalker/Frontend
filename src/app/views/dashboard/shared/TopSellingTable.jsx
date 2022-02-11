import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>Activities Done</Title>
                <Select size="small" defaultValue="this_month">
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="last_month">Last Month</MenuItem>
                </Select>
            </CardHeader>
            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 3 }} colSpan={4}>
                                Activity
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Revenue
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Status
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    colSpan={4}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Avatar src={product.imgUrl} />
                                        <Paragraph sx={{ m: 0, ml: 4 }}>
                                            {product.name}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    $
                                    {product.price > 999
                                        ? (product.price / 1000).toFixed(1) +
                                        'k'
                                        : product.price}
                                </TableCell>

                                <TableCell
                                    sx={{ px: 0 }}
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.available ? (
                                        product.available < 20 ? (
                                            <Small bgcolor={bgSecondary}>
                                                {product.available} Pending
                                            </Small>
                                        ) : (
                                            <Small bgcolor={bgPrimary}>
                                                Done
                                            </Small>
                                        )
                                    ) : (
                                        <Small bgcolor={bgError}>
                                            Failed
                                        </Small>
                                    )}
                                </TableCell>
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'GST Filed',
        price: 1000,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'Invoice Sent',
        price: 1500,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'Invoice Sent',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        name: 'Invoice Sent',
        price: 100,
        available: 0,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'GST Filed',
        price: 1190,
        available: 0,
    },
]

export default TopSellingTable
