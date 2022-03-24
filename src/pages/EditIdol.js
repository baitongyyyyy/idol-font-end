import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col, Card, Button, Form, Table, Dropdown, Navbar, Nav, Tabs, Tab, Badge, InputGroup, FormControl, DropdownButton, OverlayTrigger,Popover } from 'react-bootstrap';
import { MdKeyboardBackspace, MdUnfoldMore, MdTune, MdClear, MdStar, MdFavorite, MdDoneAll } from "react-icons/md";
import { RiCheckboxBlankCircleFill, RiChat3Fill, RiDeleteBin7Line } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa"
import { BsFileEarmarkCheck } from "react-icons/bs"
import Dropzone from 'react-dropzone'
import Rating from 'react-rating'
// import DatePicker from "react-datepicker";
import DatePicker from "../components/datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const CustomToggleFilter = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={e => { e.preventDefault(); onClick(e); }} className="normalLink">{children} <MdTune/></a>
));
const CustomToggleSort = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={e => { e.preventDefault(); onClick(e); }} className="normalLink">{children} <MdUnfoldMore/></a>
));

class EditIdol extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        this.state = {
            onEdit: false,

            salesName: '',
            saleCreator: '',
            saleCreatedDate: '',

            infoName: '',
            infoGender: '',
            infoDateBirth: '',
            infoCountry: '',
            infoCity: '',
            infoAlias: '',
            infoHeight: '',
            infoWeight: '',
            infoRating: '',
            infoAPText: '',
            infoAttractivepoint: '',
            infoLgText: '',
            infoLanguage: '',
            infoOpText: '',
            infoOccupation: '',
            infoRtText: '',
            infoReputation: '',
            infoWtText: '',
            infoWorktype: '',
            infoProduct: '',

            joinDate: '',
            joinReferal: '',
            contactPhone: '',
            contactLine: '',
            manageName: '',
            managePhone: '',
            manageLine: '',

            recentIgList: [],
            recentFbList: [],

            tabProfile: 'general',
            tabRemark: 'remark',
            filterRemark: 'All product',
            sortRemark: 'Newest first',

            filterIdolPhone: 'ยังไม่ติดต่อ',

