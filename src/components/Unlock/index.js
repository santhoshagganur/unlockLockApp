// Write your code here
import {useState} from 'react'
import {MainContainer, Status, StatusButton} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocked] = useState(true)

  const onChangeStatus = () => {
    setLocked(prevState => !prevState)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}

      <Status>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Status>

      <StatusButton onClick={onChangeStatus}>
        {' '}
        {isLocked ? 'Unlock' : 'Lock'}{' '}
      </StatusButton>
    </MainContainer>
  )
}

export default Unlock
