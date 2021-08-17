import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';

const FileItem = ({ content }) => {
  return (
    <div>
      <DescriptionIcon />
      <span>{ content.title }</span>
    </div>
  )
}

export default FileItem