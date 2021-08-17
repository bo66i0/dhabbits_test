import React from 'react';
import Folder from './Folder';
import FileItem from './FileItem';
import useContent from '../hooks/useContent';


const ItemList = ({ dirId }) => {
  const { data: contentData, isLoading } = useContent({ dirId })

  if (!contentData) {
    return null
  }

  console.log(contentData)

  return (
    <ul style={ { listStyleType: 'none' } }>
      { contentData.children.map((item) => (
        <li key={ item.id }>
          { item.children ? <Folder content={ item }/> : <FileItem content={ item } /> }
        </li>
      )) }
    </ul>
  )
}

export default ItemList