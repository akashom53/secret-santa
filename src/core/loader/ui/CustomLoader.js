import Loader from "react-loader-spinner"
import './CustomLoader.css'
import { useSelector } from 'react-redux'

const CustomLoader = ({ msg }) => {
  const visible = useSelector((state) => state.loader.visible)

  return (
    visible && <div className="custom-loader">
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  )
}

export default CustomLoader