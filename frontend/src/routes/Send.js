import React, {useState, useEffect} from 'react'
import tc from '../assets/tc.png'
import {InputGroup, Button, FormControl, Form, Dropdown, DropdownButton} from 'react-bootstrap'


import Web3 from 'web3'


const Send = ({
    addFunds,
    currentItem = {}
}) => {
    const [notes, setNotes] = useState('')
    const [user, setUser] = useState('')
    const [tickets, setTickets] = useState('')
    const [amount, setAmount] = useState('')

    return (<div >

    <div style={{display: 'flex'}}>
        <h2>Participate in campaign</h2>
    </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Chia ID</InputGroup.Text>
        <FormControl
          placeholder="Chia ID"
          aria-label="Chia ID"
          aria-describedby="basic-addon1"
          //value={currentItem.wallet}
          //onChange={(e)=>setUser(e.target.value)}
        />
      </InputGroup>

      { /* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */ }

      <InputGroup className="mb-3">
        <InputGroup.Text>Campaign Name</InputGroup.Text>
        <FormControl 
          aria-label="Campaign Name Name"
          value={currentItem.title}
          //onChange={(e)=>setTickets(e.target.value)}
        />
        {/* <InputGroup.Text>.00</InputGroup.Text> */}
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text>Amout of chia</InputGroup.Text>
        <FormControl 
          aria-label="Amout of chia"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
        {/* <InputGroup.Text>.00</InputGroup.Text> */}
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Comments</InputGroup.Text>
        <FormControl 
          as="textarea"
          aria-label="Additional Notes"
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
        />
      </InputGroup>
      <InputGroup style={{marginTop: 40}}>
        <Button
            onClick={()=>addFunds(currentItem.title || 'test',amount)}
        >Participate</Button>
      </InputGroup>

  </div>)
}

export {Send}