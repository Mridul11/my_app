import React from "react";
import { Menu , Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom' ;


const NavbarComponet = () =>  
                    <div>
                        <h1>MarketCap App </h1>
                        <Grid columns={2} divided={true} stackable={true}> 
                            <Grid.Row>
                                <Menu>
                                    <Grid.Column>
                                        <Menu.Item
                                            name='home'
                                            >
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </Menu.Item>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Menu.Item
                                            name='liquidity'
                                            >
                                            <Link to="/liquidity">
                                                Liquidity
                                            </Link>
                                        </Menu.Item>
                                    </Grid.Column>
                                
                                    </Menu>
                                </Grid.Row>
                            </Grid>
                    </div>


export default NavbarComponet ;