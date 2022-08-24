export const isActiveNavLink = ({
	isActive,
	baseClassName,
	activeClassName
}) => {
	if (!isActive) return baseClassName;
	return `${baseClassName} ${activeClassName}`;
};
