// custom hook lấy thông tin về kích thước của viewport

import React, { useEffect } from 'react'

const useViewPort = () => {
  // window.innerWidth trả về chiều rộng của viewport
  const [width, setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
  return { width }
}

export default useViewPort