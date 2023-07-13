const DownloadIcon = (props: any) => (
	<svg
		className="heartbeat"
		xmlns="http://www.w3.org/2000/svg"
		width={50}
		height={50}
		viewBox="0 0 32 32"
		{...props}>
		<title>{"arrow-down-circle"}</title>
		<path
			fill="#fff"
			fillRule="evenodd"
			d="m22.535 16.88-5.656 5.66a.962.962 0 0 1-.879.25.962.962 0 0 1-.879-.25l-5.656-5.66a1.006 1.006 0 0 1 0-1.42 1 1 0 0 1 1.414 0L15 19.59V9a1.001 1.001 0 0 1 2 0v10.59l4.121-4.13a1 1 0 0 1 1.414 0c.391.4.391 1.03 0 1.42ZM16 0C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Z"
		/>
	</svg>
);
export default DownloadIcon;
