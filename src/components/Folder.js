import React from 'react';
import { useState } from 'react';
import FolderIcon from '@material-ui/icons/Folder'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ItemList from './ItemList';

const Folder = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((state) => !state)
  }

  return (
    <div>
      { isOpen ? <ArrowDropDownIcon onClick={ handleClick } /> : <ArrowRightIcon onClick={ handleClick } /> }
      <FolderIcon />
      <span>{ content.title }</span>
      { isOpen && <ItemList dirId={ content.id } /> }
    </div>
  )
}

export default Folder