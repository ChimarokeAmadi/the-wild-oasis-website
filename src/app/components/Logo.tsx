import logo from "../../logo.png";
import Image from "next/image";

function Logo() {
	return (
		<a href='/' className='flex items-center gap-4 z-10'>
			<Image
				alt='ss'
				height={60}
				width={60}
				src={logo}
				className='h-[60px] w-[60px]'
			/>
			<span className='text-xl font-semibold text-primary-100'>
				The Wild Oasis
			</span>
		</a>
	);
}

export default Logo;
