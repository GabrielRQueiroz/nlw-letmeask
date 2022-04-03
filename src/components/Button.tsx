import cx from "classnames"
import { ButtonHTMLAttributes } from "react"
import "styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	outlined?: boolean
	warning?: boolean
}

export const Button = ({
	outlined = false,
	warning = false,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cx("button", { outlined: outlined }, { warning: warning })}
			{...props}
		/>
	)
}
