import React from "react";
import { Container, Row } from "react-bootstrap";

//imported Images for Carousel 
import madnotes from '../../images/Madnotes.png';
import memorygame from '../../images/memorygame.png'
import teamgen from '../../images/teamgen.png'
import budgettracker from '../../images/budgettracker.png'
import weatherapp from '../../images/weatherapp.png'
import employeedir from '../../images/employeedirectory.png'


import Card from '../Card/Card';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Madnotes',
                    subTitle: 'Vent a little',
                    imgSrc: madnotes ,
                    link: 'https://github.com/Callumwhite210/Project-2',
                    selected:false,
                },
                {
                    id: 1,
                    title: 'Budget Tracker',
                    subTitle: 'Keep track of your money!',
                    imgSrc:budgettracker ,
                    link: 'https://github.com/Callumwhite210/homework18',
                    selected:false,
                },
                {
                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'Check the weather',
                    imgSrc:weatherapp ,
                    link: 'https://github.com/Callumwhite210/homeworkweek6',
                    selected:false,
                },
                {
                    id: 3,
                    title: 'Employee Directory',
                    subTitle: 'Search your employees',
                    imgSrc:employeedir ,
                    link: 'https://github.com/Callumwhite210/homeworkweek19',
                    selected:false,
                },
                {
                    id: 4,
                    title: 'Team Generator',
                    subTitle: 'Generate your own team template',
                    imgSrc:teamgen ,
                    link: 'https://github.com/Callumwhite210/homeworkweek10',
                    selected:false,
                },
                {
                    id: 5,
                    title: 'Memory Game',
                    subTitle: 'Test your memory',
                    imgSrc: memorygame,
                    link: 'https://github.com/sp-amm/project1memorygame',
                    selected:false,
                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true ;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

makeItems = (items) => {
    return items.map(item => {
        return <Card item = {item} click={(e => this.handleCardClick(item.id, e))} key ={item.id} />
    })
}

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;