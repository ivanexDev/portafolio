const MenuIcon = (props: any) => (
	<svg
		className="menu-icon"
		xmlns="http://www.w3.org/2000/svg"
		width={30}
		height={30}
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<g stroke="#fff" strokeLinecap="round" strokeWidth={2}>
			<path d="M4 18h16M4 12h16M4 6h16" />
		</g>
	</svg>
);
export default MenuIcon;
