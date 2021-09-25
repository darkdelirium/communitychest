import React, {useState, useEffect} from 'react'
import logo from './logo.svg'
import tc from './assets/tc.png'
import {InputGroup, Button, FormControl, Form, Dropdown, DropdownButton} from 'react-bootstrap'
import { states, countries } from './states'
import { ContractABI } from "./ABI"
import { apiKey, nftRaffleWallet } from './config'
import circle from './service/circle'
import {Send,Create,Home,List} from './routes'
import Web3 from 'web3'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const handleAddNewItem = (item) => {
    setItems([...items, item])
  }

  const handleAddFunds = (title, fund) => {
    const index = items.findIndex(item=> item.title === title)
    const newEl = Object.assign(
      {}, 
      items[index],
      {earned: Number(items[index].earned || '0') + Number(fund)}
    )
    setItems([
      ...items.slice(0, index),
      newEl,
      ...items.slice(index + 1)
    ])
  }

  return (
    <Router>
      <div className='App'>
        <div className='navigation'>
            <div className='menuitem'>
              <Link to="/">Home</Link>
            </div>
            <div className='menuitem'>
              <Link to="/campaign">Campaigns</Link>
            </div>
            <div className='menuitem'>
              <Link to="/campaignnew">Create a campaign</Link>
            </div>
            <div className='menuitem'>
              <Link to="/send">Send</Link>
            </div>
        </div>
        <header className="App-header" style={{minHeight: 80}}>
          <img src={tc} height={250}/>
          <div className='title'>Community Chest</div>
          <div className='subtitle'>Your next level crowdfunding platform</div>
        </header>
        <div className='main-form'>
          <Switch>
              <Route exact path="/">
                <Home 
                  ongoing={items.length}
                />
              </Route>
              <Route path="/campaign">
                <List 
                  items={items}
                  participate={setCurrentItem}
                />
              </Route>
              <Route path="/campaignnew">
                <Create create={handleAddNewItem} />
              </Route>
              <Route path="/send">
                <Send 
                  currentItem={currentItem}
                  addFunds={handleAddFunds}
                />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
