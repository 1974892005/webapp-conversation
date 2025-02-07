import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'
import Image from 'next/image'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {

  return (
    <Image
      src="/alpha.png"
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      width={100}
      height={100}
      alt="logo"
    />
  )


  // return (
  //   <span
  //     className={classNames(
  //       style.appIcon,
  //       size !== 'medium' && style[size],
  //       rounded && style.rounded,
  //       className ?? '',
  //     )}
  //     style={{
  //       background,
  //     }}
  //   >
  //     🤖
  //   </span>
  // )
}

export default AppIcon
