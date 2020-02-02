import React, { useState}  from 'react';
import { Label, Dropdown, Table, Loader, Segment, Dimmer } from 'semantic-ui-react'


const renderTable = (v , d) => <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Rank</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Price</Table.HeaderCell>
                                <Table.HeaderCell>Price Change (24h)</Table.HeaderCell>
                                <Table.HeaderCell>Market Cap</Table.HeaderCell>
                                <Table.HeaderCell>Volume (24h)</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {render_based_on_dropdown_val(v, d)}
                    </Table>

const render_based_on_dropdown_val = (v,d) => <Table.Body>
                                            { d.slice(0,v).map( (val, i) => 
                                                <Table.Row key={i}>
                                                    <Table.Cell>
                                                    <Label ribbon> {val.cmc_rank} </Label>
                                                    </Table.Cell>
                                                    <Table.Cell>{val.name}</Table.Cell>
                                                    <Table.Cell>{'$' + val.quote.USD.price}</Table.Cell> 
                                                    <Table.Cell>{val.quote.USD.percent_change_24h}</Table.Cell> 
                                                    <Table.Cell>{'$' + val.quote.USD.market_cap }</Table.Cell>
                                                    <Table.Cell>{ val.quote.USD.volume_24h}</Table.Cell>
                                                </Table.Row>
                                                )}
                                            </Table.Body>

const showLoader = () =>   <Segment>
                                <Dimmer active>
                                    <Loader />
                                </Dimmer>
                            </Segment>                                          

const options = [
    { key: 1, text: '10', value: 10 },
    { key: 2, text: '50', value: 50 },
    { key: 3, text: '100', value: 100 },
  ]

const Home = (props) => {
        const [count , setCount] = useState(0);
        console.log(props.data.data, count.value)


        const handleOnChange = (e, data) => {
            setCount(data)
         }

        return (
            <>
                  <Dropdown 
                    defaultValue={100}
                    icon='filter'
                    options={options}
                    selection 
                    onChange={handleOnChange}
                  />

                { props.data.data ? renderTable( count.value, props.data.data) : showLoader() } 
            </>
        );
    }





export default Home ; 