import { Link } from 'react-router-dom'
import { type User } from 'shared/api'

import styles from './user-info.module.scss'

type UserInfoProps = {
  user: User
}

export const UserInfo = ({ user }: UserInfoProps) => (
  <div className={styles.userInfoContainer}>
    <img className={styles.userAvatar} src={user.avatarUrl} />
    <Link className={styles.userLink} to={user.url} target="_blank">
      {user.login}
    </Link>
  </div>
)