            checklistVdo: false,
            checklistPictur: false,
            checklistDetail: false,
        };
    }

    async componentDidMount() {
        this.setProfile()
    }


    async componentDidUpdate(prevProps, prevState) {
    }

    setProfile(){
        this.setState({
            salesName: 'Maprangz',
            saleCreator: 'Admin_King',
            saleCreatedDate: '22 September 2020',

            infoName: 'Natalie Imoksukjai',
            infoGender: 'Female',
            infoDateBirth: '1999-10-27',
            infoCountry: 'Thailand',
            infoCity: 'Bangkok',
            infoAlias: 'พลอยสมแสง',
            infoHeight: '160',
            infoWeight: '48',
            infoRating: 4,
            infoAttractivepoint: ['นมโต','ขาเล็ก'],
            infoLanguage: ['Thai','English'],
            infoOccupation: ['Blogger','Student'],
            infoReputation: ['High-class','Sexy'],
            infoWorktype: ['Photo review','Live','Modeling','Acting','Choreography'],
            infoProduct: ['Idolpitch','Foxclub'],

            joinDate: '17 Aug 2020',
            joinReferal: 'From job webboard',
            contactPhone: '0801237489',
            contactLine: 'holy_caving',
            manageName: 'Atirad Khunsiphan',
            managePhone: '0901244458',
            manageLine: 'atrdfindings',

            recentIgList: [
                {like: 21, comment: 380, url: 'http://localhost:3000/image/recent01.jpg'},
                {like: 40, comment: 300, url: 'http://localhost:3000/image/recent02.jpg'},
                {like: 80, comment: 543, url: 'http://localhost:3000/image/recent03.png'},
                {like: 21, comment: 380, url: 'http://localhost:3000/image/recent01.jpg'},
                {like: 40, comment: 300, url: 'http://localhost:3000/image/recent02.jpg'},
                {like: 80, comment: 543, url: 'http://localhost:3000/image/recent03.png'},
                {like: 21, comment: 380, url: 'http://localhost:3000/image/recent01.jpg'},
                {like: 40, comment: 300, url: 'http://localhost:3000/image/recent02.jpg'},
                {like: 80, comment: 543, url: 'http://localhost:3000/image/recent03.png'},
            ],
            recentFbList: [
                {like: 21, comment: 380, url: 'http://localhost:3000/image/recent01.jpg'},
                {like: 40, comment: 300, url: 'http://localhost:3000/image/recent02.jpg'},
                {like: 80, comment: 543, url: 'http://localhost:3000/image/recent03.png'},
            ],
        })
    }

    renderProfile(){
        if(this.state.onEdit){
            return(
                <div className="bg-white rounded p-3"> 
                    <div className="font-weight-bold">Social Platform</div>
                    <div className="mt-1">Instagram profile</div>
                    <div className="p-2 bg-gray rounded">
                        <Row className="d-flex align-items-center mb-2">
                            <Col md="auto" className="pr-0">
                                <img className="img-fluid-profile rounded-circle" width="80" height="80" src={window.location.origin + "/image/1.jpg"} />
                            </Col>
                            <Col className="align-middle">
                                <h4>Name</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='auto' className="d-flex justify-content-center align-items-center">
                                <img width="30px" height="30px" src={"http://localhost:3000/image/instagram.png"} />
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">44.9k</h5>
                                <label>Following</label>
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">14.5%</h5>
                                <label>Growth rate</label>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">9.2%</h5>
                                <label>Engagement rate</label>
                            </Col>
                        </Row>
                    </div>

                    <div className="mt-1">Facebook profile</div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Form>
                    <div className="p-2 bg-gray rounded">
                        <Row className="d-flex align-items-center mb-2">
                            <Col md="auto" className="pr-0">
                                <img className="img-fluid-profile rounded-circle" width="80" height="80" src={window.location.origin + "/image/1.jpg"} />
                            </Col>
                            <Col className="align-middle">
                                <h4>Name</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='auto' className="d-flex justify-content-center align-items-center">
                                <img width="30px" height="30px" src={"http://localhost:3000/image/facebook.png"} />
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">44.9k</h5>
                                <label>Following</label>
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">14.5%</h5>
                                <label>Growth rate</label>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">9.2%</h5>
                                <label>Engagement rate</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="bg-white rounded p-3">
                    <Row className="d-flex align-items-center">
                        <Col md="auto" className="pr-0">
                            <img className="img-fluid-profile rounded-circle" width="80" height="80" src={window.location.origin + "/image/1.jpg"} />
                        </Col>
                        <Col className="align-middle">
                            <h4>Name lastname</h4>
                            <label className="text-success"><RiCheckboxBlankCircleFill/>Active</label>
                        </Col>
                    </Row>
                    <div className="p-2">Social account</div>
                    <div className="p-2 bg-gray rounded">
                        <Row>
                            <Col md='auto' className="d-flex justify-content-center align-items-center">
                                <img width="30px" height="30px" src={"http://localhost:3000/image/instagram.png"} />
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">44.9k</h5>
                                <label>Following</label>
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">14.5%</h5>
                                <label>Growth rate</label>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">9.2%</h5>
                                <label>Engagement rate</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='auto' className="d-flex justify-content-center align-items-center">
                                <img width="30px" height="30px" src={"http://localhost:3000/image/facebook.png"} />
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">44.9k</h5>
                                <label>Following</label>
                            </Col>
                            <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">14.5%</h5>
                                <label>Growth rate</label>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">9.2%</h5>
                                <label>Engagement rate</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }
    }

    renderGeneral(){
        const {
            salesName,saleCreator,saleCreatedDate,
            infoName,infoGender,infoDateBirth,infoCountry,infoCity,infoAlias,infoHeight,infoWeight,infoRating,infoAPText,infoAttractivepoint,infoLgText,infoLanguage,infoOpText,infoOccupation,infoRtText,infoReputation,infoWtText,infoWorktype,infoProduct,
            joinDate,joinReferal,contactPhone,contactLine,manageName,managePhone,manageLine,
            recentIgList,recentFbList
        } = this.state
        if(this.state.onEdit){
            return(
                <>
                <div className="bg-white rounded p-3">
                    <div className="font-weight-bold">Sales information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="m-0 p-0 d-flex align-items-center">
                                <Form.Control type="text" placeholder="Name" value={salesName} disabled={true}/>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Creator</div>
                            <div className="m-0 p-0 d-flex align-items-center">
                                <Form.Control type="text" placeholder="Name" value={saleCreator} disabled={true}/>
                            </div>
                        </Col>
                        <Col className="m-0 p-0"></Col>
                    </Row>
                </div>
                <div className="bg-white rounded p-3 mt-3">
                    <div className="font-weight-bold">Idol’s information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="Name" value={infoName} onChange={e => this.setState({infoName: e.target.value})}/>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Gender</div>
                            <div className="d-flex align-items-center">
                                <div className="mb-3">
                                    <Form.Check inline label="Male" type="radio" name="gender" 
                                    value="Male" checked={infoGender === 'Male'}
                                    onChange={e => this.setState({ infoGender: e.target.value })}
                                    />
                                    <Form.Check inline label="Female" type="radio" name="gender" 
                                    value="Female" checked={infoGender === 'Female'}
                                    onChange={e => this.setState({ infoGender: e.target.value })}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Date of birth</div>
                            <div className="d-flex align-items-center">
                                <DatePicker
                                value={infoDateBirth}
                                onChange={date => {
                                    let newDate = moment(date).format('YYYY-MM-DD')
                                    console.log(newDate)
                                    this.setState({infoDateBirth: newDate})
                                }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Country</div>
                            <div className="d-flex align-items-center">
                                <Form.Control as="select" defaultValue={infoCountry} onChange={e => this.setState({infoCountry: e.target.value})}>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Thailand">USA.</option>
                                </Form.Control>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">City</div>
                            <div className="d-flex align-items-center">
                                <Form.Control as="select" defaultValue={infoCity} onChange={e => this.setState({infoCity: e.target.value})}>
                                    <option value="Bangkok">Bangkok</option>
                                    <option value="Bangkok">Korat</option>
                                </Form.Control>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Alias</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="Alias" value={infoAlias} onChange={e => this.setState({infoAlias: e.target.value})}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Height</div>
                            <div className="d-flex align-items-center">
                                <InputGroup className="mb-3">
                                    <FormControl type="number" placeholder="Height" value={infoHeight} onChange={e => this.setState({infoHeight: e.target.value})}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>cm</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Weight</div>
                            <div className="d-flex align-items-center">
                                <InputGroup className="mb-3">
                                    <FormControl type="number" placeholder="Height" value={infoWeight}  onChange={e => this.setState({infoWeight: e.target.value})}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>kg</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Beauty rating</div>
                            <div className="d-flex align-items-center">
                                <Form.Control as="select" defaultValue={infoRating} onChange={e => this.setState({infoRating: e.target.value})}>
                                    <option value="1">1 star</option>
                                    <option value="2">2 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="5">5 stars</option>
                                </Form.Control>
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-1">
                        <Col md={6} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Attractive point</div>
                            <FormControl type="text" placeholder="Attractive point" value={infoAPText}
                                onChange={e => this.setState({infoAPText: e.target.value})}
                                onKeyPress={e => {
                                    if(e.charCode === 13){
                                        let newAttractive = [...infoAttractivepoint]
                                        newAttractive.push(infoAPText)
                                        this.setState({infoAttractivepoint: newAttractive, infoAPText: ''})
                                    }
                                }}
                            />
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                                {infoAttractivepoint !== '' &&
                                    infoAttractivepoint.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">
                                            {item}
                                            <MdClear onClick={()=>{
                                                let newAttractive = [...infoAttractivepoint]
                                                newAttractive.splice(i,1)
                                                this.setState({infoAttractivepoint: newAttractive})
                                            }}/>
                                        </Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col md={6} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Language</div>
                            <FormControl type="text" placeholder="Language" value={infoLgText}
                                onChange={e => this.setState({infoLgText: e.target.value})}
                                onKeyPress={e => {
                                    if(e.charCode === 13){
                                        let newArray = [...infoLanguage]
                                        newArray.push(infoLgText)
                                        this.setState({infoLanguage: newArray, infoLgText: ''})
                                    }
                                }}
                            />
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                                {infoLanguage !== '' &&
                                    infoLanguage.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">
                                            {item}
                                            <MdClear onClick={()=>{
                                                let newArray = [...infoLanguage]
                                                newArray.splice(i,1)
                                                this.setState({infoLanguage: newArray})
                                            }}/>
                                        </Badge>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Col md={6} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Occupation</div>
                            <FormControl type="text" placeholder="Occupation" value={infoOpText}
                                onChange={e => this.setState({infoOpText: e.target.value})}
                                onKeyPress={e => {
                                    if(e.charCode === 13){
                                        let newArray = [...infoOccupation]
                                        newArray.push(infoOpText)
                                        this.setState({infoOccupation: newArray, infoOpText: ''})
                                    }
                                }}
                            />
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                                {infoOccupation !== '' &&
                                    infoOccupation.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">
                                            {item}
                                            <MdClear onClick={()=>{
                                                let newArray = [...infoOccupation]
                                                newArray.splice(i,1)
                                                this.setState({infoOccupation: newArray})
                                            }}/>
                                        </Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col md={6} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Reputation</div>
                            <FormControl type="text" placeholder="Reputation" value={infoRtText}
                                onChange={e => this.setState({infoRtText: e.target.value})}
                                onKeyPress={e => {
                                    if(e.charCode === 13){
                                        let newArray = [...infoReputation]
                                        newArray.push(infoRtText)
                                        this.setState({infoReputation: newArray, infoRtText: ''})
                                    }
                                }}
                            />
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                                {infoReputation !== '' &&
                                    infoReputation.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">
                                            {item}
                                            <MdClear onClick={()=>{
                                                let newArray = [...infoReputation]
                                                newArray.splice(i,1)
                                                this.setState({infoReputation: newArray})
                                            }}/>
                                        </Badge>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Col md={6} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Worktype</div>
                            <FormControl type="text" placeholder="Reputation" value={infoWtText}
                                onChange={e => this.setState({infoWtText: e.target.value})}
                                onKeyPress={e => {
                                    if(e.charCode === 13){
                                        let newArray = [...infoWorktype]
                                        newArray.push(infoWtText)
                                        this.setState({infoWorktype: newArray, infoWtText: ''})
                                    }
                                }}
                            />
                            <div className="d-flex align-items-center mt-1 flex-wrap">
                                {infoWorktype !== '' &&
                                    infoWorktype.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">
                                            {item}
                                            <MdClear onClick={()=>{
                                                let newArray = [...infoWorktype]
                                                newArray.splice(i,1)
                                                this.setState({infoWorktype: newArray})
                                            }}/>
                                        </Badge>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>

                    <div className="font-weight-bold mt-3">Joining information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Approached date</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="Approached date" value={joinDate} disabled={true}/>
                            </div>
                        </Col>
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Referal</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="Referal" value={joinReferal} onChange={e => this.setState({joinReferal: e.target.value})}/>
                            </div>
                        </Col>
                    </Row>
                    
                    <div className="font-weight-bold mt-3">Contact information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Phone number</div>
                            <div className="d-flex align-items-center">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>+66</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="tel" placeholder="Height" value={contactPhone}  onChange={e => this.setState({contactPhone: e.target.value})}/>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">LINE ID</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="LINE ID" value={contactLine} onChange={e => this.setState({contactLine: e.target.value})}/>
                            </div>
                        </Col>
                    </Row>

                    <div className="font-weight-bold mt-3">Manager information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="d-flex align-items-center">
                            <Form.Control type="text" placeholder="Name" value={manageName} onChange={e => this.setState({manageName: e.target.value})}/>
                            </div>
                        </Col>
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">Phone number</div>
                            <div className="d-flex align-items-center">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>+66</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="tel" placeholder="Height" value={managePhone}  onChange={e => this.setState({managePhone: e.target.value})}/>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={4} className="m-0 p-0 pr-2">
                            <div className="textSize12 text-secondary">LINE ID</div>
                            <div className="d-flex align-items-center">
                                <Form.Control type="text" placeholder="LINE ID" value={manageLine} onChange={e => this.setState({manageLine: e.target.value})}/>
                            </div>
                        </Col>
                    </Row>

                    <div className="font-weight-bold mt-3 mb-2">Manager information</div>
                    <Button variant="outline-danger">Delete profile <RiDeleteBin7Line size="20"/></Button>
                </div>
                </>
            )
        }else{
            return(
                <>
                <div className="bg-white rounded p-3">
                    <div className="font-weight-bold">Sales information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="m-0 p-0 d-flex align-items-center">
                                <img className="img-fluid-profile rounded-circle" width="30" height="30" src={window.location.origin + "/image/1.jpg"} />
                                <h6 className="ml-1">{salesName}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Creator</div>
                            <div className="m-0 p-0 d-flex align-items-center">
                                <h6>{saleCreator}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Created date</div>
                            <div className="m-0 p-0 d-flex align-items-center">
                                <h6>{saleCreatedDate}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0"></Col>
                    </Row>
                </div>
                <div className="bg-white rounded p-3 mt-3">
                    <div className="font-weight-bold">Idol’s information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoName}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Gender</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoGender}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Age</div>
                            <div className="d-flex align-items-center">
                                <h6>{moment().diff(infoDateBirth, 'years')} <label className="text-secondary">({moment(infoDateBirth).format('D MMM YYYY')})</label></h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Location</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoCity}, {infoCountry}</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Alias</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoAlias}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Height</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoHeight} cm</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Weight</div>
                            <div className="d-flex align-items-center">
                                <h6>{infoWeight} kg</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Beauty rating</div>
                            <div className="d-flex align-items-center">
                                <Rating
                                placeholderRating={infoRating}
                                emptySymbol={<MdStar color="#E0E0E0"/>}
                                placeholderSymbol={<MdStar color="#E6AF2E"/>}
                                readonly={true}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0 flex-wrap">
                            <div className="textSize12 text-secondary">Characteristic</div>
                            <div className="d-flex align-items-center">
                                {infoAttractivepoint !== '' &&
                                    infoAttractivepoint.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col className="m-0 p-0 flex-wrap">
                            <div className="textSize12 text-secondary">Language</div>
                            <div className="d-flex align-items-center">
                                {infoLanguage !== '' &&
                                    infoLanguage.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                        </Col>
                        <Col className="m-0 p-0">
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Col className="m-0 p-0 flex-wrap">
                            <div className="textSize12 text-secondary">Occupation</div>
                            <div className="d-flex align-items-center">
                                {infoOccupation !== '' &&
                                    infoOccupation.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Reputation</div>
                            <div className="d-flex align-items-center">
                                {infoReputation !== '' &&
                                    infoReputation.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                        </Col>
                        <Col className="m-0 p-0">
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Worktype</div>
                            <div className="d-flex align-items-center">
                                {infoWorktype !== '' &&
                                    infoWorktype.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Product</div>
                            <div className="d-flex align-items-center">
                                {infoProduct !== '' &&
                                    infoProduct.map((item,i) =>
                                        <Badge pill variant="light" className="mr-1 p-2 border">{item}</Badge>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>

                    <div className="font-weight-bold mt-3">Joining information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Approached date</div>
                            <div className="d-flex align-items-center">
                                <h6>{joinDate}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Referal</div>
                            <div className="d-flex align-items-center">
                                <h6>{joinReferal}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            
                        </Col>
                        <Col className="m-0 p-0">
                            
                        </Col>
                    </Row>
                    
                    <div className="font-weight-bold mt-3">Contact information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Phone number</div>
                            <div className="d-flex align-items-center">
                                <h6>{contactPhone}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">LINE ID</div>
                            <div className="d-flex align-items-center">
                                <h6>{contactLine}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            
                        </Col>
                        <Col className="m-0 p-0">
                            
                        </Col>
                    </Row>

                    <div className="font-weight-bold mt-3">Manager information</div>
                    <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Name</div>
                            <div className="d-flex align-items-center">
                                <h6>{manageName}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">Phone number</div>
                            <div className="d-flex align-items-center">
                                <h6>{managePhone}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="textSize12 text-secondary">LINE ID</div>
                            <div className="d-flex align-items-center">
                                <h6>{manageLine}</h6>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            
                        </Col>
                    </Row>
                </div>
                <div className="bg-white rounded p-3 mt-3">
                    <div className="font-weight-bold">Recent contents</div>
                    <Tab.Container id="contents-tabs" defaultActiveKey="instagram">
                
                        <Nav variant="pills" className="flex-row tabNav p-1 m-0">
                            <Nav.Item>
                                <Nav.Link eventKey="instagram"><img width="20px" height="20px" src={"http://localhost:3000/image/instagram.png"} className="mr-1"/>Instagram</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="facebook"><img width="20px" height="20px" src={"http://localhost:3000/image/facebook.png"} className="mr-1"/>Facebook</Nav.Link>
                            </Nav.Item>
                        </Nav>
                
                        <Tab.Content>
                            <Tab.Pane eventKey="instagram">
                                <Row className="mt-1">
                                    {
                                        recentIgList.map((item,i) =>
                                        <Col md="auto" className="d-inline-flex flex-column mb-2">
                                            <img src={item.url} className="img-fluid"  width="128px" height="128px"/>
                                            <div className="bg-dark">
                                                <Row className=" m-0 p-0">
                                                    <Col className="text-light d-flex justify-content-center align-items-center m-0 p-0">
                                                        <MdFavorite />{item.like}
                                                    </Col>
                                                    <Col className="text-light d-flex justify-content-center align-items-center m-0 p-0">
                                                        <RiChat3Fill />{item.comment}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        )
                                    }
                                    
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="facebook">
                                <Row className="mt-1">
                                    {
                                        recentFbList.map((item,i) =>
                                        <Col md="auto" className="d-inline-flex flex-column mb-2">
                                            <img src={item.url} className="img-fluid"  width="128px" height="128px"/>
                                            <div className="bg-dark">
                                                <Row className=" m-0 p-0">
                                                    <Col className="text-light d-flex justify-content-center align-items-center m-0 p-0">
                                                        <MdFavorite />{item.like}
                                                    </Col>
                                                    <Col className="text-light d-flex justify-content-center align-items-center m-0 p-0">
                                                        <RiChat3Fill />{item.comment}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        )
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                </>
            )
        }
    }

    render () {
        const { tabRemark, filterRemark, sortRemark, tabProfile, filterIdolPhone } = this.state;
        
        return (
            <React.Fragment>
                <Container className="width-full pl-5 pr-5">
                    <Card className="border-0">
                        <Card.Header className="p-2 border-bottom-0 bg-gray mb-n3">
                           <Row className="d-flex align-items-center">
                               <Col className="d-flex align-items-center"><h4 className="m-0"><MdKeyboardBackspace /> Natalie Railey</h4></Col>
                               <Col className="d-flex justify-content-end">
                                   {tabProfile === 'general' && <>
                                        {this.state.onEdit ? <>
                                        <Button onClick={()=> this.setState({onEdit: false})} variant="light" className="border-dark">Cancel</Button>
                                        <Button onClick={()=> this.setState({onEdit: false})} variant="dark" className="ml-2">Save changes</Button>
                                        </>
                                        :
                                        <Button onClick={()=> this.setState({onEdit: true})} variant="dark">Edit profile</Button>
                                        }
                                    </>}
                                </Col>
                           </Row>
                        </Card.Header>
                        <Card.Body className="pb-2 m-0 bg-gray">
                            <Tab.Container id="profile-tabs" defaultActiveKey="general">
                                <Nav variant="pills" className="flex-row tabNav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="general" onClick={()=> this.setState({tabProfile: 'general', onEdit: false})}>General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="idol-phone" onClick={()=> this.setState({tabProfile: 'idol-phone'})}>IdolPhone</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="foxclub" onClick={()=> this.setState({tabProfile: 'foxclub'})}>Foxclub</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab4" onClick={()=> this.setState({tabProfile: 'tab4'})}>หมอดู</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                
                                    <Row>
                                        <Col md={4} className="p-0 pr-2">

                                            {this.renderProfile()}

                                            <div className="bg-white rounded p-3 mt-3">
                                                <Tab.Container id="remark-tabs" defaultActiveKey={tabRemark}>
                                                    <Row className="m-0 p-0">
                                                        <Col className="m-0 p-0">
                                                            <Nav variant="pills" className="flex-row tabNav p-1 m-0">
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="remark" onClick={()=> this.setState({tabRemark: 'remark'})}>Remark</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="files" onClick={()=> this.setState({tabRemark: 'files'})}>Files</Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>
                                                        </Col>
                                                        <Col className="m-0 p-0">
                                                            <Row className="d-flex justify-content-end align-items-center m-0 p-0">
                                                                <Col className="m-0 p-0 d-flex justify-content-end">
                                                                    <Dropdown alignRight>
                                                                        <Dropdown.Toggle as={CustomToggleSort} id="dropdown-custom-components">
                                                                        {sortRemark}
                                                                        </Dropdown.Toggle>
                                                                    
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item eventKey={tabRemark} onClick={()=> this.setState({sortRemark: 'Newest first'})}>Newest first</Dropdown.Item>
                                                                            <Dropdown.Item eventKey={tabRemark} onClick={()=> this.setState({sortRemark: 'Oldest first'})}>Oldest first</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </Col>
                                                                {tabRemark === 'remark' && <Col className="m-0 p-0 d-flex justify-content-end">
                                                                    <Dropdown alignRight>
                                                                        <Dropdown.Toggle as={CustomToggleFilter} id="dropdown-custom-components">
                                                                        {filterRemark}
                                                                        </Dropdown.Toggle>
                                                                    
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item eventKey={tabRemark} onClick={()=> this.setState({filterRemark: 'All product'})}>All product</Dropdown.Item>
                                                                            <Dropdown.Item eventKey={tabRemark} onClick={()=> this.setState({filterRemark: 'IdolPhone'})}>IdolPhone</Dropdown.Item>
                                                                            <Dropdown.Item eventKey={tabRemark} onClick={()=> this.setState({filterRemark: 'หมอดู'})}>หมอดู</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </Col>
                                                                }
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="remark">
                                                            <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-2">
                                                                <Form.Control as="textarea" rows={5} />
                                                            </Form.Group>
                                                            <div className="d-flex flex-row-reverse">
                                                                <Button variant="outline-dark">Add remark</Button>
                                                            </div>

                                                            <div className="mt-3">
                                                                <Row className="mb-1">
                                                                    <Col md={12} className="font-weight-bold">Admin Sunnii <label className="text-secondary textSize12">06/10/2020 19:33</label></Col>
                                                                    <Col md={12}>Vulputate dictum quis tristique tortor, scelerisque. Dignissim orci, sit nec aenean mauris.</Col>
                                                                </Row>
                                                                <Row className="mb-1">
                                                                    <Col md={12} className="font-weight-bold">Admin Jackson <label className="text-secondary textSize12">15/09/2020 13:09</label></Col>
                                                                    <Col md={12} className="text-warning textSize12 font-weight-bold">สมัครขั้่นที่ 1 แล้ว</Col>
                                                                    <Col md={12}>Tempor nisl at aliquam facilisis. Dignissim est viverra amet, scelerisque nisl eu in.</Col>
                                                                </Row>
                                                                <Row className="mb-1">
                                                                    <Col md={12} className="font-weight-bold">Admin Sunnii <label className="text-secondary textSize12">14/09/2020 15:49</label></Col>
                                                                    <Col md={12}>Vulputate dictum quis tristique tortor</Col>
                                                                </Row>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="files">
                                                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                                {({getRootProps, getInputProps}) => (
                                                                    <section>
                                                                    <div {...getRootProps()} className="uploadBox">
                                                                        <input {...getInputProps()} />
                                                                        <h4 className="text-center">Drop files to upload</h4>
                                                                        <div className="text-secondary text-center">or</div>
                                                                        <div className="d-flex justify-content-center mt-2">
                                                                            <Button variant="outline-dark">Select Files</Button>
                                                                        </div>
                                                                        <div className="text-secondary text-center mt-2">Maximum upload file size is 128 MB.</div>
                                                                    </div>
                                                                    </section>
                                                                )}
                                                            </Dropzone>                                                            

                                                            <div className="mt-3">
                                                                <Row className="mb-1">
                                                                    <Col md={12} className="font-weight-bold">Admin Sunnii <label className="text-secondary textSize12">06/10/2020 19:33</label></Col>
                                                                    <Col md={12} className="pl-4">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="pl-2 pr-2">
                                                                            <FaRegFileImage size="26" />
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-primary">image.jpg</div>
                                                                                <div className="text-secondary">0.00/50.3 mb</div>
                                                                            </div>
                                                                            <MdClear />
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group controlId="formBasicEmail">
                                                                                <Form.Control type="email" placeholder="" />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </Col>
                                                                    <Col md={12} className="pl-4">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="pl-2 pr-2">
                                                                            <FaRegFileImage size="26" />
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-primary">line-chat.mov</div>
                                                                                <div className="text-secondary">1.1 mb</div>
                                                                            </div>
                                                                            <MdClear />
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group controlId="formBasicEmail">
                                                                                <Form.Control type="email" placeholder="" value="Vulputate dictum quis tristique tortor"/>
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-1">
                                                                    <Col md={12} className="font-weight-bold">Admin Thanet <label className="text-secondary textSize12">06/10/2020  22.16</label></Col>
                                                                    <Col md={12} className="pl-4">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="pl-2 pr-2">
                                                                            <FaRegFileImage size="26" />
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-primary">line-chat.pdf</div>
                                                                                <div className="text-secondary">1.1 mb</div>
                                                                            </div>
                                                                            <MdClear />
                                                                        </div>
                                                                        <Form>
                                                                            <Form.Group controlId="formBasicEmail">
                                                                                <Form.Control type="email" placeholder="" />
                                                                            </Form.Group>
                                                                        </Form>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Tab.Container>
                                            </div>

                                        </Col>
                                        <Col md={8} className="p-0 pl-2">
                                            <Tab.Content className="pr-1 pl-1">
                                                <Tab.Pane eventKey="general">
                                                    {this.renderGeneral()}
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="idol-phone">
                                                    <Row className="mb-2">
                                                        <Col md={3}>
                                                            {/* <a href="#" className="text-primary"><BsFileEarmarkCheck /> Checklist for Level 3</a> */}
                                                            <OverlayTrigger
                                                            trigger="click"
                                                            placement='bottom'
                                                            overlay={
                                                                <Popover>
                                                                    <Popover.Title as="h3">Checklist เตรียมสู่ Level 3</Popover.Title>
                                                                    <Popover.Content>
                                                                        <Form.Check label="วิดีโอแนะนำตัว" type='checkbox' checked={this.state.checklistVdo} onClick={()=> this.setState({checklistVdo: !this.state.checklistVdo})}/>
                                                                        <Form.Check label="รูปอื่นๆ ประกอบโปรไฟล์" type='checkbox' checked={this.state.checklistPictur}  onClick={()=> this.setState({checklistPictur: !this.state.checklistPictur})}/>
                                                                        <Form.Check label="อธิบายขั้นตอนให้บริการ Calling Service" type='checkbox' checked={this.state.checklistDetail}  onClick={()=> this.setState({checklistDetail: !this.state.checklistDetail})}/>
                                                                        <div className="p-1 mt-2 d-flex justify-content-end">
                                                                            {this.state.checklistVdo && this.state.checklistPictur && this.state.checklistDetail ?
                                                                            <a href="#" onClick={()=> this.setState({checklistVdo: false,checklistPictur: false,checklistDetail: false})}><MdDoneAll /> Uncheck all</a>
                                                                            :
                                                                            <a href="#" onClick={()=> this.setState({checklistVdo: true,checklistPictur: true,checklistDetail: true})}><MdDoneAll /> Check all</a>
                                                                            }
                                                                        </div>
                                                                    </Popover.Content>
                                                                </Popover>
                                                            }
                                                            >
                                                                <a href="#" className={this.state.checklistVdo && this.state.checklistPictur && this.state.checklistDetail ? "text-success" : "text-primary"}><BsFileEarmarkCheck /> Checklist for Level 3</a>
                                                            </OverlayTrigger>
                                                        </Col>
                                                        <Col md={3}>
                                                            <a href="#" className="text-primary"><BsFileEarmarkCheck /> Checklist for Level 4</a>
                                                        </Col>
                                                        <Col className="d-flex justify-content-end">
                                                            <Dropdown alignRight>
                                                                <Dropdown.Toggle id="dropdownIdolPhoneFilter">
                                                                {filterIdolPhone}
                                                                </Dropdown.Toggle>
                                                            
                                                                <Dropdown.Menu>
                                                                    <Dropdown.ItemText className="font-weight-bold pl-2">รอการติดต่อ</Dropdown.ItemText>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'ยังไม่ติดต่อ'})}> ยังไม่ติดต่อ</Dropdown.Item>
                                                                    <Dropdown.Divider />
                                                                    <Dropdown.ItemText className="font-weight-bold pl-2">กำลังพูดคุย</Dropdown.ItemText>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'ส่ง DM แล้ว'})}>ส่ง DM แล้ว</Dropdown.Item>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'อ่านแล้ว ไม่ตอบ'})}>อ่านแล้ว ไม่ตอบ</Dropdown.Item>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'อ่านแล้ว ขอข้อมูล'})}>อ่านแล้ว ขอข้อมูล</Dropdown.Item>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'อ่านแล้ว สนใจ'})}>อ่านแล้ว สนใจ</Dropdown.Item>
                                                                    <Dropdown.Divider />
                                                                    <Dropdown.ItemText className="font-weight-bold pl-2">รอการอนุมัติ</Dropdown.ItemText>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'สมัครขั้นที่ 1 แล้ว'})}>สมัครขั้นที่ 1 แล้ว</Dropdown.Item>
                                                                    <Dropdown.Item as="button" onClick={()=> this.setState({filterIdolPhone: 'สมัครขั้นที่ 2 แล้ว'})}>สมัครขั้นที่ 2 แล้ว</Dropdown.Item>
                                                                    <Dropdown.Divider />
                                                                    <Dropdown.ItemText className="font-weight-bold pl-2">เตรียมสู่ขั้นที่ 3</Dropdown.ItemText>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </Col>
                                                    </Row>
                                                    <div className="bg-white rounded p-3">
                                                        <div className="font-weight-bold">Registeration information</div>
                                                        <Row className="m-0 p-0 mt-1">
                                                            <Col className="m-0 p-0">
                                                                <div className="textSize12 text-secondary">Registered date</div>
                                                                <div className="m-0 p-0 d-flex align-items-center">
                                                                    <h6>23 Oct 2020</h6>
                                                                </div>
                                                            </Col>
                                                            <Col className="m-0 p-0">
                                                                <div className="textSize12 text-secondary">Approval status</div>
                                                                <div className="m-0 p-0 d-flex align-items-center">
                                                                    <h6>Unapproved</h6>
                                                                </div>
                                                            </Col>
                                                            <Col className="m-0 p-0">
                                                                <div className="textSize12 text-secondary">Approval date</div>
                                                                <div className="m-0 p-0 d-flex align-items-center">
                                                                    <h6>N/A</h6>
                                                                </div>
                                                            </Col>
                                                            <Col className="m-0 p-0"></Col>
                                                        </Row>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="foxclub">
                                                    <div className="d-flex bg-white rounded p-3">Foxclub</div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="tab4">
                                                    <div className="d-flex bg-white rounded p-3">หมอดู</div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                            
                                        </Col>
                                    </Row>
                
                            </Tab.Container>

                        </Card.Body>
                    </Card>

                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  };
  
  function mapDispatchToProps(dispatch) {
    return {
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditIdol);