import { useSelector } from "react-redux"

const LogComponent = () => {
  const logs = useSelector(state => state.logs)
  console.log(logs)
  return <div>
    {logs.logs.map(e => <div>{e}</div>)}
  </div>
}

export default LogComponent