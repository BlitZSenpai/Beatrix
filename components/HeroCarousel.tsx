"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
	{ src: "/assets/images/hero-1.svg", alt: "smartwatch" },
	{ src: "/assets/images/hero-2.svg", alt: "lamp" },
	{ src: "/assets/images/hero-3.svg", alt: "bag" },
	{ src: "/assets/images/hero-4.svg", alt: "airfryer" },
	{ src: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
	return (
		<div className="hero-carousel">
			<Carousel
				showThumbs={false}
				autoPlay
				infiniteLoop
				interval={2000}
				showArrows={false}
				showStatus={false}
			>
				{heroImages.map((hero) => (
					<div>
						<Image
							src={hero.src}
							alt={hero.alt}
							key={hero.alt}
							className="object-contain"
							width={484}
							height={484}
						/>
					</div>
				))}
			</Carousel>
			<Image
				src="/assets/icons/hand-drawn-arrow.svg"
				alt="left-arrow"
				className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
				width={175}
				height={175}
			/>
		</div>
	);
};

export default HeroCarousel;
