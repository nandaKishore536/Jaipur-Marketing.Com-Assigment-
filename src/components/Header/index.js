import {Link, withRouter} from 'react-router-dom'

import {FaUserCircle} from 'react-icons/fa'

import {MdLogout} from 'react-icons/md'

import {HeaderCon, Button} from './styleComponents'

const Header = props => {
  const onPress = () => {
    const {history} = props

    history.replace('/')
  }

  return (
    <HeaderCon>
      <Link to="/home">
        <FaUserCircle size={30} color="#ffffff" />
      </Link>
      <Button type="button" onClick={onPress}>
        <MdLogout size={30} color="#ffffff" />
      </Button>
    </HeaderCon>
  )
}

export default withRouter(Header)
