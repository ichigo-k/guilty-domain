import React from 'react'

function DocumentTitle(title) {

  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
export default DocumentTitle