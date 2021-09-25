import React, {useState} from 'react'
import {InputGroup, Button, FormControl, Form, Dropdown, DropdownButton} from 'react-bootstrap'

const Create = ({
    create
}) => {
    const [formParams, setFormParams] = useState({earned: 0})
    const setFormParam = ({prop, value}) => {
        setFormParams({...formParams, [prop]:value})
    }
return(
    <>
    <div style={{width: 700}}>
        <div style={{display: 'flex'}}>
            <h2>Create a campaign</h2>
        </div>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <FormControl
            placeholder="campaign title"
            aria-label="campaign title"
            aria-describedby="basic-addon1"
            value={formParams.title}
            onChange={(e)=>setFormParam({value: e.target.value, prop: 'title'})}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <FormControl
            placeholder="your name"
            aria-label="your name"
            aria-describedby="basic-addon1"
            value={formParams.user}
            onChange={(e)=>setFormParam({value: e.target.value, prop: 'user'})}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Chia ID</InputGroup.Text>
            <FormControl
            placeholder="your chia wallet id"
            aria-label="your chia wallet id"
            aria-describedby="basic-addon1"
            value={formParams.wallet}
            onChange={(e)=>setFormParam({value: e.target.value, prop: 'wallet'})}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Goal</InputGroup.Text>
            <FormControl
            placeholder="goal"
            aria-label="goal"
            aria-describedby="basic-addon1"
            value={formParams.target}
            onChange={(e)=>setFormParam({value: e.target.value, prop: 'target'})}
            />
        </InputGroup>
        <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl 
            as="textarea"
            aria-label="campaign description"
            value={formParams.description}
            onChange={(e)=>setFormParam({value: e.target.value, prop: 'description'})}
            />
        </InputGroup>
        <InputGroup style={{marginTop: 40}}>
        <Button
            onClick={()=>{create(formParams); setFormParams({earned: 0})}}
        >Create</Button>
      </InputGroup>
    </div>
</>)
}

export {Create}