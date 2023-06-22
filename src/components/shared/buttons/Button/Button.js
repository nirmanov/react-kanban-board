import css from './Button.module.scss'

export const Button = (props) => {
  return (
    <div className={`${props.className} ${css.button}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
