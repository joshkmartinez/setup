import React from 'react'
import Head from 'next/head'
import { Flex, Text } from 'rebass'
const Index = () => (
  <React.Fragment>
    <Head>
      <title>setup</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex alignItems="center" justifyContent="center">
      <div className="glitch medium" data-text="">
        Mobile:
      </div>
      <div className="glitch medium" data-text="">
        Laptop:
      </div>
    </Flex>
  </React.Fragment>
)

export default Index
