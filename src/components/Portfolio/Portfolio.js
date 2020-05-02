import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portfolio.css';
import Image from 'react-bootstrap/Image';
import Button from '@material-ui/core/Button';
import CustomizedDialogs from './dialog'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const attendance = {
    name : 'Attendance App',
    img1 : '../../assets/AppImages/AttendanceApp/MainPage.jpeg',
    img2 : '../../assets/AppImages/AttendanceApp/RegularizePage.jpeg',
    img3 : '../../assets/AppImages/AttendanceApp/Leave.jpeg',
    img4 : '../../assets/AppImages/AttendanceApp/Profilepage.jpeg'
}

const foodapp = {
    name : 'Food App',
    img1 : '../../assets/AppImages/FoodApp/HomePage.jpeg',
    img2 : '../../assets/AppImages/FoodApp/CategoriesPage.jpeg',
    img3 : '../../assets/AppImages/FoodApp/orderPage.jpeg',

}

const newsapp  = {
    name : 'News App',
    img1 : '../../assets/AppImages/NewsApp/HomePage.jpeg',
    img2 : '../../assets/AppImages/NewsApp/Categories.jpeg',
    img3 : '../../assets/AppImages/NewsApp/SearchPage.jpeg',
    img4 : '../../assets/AppImages/NewsApp/SelectCountryPAge.jpeg'

}

const recipes  = {
    name : 'Recipes App',
    img1 : '../../assets/AppImages/RecipesApp/MainPage.jpeg',
    img2 : '../../assets/AppImages/RecipesApp/Categories.jpeg',
    img3 : '../../assets/AppImages/RecipesApp/Search.jpeg',
    img4 : '../../assets/AppImages/RecipesApp/InstructionsPage.jpeg'

}



export default function Portfolio() {
    return (
        <div style={{paddingTop:'2%', marginBottom:'10%' }}>
            <h2 className="heading">Mobile Apps</h2>
            <div style={{paddingTop:'5%' }}>
                
                <Container style={{paddingTop:'2%'}}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', aligItems: 'center', justifyContent: 'center' }}>
                                <Image width="60%" height="100%" src={require('../../assets/AppImages/AttendanceApp/MainPage.jpeg')} rounded />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>AttendanceApp</h4>
                            <p>Link : (Under Development)</p>
                            <p>This is the Attendance App for small and medium sized companies where employees can login and check their data.</p>
                            <p style={{fontSize:'20px'}}>Features: -</p>
                            <ul>
                                <li>Employees can CheckIn, CheckOut</li>
                                <li>Location based CheckIn Checkout ( only works in company location )</li>
                                <li>Monthly report like Cloacked hrs, avg attendance</li>
                                <li>Employees can aplly for leave</li>
                                <li>Leave Status like Approved, Pending, Rejected with managers comments</li>
                                <li>Regularize their hours</li>
                            </ul>
                            <p>This app basically useful for many cases where manager can assign tasks, get queries, send alerts for comapany without. cn be useful to manage Attendance, Leaves, Employees issues etc.</p>
                            <CustomizedDialogs data={attendance} />
                        </Col>
                    </Row>
                </Container>
</div>
<div style={{paddingTop:'5%' }}>
                <Container >
                    <Row>
                    <Col xs={12} md={6}>
                            <div style={{ display: 'flex', aligItems: 'center', justifyContent: 'center'}}>
                                <Image width="60%" height="100%" src={require('../../assets/AppImages/FoodApp/HomePage.jpeg')} rounded />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>Food App</h4>
                            <p>Link : (Under Development)</p>
                            <p>This is a food app for restuarants and small food businesses, here they can show their food categories the wy they do nd more.</p>
                            <p style={{fontSize:'20px'}}>Features: -</p>
                            <ul>
                                <li>Food Categries</li>
                                <li>Ordering Food</li>
                                <li>Costumizing Ingredients</li>
                            </ul>
                            <p>With an attractive UI this app is for restuarants can show their food and get more customers.</p>
                            <CustomizedDialogs data={foodapp} />
                        </Col>

                    </Row>
                </Container>
            </div>

            <div style={{paddingTop:'5%' }}>
                
                <Container style={{paddingTop:'2%'}}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', aligItems: 'center', justifyContent: 'center' }}>
                                <Image width="60%" height="100%" src={require('../../assets/AppImages/NewsApp/HomePage.jpeg')} rounded />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>News App</h4>
                            <p>Link : <a href='https://drive.google.com/file/d/1IIG_VrUqmoOGXHyIKhe6kJ5fcnkSH7Vy/view?usp=sharing'>Download App</a></p>
                            <p>A News app for getting latest news and top headlines in country. </p>
                            <p style={{fontSize:'20px'}}>Features: -</p>
                            <ul>
                                <li>News available for country wise</li>
                                <li>With many categories like Entertainment, Science, Sports and more</li>
                                <li>News For keywords entered</li>
                            </ul>
                            <p>A good and simple News App where users can see local news wit daily new articles. <b/>
                               Here in this app news available formore than 50 countries, and cn get particular category for the country with full customization.
                               you can get data for the key words in search box, and there will be a button know more which opens complete data of the news headline in browser.
                               getting country wise categories and their data is avilable in this app.
                            </p>
                            <CustomizedDialogs data={newsapp} />
                        </Col>
                    </Row>
                </Container>
</div>
<div style={{paddingTop:'5%' }}>
                <Container >
                    <Row>
                    <Col xs={12} md={6}>
                            <div style={{ display: 'flex', aligItems: 'center', justifyContent: 'center'}}>
                                <Image width="60%" height="100%" src={require('../../assets/AppImages/RecipesApp/MainPage.jpeg')} rounded />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>Recipes App</h4>
                            <p>Link : <a href='https://drive.google.com/file/d/1z9L8vs3JpgM64FB-H2--ykY-uD1Z1iSO/view?usp=sharing'>Download App</a></p>
                            <p>Recipes app have different recipes with all Ingredients and method and more. </p>
                            <p style={{fontSize:'20px'}}>Features: -</p>
                            <ul>
                                <li>Category wise recipes</li>
                                <li>Search for food recipes</li>
                                <li>Try a random recipe</li>
                            </ul>
                            <p>An app where you get delicios recipes of your favorite food items. <b/>
                              In this app you can try  random recipe every time click the button (if you are confused to choose what?)
                              with selected category or searched recipe you can get all the data about recipes of your favorite, and
                              you can also get youtube video tutorial (if available).
                            </p>
                            <CustomizedDialogs data={recipes} />
                        </Col>
                   
                    </Row>
                </Container>
            </div>

            

        </div>
    )
}
