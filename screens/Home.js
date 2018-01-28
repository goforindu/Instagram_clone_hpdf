import React,{Component} from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import {PropTypes} from 'prop-types';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Home extends Component {

  render(){
    return(

        <Container >

                <Content style={{flex: 1}}>
                    <Card>
                        <CardItem>
                                <Left>
                                <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlOvEHMl596SZjM7kCu5qGzJjt-n1Bt7ttsJG6pendjuACX3SbQ'}} />

                                <Text>Smarter Every Day</Text>
                                </Left>


                                <Right>
                                 <Icon name="md-more"  style={{color: '#a9a9a9', fontSize: 24}}/>

                                </Right>

                        </CardItem>

                          <CardItem cardBody>
                            <Image source={{uri: 'https://i.pinimg.com/564x/d7/ca/83/d7ca83aac5b7dd4e7df2094f13a22a81.jpg'}} style={{height: 350, width: null, flex: 1}}/>
                          </CardItem>

                          <CardItem >
                              <Left>
                              <Button transparent>
                                <Icon name="md-heart-outline" style={{color: 'black', fontSize: 26}}/>
                              </Button>

                              <Button transparent>
                                <Icon name="ios-chatbubbles-outline" style={{color: 'black',fontSize: 26}}/>
                              </Button>

                              <Button transparent>
                                <Icon name="paper-plane" style={{color: 'black' , fontSize: 26}} />
                              </Button>
                              </Left>

                             <Right>
                             <Button transparent>
                               <Icon name="ios-bookmark-outline" style={{color: 'black', fontSize: 26}} />
                              </Button>
                             </Right>

                        </CardItem>

                    </Card>

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------2nd feed-------------------xxxxxxxxxxxxxxxxxxxxx */}


                        <Card>
                            <CardItem>
                                    <Left>
                                    <Thumbnail small source={{uri: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg'}} />

                                    <Text>Sundar Pichai</Text>
                                    </Left>


                                    <Right>
                                     <Icon name="md-more"  style={{color: '#a9a9a9', fontSize: 24}}/>

                                    </Right>

                            </CardItem>

                              <CardItem cardBody>
                                <Image source={{uri: 'https://i.pinimg.com/564x/60/63/70/6063701cad4bb43a44df4b30d848cdd2.jpg'}} style={{height:350, width: null, flex: 1}}/>
                              </CardItem>

                              <CardItem >
                                  <Left>
                                  <Button transparent>
                                    <Icon name="md-heart-outline" style={{color: 'black', fontSize: 26}}/>
                                  </Button>

                                  <Button transparent>
                                    <Icon name="ios-chatbubbles-outline" style={{color: 'black',fontSize: 26}}/>
                                  </Button>

                                  <Button transparent>
                                    <Icon name="paper-plane" style={{color: 'black' , fontSize: 26}} />
                                  </Button>
                                  </Left>

                                 <Right>
                                 <Button transparent>
                                   <Icon name="ios-bookmark-outline" style={{color: 'black', fontSize: 26}} />
                                  </Button>
                                 </Right>

                            </CardItem>

                        </Card>

                </Content>
         </Container>

    );
  }
}
